//frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import * as sessionActions from './store/session';
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import AirportSelector from "./components/Gallery/AirportSelector"
import Footer from "./components/Footer"

function App() {
  const distpatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    distpatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [distpatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
        </Switch>
      )}
      <AirportSelector/>
      <Gallery/>
      <Footer/>
  </>
  );
}

export default App;
