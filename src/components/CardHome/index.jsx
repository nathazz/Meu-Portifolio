
import { useTranslation } from "react-i18next"
import "./CardHome.css"

const CardHome = () =>{

    const { t } = useTranslation()

    return(

      <div className="div_init">
      <div className="text_container">
        <img src="/svg/image.svg" alt="minha_foto" className="perfil" loading="lazy" />
        <h1 className="h-home">{t('title')}</h1>
        <h2 className="h2-home">{t('subTitle')}</h2>
      </div>
      <div className="img_container">
        <a href="https://react.dev/" target="_blank"><img className="img-home"  src="/svg/react70.svg" alt="icon-react"  loading="lazy"/></a>
        <a href="https://nodejs.org/en" target="_blank" ><img className="img-home"  src="/svg/node70.svg"  alt="icon-node" loading="lazy" /></a>
        <a href="https://www.mongodb.com/" target="_blank" ><img className="img-home"  src="/svg/mongo.svg" alt="icon-mongo" loading="lazy" /></a>
        <a href="https://www.mysql.com/" target="_blank" ><img className="img-home"  src="/svg/mysql.svg"  alt="icon-mysql"  loading="lazy"/></a>
      </div>
    </div>
    

    )
}

export default CardHome