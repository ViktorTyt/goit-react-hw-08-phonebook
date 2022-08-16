import { Label, Title, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterItem } from 'redux/contactsReducer';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const { data, isLoading } = useGetContactsQuery();

  const handleFilterChange = value => {
    dispatch(filterItem(value));
  };

  return (
    ((!isLoading && data.length > 1) || filter) && (
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
