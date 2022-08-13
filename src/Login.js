import React from "react"
import AnimatedPage from "./AnimatedPage"
import "./Login.css"
import { useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import { auth, provider } from "./firebase"
import { login } from "./features/appSlice"

function Login() {
  const dispatch = useDispatch()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        )
      })
      .catch((error) => alert(error.message))
  }
  return (
    <AnimatedPage>
      <div className="Login">
        <div className="container">
          <h1>Spooky Chat</h1>
          <div className="ghost">👻</div>
        </div>
        <div className="Login__wel">
          Welcome to spooky chat, were everything can happen
        </div>
        <div className="Login__container">
          <img
            src="https://cdn.discordapp.com/attachments/961369644130766853/1007982431091036162/snapchat_1_1.png"
            alt=""
          />
          <Button onClick={signIn} className="Login__button">
            Sign In
          </Button>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Login
