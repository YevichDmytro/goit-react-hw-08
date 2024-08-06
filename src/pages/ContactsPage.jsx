import ContactsForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';

const ContactsPage = () => {
  return (
    <div>
      <ContactsForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
