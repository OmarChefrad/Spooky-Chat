import React, { useState, useEffect } from "react"
import "./Chats.css"
import Avatar from "@material-ui/core/Avatar"
import SearchIcon from "@mui/icons-material/Search"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import { db } from "./firebase"
import Chat from "./Chat"
import AnimatedPage from "./AnimatedPage"
import { useSelector } from "react-redux"
import { selectUser } from "./features/appSlice"

const Chats = () => {
  const [posts, setPosts] = useState([])
  const user = useSelector(selectUser)

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
    <AnimatedPage>
      <div className="chats">
        <div className="chats__headers">
          <Avatar src={user.profilePic} className="chats__avatar" />
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
    </AnimatedPage>
  )
}

export default Chats
