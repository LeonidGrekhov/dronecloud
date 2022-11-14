import React from 'react';
import "./card.css"
import "./droneitem.css"
import {
  
  NavLink
 
} from '../components/Navbar/NavbarElements';
const DroneCat1 = () => {
  return (
    <div id="container">
      
        <div id="right">

        <div className="product">
        <div id="top">
        <div className="contents flex-col-hstart-vstart">
        <div className="progress-bar flex-row-vcenter-hstart">
        <img
            className="active-indicator"
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yqoiaye3p1i-1966%3A6014?alt=media&token=aae51ba2-ba0c-4b05-8d5b-eab123a04bba"
                alt="Not Found"
                
              />
              <div className="active-line" />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yqoiaye3p1i-1966%3A6014?alt=media&token=aae51ba2-ba0c-4b05-8d5b-eab123a04bba"
                alt="Not Found"
                className="active-indicator-1"
              />
              <div className="active-line" />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1bshc0ion01-1966%3A3896?alt=media&token=ef583b83-db35-4bb8-80ff-fe90dbed8861"
                alt="Not Found"
                className="active-indicator-1"
              />
              <div className="active-line" />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1bshc0ion01-1966%3A3896?alt=media&token=ef583b83-db35-4bb8-80ff-fe90dbed8861"
                alt="Not Found"
                className="active-indicator-1"
              />
            </div>
            <p className="txt-817">Step 2: Drone Catalog</p>
            
              <p className="txt-706">
                Select a service and chose your drone.
              </p>
           
        </div>
        <div className="rectangle-10">
            <div className="service-dropdown flex-col-hstart-vstart">
                <p className="txt-655">Data Collection</p>
                <div className="group-269 flex-row-vend">
                    <p className="txt-581">Service</p>
                    <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u1hnfaf4y5l-I1966%3A5559%3B1966%3A6447?alt=media&token=45849eee-3db8-4023-859c-7bb76813e04d"
                    alt="Not Found"
                    className="vector"
                    />
                </div>
            </div>

        </div>

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
              <div className="price flex-row-vcenter-hcenter">
                <p className="txt-237">$80</p>
                <p className="txt-448">/ hour</p>
              </div>
              <div className="cta flex-row-vcenter-hcenter">
                <p className="txt-957">Select</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pj9ds23a69e-1966%3A5558?alt=media&token=dca7f995-720a-4514-bd53-7918b8ab4a8d"
                  alt="Not Found"
                  className="iconly-light-arrow-right-2"
                />
              </div>
            </div>
          </div>
          </div>

        </div>
        <div id='container2'>
        
            <div id="left">
                <div className="button-sign-up1 flex-row-vcenter-hcenter">
                    
                    <NavLink className="txt-856" to='/bookdrone' >
                    Back
                    </NavLink>
                </div>
            </div>   
            <div id="right">
                <div className="button-sign-up1 flex-row-vcenter-hcenter">
                    <NavLink className="txt-856" to='/finishedBookingDataCollection' >
                    Next
                    </NavLink>
                </div>
            </div>  
        
        </div>
        </div>
        
      </div>

        </div>
    
    
  );
};
  
export default DroneCat1;