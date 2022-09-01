import { Wrapper, Label, Title, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterItem } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsApi';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const { isLoggedIn } = useSelector(state => state.users);

  const { data, isLoading, error } = useGetContactsQuery(null, {
    skip: !isLoggedIn,
  });

  const handleFilterChange = value => {
    dispatch(filterItem(value));
  };

  return (
    <>
      {error && (
        <h2>
          {error.status} {JSON.stringify(error.data)}
        </h2>
      )}
      {((!error && !isLoading && data.length > 1) || filter) && (
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
      )}
    </>
  );
};
