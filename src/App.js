import "./App.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import WebcamCapture from "./components/webcamCapture/WebcamCapture";
import Preview from "./components/preview/Preview";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <div className="App__body">
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
      </div>
    </Provider>
  );
}

export default App;
