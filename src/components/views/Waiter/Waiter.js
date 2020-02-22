import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.module.scss';


const Waiter = () => {
  const orders = ['123abc','234def'];

  return (
    <div>
        Waiter view:
      <div className={styles.component}>
        <Link to={`${process.env.PUBLIC_URL}/waiter/ordering/new`}>New Order</Link>
        <Link to={`${process.env.PUBLIC_URL}/waiter/ordering/order/${orders[0]}`}>Order 123abc</Link>
        <Link to={`${process.env.PUBLIC_URL}/waiter/ordering/order/${orders[1]}`}>Order 234def</Link>
      </div>
    </div>
  );
};


export default Waiter;
