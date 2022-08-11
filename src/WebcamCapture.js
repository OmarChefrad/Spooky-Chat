import React, { useCallback, useRef } from "react"
import Webcam from "react-webcam"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import { useDispatch } from "react-redux"
import { setCameraImage } from "./features/cameraSlice"
import { useNavigate } from "react-router-dom"
import "./WebcamCapture.css"

const videoconstaints = {
  width: 720,
  height: 1280,
  facingMode: "user",
}

function WebcamCapture() {
  const webcamRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    dispatch(setCameraImage(imageSrc))
    navigate("/preview")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef])

  return (
    <div className="webcamCapture">
      <RadioButtonUncheckedIcon
        className="webcamCapture__buton"
        onClick={capture}
        fontSize="large"
      />
      <Webcam
        className="webcamCapture__webcam"
        audio={false}
        ref={webcamRef}
        height={videoconstaints.height}
        screenshotFormat="image/jpeg"
        width={videoconstaints.width}
        videoconstaints={videoconstaints}
      />
      {/* <img src={image} alt="" /> */}
    </div>
  )
}

export default WebcamCapture
