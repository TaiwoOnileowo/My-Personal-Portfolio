import React from "react";
 import projects from "../../data/projects.json"
 import projects2 from '../../data/projects2.json'
import { ProjectCard } from "./ProjectCard";
import {ProjectCard2} from './ProjectCard2'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./Projects.module.css"
export const Projects=()=>{
    const [isNext, setIsNext]=React.useState(false);
   function  handleClick(){
       setIsNext(prevValue=>!prevValue)
   }
    return (
    <section id= "projects" className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            { 
            !isNext ?
    projects.map((project,id)=>{
        return (

              <ProjectCard key={id} project={project} />
            
        );
    })
    :
    projects2.map((projects,id)=>{
        return(
            <ProjectCard2 key={id} project={projects}/>
        );
    })
            }
        </div>
        
    {
        !isNext ?
        <div className={styles.nextButtonDiv}>
        <button className={styles.nextButton} onClick={handleClick}>Next<FaArrowRight size={16}/></button>
        </div>
        :
        <div className={styles.backButtonDiv}>
        <button className={styles.backButton} onClick={handleClick}><FaArrowLeft size={16}/>Back</button>
        <p className={styles.more}>And many more...</p>
        </div>
    }
            
        
        
            
        </section>
        );
} 

