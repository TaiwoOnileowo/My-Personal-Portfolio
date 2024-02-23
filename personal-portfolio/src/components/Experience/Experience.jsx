import React from "react"
import skills from "../../data/skills.json"
import { getImageUrl } from "../../utilities"
import styles from "./Experience.module.css"
export const Experience=()=>{
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                skills.map((skill, id)=>{
                    return <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.image}/>
                    </div>
                    <p>{skill.title}</p>
                    </div>
                })
                }
                </div>
                <ul></ul>
            </div>
        </section>
    )
}