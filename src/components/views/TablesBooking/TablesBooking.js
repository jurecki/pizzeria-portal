import React from 'react';

const TablesBooking = () => {
  const bookingPath = window.location.pathname;
  const bookingId = bookingPath.substring(22,30);

  return (
    <div>
    TablesBooking view {bookingId}
    </div>
  );
};

export default TablesBooking;
