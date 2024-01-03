import { useTranslation } from "react-i18next"
import "./CardCal.css"

const CardCal = () => {

    const [ t ] = useTranslation()

    return(
        <div className="card_cal">
            <div className="card_content2">
            <p>{t("textTwo")}<span className="span_c">Instituto Caldeira </span> 
           {t("PtextTwo")}<span className="j">JS</span>/<span className="span_j">Java</span>.</p>
            </div>
            <img className="img-cal" src="/svg/caldeira.svg" alt="foto do instituo caldeira"></img>
        </div>
    )

}

export default CardCal