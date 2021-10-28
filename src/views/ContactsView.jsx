import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { fetchContacts } from '../redux/contacts';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import s from '../styles/ContactsView.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Box className={s.container}>
      <Typography variant="h3" className={s.title}>
        Add contact to phonebook
      </Typography>
      <ContactForm />

      <Typography variant="h3" className={s.title}>
        My added contacts
      </Typography>
      <Filter />
      <ContactList />
    </Box>
  );
}
