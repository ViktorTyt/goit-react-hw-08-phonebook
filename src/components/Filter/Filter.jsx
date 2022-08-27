import { Wrapper, Label, Title, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterItem } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsSwaggerApi';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const { data, isLoading } = useGetContactsQuery();

  const handleFilterChange = value => {
    dispatch(filterItem(value));
  };

  return (
    ((!isLoading && data.length > 1) || filter) && (
      <Wrapper>
        <Label>
          <Title>Find contacts by name :</Title>
          <FilterInput
            type="text"
            name="filter"
            value={filter}
            onChange={({ target: { value } }) => handleFilterChange(value)}
          />
        </Label>
      </Wrapper>
    )
  );
};
