// import PropTypes from 'prop-types';
import { Form, Label } from 'components/Form/ContactForm.styled';
import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getFilterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilterContacts);
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(selectFilter(e.target.value.trim()));
  };

  // export const Filter = ({ filter, onChange }) => {
  return (
    <Form>
      <Label>
        Find contacts by name
        <Input value={filter} type="text" onChange={onFilter} />
      </Label>
    </Form>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
