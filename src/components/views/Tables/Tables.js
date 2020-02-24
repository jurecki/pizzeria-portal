import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Tables = () => {

  const demoContentBooking = [
    { 'id': 1, 'date': '2020-02-23', 'hour': '12:30', 'table': 3, 'duration': 2, 'ppl': 3, 'starters': ['bread', 'lemonWater'] },
    { 'id': 2, 'date': '2020-02-23', 'hour': '13:00', 'table': 2, 'duration': 2, 'ppl': 3, 'starters': ['bread', 'lemonWater'] },
  ];

  const demoContentEvent = [
    { 'id': 1, 'date': '2020-02-23', 'hour': '13:30', 'table': 1, 'duration': 1, 'ppl': 3, 'starters': ['bread', 'lemonWater'] },
    { 'id': 2, 'date': '2020-02-23', 'hour': '12:00', 'table': 4, 'duration': 2, 'ppl': 3, 'starters': ['bread', 'lemonWater'] },
  ];

  const hourToNumber = function (hour) {
    const parts = hour.split(':');

    return parseInt(parts[0]) + parseInt(parts[1]) / 60;
  };

  const rows = [
    { 'hour': '12:00' }, { 'hour': '12:30' }, { 'hour': '13:00' }, { 'hour': '13:30' }, { 'hour': '14:00' }, { 'hour': '14:30' }, { 'hour': '15:00' }, { 'hour': '15:30' }];

  const checkBooking = (hour, table) => {
    let link = '';

    demoContentBooking.forEach((element) => {
      if ((hour >= element.hour && hourToNumber(hour) <= (hourToNumber(element.hour) + element.duration)) && table === element.table) {
        link = <Link to={`${process.env.PUBLIC_URL}/tables/booking/${element.id}`}>Booked</Link>;
      }
    });

    return link;
  };

  const checkEvent = (hour, table) => {
    let link = '';

    demoContentEvent.forEach(element => {
      if ((hour >= element.hour && hourToNumber(hour) <= (hourToNumber(element.hour) + element.duration)) && table === element.table) {
        link = <Link to={{ pathname: `${process.env.PUBLIC_URL}/tables/event/${element.id}`, eventHour: element.hour }}>Event</Link>;
      }
    });
    return link;
  };


  return (
    <div className={styles.component}>
      <Container className={styles.row}>
        <form noValidate>
          <TextField
            id="date"
            label="View on day"
            type="date"
            defaultValue="2018-02-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Make new Booking</Button>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`}>Make new Event</Button>
      </Container>
      <Container>
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Hour</TableCell>
                <TableCell>Table 1</TableCell>
                <TableCell>Table 2</TableCell>
                <TableCell>Table 3</TableCell>
                <TableCell>Table 4</TableCell>
                <TableCell>Table 5</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.hour}>
                  <TableCell>{row.hour}</TableCell>
                  <TableCell>{checkBooking(row.hour, 1)}{checkEvent(row.hour, 1)}</TableCell>
                  <TableCell>{checkBooking(row.hour, 2)}{checkEvent(row.hour, 2)}</TableCell>
                  <TableCell>{checkBooking(row.hour, 3)}{checkEvent(row.hour, 3)}</TableCell>
                  <TableCell>{checkBooking(row.hour, 4)}{checkEvent(row.hour, 4)}</TableCell>
                  <TableCell>{checkBooking(row.hour, 5)}{checkEvent(row.hour, 5)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

    </div>
  );
};

export default Tables;
