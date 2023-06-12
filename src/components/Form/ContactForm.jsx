// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/filterSlice';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const isDublicate = ({ name, number }) => {
    const refName = name.toLowerCase().trim();
    const refNumber = number.trim();

    const duplicate = contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === refName ||
        contact.number.trim() === refNumber.trim()
    );
    return Boolean(duplicate);
  };

  const onAddContact = ({ name, number }) => {
    if (isDublicate({ name, number })) {
      alert(`${name} or ${number} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
  };

  // const onChange = e => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit({ name, number });
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Form
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
    >
      <Label>
        Name
        <input
          // value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={onChange}
        />
      </Label>
      <Label>
        Number
        <input
          // value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // onChange={onChange}
        />
      </Label>
      <button type="submit" onClick={() => dispatch({ type: 'addContact' })}>
        Add contact
      </button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
