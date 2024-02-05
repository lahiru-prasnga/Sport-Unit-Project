import { Link } from 'react-router-dom';
import profile_css from './Profile.module.css';
import React,{ useState } from 'react';
import AllUserProfile from '../UserProfile/AllUserProfile';
import BookingCard from './UserBookingDetails';
  
        

const Profile = () => {

    return (
       
        <div className={profile_css.im_bg}>
            <div className={profile_css.topNav}>
                <nav>
                    <ul className={profile_css.navLinks}>
                        <li><Link to="/viewFacilities" style={{ textDecoration: "none", color: "white" }}>Facility</Link></li>
                        <li><Link to="/service" style={{ textDecoration: "none", color: "white" }}>Service</Link>
                            <ul className={profile_css.sublinks}>
                                <li>
                                    <Link to="/booking" style={{ textDecoration: "none", color: "white" }}>Booking</Link>
                                </li>
                                <li>
                                    <Link to="/membership" style={{ textDecoration: "none", color: "white" }}>Membership</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/profile" style={{ textDecoration: "none", color: "white" }}>Profile</Link></li>
                        <li><Link to="/history" style={{ textDecoration: "none", color: "white" }}>History</Link></li>
                        <li><Link to="/yearplan" style={{ textDecoration: "none", color: "white" }}>YearPlan</Link></li>
                    </ul>
                </nav>
            </div>
            
            <div className='profile_img text-left p-4'>
                <div className="flex flex-column justify-content-left align-items-left">
                    <div className={profile_css.userProfileContainer}>
                        <AllUserProfile />
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <BookingCard/>
                    </div>
                </div>
            </div>
        </div>     
    );
}

export default Profile;