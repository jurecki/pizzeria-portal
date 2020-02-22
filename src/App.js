import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvent from './components/views/TablesEvent/TablesEvent';


const App = () => {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/new'} component={TablesEvent} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEvent} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering/order/:id'} component={WaiterOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering/new'} component={WaiterOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
