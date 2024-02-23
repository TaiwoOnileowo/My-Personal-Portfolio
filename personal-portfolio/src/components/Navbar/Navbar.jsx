import React from "react";
import { useState } from "react";
import {getImageUrl} from "../../utilities"
import styles from "./Navbar.module.css";
export const Navbar=()=>{
    const [menuOpen, setMenuOpen]=useState(false);
    
    return(
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src={
                    menuOpen 
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
                }
                 alt="menu-button" 
                onClick={()=>setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=>setMenuOpen(false)}
                >
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="mailto:taiwoonileowo17@gmail.com">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}