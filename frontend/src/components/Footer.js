import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} DeAI Resume Matcher. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
