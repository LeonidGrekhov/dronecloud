import React from 'react';
import "./styles.css"
import {

    NavLink

} from '../components/Navbar/NavbarElements';
const ManageDrone = () => {
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
                <div className="list-menu-1 flex-row">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2652?alt=media&token=24802a63-8ddf-47b4-8236-569e52da555c"
                        alt="Not Found"
                        className="icon-24-outline-key-square"
                    />
                    <p className="txt-394">Book Drone Service</p>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2658?alt=media&token=e25238d9-0bbc-4b53-b0e1-f272dc2fcc40"
                        alt="Not Found"
                        className="chevron-right-2"
                    />
                </div>
                <div className="group-683">
                    <div className="list-menu-2 flex-row">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2661?alt=media&token=fddb69ac-23d3-48de-8fb9-05f1be08a1ff"
                            alt="Not Found"
                            className="discount-shape-2"
                        />

                        <NavLink className="txt-240" to='/bookdrone' >
                            My Bookings
                        </NavLink>

                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2672?alt=media&token=80e10c5e-ed61-4b58-b2e5-d01d0814d01d"
                            alt="Not Found"
                            className="chevron-right-2"
                        />
                    </div>

                </div>
                <div className="group-683">
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
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2672?alt=media&token=80e10c5e-ed61-4b58-b2e5-d01d0814d01d"
                        alt="Not Found"
                        className="chevron-right-2"
                    />
                </div>
                </div>


            </div>
            <div id="right">
                <div className="product">

                    {/* <div id='container'>
    <div className='left'><p className="txt-853">All Drones</p></div>
    <div className='right'><p className="txt-853">Add Drones</p></div>
    <div className='right'>
    <div className="group-139">
        <div className="group-373">
        <p className="txt-9107">Add Drone</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/7vhd78bvxdn-1818%3A2682?alt=media&token=820e35c1-17e7-4cdc-a8ad-8541edb99e87"
          alt="Not Found"
          className="frame-7"
        />
        </div>
        </div>
    </div>
    </div> */}
                    <p className="txt-853">All Drones</p>
                    <div id="right">
                        <div className="button-sign-up1 flex-row-vcenter-hcenter">
                            <NavLink className="txt-856" to="/adddrone">Add Drone</NavLink>
                        </div>
                    </div>
                    <div className="group-221 flex-col">
                        <div className="group-21 flex-row">
                            <p className="txt-177">Drone ID#</p>
                            <p className="txt-526">Drone Model</p>
                            <p className="txt-139">Service</p>
                            <p className="txt-1044">Status</p>
                            <p className="txt-526">Delete</p>
                            <p className="txt-238 flex-hcenter">Modify</p>
                        </div>

                        <div className="line-5" />

                        <div className="line-5" />

                        <div className="line-5" />

                        <div className="line-5" />

                        <div className="line-5" />

                        <div className="line-10" />
                    </div>

                </div>

            </div>
        </div>

    );
};

export default ManageDrone;