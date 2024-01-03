
import { useTranslation } from "react-i18next"
import "./CardHome.css"


const CardHome = () =>{

    const { t } = useTranslation()

     return(

      <div className="card_home">
      <div className="card_content">
        <h1>{t("title")} <span className="r">Nathan</span>💻</h1>
        <p>{t("sub")} <span className="r">React</span>, <span className="n">Node.js</span> {t("and")} 
         <span className="j"> JavaScript</span>, {t("subTwo")}
        </p>
        <a target="_blank" href="https://react.dev"><img className="img-logo" src="/svg/react70.svg" alt="logo_react" /></a>
        <a target="_blank" href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"><img className="img-logo" src="/svg/node70.svg" alt="logo_node" /></a>     
        <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><img className="img-logo" src="/svg/js70.svg" alt="logo_js" /></a>   
      </div>
      <img className="img-home" src="https://github.com/nathazz.png" width={230} />
    </div>
    
     )

}

export default CardHome