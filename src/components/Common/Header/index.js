import React from 'react'
import "./style.css"
import Button from "../Button/index"
import AnchorTemporaryDrawer from "./drawer";



function Header() {
  return (
    <>
      <div className="navbar">
        <h1 className="logo">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
        <div className="links">
          <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/">
            <p className="link">Compare</p>
          </a>
          <a href="/">
            <p className="link">Watchlist</p>
          </a>
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
        <div className="mobile-drawer">
          <AnchorTemporaryDrawer />
        </div>
      </div>
    </>
  );
}

export default Header