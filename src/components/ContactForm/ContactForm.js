import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from 'redux/operations';
import { useState } from 'react';
import { getFilteredContacts } from 'redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);

    const handelSubmit = e => {
        e.preventDefault();
        if(!name && !phone){
            toast.error(`You can't create the contact without name and phone! Pls enter name and phone of the contact`);
        }
        else if (!name) {
            toast.error(`Field name can't be empty! Pls enter name of contact`);
        } else if (!phone) {
            toast.error(`Field phone can't be empty! Pls enter phone of contact`);
        } else {
            const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
            existingContact ? toast.error(`Contact ${name} already exists in phonebook. Pls enter another name`)
                : dispatch(addContact({ name, phone }), toast.success(`New contact ${name} was added`));
            setName('');
            setPhone('');
        }
    };

    return (
        <div className={css.contactFormInput}>
            <ToastContainer />
            <form onSubmit={handelSubmit} autoComplete='off'>
                <label htmlFor={nanoid()} className={css.contactLabel}>
                    Name:
                    <input
                        id={nanoid()}
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                </label>
                <label htmlFor={nanoid()} className={css.contactLabel}>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    />
                </label>
                <button className={css.contactAddBtn} type="submit">Add contact</button>
            </form>
        </div>
    )
};

export default ContactForm;