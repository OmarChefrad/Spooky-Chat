import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import { auth } from "./firebase";

import WebcamCapture from "./components/webcamCapture/WebcamCapture";
import Preview from "./components/preview/Preview";
import Chats from "./components/chats/Chats";
import ChatView from "./components/chatView/ChatView";

import Login from "./auth/login/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <>
              <img
                className="App__logo"
                src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
                alt=""
              />
              <div className="App__body">
                <div className="App__bodyBackground">
                  <Switch>
                    <Route exact path="/">
                      <WebcamCapture />
                    </Route>
                    <Route exact path="/chats">
                      <Chats />
                    </Route>
                    <Route exact path="/chats/view">
                      <ChatView />
                    </Route>
                    <Route exact path="/preview">
                      <Preview />
                    </Route>
                  </Switch>
                </div>
              </div>
            </>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
