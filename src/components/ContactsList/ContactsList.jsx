import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => (
          <li key={id} id={id} name={name} number={number}>
            <span>
              {name}: {number}
            </span>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
