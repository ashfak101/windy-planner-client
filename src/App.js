
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddNewService from './Pages/AddNewService/AddNewService';
import BookingDetails from './Pages/BookingDetails/BookingDetails';
import AboutUS from './Pages/Home/AboutUs/AboutUS';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ManageAllBooking from './Pages/ManageAllBooking/ManageAllBooking';
import MyBooking from './Pages/MyBooking/MyBooking';
import NotFound from './Pages/NotFound/NotFound';
import OrderUpdate from './Pages/OrderUpdate/OrderUpdate';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <>
     <AuthProvider>
     <BrowserRouter>
          <Header></Header>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route exact path='/home'>
              <Home></Home>
          </Route>
          <Route exact path='/about'>
              <AboutUS></AboutUS>
          </Route>
          
          <PrivateRoute path='/bookingDetails/:bookingId'>
          <BookingDetails></BookingDetails>
          </PrivateRoute>
          <PrivateRoute  path='/addNewService'>
              <AddNewService></AddNewService>
          </PrivateRoute>
         
          <PrivateRoute  path='/mybooking'>
              <MyBooking></MyBooking>
          </PrivateRoute>

          <PrivateRoute  path='/manageallbooking'>
            <ManageAllBooking></ManageAllBooking>
          </PrivateRoute>

          <PrivateRoute  path='/update/:id'>
            <OrderUpdate></OrderUpdate>
          </PrivateRoute>

          <PrivateRoute  path='/mybooking'>
          <MyBooking></MyBooking>
          </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </>
  );
}

export default App;
