import React from 'react';
import styles from './WaiterOrder.module.scss';

const WaiterOrder = () => {
  const orderPath = window.location.pathname;
  const orderId = orderPath.substring(29,40);

  return (
    <div className={styles.component}>
        Order view {orderId}
    </div>
  );
};


export default WaiterOrder;
