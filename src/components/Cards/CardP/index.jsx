import { useTranslation } from "react-i18next";
import "./CardP.css"
import { FaGithub } from "react-icons/fa";


const CardP = () => {

    const [ t ] = useTranslation()

    return(
              
        <div className="card_med">

        <div className="div-imagem">
           <img className="img-proj" src="/svg/iconsCard/react_card.svg" alt="icon_react" />
         </div>
       
            <div>
                  <h1 className="h_med h_t">Meu portifólio</h1>
           </div>
          
        <div className="d_p">
               <p className="p_med">{t("textCard_trhee")}</p>
        </div>
        
         <div className="div_btn">
         <a  href="https://github.com/nathazz/p" target="_blank"><button type="submit" className="btn_med btn_p"><FaGithub size={20} style={{marginRight:"1em"}} />{t("rep")}</button></a>
         </div>
        

        </div>

    )

}

export default CardP