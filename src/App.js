import React from "react"
import "./App.css"
import WebcamCapture from "./WebcamCapture"
import Preview from "./Preview"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NoFlashIcon from "@mui/icons-material/NoFlash"
import Chats from "./Chats"

function App() {
  return (
    <div className="app">
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
      <Router>
        <div className="app_body">
          <Routes>
            <Route path="/" element={<WebcamCapture />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </div>
      </Router>
      <footer className="footer">SpookyChat © Copyright UMAR @2022</footer>
    </div>
  )
}

export default App
