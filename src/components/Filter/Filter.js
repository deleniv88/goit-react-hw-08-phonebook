import React from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/contacts/selectors";
import { filterContacts } from "../../redux/contacts/contactsSlice";
import { FilterLabel, InputItem } from "./Filter.styled";

const Filter = () => {

    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    const onChange = e => dispatch(filterContacts(e.target.value));

    return (
        <FilterLabel>
            <InputItem type="text" value={value} onChange={onChange} label="Find contacts by name:" />
        </FilterLabel>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Filter;
