import React from "react"
import "./Chat.css"
import StopRoundedIcon from "@material-ui/icons/StopRounded"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ReactTimeago from "react-timeago"
import { useDispatch } from "react-redux"
import { selectImage } from "./features/appSlice"
import { useNavigate } from "react-router-dom"
import { db } from "./firebase"
import AnimatedPage from "./AnimatedPage"

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl))
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      )
      navigate("/chats/view")
    }
  }

  return (
    <AnimatedPage>
      <div classNmae="chat">
        <div className="chat__info2">
          <AccountCircleIcon className="chat__avatar" src={profilePic} />
          <h3>{username}</h3>
        </div>
        <div onClick={open} className="chat__info">
          <p>
            {!read && "Tap to view -"}
            {""}
            <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
          </p>
          {!read && <StopRoundedIcon className="chat__readIcon" />}
        </div>
        <div class="line-2">
          <hr />
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Chat
