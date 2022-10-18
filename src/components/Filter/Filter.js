import React from "react";
import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <label className={css.filterLabel}>
        Find contacts by name:
        <input className={css.filterInput} type="text" value={value} onChange={onChange}></input>
    </label>
);

Filter.propTypes = {//тут показує помилку, коли є onChange, якщо забираю onChange то помилки немає
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired
};

export default Filter;