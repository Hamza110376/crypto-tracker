import React from 'react'
import Button from "../../Common/Button";
import "./style.css"
const MainComponent = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        <h1 className="track-crypto-heading">Track Crypto</h1>
        <h1 className="real-time-heading">Real Time.</h1>
        <p className="info-text">
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <div className="btn-flex">
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
        </div>
      </div>
      <div>Phone</div>
    </div>
  );
}

export default MainComponent