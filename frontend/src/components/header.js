import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/RustamyF/nlp-fastapi-fulstack/tree/main" className="header__nav-link">Git</a></li>
          <li className="header__nav-item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/RustamyF/nlp-fastapi-fulstack/tree/main" className="header__nav-link">Docs</a></li>
          <li className="header__nav-item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/RustamyF/nlp-fastapi-fulstack/tree/main" className="header__nav-link">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
