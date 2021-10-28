import s from '../styles/HomeView.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomeView = () => (
  <Box className={s.container}>
    <Typography variant="h2" component="div" className={s.title}>
      Phonebook
    
    </Typography>
  </Box>
);

export default HomeView;
