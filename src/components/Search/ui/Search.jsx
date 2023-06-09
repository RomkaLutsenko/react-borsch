import React, {
    useCallback, useContext, useRef, useState,
} from 'react';
import debounce from "lodash.debounce";
import cls from './Search.module.scss';
import { SearchContext } from "../../App";

export const Search = () => {
    const [value, setValue] = useState()
    const { setSearch } = useContext(SearchContext)
    const inputRef = useRef()

    const onClickClear = () => {
        setSearch('')
        setValue('')
        inputRef.current.focus()
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearch(str)
        }, 500),
        [],
    )

    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    return (
        <div className={cls.Search}>
            <svg className={cls.icon} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
            <input
                ref={inputRef}
                className={cls.input}
                placeholder="Поиск борща..."
                value={value}
                onChange={onChangeInput}
            />
            {value && (
                <svg onClick={onClickClear} className={cls.clearIcon} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                    <path d="M0 0h48v48h-48z" fill="none"/>
                </svg>
            )}
        </div>
    );
};
