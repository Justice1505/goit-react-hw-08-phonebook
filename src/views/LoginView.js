import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import s from '../styles/LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box className={s.container}>
      <Typography variant="h4" className={s.title}>
        Please enter with your login and password.
        <span className={s.text}>
          If you don't have a Login, please go to Registration form.
        </span>
      </Typography>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          className={s.input}
          required
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          className={s.input}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            backgroundColor: 'teal',
            color: '#000',
            '&:hover': {
              backgroundColor: 'blue',
              color: '#fff',
            },
          }}
        >
          login
        </Button>
      </form>
    </Box>
  );
}
