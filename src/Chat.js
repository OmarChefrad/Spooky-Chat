import React from "react"
import "./Chat.css"
import StopRoundedIcon from "@material-ui/icons/StopRounded"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ReactTimeago from "react-timeago"

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
  return (
    <div classNmae="chat">
      <div className="chat__info2">
        <AccountCircleIcon className="chat__avatar" src={profilePic} />
        <h3>{username}</h3>
      </div>
      <div className="chat__info">
        <p>
          Tap to view -{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
        {!read && <StopRoundedIcon className="chat__readIcon" />}
      </div>
      <div class="line-2">
        <hr />
      </div>
    </div>
  )
}

export default Chat
