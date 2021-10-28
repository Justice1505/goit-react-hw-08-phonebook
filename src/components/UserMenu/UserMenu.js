import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth'
import s from './UserMenu.module.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <Typography variant="p" className={s.name} sx={{ m: '15px' }}>
        Welcome, {name}
      </Typography>
      <Button
        type="button"
        sx={{
          backgroundColor: 'teal',
          color: '#000',
          '&:hover': {
            backgroundColor: '#fff',
          },
        }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
