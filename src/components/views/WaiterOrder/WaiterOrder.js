import React from 'react';
import styles from './WaiterOrder.module.scss';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const demoOrder = [
  { id: '123', product: 'pizza', table: 1, total: '100$' },
  { id: '234', product: 'salat', table: 2, total: '200$' },
  { id: '345', product: 'juice', table: 3, total: '20$' },
  { id: '456', product: 'apple pie', table: 4, total: '80$' },
];

const WaiterOrder = (props) => {
  const orderPath = window.location.pathname;
  const orderId = orderPath.substring(26, 29);

  const order = demoOrder.filter(order => order.id === orderId);

  return (

    <form className={styles.component} noValidate autoComplete="off">
      <TextField
        label="ID Order"
        defaultValue={orderId}
      />
      <TextField
        label="Product"
        defaultValue={order[0].product}
      />
      <TextField
        label="Table"
        defaultValue={order[0].table}
      />
      <TextField
        label="Total"
        defaultValue={order[0].total}
      />
      <div className={styles.button}>
        <Button variant="contained" color="primary">OK</Button>
        <Button variant="contained">Edit</Button>
      </div>

    </form>

  );
};

WaiterOrder.propTypes = {
  order: PropTypes.object,
};

export default WaiterOrder;
