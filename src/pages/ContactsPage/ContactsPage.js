import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from '../../components/ContactList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import Filter from 'components/Filter/Filter';
import css from '../ContactsPage/ContactPage.module.css';
import contactImg from '../../default/templatePhoneContacts.jpeg'

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contactImage = contactImg;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.contactPageContainer}>
        <title>Your Contacts</title>
        <ContactForm />
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactsList />
      </div>
      <div>
        <img src={contactImage} alt="contactsImage" className={css.contactPageImg}></img>
      </div>
    </div>
  );
}
