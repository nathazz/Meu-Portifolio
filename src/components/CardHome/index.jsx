
import { useTranslation } from "react-i18next"
import "./CardHome.css"

const CardHome = () =>{

    const { t } = useTranslation()

     return(

      <div className="card_home">
      <div className="card_content">
        <h1>{t('title')} </h1>
        <h2 className="h_stack"><span className="na">{t('subTitle')}</span></h2>
        <p className="p_home">{t("sub")} <span className="r">React.js</span><span className="aux">, {t("aux")}</span> {t("tech")}
         <span className="n"> Node.js</span>,
        <strong className="b"> {t('database')}<span className="data">(MySQL/MongoDB)</span></strong>. {t("subTwo")}
        </p>
        <div className="icon_l">
        <a target="_blank" className="a-img" href="https://react.dev"><img className="img-logo" src="/svg/react70.svg" alt="logo_react" /></a>
        <a target="_blank" className="a-img" href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"> <img className="img-logo" src="/svg/node70.svg" alt="logo_node" /></a>     
        <img className="img-logo" src="/svg/mysql.svg" alt="icon mysql" />
        <img className="img-logo" src="/svg/mongodb-icon.svg" alt="icon mongodb" />
        </div>
      </div>
    </div>
    
     )

}

export default CardHome