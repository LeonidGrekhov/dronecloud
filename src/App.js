import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Contacts from './pages/contacts';
import Profile from './pages/profile';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

import BookDrone from './pages/bookdrone';
import DroneCat1 from './pages/dronecat1';
import ManageDrone from './pages/managedrone';

import FinishedBookingSurveillance from "./pages/finishedBookingSurveillance"
import FinishedBookingDataCollection from "./pages/finishedBookingDataCollection"


import AddDrone from './pages/adddrone';
import AddDroneTwo from './pages/adddronetwo';
import ADrone from './pages/adrone';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/index' element={<Home/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/team' element={<Teams/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/bookdrone' element={<BookDrone/>} />
        <Route path='/dronecat1' element={<DroneCat1/>} />
        <Route path='/managedrone' element={<ManageDrone/>} />

        <Route path='/finishedBookingSurveillance' element={<FinishedBookingSurveillance/>} />
        <Route path='/finishedBookingDataCollection' element={<FinishedBookingDataCollection/>} />

        <Route path='/adddrone' element={<AddDrone/>} />
        <Route path='/adddronetwo' element={<AddDroneTwo/>} />
        <Route path='/adrone' element={<ADrone/>} />

      </Routes>
    </Router>
  );
}
  
export default App;