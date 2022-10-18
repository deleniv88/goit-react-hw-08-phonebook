import React from "react";
import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContact }) => (
    <div className={css.contactList}>
        <ul className={css.contactListUl}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={css.contactListLi}>
                    <p className={css.contactNameField}>{name}:{number}</p>
                    <button className={css.contactDelBtn} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
};

export default ContactsList;