// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import image from '../../images/plane-clipart.png'
import './Navigation.css';

function Navigation ({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='profile-button'>
            <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
        sessionLinks = (
            <>
            <div className='login-signup'>
            <div className='login'>
                <NavLink to="/login" className="login-link">Log In</NavLink>
            </div>
            <div className='signup'>
                <NavLink to ="/signup">Sign Up</NavLink>
            </div>
            </div>
            </>
        );
    }

    return (
        <div className="nav-bar">
    
                <NavLink exact to="/" className="home-link">
                    <img src={image} className="nav-icon"/>
                    Airpnp
                    </NavLink>
                {isLoaded && sessionLinks}
            
        </div>
    );
}

export default Navigation;