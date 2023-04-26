import React, { useEffect, useState } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { BorschBlock, BorschSkeleton } from '../components/BorschBlock';

export const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://64479bb450c2533744296f40.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)]
                        .map((_, index) => <BorschSkeleton key={index} />)
                    : items.map((obj) => (<BorschBlock key={obj.id} {...obj} />
                    ))}
            </div>
        </>
    );
};
