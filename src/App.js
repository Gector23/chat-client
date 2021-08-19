import { useState, useEffect, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Login from './containers/Login';
import HomePage from './components/HomePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoggedIn = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const handleLoggedOut = useCallback(() => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }, []);

  return (
    <div className="App">
      <Container component="main">
        <Switch>
          <Route exact path="/login">
            {!isLoggedIn ? <Login onLoggedIn={handleLoggedIn} /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            {isLoggedIn ? <HomePage onLoggedOut={handleLoggedOut} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
