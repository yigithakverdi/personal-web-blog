import React from 'react';
import { Link } from 'gatsby';
import { sidebar } from "/src/css/sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={sidebar}>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;