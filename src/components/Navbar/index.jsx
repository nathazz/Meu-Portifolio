import "./Navbar.css"
import LanguageBtn from "../LanguageBtn"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
      

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
            <a  className="li"  href="#historia"><li >{t("history")}</li></a>
             <a className="li"href="#project">{t("projects")}</a>
            <a  className="li" href="#contato"><li>{t("contact")}</li></a>
            <GiHamburgerMenu className="menu" onClick={toggleNavigation}  style={{color: "white", backgroundColor:"transparent"}} />
         </ul>

         {navigationVisible && (
        <div className='navigation'>
          <ul className="list_nav">
            <a  className="liTwo"  href="#home"  onClick={hideNavigation}><li>Home</li></a>
            <a  className="liTwo"  href="#historia"  onClick={hideNavigation}><li >{t("history")}</li></a>
            <a className="liTwo"href="#project"  onClick={hideNavigation}>{t("projects")}</a>
            <a  className="liTwo" href="#contato"  onClick={hideNavigation}><li>{t("contact")}</li></a>
          </ul>
        </div>
      )}
 
         </nav>

       
      
       
    
    )

}

export default Navbar