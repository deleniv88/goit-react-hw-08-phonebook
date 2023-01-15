import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactLabel, ContainerContactForm, InputItem } from 'components/ContactForm/ContactForm.styled';
import { Button } from '@mui/material';

export const ContactForm = () => {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);

    const handelSubmit = e => {
        e.preventDefault();
        if (!name && !number) {
            toast.error(`You can't create the contact without name and number! Pls enter name and number of the contact`);
        }
        else if (!name) {
            toast.error(`Field name can't be empty! Pls enter name of contact`);
        } else if (!number) {
            toast.error(`Field number can't be empty! Pls enter number of contact`);
        } else {
            const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
            existingContact ? toast.error(`Contact ${name} already exists in numberbook. Pls enter another name`)
                : dispatch(addContact({ name, number }), toast.success(`New contact ${name} was added`));
            setName('');
            setNumber('');
            console.log(name, number);
        }
    };

    return (
        <ContainerContactForm>
            <form onSubmit={handelSubmit} autoComplete='off'>
                <span>Please enter name and phone</span>
                <ContactLabel htmlFor={nanoid()}>
                    <InputItem
                        variant="filled"
                        label="name"
                        id={nanoid()}
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                </ContactLabel>
                <ContactLabel htmlFor={nanoid()}>
                    <InputItem
                        variant="filled"
                        label="number"
                        type="tel"
                        name="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    />
                </ContactLabel>
                <Button variant="contained" type="submit" color="success">Add contact</Button>
            </form>
        </ContainerContactForm>
    )
};

export default ContactForm;