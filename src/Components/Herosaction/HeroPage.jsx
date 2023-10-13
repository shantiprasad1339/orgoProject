import React from "react";
import cube from '../../Images/white-black-rubik-s-cube-wallpaper-preview.jpg';
import "./Hero.css";
function HeroPage() {
  return (
    <>
      <div className="MainHero">
        <div className="heropage">
          <div className="HeroText">
            <h1>Email for developer</h1>
            <h3>
              The best API to reach humans instead of spam folders. Build, test,
              and deliver transactional emails at scale.
            </h3>
            <div className="heroButtons">
                <div className="getStart">Get Started  > </div>
                <div className="Docs">Documents   > </div>
            </div>
          </div>
          <div className="heroImage">
            <img src={cube} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
