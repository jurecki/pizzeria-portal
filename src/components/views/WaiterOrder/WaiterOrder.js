import React from 'react';
import styles from './WaiterOrder.module.scss';
import PropTypes from 'prop-types';

const demoOrder = [
  { id: '123', product: 'pizza', table: 1, total: '100$' },
  { id: '234', product: 'salat', table: 2, total: '200$' },
];

const WaiterOrder = (props) => {
  const orderPath = window.location.pathname;
  const orderId = orderPath.substring(20, 30);

  return (
    <div className={styles.component}>
      Order view {orderId}
    </div>
  );
};

WaiterOrder.propTypes = {
  order: PropTypes.object,
};

export default WaiterOrder;
