import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsForm from '../../components/ContactForm/ContactForm';
import ContactsList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectContactsLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import style from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.wrap}>
      <div className={style.filterWrap}>
        <SearchBox />
        {isLoading && <div>Request in progress...</div>}
        <ContactsList />
      </div>
      <div className={style.formWrap}>
        <ContactsForm />
      </div>
    </div>
  );
};

export default ContactsPage;
