import React, { useEffect, useState } from "react";

import "./header.scss";

function Header() {
  const [scrolledDown, setScrolledDown] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 20) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={`header ${scrolledDown && "scrolled"}`}>
      <div className="header-note">a3sec technical test</div>
      <div className="tittle">Shopping List</div>
    </div>
  );
}

export default Header;
