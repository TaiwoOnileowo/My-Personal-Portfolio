import React, { useState, useEffect } from "react";
import { getImageUrl } from "../../utilities";
import styles from "./About.module.css";
export const About = () => {
  const [aboutItemAnimation, setAboutItemAnimation] = useState(null);

  useEffect(() => {
    function setAnimation() {
      const scrollY = window.scrollY;
      console.log(scrollY);
      if (620 < scrollY) {
        setAboutItemAnimation(styles.aboutItemAnimation);
      } else {
        setAboutItemAnimation(null);
      }
    }
    window.addEventListener("scroll", setAnimation);
    return () => {
      window.removeEventListener("scroll", setAnimation);
    };
  }, []);
  console.log(aboutItemAnimation);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_50/dpr_auto/onrrlkkhc06phnpccmjt.jpg"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={`${styles.aboutItem} ${aboutItemAnimation}`}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor-icon" />
            <div className={styles.itemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a skilled Frontend Developer with skill and experience in
                developing responsive, modern, visually-appealing, fully
                functional websites and web applications.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI-icon" />
                    <div className={styles.itemText}>
                        <h3>Technical Content Author</h3>
                        <p>I love to break down complex technical topics and present them in an easy, approachable way for everyone to understand.
                         </p>
                    </div>
                </li> */}
        </ul>
      </div>
    </section>
  );
};
