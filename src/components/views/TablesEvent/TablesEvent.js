import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEvent.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TablesEvent = (props) => {

  return (
    <form className={styles.component} noValidate autoComplete="off">
      <TextField
        label="ID Event"
        defaultValue={props.location.eventID}
      />
      <TextField
        label="Date"
        defaultValue={props.location.eventDate}
      />
      <TextField
        label="Hour"
        defaultValue={props.location.eventHour}
      />
      <TextField
        label="Table"
        defaultValue={props.location.eventTable}
      />
      <TextField
        label="Duration"
        defaultValue={props.location.eventDuration}
      />
      <TextField
        label="People"
        defaultValue={props.location.eventPpl}
      />
      <TextField
        label="Starters"
        defaultValue={props.location.eventStarters}
      />

      <div className={styles.button}>
        <Button variant="contained" color="primary">OK</Button>
        <Button variant="contained">Edit</Button>
      </div>

    </form>
  );
};

TablesEvent.propTypes = {
  location: PropTypes.object,
};

export default TablesEvent;
