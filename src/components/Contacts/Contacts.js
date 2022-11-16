import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contactsSlice";
import css from '../Contacts/Contacts.module.css';
import PropTypes from 'prop-types'

export const Contact = ({id, name, number}) => {
    const dispatch = useDispatch();

    const handelDelete = () => dispatch(deleteContact({id}));

    return(
        <div className={css.contactList}>
            <span>{name}:{number}</span>
            <button onClick={handelDelete} className={css.contactDelBtn}>Delete</button>
        </div>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}
