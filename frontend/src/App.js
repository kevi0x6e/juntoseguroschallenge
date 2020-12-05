import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login, Tasks } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
