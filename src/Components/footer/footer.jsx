import React from "react";
import "./footer.css";
import Youtube from '../../Images/camera_5758778.png'
import Youtube2 from '../../Images/record_6810105.png'
import Youtube3 from '../../Images/youtube-symbol_48968.png'

function Footer() {
  return (
    <>
      <div className="footerDiv">
        <div className="fotterLogo">
          <p>2261 Market Street #5039</p>
          <p> San Francisco, CA 94114</p>
          <div className="logos">
            <img src={Youtube} alt="" />
            <img src={Youtube2} alt="" />
            <img src={Youtube3} alt="" />
          </div>
        </div>
        <div className="footerDocuments footerStyle">
          <h4>Doucments</h4>
          <ul>
            <li>Getting Started</li>
            <li>API Reference</li>
            <li>Integrations</li>
            <li>Examples</li>
            <li>SDKs </li>
          </ul>
        </div>
        <div className="resource footerStyle">
          <h4>Resource</h4>
          <ul>
            <li>Changelog</li>
            <li>Pricing</li>
            <li>Status</li>
            <li>Webhooks</li>
          </ul>
        </div>
        <div className="company footerStyle">
          <h4>Company</h4>
          <ul>
            <li>Blog</li>
            <li>Contact</li>
            <li>Customers</li>
            <li>Brand</li>
          </ul>
        </div>
        <div className="legal footerStyle">
          <h4>Legal</h4>
          <ul>
            <li>Acceptable Use</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
