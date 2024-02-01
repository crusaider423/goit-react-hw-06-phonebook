import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  const elem = contacts.map(
    ({ id, name, number }) =>
      (name || number) && (
        <li key={id}>
          {name}: {number}
          <button
            className={css.btn}
            type="button"
            onClick={() => deleteContact(id)}
          >
            delete
          </button>
        </li>
      )
  );
  return <ol> {elem}</ol>;
};
