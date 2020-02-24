import React from 'react';
import styles from './Homepage.module.scss';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(id, date, hour, table, duration, ppl) {
  return { id, date, hour, table, duration, ppl };
}

const rows = [
  createData(1,'2019-02-24', '12:30', 1, 2, 2),
  createData(2,'2019-02-24', '13:30', 1, 3, 2),
  createData(3,'2019-02-25', '14:30', 2, 2, 3),
  createData(4,'2019-02-25', '15:30', 3, 1, 4),
  createData(5,'2019-02-26', '16:30', 4, 2, 1),
];

const Homepage = () => {

  return (
    <div className={styles.component}>
      <Container>
        <h2>Statystki zamówień: </h2>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="12 ZAMÓWIEŃ ZDALNYCH" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="8 ZAMÓWIEŃ LOKALNYCH" />
          </ListItem>
        </List>
        <h2>Lista rezerwacji/eventów na dziś</h2>
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Hour</TableCell>
                <TableCell>Table</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Number of customer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.hour}</TableCell>
                  <TableCell>{row.table}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.ppl}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Homepage;

/*
  - statystki zamówien zdalne lokalne
  - lista rezerwacji / eventów na dziś
  */
