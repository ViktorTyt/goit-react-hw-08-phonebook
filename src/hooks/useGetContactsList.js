const useGetContactsList = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  const contactsFiltred = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return filter ? contactsFiltred : contacts;
};

export { useGetContactsList };
