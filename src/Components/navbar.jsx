import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setActiveSection(document.location.hash);
  }, []);
  return (
    <header style={{ position: "sticky", top: 0 }}>
      <div className="brandName" onClick={handleScrollToTop}>
        Prasanna.
      </div>
      <nav className="mobileMenuList">
        <ul>
          <a href="#about">
            <li
              className={activeSection === "#about" ? "activeSection" : null}
              onClick={() => setActiveSection("#about")}
            >
              About
            </li>
          </a>
          <a href="#skills">
            <li
              className={activeSection === "#skills" ? "activeSection" : null}
              onClick={() => setActiveSection("#skills")}
            >
              Skills
            </li>
          </a>
          <a href="#projects">
            <li
              className={activeSection === "#projects" ? "activeSection" : null}
              onClick={() => setActiveSection("#tp")}
            >
              Projects
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;