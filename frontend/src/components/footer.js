import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__copyright">
          Copyright &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
