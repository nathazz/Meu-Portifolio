import "./History.css"
import { useTranslation } from "react-i18next"

const History = () => {

  const [t] = useTranslation()

  return(
    <section id="historia" className="section-history">
   
      <div  className="div_h">

        <div className="div_textos">
          <h1  className="h_h">{t("titleTwo")}</h1>
        <p className="p_h">{t("text")}</p>
        </div>

      <div className="div_perfil">
      <img className="img-h" src="https://github.com/nathazz.png" width={310} />  
      </div>
    
      </div>
    
       

    </section>

  )

}

export default History