import React from "react";
import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import {useSelector } from "react-redux";
import { Contact } from "components/Contacts/Contacts";
import { getFilteredContacts } from "redux/selectors";

const ContactsList = () => {

    const contacts = useSelector(getFilteredContacts)

    return (
        <ul className={css.contactListUl}>
            {contacts.map(contact => (
                <li className={css.contactListLi} key={contact.id}>
                    <Contact {...contact} />
                </li>
            ))}
        </ul>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            contact: PropTypes.shape.isRequired
        }).isRequired
    )
};

export default ContactsList;