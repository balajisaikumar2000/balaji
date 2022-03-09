import React from "react";
import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#certificates">Certificates</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#education">Education</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}
