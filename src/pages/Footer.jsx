import React from "react";
import BottomNav from "./components/BottomNav";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer_section" id="Footer">
        <BottomNav />
        <div className="line"></div>
        <h2>Made with ❤️ by Aman</h2>
      </div>
    </div>
  );
}

export default Footer;
