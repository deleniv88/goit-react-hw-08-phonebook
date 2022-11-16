import css from '../ContactForm/ContactForm.module.css';
import { useDispatch } from "react-redux";
import { addContacts } from "redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

export const ContactForm = () => {

    const dispatch = useDispatch();

    const handelSubmit = e => {
        e.preventDefault();
        const form = e.target;
        dispatch(addContacts(form.elements.name.value, form.elements.number.value))
        form.reset()
    }

    return (
        <div className={css.contactFormInput}>
            <form onSubmit={handelSubmit}>
                <label htmlFor={nanoid()} className={css.contactLabel}>
                    Name:
                    <input
                        id={nanoid()}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                </label>
                <label htmlFor={nanoid()} className={css.contactLabel}>
                    Phone:
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </label>
                <button className={css.contactAddBtn} type="submit">Add contact</button>
            </form>

        </div>
    )
};

export default ContactForm;