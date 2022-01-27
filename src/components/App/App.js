import { useEffect, useState } from 'react';
import { ArticleConteiner } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../ContactsFilter';
import ContactList from '../ContactList';

export default function App () {
  const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem('contacts')) ?? ""})
  const [filter, setFilter] = useState("")

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const handlerSubmitUserForm = contact => {
    contacts.some(contactItem =>
        contactItem.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())
      ? alert(`${contact.name} is already in contacts`)
      : setContacts(( prevContacts => [...prevContacts, contact]));
    resetFilter()
  };

  const handlerFilterName = e => {setFilter(e.target.value)};

  const filterVisibleContacts = () => contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));

  const handlerDeleteContact = name => {
    setContacts (prevContacts => prevContacts.filter(contact => contact.name !== name))};

  const resetFilter = () => setFilter('');

    return (
      <ArticleConteiner>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handlerSubmitUserForm} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handlerFilterName} />
        <ContactList
          contacts={filterVisibleContacts()}
          onDeleteContact={handlerDeleteContact}
        />
      </ArticleConteiner>
    );
}
