import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => {
  const bookings = ['123abc', '231dea'];
  const events = ['321sac', '132dae'];
  return(
    <div className={styles.component}>
        Tables view:

      <div className={styles.component}>
          Booking
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/${bookings[0]}`}>Booking 123abc</Link>
          Event
        <Link to={`${process.env.PUBLIC_URL}/tables/event/new`}>New Event</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/event/${events[0]}`}>Event 123abc</Link>
      </div>

    </div>
  );
};

export default Tables;
