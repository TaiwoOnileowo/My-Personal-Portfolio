import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { IoCodeDownloadOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const Hero = () => {
  const [downloadResumeIsHovered, setDownloadResumeIsHovered] = useState(false);
  const [contactIsHovered, setContactIsHovered] = useState(false);
  const [displayDownloadResume, setDisplayDownloadResume] = useState(false);

  useEffect(() => {
    function displayResume() {
      const scrollY = window.scrollY;
      if (scrollY > 850) {
        setDisplayDownloadResume(true);
      } else {
        setDisplayDownloadResume(false);
      }
    }
    window.addEventListener("scroll", displayResume);
    return () => {
      window.removeEventListener("scroll", displayResume);
    };
  }, []);
  return (
    <section className={styles.container}>
      <div>
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Hello there!👋
          <br /> I'm Taiwo
        </h1>
        <p className={styles.description}>
          I'm a creative, skilled and dilligent Frontend Developer with great
          skill in creating visualling appealing user-iterfaces and web
          applications. I as well make sure I stay updated on latest Frontend
          Tech trends. I would be happy to work with you. Reach out to get me on
          your team.
        </p>
        
      </div>
      <div className={styles.buttons}>
          <a href="mailto:taiwoonileowo17@gmail.com">
            <button
              className={styles.contactBtn}
              onMouseEnter={() => setContactIsHovered(true)}
              onMouseLeave={() => setContactIsHovered(false)}
            >
              <span
                className={`${styles.downloadSpan} ${
                  contactIsHovered ? styles.iconVisible : styles.iconHidden
                }`}
              >
                <MdOutlineEmail className={styles.downloadIcon} />
              </span>
              <span className={contactIsHovered ? styles.iconHidden : undefined}>
                Contact Me
              </span>
            </button>
          </a>
          <a href="/myResume.pdf" download="Onileowo Taiwo's Resume.pdf">
            <button
              className={styles.contactBtn}
              onMouseEnter={() => setDownloadResumeIsHovered(true)}
              onMouseLeave={() => setDownloadResumeIsHovered(false)}
            >
              <span
                className={`${styles.downloadSpan} ${
                  downloadResumeIsHovered
                    ? styles.iconVisible
                    : styles.iconHidden
                }`}
              >
                <IoCodeDownloadOutline className={styles.downloadIcon} />
              </span>
              <span className={downloadResumeIsHovered ? styles.iconHidden : undefined}>
                Download Resume
              </span>
            </button>
          </a>
        </div>
      </div>
      
      {displayDownloadResume && (
        <a href="/myResume.pdf" download="Onileowo Taiwo's Resume.pdf">
          <button className={`${styles.contactBtn} ${styles.fixed}`}>
            <span>
              <IoCodeDownloadOutline className={styles.downloadIcon} />
            </span>
          </button>
        </a>
      )}
      <img
        src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_auto/dpr_auto/lwfhqvfwk7d57sw786al.jpg"
        alt="Hero-image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.BottomBlur} />
    </section>
  );
};
