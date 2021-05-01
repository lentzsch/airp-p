//frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import AirportSelector from "./components/Gallery/AirportSelector"

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
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <AirportSelector/>
      <Gallery/>
  </>
  );
}

export default App;
