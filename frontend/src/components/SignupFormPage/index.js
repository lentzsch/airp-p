// frontend/src/components/SighnupFormPage/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

function SighnupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pplNumber, setPplNumber] = useState('');
    // const [certifications, setCertifications] = useState(false)
    const [hours, setHours] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/' />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup(
                { 
                    firstName,
                    lastName,
                    email,
                    pplNumber,
                    hours,
                    password
                }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        }
        return setErrors(['Confirm Password field must be the same as the Password field'])
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            </div>
            <div>
            <label>
                First Name
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </label>
            </div>
            <div>
            <label>
                Last Name
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </label>
            </div>
            <div>
            <label>
                Email
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            </div>
            <div>
            <label>
                Certificate Number
                <input
                    type="text"
                    value={pplNumber}
                    onChange={(e) => setPplNumber(e.target.value)}
                    required
                />
            </label>
            </div>
            <div>
            <label>
                Hours
                <input
                    type="text"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    required
                />
            </label>
            </div>
            <div>
            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            </div>
            <div>
            <label>
                Confirm Password
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </label>
            </div>
            <div>
            <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}

export default SighnupFormPage;