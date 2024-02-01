export const GetLocStore = () => {
  try {
    const locStor = localStorage.getItem('contacts');
    return locStor ? JSON.parse(locStor) : [];
  } catch (error) {
    console.error('Error while getting data from localStorage:', error);
    return [];
  }
};
