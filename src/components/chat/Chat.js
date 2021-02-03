import React from 'react'
import "./Chat.css";

import { selectImage } from "../../features/appSlice";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { useHistory } from "react-router-dom";

import { Avatar } from "@material-ui/core";
import StopRoundedIcon from "@material-ui/icons/StopRounded";

import ReactTimeago from 'react-timeago';

const Chat = ({id, username, timestamp, imageUrl, read, profilePic}) => {
    
    const dispatch = useDispatch();
    const history = useHistory();

    const open = () => {
        if(!read) {
            dispatch(selectImage(imageUrl));

            //Make the image as read in the db (merge true : avoid overrides)
            db.collection('posts').doc(id).set({
                read : true,
            }, { merge : true})

            history.push("/chats/view");
        }
    }

    return (
        <div onClick={open} className="chat">
            <div className="chat__data">
                <Avatar className="chat__avatar" src={profilePic} />
                <div className="chat__info">
                    <h4>{username}</h4>
                    <p>
                        { !read && "Tap to view - "}
                        <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
                    </p>
                </div>
            </div>
            {
                !read && <StopRoundedIcon className="chat__readIcon" />
            }
        </div>
    )
}

export default Chat
