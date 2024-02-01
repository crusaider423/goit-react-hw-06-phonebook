import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactForm,
  Filter,
  ContactList,
  IsDublicate,
  MyFilter,
  GetLocStore,
} from './index';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(GetLocStore());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = ({ target: { value } }) => setFilter(value);

  const deleteContact = itemId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== itemId));
  };

  const addContact = stateForm => {
    if (IsDublicate(stateForm, contacts)) {
      return alert(`${stateForm.name} is already in contacts`);
    }
    setContacts(prevState => [...prevState, { ...stateForm, id: nanoid() }]);
  };
    const contact = MyFilter({ contacts, filter }); //тут передаю у вигляді обєкту томущо два аргументи і один пропс

  return (
    <div className={css.wraper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter
        title={'Find contacts by name'}
        filter={filter}
        changeFilter={changeFilter}
      />
      <ContactList contacts={contact} deleteContact={deleteContact} />
    </div>
  );
};
