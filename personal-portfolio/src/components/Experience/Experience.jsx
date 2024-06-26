import React from "react"
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from "../../utilities"
import styles from "./Experience.module.css"
export const Experience=()=>{
    return (
        <section id="experience" className={styles.container}>
            
            <div className={styles.skillcontent}>
            <div>
            <h2 className={styles.heading}>Stack</h2>
            </div>
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
                </div>
                <div className={styles.experiencecontent}>
                    <div>
                    <h2 className={styles.heading}>Experience</h2>
                    </div>
                <ul className={styles.history}>
                    {
                     history.map((historyItem, id)=>{
                        return <li key={id} className={styles.historyItem}>
                            <div className={styles.orgainzationLogoContainer}>
                            <img src={historyItem.imageSrc} alt={`${historyItem.orgainzation} logo` }/>
                            </div>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.orgainzation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>{historyItem.experiences.map((experience, id)=>(
                                    <li key={id} className={styles.experience}>{experience}</li>
                                ))}</ul>
                            </div>
                        </li>
                    })
                    }
                </ul>
            </div>
        </section>
    )
}