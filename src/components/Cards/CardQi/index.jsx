import { useTranslation } from "react-i18next"
import "./CardQi.css"

const CardQi = () =>{

  const [ t ] = useTranslation()

   return(

    <div  className="div_qi">
        <p className="p">
       &lt;<span className="span_p">p</span>&gt; <br/>
       {t("text")} <span className="span_qi">QI Faculdade & Escola Técnica</span>, {t("Ptext")}<br/>
       &lt;/<span className="span_p">p</span>&gt;
        </p>
    </div>
   )

}

export default CardQi