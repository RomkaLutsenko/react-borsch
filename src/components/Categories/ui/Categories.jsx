import React from 'react';

export const Categories = ({ value, setValue }) => {
    const categories = [
        'Все',
        'С говядиной',
        'Со свининой',
        'Вегетарианский',
        'Гриль',
        'Острый',
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (
                    <li
                        key={i}
                        onClick={() => setValue(i)}
                        className={value === i ? 'active' : ''}
                    >
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
};
