import React from 'react';

const TablesEvent = () => {
  const eventPath = window.location.pathname;
  const eventId = eventPath.substring(20,30);

  return(
    <div>
    TablesEvent view {eventId}
    </div>
  );
};

export default TablesEvent;
