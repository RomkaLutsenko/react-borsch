import React from 'react';
import cls from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={cls.NotFoundBlock}>
            <h1>
                <span>:(</span>
                <br />
                Ничего не найдено
            </h1>
            <p>К сожалению данной страницы не существует</p>
        </div>
    );
};
