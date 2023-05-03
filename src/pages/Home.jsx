import React, {
    useContext, useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { BorschBlock, BorschSkeleton } from '../components/BorschBlock';
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../components/App";
import { list } from "../components/Sort/ui/Sort";
import { setCategoryId, setCurrentPage, setFilters } from "../app/slices/filterSlice";
import { fetchBorsch } from "../app/slices/borschSlice";

export const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const { items, status } = useSelector((state) => state.borschReducer)
    const {
        categoryId,
        sort,
        currentPage,
    } = useSelector((state) => state.filterReducer)
    const { search } = useContext(SearchContext)

    const borsches = items
        .filter((obj) => { return obj.title.toLowerCase().includes(search) })
        .map((obj) => (<BorschBlock key={obj.id} {...obj} />))

    const getBorsch = async () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const searchValue = search ? `&search=${search}` : '';

        dispatch(fetchBorsch({
            sortBy,
            order,
            category,
            searchValue,
            currentPage,
        }))
    }

    useEffect(() => {
        // Первого реднера не было, поэтому не надо вшивать в адрессную строчку параметры
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
            })

            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categoryId, sort, search, currentPage])
    // При первом рендере парсим из адресной ссылки все параметры и сохраняем в редакс
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            // eslint-disable-next-line no-shadow
            const sort = list.find((obj) => obj.sortProperty === params.sortProperty)
            dispatch(
                setFilters({
                    ...params,
                    sort,
                }),
            )
            isSearch.current = true
        }
    }, [])
    // Если был первый рендер, то запрашиваем список борщей
    useEffect(() => {
        window.scrollTo(0, 0)

        getBorsch()

        isSearch.current = false
    }, [categoryId, sort, search, currentPage])

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} setValue={(id) => dispatch(setCategoryId(id))} />
                <Sort />
            </div>
            <h2 className="content__title">Весь борщ</h2>
            {status === 'error'
                ? (
                    <div className="content__error-info">
                        <h2>Произошла ошибка</h2>
                        <p>
                            К сожалению, не удалось получить борщ.
                            Попробуйте повторить попытку позже
                        </p>
                    </div>
                )
                : (
                    <div className="content__items">
                        {status === 'loading'
                            ? [...new Array(6)]
                                .map((_, index) => <BorschSkeleton key={index} />)
                            : borsches}
                    </div>
                )}
            <Pagination currentPage={currentPage} onChange={onChangePage} />
        </>
    );
};
