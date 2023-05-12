import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { TitleApp, TitleContactList, Notification } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts, visibleContact } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);
  const getFilteredContacts = useSelector(visibleContact);
  return (
    <>
      <TitleApp>Phonebook</TitleApp>
      <ContactForm />
      <TitleContactList>Contacts</TitleContactList>
      {contacts.length === 0 ? (
        <Notification>There isn't any contact in your phonebook</Notification>
      ) : (
        <div>
          <Filter />
          {getFilteredContacts.length === 0 ? (
            <Notification>You have no contact with this name</Notification>
          ) : (
            <ContactList />
          )}
        </div>
      )}
    </>
  );
}
