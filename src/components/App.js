import ContactsList from "./ContactList/ContactsList";
import ContactForm from './ContactForm/ContactForm';
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredContacts } from "redux/selectors";
import css from '../components/ContactForm/ContactForm.module.css'


export default function App () {

  // const filter = useSelector(state => state.filter);
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);

  // const changeFilter = e => {
  //   dispatch(getFilteredContacts(e.currentTarget.value));
  // };
  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  return (
    <div>
      <h2 className={css.title}>PHONEBOOK</h2>
      <ContactForm />
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <Filter />
      <h2 className={css.title}>CONTACTS</h2>
      <ContactsList />
    </div>
  );
};
