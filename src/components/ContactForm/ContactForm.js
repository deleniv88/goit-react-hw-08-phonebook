import React, { Component } from "react";
import css from '../ContactForm/ContactForm.module.css';
import shortid from "shortid";
import PropTypes from "prop-types";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id: shortid.generate()
    };

    handelOnChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })
    };

    handelSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.resert();
    };

    resert = () => {
        this.setState({ name: '' })
        this.setState({ number: '' })
        this.setState({ id: shortid.generate() })
    };

    render() {
        return (
            <>
                <div className={css.contactFormInput}>
                    <form className={css.forInput} onSubmit={this.handelSubmit}>
                        <label htmlFor={this.id} className={css.contactLabel}>
                            Name:
                            <input
                                id={this.id}
                                type="text"
                                name="name"
                                onChange={this.handelOnChange}
                                value={this.state.name}
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required />
                        </label>
                        <label htmlFor={this.id} className={css.contactLabel}>
                            Phone:
                            <input
                                type="tel"
                                name="number"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                onChange={this.handelOnChange}
                                value={this.state.number}
                                required />
                        </label>
                        <button className={css.contactAddBtn} type="submit">Add contact</button>
                    </form>
                </div>
            </>
        );
    };
};

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default ContactForm;