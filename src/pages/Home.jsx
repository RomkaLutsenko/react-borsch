import React, { useContext, useEffect, useState } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { BorschBlock, BorschSkeleton } from '../components/BorschBlock';
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../components/App";

export const Home = () => {
    const { search } = useContext(SearchContext)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const [categoryId, setCategoryId] = useState(0)
    const [sort, setSort] = useState({
        name: 'популярности',
        sortProperty: 'rating',
    })

    const borsches = items
        .filter((obj) => { return obj.title.toLowerCase().includes(search) })
        .map((obj) => (<BorschBlock key={obj.id} {...obj} />))

    useEffect(() => {
        setIsLoading(true)

        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const searchValue = search ? `&search=${search}` : '';

        fetch(
            `https://64479bb450c2533744296f40.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searchValue}`,
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sort, search, currentPage])

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} setValue={setCategoryId} />
                <Sort value={sort} setValue={setSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)]
                        .map((_, index) => <BorschSkeleton key={index} />)
                    : borsches}
            </div>
            <Pagination onChange={(number) => setCurrentPage(number)} />
        </>
    );
};
