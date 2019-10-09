import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1>Game of Memory</h1>
      <h2>Click an image. You score.</h2>
      <h2>Click the same image twice. You're out!</h2>
      <h2>Good Luck!</h2>
    </header>
  );
}

export default Header;
