import style from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={style.welcomeWrap}>
      <h1>Welcome in PhoneBook service</h1>
      <h2>Instruction:</h2>
      <div className={style.listWrap}>
        <ol className={style.list}>
          <li>
            Navigate to the Contacts page by clicking the "Contacts" button.
          </li>
          <li>
            Fill in the fields of the form to add a new contact, then click the
            "Add contact" button.
          </li>
          <li>Your contact will appear on the left side of the website.</li>
          <li>To delete a contact, simply click the "Delete" button.</li>
          <li>
            To search for a contact by name, enter a letter, part of the name,
            or the full name.
          </li>
        </ol>
      </div>
      <h2>Enjoy using the service!</h2>
    </div>
  );
};

export default HomePage;
