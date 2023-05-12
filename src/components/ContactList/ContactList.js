import { useDispatch, useSelector } from 'react-redux';
import {
  ListContacts,
  ItemsContact,
  Contact,
  DeleteBtn,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { visibleContact } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const getFilteredContacts = useSelector(visibleContact);

  return (
    <ListContacts>
      {getFilteredContacts.map(contact => (
        <ItemsContact key={contact.id}>
          <Contact>
            {contact.name}: {contact.number}
          </Contact>
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteBtn>
        </ItemsContact>
      ))}
    </ListContacts>
  );
};