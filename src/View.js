import React, { useEffect } from "react"
import "./View.css"
import { selectSelectedImage } from "./features/appSlice"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AnimatedPage from "./AnimatedPage"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

function View() {
  const selectedImage = useSelector(selectSelectedImage)
  const navigate = useNavigate()

  useEffect(() => {
    if (!selectedImage) {
      exit()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage])

  const exit = () => {
    navigate("/chats")
  }

  return (
    <AnimatedPage>
      <div>
        <div className="chatView">
          <img
            src={selectedImage}
            onClick={exit}
            alt="view"
            className="view__img"
          />
          <div className="View__timer">
            <CountdownCircleTimer
              isPlaying
              duration={10}
              strokeWidth={6}
              size={50}
              colors={[
                ["#FFFF00", 0.33],
                ["#F7B801", 0.33],
                ["#A30000", 0.33],
              ]}
            >
              {({ remainingTime }) => {
                if (remainingTime === 0) {
                  exit()
                }
                return remainingTime
              }}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default View
