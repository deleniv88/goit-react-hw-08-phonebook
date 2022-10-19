import React from "react";
import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <label className={css.filterLabel}>
        Find contacts by name:
        <input className={css.filterInput} type="text" value={value} onChange={onChange}></input>
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Filter;