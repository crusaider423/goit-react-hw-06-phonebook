export const MyFilter = ( {filter, contacts} ) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      number.toLowerCase().includes(normalizedFilter)
    );
  });
};
