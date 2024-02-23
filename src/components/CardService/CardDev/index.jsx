import { useTranslation } from 'react-i18next'
import './Dev.css'

const CardDev = () =>{
    const { t } = useTranslation()

    return (

        <div className="card_design">

        <div className="div-image">
           <img className="img-design" src="/svg/iconsService/code.svg" alt="icon ux/ui" />
         </div>
       
            <div>
                  <h1 className="h_design">{t('service')}</h1>
           </div>
          
       
               <p className="p_d">Landing pages, API, Front-end, Back-end.</p>
        
        </div>
          
    )
}

export default CardDev