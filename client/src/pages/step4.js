import React from "react"
import "./step4.css"

import {

    NavLink
  
  } from '../components/Navbar/NavbarElements';
  

export default function Contents() {
  return (
    <div className="contents flex-col-hstart-vstart">
      <div className="progress-bar flex-row-vcenter-hstart">
        <div className="active-indicator" />
        <div className="active-line" />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/dcc06x52vm-1838%3A2903?alt=media&token=0aa3f483-21c8-4ac0-afc2-bb7bf2fd703e"
          alt="Not Found"
          className="active-indicator-1"
        />
         <div className="active-line" />
        <div className="default-indicator" />
        <div className="active-line" />
        <div className="default-indicator" />

        <div className="active-line" />
        <div className="default-indicator-1" />
      </div>

      <p className="txt-817">Step 4: Confirm Booking</p>
            
              <p className="txt-706">
                Please select your selected service details.Your estimated cost is below
              </p>

              <p className="txt-443">1 Drones Found</p>
        <div className="group-4710">
          <p className="txt-516">DJI Mini SE</p>
          <div className="group-160 flex-col">
            <div className="group-837 flex-row-vend">
              <div className="group-740 flex-col">
                <p className="txt-879">Data Collection</p>
                <p className="txt-756">ID #1</p>
                <p className="txt-343">3-Axis Gimbal</p>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pj9ds23a69e-1966%3A5551?alt=media&token=2d27eb0b-80be-49ef-8a26-4992c4b1aea8"
                alt="Not Found"
                className="ghibli-front-uk1"
              />
            </div>
            <p className="txt-163">2.7K Camera</p>
            <p className="txt-756">30 Minute Flight Time</p>
            <p className="txt-756">8 m/s Flight Speed</p>
            <p className="txt-567">249 grams</p>
            <div className="frame-46 flex-row-vcenter-hsb">
             
             
            </div>
          </div>
          </div>
          <div className="button-sign-up flex-row-vcenter-hcenter">
      {/* <p className="txt-137">Return to Dashboard</p> */}
      <NavLink className="txt-856" to="/finishedBookingDataCollection">Next</NavLink>
    </div>
        
    </div>
  )
}
