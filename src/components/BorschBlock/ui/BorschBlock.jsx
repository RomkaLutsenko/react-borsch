import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../app/slices/cartSlice";

const typeNames = ['Черный', 'Белый']

export const BorschBlock = ({
    id, title, price, img, sizes, broad,
}) => {
    const [activeGramm, setActiveGramm] = useState(0);
    const [activeBroad, setActiveBroad] = useState(0);

    const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.cartReducer.items.find((obj) => obj.id === id))

    const addedCount = cartItem ? cartItem.count : 0

    const addBorsch = () => {
        const item = {
            id,
            title,
            price,
            img,
            type: typeNames[activeBroad],
            size: sizes[activeGramm],

        }
        dispatch(addItem(item))
    };

    return (
        <div className="borsch-block-wrapper">
            <div className="borsch-block">
                <img
                    className="borsch-block__image"
                    src={img}
                    alt="borsch"
                />
                <h4 className="borsch-block__title">{title}</h4>
                <div className="borsch-block__selector">
                    <div className="borsch-block__broad">Хлеб:</div>
                    <ul>
                        {broad.map((size, i) => (
                            <li
                                key={i}
                                onClick={() => setActiveBroad(i)}
                                className={activeBroad === i ? 'active' : ''}
                            >
                                {size}
                            </li>
                        ))}

                    </ul>
                    <div className="borsch-block__gramm">Грамм:</div>
                    <ul>
                        {sizes.map((size, i) => (
                            <li
                                key={i}
                                onClick={() => setActiveGramm(i)}
                                className={activeGramm === i ? 'active' : ''}
                            >
                                {size}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="borsch-block__bottom">
                    <div className="borsch-block__price"> от {price} ₽ </div>
                    <button type="button" onClick={addBorsch} className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCount > 0 && <i>{addedCount}</i>}
                    </button>
                </div>
            </div>
        </div>
    );
};
