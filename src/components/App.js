import { useState, useEffect } from 'react';
import ContactsList from "./ContactList/ContactsList";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from '../components/ContactForm/ContactForm.module.css';
import shortid from 'shortid';

export default function App() {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }]
  )

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const currentContacts = JSON.parse(localStorage.getItem('contacts')) ?? '';
    currentContacts && setContacts(currentContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  };

  const formSubmitHandler = (name, number) => {
    const findContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())

    if (findContact) {
      alert(`${name} already exists in phonebook`)
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number
    }
    setContacts(prevState => [newContact, ...prevState])
  };

  const deleteContact = contactId => {
    const newContact = contacts.filter(contact => contact.id !== contactId)
    setContacts([...newContact])
  };
  
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(cn => cn.name.toLowerCase().includes(normalizedFilter));
  } 

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};
