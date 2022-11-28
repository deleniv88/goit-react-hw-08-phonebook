import { useDispatch } from "react-redux"
import PropTypes from 'prop-types'
import { deleteContact } from "../../redux/contacts/operations";
import { toast } from 'react-toastify'
import { Button } from "@mui/material";
import { ContactList } from "./Contacts.styled";

export const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handelDelete = () => dispatch(deleteContact(id), toast.success(`Contact ${name} was deleted`));

    return (
        <ContactList>
            <span>{name}:{number}</span>
            <Button onClick={handelDelete} variant="contained" color="error">Delete</Button>
        </ContactList>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}
