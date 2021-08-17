import { useState, useEffect, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import Login from "./containers/Login";
import Chat from "./containers/Chat";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoggedIn = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const handleLoggedOut = useCallback(() => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }, []);

  return (
    <div className="App">
      <Container component="main">
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? (
              <Redirect to="/chat" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/login">
            {!isLoggedIn ? (
              <Login onLoggedIn={handleLoggedIn} />
            ) : (
              <Redirect to="/chat" />
            )}
          </Route>
          <Route exact path="/chat">
            {isLoggedIn ? (
              <Chat onLoggedOut={handleLoggedOut} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
