import React from "react";
import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selectors";
import { filterContact } from "redux/contactsSlice";

// export default function Filter ({ value, onChange }) {
//     const contactIdFilter = nanoid();

//     return (
//         <label className={css.filterLabel} htmlFor={contactIdFilter}>
//             Find contacts by name:
//             <input className={css.filterInput} type="text" value={value} onChange={onChange}></input>
//         </label>
//     )
// }

const Filter = () => {
    const contactIdFilter = nanoid();
    const value = useSelector(getFilter)
    const dispatch = useDispatch();

    const onChange = e => dispatch(filterContact(e.target.value))

    return (
        <label className={css.filterLabel} htmlFor={contactIdFilter}>
            Find contacts by name:
            <input className={css.filterInput} type="text" value={value} onChange={onChange}></input>
        </label>
    )
}


Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Filter;
