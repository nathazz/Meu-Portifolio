
import "./Navbar.css"
import LanguageBtn from "../LanguageBtn"
import { useTranslation } from "react-i18next"

const Navbar = () => {

    const [ t ] = useTranslation()

    return(

        <nav className="navbar">
          
         <ul className="ul">
         <LanguageBtn/>
           <a  className="li"  href="#home"><li>Home</li></a>
           <a  className="li"  href="#historia"><li >{t("history")}</li></a>
            <a className="li"href="#project">Projetos</a>
           <a  className="li" href="#contato"><li>{t("contact")}</li></a>
          
        </ul>
        </nav>
    )

}

export default Navbar