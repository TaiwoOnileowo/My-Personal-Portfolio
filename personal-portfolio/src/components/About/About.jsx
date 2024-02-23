import React from 'react'
import { getImageUrl } from '../../utilities'
import styles from "./About.module.css"
export const About =()=>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor-icon" />
                    <div className={styles.itemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                         I am a skilled Frontend Developer with experience
                         in developing responsive, modern and visually-appealing websites and web applications.
                         </p>
                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI-icon" />
                    <div className={styles.itemText}>
                        <h3>Web designer</h3>
                        <p>I'm a Web designer who is familiar with improving the user interface 
                            and experience of users using design tools.
                         </p>
                    </div>
                </li> */}
            </ul>
            </div>
        </section>
    )
}