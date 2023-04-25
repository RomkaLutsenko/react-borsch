import React, { useState } from 'react';

export const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = [
        'Все',
        'С говядиной',
        'Со свининой',
        'Вегетарианский',
        'Гриль',
        'Острый',
    ];

    const toggleActiveIndex = (i) => {
        setActiveIndex(i);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((value, i) => (
                    <li
                        key={i}
                        onClick={() => toggleActiveIndex(i)}
                        className={activeIndex === i ? 'active' : ''}
                    >
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};
