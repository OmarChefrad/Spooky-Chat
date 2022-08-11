import React, { useEffect } from "react"
import "./Preview.css"

import { useDispatch, useSelector } from "react-redux"
import { selectCameraImage, resetCameraImage } from "./features/cameraSlice"
import { useNavigate } from "react-router-dom"

import TextFieldsIcon from "@material-ui/icons/TextFields"
import NoteIcon from "@material-ui/icons/Note"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import TimerIcon from "@material-ui/icons/Timer"
import CropIcon from "@material-ui/icons/Crop"
import CreateIcon from "@material-ui/icons/Create"
import CloseIcon from "@material-ui/icons/Close"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import SendIcon from "@material-ui/icons/Send"

import { v4 as uuid } from "uuid"
import { storage, db } from "./firebase"
import firebase from "firebase"
// import { selectUser } from "./features/appSlice"

const Preview = () => {
  const cameraImage = useSelector(selectCameraImage)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const user = useSelector(selectUser)

  useEffect(() => {
    if (!cameraImage) {
      navigate("/")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraImage, navigate])

  const sendPost = () => {
    const id = uuid()
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImage, "data_url")

    uploadTask.on(
      "state_chaanged",
      null,
      (error) => {
        console.log(error)
      },
      () => {
        //COMPLETE Function
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageUrl: url,
              // username: user.username,
              read: false,
              // profilePic: user.profilePic,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            navigate("/chats")
          })
      }
    )
  }

  const closePreview = () => {
    dispatch(resetCameraImage())
  }

  return (
    <div className="preview">
      <CloseIcon className="preview__close" onClick={closePreview} />
      <div className="preview__toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={cameraImage} alt="preview" className="screeShot"/>
      <div onClick={sendPost} className="preview__footer">
        <h2>Send Now</h2>
        <SendIcon fontSize="small" className="preview__sendIcon" />
      </div>
    </div>
  )
}

export default Preview
