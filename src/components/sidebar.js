import React from 'react';
import { Link } from 'gatsby';
import { sidebar, avatarContainer, links, name, role, avatar, linkInActive, linkActive } from "/src/css/sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={sidebar}>
            <div>
                <div className={avatarContainer}>
                    <img className={avatar} src="https://avatars.githubusercontent.com/u/46416247?v=4" alt="Avatar" />

                </div>
                <div>
                    <div className={name}>Yigit Hakverdi</div>
                    <div className={role}>Security Researcher</div>
                </div>
            </div>
            <div>
                <ul className={links}>
                    <li><Link activeClassName={linkActive} className={linkInActive} to="/">Home</Link></li>
                    <li><Link activeClassName={linkActive} className={linkInActive} to="/about">About</Link></li>
                    <li><Link activeClassName={linkActive} className={linkInActive} to="/project">Project</Link></li>
                </ul>
            </div>
        </div >
    );
}

export default Sidebar;