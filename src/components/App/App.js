import { useEffect, useState } from 'react';
import { ArticleConteiner } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../ContactsFilter';
import ContactList from '../ContactList';
import { useSelector, useDispatch } from 'react-redux';
import {addContacts, filterContacts, removeContacts} from "../../redux/sliceContacts";


export default function App () {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch()
  console.log(contacts)
  // const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem('contacts')) ?? ""})
  // const [filter, setFilter] = useState("")
  const filter = useSelector(state => state.contacts.filter);
  const dispatchFilter = useDispatch();
  console.log(filter)

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts))
  // }, [contacts])

  const handlerSubmitUserForm = contact => {
    contacts.some(contactItem =>
        contactItem.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addContacts(contact))
      // setContacts(( prevContacts => [...prevContacts, contact]));
    resetFilter()
  };

  const handlerFilterName = e => {dispatchFilter(filterContacts(e.target.value))
        // setFilter(e.target.value)
      };

  const filterVisibleContacts = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const handlerDeleteContact = name => {
    dispatch(removeContacts(contacts.filter(contact => contact.name !== name)))
    // setContacts (prevContacts => prevContacts.filter(contact => contact.name !== name))
  };

  console.log('filterVisibleContacts()', filterVisibleContacts())

  const resetFilter = () => {dispatchFilter(filterContacts(""))}
  // setFilter('');

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
