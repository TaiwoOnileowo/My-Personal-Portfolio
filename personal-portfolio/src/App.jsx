import styles from "./App.module.css"
import {Navbar} from "./components/Navbar/Navbar"
import{Hero} from "./components/hero/Hero"
import {About} from "./components/About/About"
import {Experience} from "./components/Experience/Experience"
import {Projects} from  "./components/projects/Projects"
import {Contacts} from "./components/contacts/Contacts"
function App(){
  return (
    <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contacts />
    </div>
    )
}
export default App;