import "./CardP.css"
import { FaGithub } from "react-icons/fa";


const CardP = () => {

    return(
              
        <div className="card_med">

        <div className="div-imagem">
           <img className="img-med" src="/svg/iconsCard/react_card.svg" alt="icon_med" />
         </div>
       
            <div>
                  <h1 className="h_med h_t">Meu portifólio</h1>
           </div>
          
        <div className="d_p">
               <p className="p_med">
               Desenvolvi um projeto simples utilizando o framework React, integrado com a biblioteca I18n para a troca dinâmica de idiomas. O projeto suporta os idiomas inglês, francês, português (BR) e espanhol
               </p>
        </div>
        
         <div className="div_btn">
         <a  href="https://github.com/nathazz/p" target="_blank"><button type="submit" className="btn_med btn_t btn_p"><FaGithub size={20} style={{marginRight:"1em"}} />Repositório</button></a>
         </div>
        

        </div>

    )

}

export default CardP