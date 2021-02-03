import React, { useState, useEffect } from "react";
import "./Chats.css";
import { useHistory } from "react-router-dom";

import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import Chat from '../chat/Chat';

import { useSelector, useDispatch } from "react-redux";
import { db, auth } from "../../firebase";
import { selectUser } from "../../features/appSlice";
import { resetCameraImage } from "../../features/cameraSlice";

const Chats = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const takeSnap = () => {
    dispatch(resetCameraImage());
    history.replace("/");
  }

  useEffect(() => {
    //Whenever something changes inside the db's posts collection, go ahead and give me the snapshots in the desc order of the timestamp
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <>
      <div className="chats">
        <div className="chats__header">
          <Avatar src={user.profilePic} onClick={() => auth.signOut()} className="chats__avatar" />
          <div className="chats__search">
            <SearchIcon className="chats__searchIcon" />
            <input placeholder="Friends" type="text" />
          </div>
          <ChatBubbleIcon className="chats__chatIcon" />
        </div>
        <div className="chats__posts">
            {
                posts.map(({id, data: { profilePic, username, timestamp, imageUrl, read}}) => (
                    <Chat 
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}
                    />
                ))
            }
        </div>
        <RadioButtonUncheckedIcon 
          className="chats__takePicIcon"
          onClick={takeSnap}
          fontSize="large"
        />
      </div>
    </>
  );
};

export default Chats;
