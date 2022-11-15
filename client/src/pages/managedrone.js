import React from 'react';
import "./managedrone.css"
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
                    <p className="txt-394">Maintenance</p>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/errwlaicvqu-1838%3A2658?alt=media&token=e25238d9-0bbc-4b53-b0e1-f272dc2fcc40"
                        alt="Not Found"
                        className="chevron-right-2"
                    />
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

                {/* <div className="list-menu">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wh2ld12qx7-1966%3A5167?alt=media&token=d07845e3-34d6-4768-9b47-f55b361f601c"
                    alt="Not Found"
                    className="discount-shape-2"
                />


                <p className="txt-394" to='/bookdrone' >
                    My Bookings
                </p>

                <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wh2ld12qx7-1966%3A5178?alt=media&token=33870a76-02f9-4eb5-975e-bf73e609aec0"
                    alt="Not Found"
                    className="chevron-right-2"
                />
            </div> */}
                <div className="list-menu-3 flex-row">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1bshc0ion01-1966%3A3926?alt=media&token=db0a9bea-adf2-4e7e-bbca-f5d9e1b01418"
                        alt="Not Found"
                        className="discount-shape-2"
                    />

                    <p className="txt-971">My bookings</p>

                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wh2ld12qx7-1966%3A5178?alt=media&token=33870a76-02f9-4eb5-975e-bf73e609aec0"
                        alt="Not Found"
                        className="chevron-right-2"
                    />
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
            <p className="txt-1031">All Drones</p>
                <div className="product">
                
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lphi0jldsmp-1818%3A2604?alt=media&token=d449e7ae-c955-4954-89e6-1e7f36606dc4"
                        alt="Not Found"
                        className="rectangle-30"
                    />
                    
                    <div className="group-22 flex-col">
                        <div className="group-21 flex-row">
                            <p className="txt-812">Drone ID#</p>
                            <p className="txt-115">Drone Model</p>
                            <p className="txt-577">Service</p>
                            <p className="txt-979">Available, Booked, or Deployed Status</p>
                            <p className="txt-147">Delete</p>
                            <p className="txt-498 flex-hcenter">Modify</p>
                        </div>
                        <div className="line-5" />
                        <div className="line-5" />
                        <div className="line-5" />
                        <div className="line-5" />
                        <div className="line-5" />
                        <div className="line-5" />
                        <div className="line-5" />
                        <div className="line-12" />
                    </div>
                </div>

            </div>

        </div>


    );
};

export default ManageDrone;