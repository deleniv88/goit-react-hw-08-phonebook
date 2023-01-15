import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from '../../components/ContactList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import Filter from 'components/Filter/Filter';
import css from '../ContactsPage/ContactPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.contactPageContainer}>
        <ContactForm />
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
          <h2>Your Contacts</h2>
          <ContactsList />
      </div>
     
    </div>
  );
}
