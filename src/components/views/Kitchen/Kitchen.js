import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoOrder = [
  { id: '123', product: 'pizza', table: 1, total: '100$' },
  { id: '234', product: 'salat', table: 2, total: '200$' },
  { id: '345', product: 'juice', table: 3, total: '20$' },
  { id: '456', product: 'apple pie', table: 4, total: '80$' },
];

const Kitchen = () => (
  <TableContainer component={Paper}>
    <Table >
      <TableHead>
        <TableRow>
          <TableCell>ID ORDER</TableCell>
          <TableCell>PRODUCT</TableCell>
          <TableCell>TABLE</TableCell>
          <TableCell>TOTAL</TableCell>
          <TableCell>STATUS</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoOrder.map(order => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell>{order.table}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell><Button>Compled</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default Kitchen;
