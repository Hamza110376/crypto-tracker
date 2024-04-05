import React from 'react'
import Button from "../../Common/Button";
import "./style.css"
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion"

const MainComponent = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="track-crypto-heading"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="real-time-heading"
        >
          Real Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="info-text"
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="btn-flex"
        >
          <a href="/">
            <Button
              text={"Dashboard"}
              onClick={() => console.log("btn clicked")}
            />
          </a>
          <a href="/">
            <Button
              outlined={"true"}
              text={"Share"}
              onClick={() => console.log("btn clicked")}
            />
          </a>
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          className="iphone"
          src={iphone}
          alt="iphone"
        />
        <img className="gradient" src={gradient} alt="gradient" />
      </div>
    </div>
  );
}

export default MainComponent