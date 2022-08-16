const useGetContactsList = (contacts, filter) => {
  let contactsFiltred;

  if (filter) {
    const normalizedFilter = filter.toLowerCase();

    contactsFiltred = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return contactsFiltred;
  }

  return contacts;
};

export { useGetContactsList };
