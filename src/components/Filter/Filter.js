import React from "react";
import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selectors";
import { filterContacts } from "redux/contactsSlice";

const Filter = () => {

    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    const onChange = e => dispatch(filterContacts(e.target.value));

    return (
        <label className={css.filterLabel}>
            Find contacts by name:
            <input className={css.filterInput} type="text" value={value} onChange={onChange}></input>
        </label>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Filter;
