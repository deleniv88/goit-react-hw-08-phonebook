import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Contact } from "../../components/Contacts/Contacts";
import { getFilteredContacts } from "../../redux/contacts/selectors";
import { ContactsLi, ContactsUl, Main } from "./ContactsList.styled";

const ContactsList = () => {

    const contacts = useSelector(getFilteredContacts);

    return (
        <Main>
        <ContactsUl>
            {contacts.map(contact => (
                <ContactsLi key={contact.id}>
                    <Contact {...contact} />
                </ContactsLi>
            ))}
        </ContactsUl>
        </Main>
    )
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            contact: PropTypes.shape.isRequired
        }).isRequired
    )
};

export default ContactsList;