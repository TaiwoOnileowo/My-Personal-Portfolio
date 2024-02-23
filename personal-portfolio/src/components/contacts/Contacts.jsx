import React from "react"
import { getImageUrl } from "../../utilities"
import styles from "./Contacts.module.css"
export const Contacts=()=>{
    return <footer id="contact" className={styles.container}>
        <div className={styles.content}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
                <a href="mailto:taiwoonileowo17@gmail.com">taiwoonileowo17@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/taiwo-onileowo/">Linkedin.com/Taiwo Onileowo</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
                <a href="https://github.com/TaiwoOnileowo">github.com/Taiwo Onileowo</a>
            </li>
        </ul>
        </div>
    </footer>
}