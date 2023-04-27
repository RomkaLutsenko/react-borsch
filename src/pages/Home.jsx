import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { BorschBlock, BorschSkeleton } from '../components/BorschBlock';
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../components/App";
import filterReducer, { setCategoryId, setCurrentPage } from "../app/slices/filterSlice";

export const Home = () => {
    const dispatch = useDispatch()
    const {
        categoryId,
        sort,
        currentPage,
    } = useSelector((state) => state.filterReducer)

    const { search } = useContext(SearchContext)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const borsches = items
        .filter((obj) => { return obj.title.toLowerCase().includes(search) })
        .map((obj) => (<BorschBlock key={obj.id} {...obj} />))

    useEffect(() => {
        setIsLoading(true)
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const searchValue = search ? `&search=${search}` : '';
        axios.get(
            `https://64479bb450c2533744296f40.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searchValue}`,
        )
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
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
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)]
                        .map((_, index) => <BorschSkeleton key={index} />)
                    : borsches}
            </div>
            <Pagination currentPage={currentPage} onChange={onChangePage} />
        </>
    );
};
