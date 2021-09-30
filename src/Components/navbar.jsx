import React from 'react';
function Navbar() {
    return (
        <header style={{ position: "sticky", top: 0 }}>
            <div className="brandName">
                Prsn.
            </div>
            <nav className="mobileMenuList">
                <ul>
                    <a href="#about">
                        <li         >
                            About
                        </li>
                    </a>
                    <a href="#skills">
                        <li>
                            Skills
                        </li>
                    </a>
                    <a href="#projects">
                        <li>
                            Projects
                        </li>
                    </a>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;