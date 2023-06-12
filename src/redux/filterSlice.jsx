export const getContacts = ({ contacts: { contacts } }) => contacts;
export const getFilter = ({ filter }) => filter;

export const getFilterContacts = ({ contacts: { contacts }, filter }) => {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.includes(filter)
  );
};
