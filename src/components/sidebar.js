import React from 'react';
import { Link } from 'gatsby';
import { sidebar, avatarContainer, links, name, role } from "/src/css/sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={sidebar}>
            <div>
                <div className={avatarContainer}>
                    <img src="https://via.placeholder.com/200x200.png?text=Avatar" alt="Avatar" className="avatar" />

                </div>
                <div>
                    <div className={name}>Yigit Hakverdi</div>
                    <div className={role}>Security Researcher</div>
                </div>
            </div>
            <div>
                <ul className={links}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;