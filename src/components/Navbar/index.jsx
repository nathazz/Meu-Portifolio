import "./Navbar.css"
import LanguageBtn from "../LanguageBtn"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

    const [ t ] = useTranslation()

    const [navigationVisible, setNavigationVisible] = useState(false)

    const toggleNavigation = () => {
      setNavigationVisible(!navigationVisible);
    }

    const hideNavigation = () => {
      setNavigationVisible(false);
    }

    return(

    
          <nav className="navbar">
          
          <ul className="ul">
          <LanguageBtn/>
            <a  className="li"  href="#home"><li>Home</li></a>
            <a  className="li"  href="#history"><li >{t("history")}</li></a>
             <a className="li"href="#project">{t("projects")}</a>
            <a  className="li" href="#contact"><li>{t("contact")}</li></a>
            <GiHamburgerMenu className="menu" onClick={toggleNavigation}  style={{color: "white", backgroundColor:"transparent"}} />
         </ul>

         {navigationVisible && (
       <div className='navigation'>
       <ul className="list_nav">
         <a className="liTwo" href="#home" onClick={hideNavigation}>
           <li>
             <FontAwesomeIcon icon={faHome} /> Home
           </li>
         </a>
         <hr/>
         <a className="liTwo" href="#history" onClick={hideNavigation}>
           <li>
             <FontAwesomeIcon icon={faHistory} /> {t("history")}
           </li>
         </a>
         <hr/>
         <a className="liTwo" href="#project" onClick={hideNavigation}>
           <li>
             <FontAwesomeIcon icon={faProjectDiagram} /> {t("projects")}
           </li>
         </a>
         <hr/>
         <a className="liTwo" href="#contact" onClick={hideNavigation}>
           <li>
             <FontAwesomeIcon icon={faEnvelope} /> {t("contact")}
           </li>
         </a>
       </ul>
     </div>
    
      )}
 
         </nav>

       
      
       
    
    )

}

export default Navbar