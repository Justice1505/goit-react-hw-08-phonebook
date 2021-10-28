import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { StyledTableCell, StyledTableRow } from './ContactListStyled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from '../../redux/contacts';
// import s from "./ContactList.module.css";
import { visibleList } from '../../redux/contacts';

export default function ContactList() {
  const contacts = useSelector(visibleList);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const deleteContact = value => dispatch(deleteContacts(value));
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone number</StyledTableCell>
            <StyledTableCell align="right">
              Delete from phonebook
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map(contact => (
            <StyledTableRow
              key={contact.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {contact.name}
              </StyledTableCell>
              <StyledTableCell align="right">{contact.number}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(250, 128, 114, 0.5)',
                    color: '#000',
                    transition: 'all 0.4s ease 0s',
                    '&:hover': {
                      backgroundColor: 'salmon',
                      color: '#fff',
                      transition: 'all 0.4s ease 0s',
                    },
                  }}
                  onClick={() => deleteContact(contact)}
                >
                  Delete contact
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};
