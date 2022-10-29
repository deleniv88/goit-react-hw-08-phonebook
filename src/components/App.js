import React, { Component } from 'react';
import ContactsList from "./ContactList/ContactsList";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from '../components/ContactForm/ContactForm.module.css';

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  };

  formSubmitHandler = data => {
    if (this.state.contacts.find(user => user.name === data.name)) {
      alert(`${data.name} already exists in phonebook`)
    } else {
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts]
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  componentDidMount(){
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if(parsedContacts){
      this.setState({contacts:parsedContacts})
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase()
    const visibleContacts = this.state.contacts.filter(cn => cn.name.toLowerCase().includes(normalizedFilter));

    return (
      <>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  };
};

export default App;