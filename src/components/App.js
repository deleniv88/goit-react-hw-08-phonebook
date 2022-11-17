import ContactsList from "./ContactList/ContactsList";
import ContactForm from './ContactForm/ContactForm';
import Filter from "./Filter/Filter";
import css from '../components/ContactForm/ContactForm.module.css'

export default function App () {
  return (
    <div>
      <h2 className={css.title}>PHONEBOOK</h2>
      <ContactForm />
      <Filter/>
      <h2 className={css.title}>CONTACTS</h2>
      <ContactsList/>
    </div>
  );
};
