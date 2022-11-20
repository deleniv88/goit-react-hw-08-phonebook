import { useDispatch } from "react-redux"
import css from '../Contacts/Contacts.module.css';
import PropTypes from 'prop-types'
import { deleteContact } from "redux/operations";
import { toast } from 'react-toastify'

export const Contact = ({ id, name, phone }) => {
    const dispatch = useDispatch();

    const handelDelete = () => dispatch(deleteContact(id), toast.success(`Contact ${name} was deleted`));

    return (
        <div className={css.contactList}>
            <span>{name}:{phone}</span>
            <button onClick={handelDelete} className={css.contactDelBtn}>Delete</button>
        </div>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}
