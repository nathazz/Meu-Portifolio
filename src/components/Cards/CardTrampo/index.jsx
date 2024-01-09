import "./CardT.css"
import { FaGithub } from "react-icons/fa";


const CardTrampo = () => {

    return(
              
        <div className="card_med">

        <div className="div-imagem">
           <img className="img-med" src="/svg/iconsCard/meu_trampo.svg" alt="icon_med" />
         </div>
       
            <div>
                  <h1 className="h_med h_t">Cadê meu trampo</h1>
           </div>
          
        <div className="d_p">
               <p className="p_med">
               é um aplicativo que foi desenvolvido para a disciplina de Desenvolvimento de Aplicativos II, utilizando a linguagem Dart e o framework Flutter. O objetivo deste projeto é ajudar os usuários a encontrar oportunidades de trabalho em sua região.
               </p>
        </div>
        
         <div className="div_btn">
         <a  href="https://github.com/nathazz/Projeto-Cade-Meu-Trampo" target="_blank"><button type="submit" className="btn_med btn_t"><FaGithub size={20} style={{marginRight:"1em"}} />Repositório</button></a>
         </div>
        

        </div>

    )

}

export default CardTrampo