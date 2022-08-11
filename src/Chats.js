import React from "react"
import "./Chats.css"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SearchIcon from "@mui/icons-material/Search"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"

const Chats = () => {
  return (
    <div className="chats">
      <div className="chats__headers">
        <AccountCircleIcon className="chats__avatar" />
        <div className="chats__search">
          <SearchIcon className="chats__searchIcon" />
          <input placeholder="Find Your Freinds" type="text" />
        </div>
        <ChatBubbleIcon className="chats__chatIcon" />
      </div>
      <div className="chat__posts">
        <h2>hello</h2>
      </div>
    </div>
  )
}

export default Chats
