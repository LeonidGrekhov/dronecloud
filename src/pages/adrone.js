import React from 'react';
import "./card.css"
import "./droneitem.css"
import {
  
  NavLink
 
} from '../components/Navbar/NavbarElements';
const ADrone = () => {
  return (

    <div id="container">
      <div div id="left">
        <div className="group-31 flex-row">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2694?alt=media&token=d0a3af89-9a2e-497e-8d86-37fd76bdcb59"
            alt="Not Found"
            className="setting-1"
          />
          <p className="txt-554">Dashboard</p>
        </div>
        <div className="list-menu flex-row">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2645?alt=media&token=925c7506-e416-4888-a726-bbd63263a889"
            alt="Not Found"
            className="icon-24-outline-key-square"
          />
          <p className="txt-152">Maintenance</p>
        </div>
        <div className="group-683">
          <div className="list-menu-1 flex-row">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1bshc0ion01-1966%3A3917?alt=media&token=dcc0e9fd-af7e-488a-9d9b-012054fe1e25"
              alt="Not Found"
              className="icon-24-outline-key-square"
            />
            <p className="txt-240">Book Drone Service</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2658?alt=media&token=e25238d9-0bbc-4b53-b0e1-f272dc2fcc40"
              alt="Not Found"
              className="chevron-right-2"
            />
          </div>
        </div>

        <div className="list-menu-3 flex-row">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1bshc0ion01-1966%3A3926?alt=media&token=db0a9bea-adf2-4e7e-bbca-f5d9e1b01418"
            alt="Not Found"
            className="discount-shape-2"
          />

          <p className="txt-971">My bookings</p>

          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2672?alt=media&token=80e10c5e-ed61-4b58-b2e5-d01d0814d01d"
            alt="Not Found"
            className="chevron-right-2"
          />
        </div>


        <div className="list-menu-3 flex-row">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e0uffxmnhrk-1525%3A2323?alt=media&token=2fb08d8a-328d-4e6f-8967-e8c4406f69a0"
            alt="Not Found"
            className="icon-24-outline-key-square"
          />
          <NavLink className="txt-971" to='/managedrone' >
            Management
          </NavLink>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2682?alt=media&token=4ec1fdce-790b-48cf-b54d-18996fdadb1e"
            alt="Not Found"
            className="chevron-right-2"
          />
        </div>
      </div>

      </div>


  );
};
  export default ADrone;