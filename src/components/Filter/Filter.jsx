import { Label, Title, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterItem } from 'redux/contactsReducer';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = value => {
    dispatch(filterItem(value));
  };

  return (
    (contacts.length > 1 || filter) && (
      <Label>
        <Title>Find contacts by name :</Title>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={({ target: { value } }) => handleFilterChange(value)}
        />
      </Label>
    )
  );
};
