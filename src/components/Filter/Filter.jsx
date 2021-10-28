import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { filterContacts } from '../../redux/contacts';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const getVisibleList = value => dispatch(filterContacts(value));
  const filterList = e => {
    getVisibleList(e.target.value);
  };

  return (
    <Box className={s.wrapper}>
      <Typography variant="div" className={s.title}>
        Enter contact name to find
      </Typography>
      <TextField
        className={s.input}
        id="standard-search"
        label="Search contact"
        type="search"
        name="filter"
        variant="standard"
        onChange={filterList}
        margin="normal"
      />
    </Box>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  formSubmitHandler: PropTypes.func,
};
