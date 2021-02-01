import React, { useRef, useCallback } from "react";
import Webcam from 'react-webcam';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../features/cameraSlice';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {

    const webcamRef = useRef(null);

    const dispatch = useDispatch();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [webcamRef]);

  return <div className="webcamCapture">
      <Webcam 
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon 
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
  </div>;
};

export default WebcamCapture;
