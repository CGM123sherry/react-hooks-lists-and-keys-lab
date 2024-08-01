import React from "react";

function NavBar() {
  const links = ["Home", "About", "Projects"];

  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      {/* {links.map((link, index) => (
        <a href={`#${link}`} key={index}>
          {link}
        </a>
      ))} */}
    </nav>
  );
}

export default NavBar;
