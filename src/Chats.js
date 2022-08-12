import React, { useState, useEffect } from "react"
import "./Chats.css"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SearchIcon from "@mui/icons-material/Search"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import { db } from "./firebase"
import Chat from "./Chat"

const Chats = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])

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
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Chats
