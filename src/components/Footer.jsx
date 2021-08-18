import React from "react";
import "../styles/footer.css";
import logo from "../assests/logo.png"

function Footer() {
  return (
    <div className="footer">
      <div className="first_footer">
        <div className="first_footer_section">
          <p>LOCATION</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="first_footer_section">
          <p>E-MAIL</p>
          <p>noreply@envato.com</p>
        </div>
        <div className="first_footer_section">
          <p>PHONE</p>
          <p>+61 (0) 383 766 284</p>
        </div>
      </div>
      <div className="footer_ending">
          <img src={logo} alt="Logo" />
          <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.</p>
          <p>© 2021 Betheme by <span className="footer_span">Debabrata Basak</span> | All Rights Reserved |<span className="footer_span">Powered by CoderBoy</span> </p>
      </div>
    </div>
  );
}

export default Footer;
