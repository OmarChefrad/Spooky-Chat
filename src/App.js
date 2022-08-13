import React, { useEffect } from "react"
import "./App.css"
import WebcamCapture from "./WebcamCapture"
import Preview from "./Preview"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import NoFlashIcon from "@mui/icons-material/NoFlash"
import Chats from "./Chats"
import View from "./View"
import AnimatedPage from "./AnimatedPage"
import { selectUser, login, logout } from "./features/appSlice"
import { useDispatch, useSelector } from "react-redux"
import Login from "./Login"
import { auth } from "./firebase"

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  })
  return (
    <AnimatedPage>
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <div>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div className="container">
                  <h1>Spooky Chat</h1>
                  <NoFlashIcon
                    style={{
                      color: "whitesmoke",
                      fontSize: "40px",
                      paddingBottom: "10px",
                      paddingLeft: "1rem",
                    }}
                  />
                </div>
              </Link>
              <div className="app_body">
                <Routes>
                  <Route path="/chats/view" element={<View />} />
                  <Route path="/" element={<WebcamCapture />} />
                  <Route path="/preview" element={<Preview />} />
                  <Route path="/chats" element={<Chats />} />
                </Routes>
              </div>
            </div>
          )}
        </Router>
        <footer className="footer">SpookyChat © Copyright UMAR @2022</footer>
      </div>
    </AnimatedPage>
  )
}

export default App
