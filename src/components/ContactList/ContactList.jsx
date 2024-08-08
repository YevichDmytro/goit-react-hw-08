import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import {
  selectContactsError,
  selectContactsLoading,
} from '../../redux/contacts/selectors';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import style from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  return (
    <>
      {visibleContacts.length > 0 && (
        <ul className={style.list}>
          {visibleContacts.map(contact => {
            return (
              <li key={contact.id} className={style.item}>
                <Contact
                  contactName={contact.name}
                  contactNumber={contact.number}
                  contactId={contact.id}
                />
              </li>
            );
          })}
        </ul>
      )}
      {!loading && !error && visibleContacts.length === 0 && (
        <span className={style.emptyList}>No one contact yet</span>
      )}
    </>
  );
};

export default ContactList;
