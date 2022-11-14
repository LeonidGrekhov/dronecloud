import React from 'react';
import "./styles.css"
import "./card.css"
import {

  NavLink

} from '../components/Navbar/NavlinkSidebar';
const BookDrone = () => {
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
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2675?alt=media&token=dc3dcaf1-be39-451a-a6c6-9f18ee6e08ed"
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
                <div className="active-line" />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1bshc0ion01-1966%3A3896?alt=media&token=ef583b83-db35-4bb8-80ff-fe90dbed8861"
                  alt="Not Found"
                  className="active-indicator-1"
                />
              </div>
              <p className="txt-817">Step 1: Farmland selection</p>

              <p className="txt-706">
                Please select the farmland you would like your drone service on.
              </p>

            </div>
            <div id="left">
              <div className="cropcard-enabled-1 flex-col-hstart-vend">
                <div className="title-username flex-col-hstart-vstart">
                  <p className="txt-8107">West Plot A</p>
                  <p className="txt-7410">Crop 1</p>
                </div>
              </div>
              <div className="cropcard-enabled-2 flex-col-hstart-vend">
                <div className="title-username flex-col-hstart-vstart">
                  <p className="txt-8107">West Plot B</p>
                  <p className="txt-7410">Crop 2</p>
                </div>
              </div>
            </div>
            <div id="right">
              <div className="cropcard-enabled-3  flex-col-hstart-vend">
                <div className="title-username flex-col-hstart-vstart">
                  <p className="txt-8107">West Plot C</p>
                  <p className="txt-7410">Crop 3</p>
                </div>
              </div>
              <div className="cropcard-enabled-4  flex-col-hstart-vend">
                <div className="title-username flex-col-hstart-vstart">
                  <p className="txt-8107">West Plot D</p>
                  <p className="txt-7410">Crop 4</p>
                </div>
              </div>
            </div>



          </div>
          <div id="bottom">
            <div id="left"></div>
            <div id="center">
              <div className="button-sign-up flex-row-vcenter-hcenter">

                <NavLink className="txt-691" to='/dronecat1' >
                  next
                </NavLink>
              </div>
            </div>
            <div id="right"></div>
          </div>

        </div>

      </div>

    </div>


  );
};

export default BookDrone;