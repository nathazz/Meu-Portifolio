


import "./History.css"
import { useTranslation } from "react-i18next"


const History = () => {

  const [t] = useTranslation()

  return(
    <section id="historia" className="section-history">
   
      <div  className="div_h">
        <div>
          <h1  className="h_h">{t("titleTwo")}</h1>
        <p className="p_h">{t("text")}</p>
        </div>
    
      <img className="img-h" src="https://github.com/nathazz.png" width={310} />  
      </div>
    
       

    </section>

  )

}

export default History