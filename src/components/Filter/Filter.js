import React from "react";
import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { nanoid } from "@reduxjs/toolkit";

export default function Filter ({ value, handelFiler }) {
    const contactIdFilter = nanoid();

    return (
        <label className={css.filterLabel} htmlFor={contactIdFilter}>
            Find contacts by name:
            <input className={css.filterInput} type="text" value={value} onChange={(e) => handelFiler(e.target.value)}></input>
        </label>
    )
}

Filter.propTypes = {
    // value: PropTypes.string.isRequired,
    // handelFiler: PropTypes.func.isRequired
};

