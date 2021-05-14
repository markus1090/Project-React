import React from "react"
import { Link } from 'react-router-dom'
import styles from '../style/Navbar.module.css'

const NavBar = () => {
    return (
        <nav className={styles["navbar"]}>
            <div className={styles["title"]}>
                <Link to="/">
                    <h3>Search Books</h3>
                </Link>   
            </div>
            <ul className={styles["links"]}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar