import React from 'react';
import PropTypes from 'prop-types';

const TablesEvent = (props) => {
  const eventPath = window.location.pathname;
  const eventId = eventPath.substring(20,30);

  return(
    <div>
    TablesEvent view {eventId}
      godzina: {props.location.eventHour }
    </div>
  );
};

TablesEvent.propTypes = {
  location: PropTypes.object,
};

export default TablesEvent;
