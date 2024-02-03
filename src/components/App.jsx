import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contacts/contacts-slice';
import { filterContacts } from '../redux/filter/filter-slice';
import {
  ContactForm,
  Filter,
  ContactList,
  IsDublicate,
  MyFilter,
  // GetLocStore,
} from './index';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const changeFilter = ({ target: { value } }) =>
    dispatch(filterContacts(value));

  const onDeleteContact = itemId => {
    const del = contacts.filter(({ id }) => id !== itemId);

    dispatch(deleteContact(del));
  };

  const onAddContact = stateForm => {
    if (IsDublicate(stateForm, contacts)) {
      return alert(`${stateForm.name} is already in contacts`);
    }
    dispatch(addContact(stateForm));
  };
  const contact = MyFilter({ contacts, filter }); //тут передаю у вигляді обєкту томущо два аргументи і один пропс

  return (
    <div className={css.wraper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter
        title={'Find contacts by name'}
        filter={filter}
        changeFilter={changeFilter}
      />
      <ContactList contacts={contact} deleteContact={onDeleteContact} />
    </div>
  );
};
