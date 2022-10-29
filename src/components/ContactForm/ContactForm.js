import { useState } from "react";
import css from '../ContactForm/ContactForm.module.css';
import shortid from "shortid";
import PropTypes from "prop-types";

export default function ContactForm({ onSubmit }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const id = shortid.generate();

    const handelOnChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break
            default:
                return;
        }
    };

    const handelSubmit = e => {
        e.preventDefault();
        onSubmit(name, number, id)
        setName('');
        setNumber('')
    };

    return (
        <div className={css.contactFormInput}>
            <form className={css.forInput} onSubmit={handelSubmit}>
                <label htmlFor={id} className={css.contactLabel}>
                    Name:
                    <input
                        id={id}
                        type="text"
                        name="name"
                        onChange={handelOnChange}
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                </label>
                <label htmlFor={id} className={css.contactLabel}>
                    Phone:
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={handelOnChange}
                        value={number}
                        required />
                </label>
                <button className={css.contactAddBtn} type="submit">Add contact</button>
            </form>
        </div>
    )
};

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
};
