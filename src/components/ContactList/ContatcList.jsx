// import PropTypes from 'prop-types';
import { ContactItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilterContacts, getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilter);
  // const filterContacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filterContacts.toLowerCase())
  );

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  // export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete contact
          </button>
        </ContactItem>
      ))}
    </ul>
  );
  // };

  // ContactList.propTypes = {
  //   contacts: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.string.isRequired,
  //       name: PropTypes.string.isRequired,
  //       number: PropTypes.string.isRequired,
  //     }).isRequired
  //   ),
  //   onDelete: PropTypes.func.isRequired,
};
