import { useTranslation } from "react-i18next"
import "./CardL.css"

const CardL = () => {

  const [ t ] = useTranslation()

  return (

    
    <div className="card-l">
      <h1 className="h_l">&lt;<span className="span_h">h1</span>&gt;
     {t("titleTrhee")}:&lt;/<span className="span_h">h1</span>&gt;</h1>


    <div className="div_img">
      <div>
      <img src="/svg/php.svg" className="img_l" alt="icon_php"/>
        <img src="/svg/html.svg" className="img_l" alt="icon_html"/>
        <img src="/svg/css.svg" className="img_l" alt="icon_css"/>
      </div>
      <div>
      <img src="/svg/flutter.svg" className="img_l" alt="icon_flutter"/>
        <img src="/svg/java.svg" className="img_l" alt="icon_java"/>
        <img src="/svg/kotlin.svg" className="img_l" alt="icon_kotlin"/>
      </div>
     
    </div>
  
  
    </div>
  )

}


export default CardL