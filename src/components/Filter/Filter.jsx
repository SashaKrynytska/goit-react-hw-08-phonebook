import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filter.slice';
import { selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <label className={css.contactsFilter}>
      Find contacts by name{' '}
      <input
        className={css.filterInput}
        type="text"
        onChange={e => onChangeFilter(e.target.value)}
        placeholder="Search contact"
        value={filter}
      />
    </label>
  );
};

export default Filter;
