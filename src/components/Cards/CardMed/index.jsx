import "./Cards.css"
import { FaGithub } from "react-icons/fa";

const CardMed = () => {
    return (


            
         <div className="card_med">

         <div className="div-imagem">
            <img className="img-med" src="/svg/iconsCard/medtime.svg" alt="icon_med" />
          </div>
        
             <div>
                   <h1 className="h_med">MedTime</h1>
            </div>
           
         <div className="d_p">
                <p className="p_med">
                        É um app Android desenvolvido no Android Studio com Kotlin, focado em auxiliar usuários a lembrarem-se de tomar medicamentos corretamente. 
                        Possui funcionalidades CRUD em um banco de dados local para gerenciamento eficiente das informações sobre medicamentos
                </p>
         </div>
          <div className="div_btn">
          <a  href="https://github.com/nathazz/MedTime" target="_blank"><button type="submit" className="btn_med"><FaGithub size={20} style={{marginRight:"1em"}} />Repositório</button></a>
          </div>
         

         </div>
           
          
   
       
    )
}

export default CardMed