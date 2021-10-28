import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../../redux/contacts/contacts-operations';
import { Button, TextField } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const formSubmitHandler = value => dispatch(operations.addContacts(value));

  const handleChange = e => {
    if (!e.target) {
      const value = e;
      setNumber(value);
    } else {
      const { value } = e.target;
      setName(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    formSubmitHandler({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField
        className={s.input}
        required
        id="standard-required"
        variant="standard"
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        margin="normal"
      />

      <MuiPhoneNumber
        className={s.input}
        required
        id="outlined-required-name"
        name="number"
        label="Number"
        data-cy="user-phone"
        defaultCountry={'pl'}
        value={number}
        onChange={handleChange}
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        size="small"
        className={s.btn}
        // sx={{
        //   backgroundColor: 'rgba(250, 128, 114, 0.5)',
        //   color: '#000',
        //   transition: 'all 0.4s ease 0s',
        //   '&:hover': {
        //     backgroundColor: 'salmon',
        //     color: '#fff',
        //     transition: 'all 0.4s ease 0s',
        //   },
        // }}
      >
        Add contact
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func,
};
