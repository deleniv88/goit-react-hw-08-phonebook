import ContactsList from "./ContactList/ContactsList";
import ContactForm from './ContactForm/ContactForm';
import Filter from "./Filter/Filter";
import css from '../components/ContactForm/ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { ToastContainer } from 'react-toastify';

export default function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.title}>PHONEBOOK</h2>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Loading contacts...</b>}
      <h2 className={css.title}>CONTACTS</h2>
      <ContactsList />
      <ToastContainer autoClose={2000}/>
    </div>
  );
};
