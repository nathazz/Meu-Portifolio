import { useTranslation } from "react-i18next";
import "./CardT.css"
import { FaGithub } from "react-icons/fa";


const CardTrampo = () => {

    const [ t ] = useTranslation()

    return(
              
        <div className="card_med">

        <div className="div-imagem">
           <img className="img-proj" src="/svg/iconsCard/meu_trampo.svg" alt="icon_cade_meu_trampo" />
         </div>
       
            <div>
                  <h1 className="h_med h_t">Cadê meu trampo</h1>
           </div>
          
        <div className="d_p">
               <p className="p_med">{t("textCard_two")}</p>
        </div>
        
         <div className="div_btn">
         <a  href="https://github.com/nathazz/Projeto-Cade-Meu-Trampo" target="_blank"><button type="submit" className="btn_med btn_t"><FaGithub size={20} style={{marginRight:"1em"}} />{t("rep")}</button></a>
         </div>
        

        </div>

    )

}

export default CardTrampo