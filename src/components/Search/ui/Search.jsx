import React, { useContext } from 'react';
import cls from './Search.module.scss';
import { SearchContext } from "../../App";

export const Search = () => {
    const { search, setSearch } = useContext(SearchContext)

    return (
        <div className={cls.Search}>
            <svg className={cls.icon} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
            <input
                className={cls.input}
                placeholder="Поиск пиццы..."
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            />
            {search && (
                <svg onClick={() => setSearch('')} className={cls.clearIcon} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                    <path d="M0 0h48v48h-48z" fill="none"/>
                </svg>
            )}
        </div>
    );
};
