import React, { useRef, useCallback } from "react";
import "./WebcamCapture.css";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { setCameraImage } from "../../features/cameraSlice";
import { useHistory } from "react-router-dom";

import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    history.push("/preview");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  const openChats = () => {
    history.replace("/chats");
  };

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <ChatBubbleIcon className="webcamCapture__chatIcon" onClick={openChats} />
      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
};

export default WebcamCapture;
