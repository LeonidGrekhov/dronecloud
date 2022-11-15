import React from "react"
import "./contents.css"
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
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/fly8f9uvtvn-1838%3A3568?alt=media&token=b5472822-62ce-4b83-a32d-8e2868da3f95"
          alt="Not Found"
          className="active-indicator-1"
        />
         <div className="active-line" />
        <div className="default-indicator" />
        <div className="active-line" />
        <div className="default-indicator-1" />
        <div className="active-line" />
        <div className="default-indicator-2" />
      </div>
      <p className="txt-817">Step 3: Selected Drone</p>
            
              <p className="txt-706">
                This is your selected drone.
              </p>

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
            <div id="container">
                                    <div id="left">
                                        <div className="button-sign-up1 flex-row-vcenter-hcenter">
                                            <NavLink className="txt-856" to="/managedrone">back</NavLink>
                                        </div>
                                    </div>
                                    <div>
                                    <div>
                                    <div id="left" margin="0" >
                                        <div className="button-sign-up2 flex-row-vcenter-hcenter">
                                            <NavLink className="txt-856" to="/step4">Next</NavLink>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
          </div>

          
          </div> 

          
      
       
        </div>
        
    
  )

}
