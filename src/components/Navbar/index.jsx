import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {

    return(

        <nav className="navbar">
         <ul className="ul">
           <a className="li"  href="#home"><li >Home</li></a>
           <a className="li"  href="#historia"><li >História</li></a>
           <a  className="li" href="#contato"><li>Contato</li></a>
        </ul>
        </nav>
    )

}

export default Navbar