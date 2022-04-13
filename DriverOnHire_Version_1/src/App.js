import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import BookingSummary from './components/BookingSummary';
import BookingForm1_1 from './components/BookingForm1_1';
import { Route,Link,BrowserRouter,Routes} from 'react-router-dom';
import DriverBookingConfirmation from './components/DriverBookingConfirmation_1';
import DriverConfirmedBooking from './components/DriverConfirmedBookings';
import TodaysBookings from './components/TodaysBookings';
// import DashboardNav from './components/004_2_UserDashboardNav ';
import DriverHome from './components/005_0_DriverHome';
import DriverDashBookings from './components/DriverDashBookings';





function App() {
  return (
    <div className="App">
      <header className="App-header">

        
        { <Routes>
          <Route path="/driverhome" element={<DriverHome />} /> 
          {/* <Route path="/dashboard" element={<DashboardNav/>} /> */}
          <Route path="/booksummary" element={<BookingSummary />} />
          <Route path="/confirmbooking" element={<DriverBookingConfirmation />} />
          <Route path="/confirmedbookings" element={<DriverConfirmedBooking />} />
          <Route path="/todaysbookings" element={<TodaysBookings />} />
          <Route path='/alldriverbookings' element={<DriverDashBookings/>} />
        </Routes> }
        {/* <CustDashBooking/> */}

      </header>

    </div>
  );
}

export default App;
