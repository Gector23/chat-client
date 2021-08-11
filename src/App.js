import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Login from "./containers/Login";

const App = () => {
  const [user, setUser] = useState(null);

  console.log(user);

  return (
    <div className="App">
      <Container>
        <Switch>
          <Route exact path="/login">
            <Login onUserChange={setUser} />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
