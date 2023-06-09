import React from 'react';
import ReactPaginate from "react-paginate";
import cls from "./Pagination.module.scss"

export const Pagination = ({ currentPage, onChange }) => {
    return (
        <ReactPaginate
            className={cls.Pagination}
            breakLabel="..."
            nextLabel=" >"
            onPageChange={(e) => onChange(e.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={3}
            forcePage={currentPage - 1}
            previousLabel="< "
            renderOnZeroPageCount={null}
        />
    );
};
