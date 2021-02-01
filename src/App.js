import "./App.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import WebcamCapture from "./components/WebcamCapture";
import Preview from "./components/preview/Preview";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
            <Route exact path="/preview">
              <Preview />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
