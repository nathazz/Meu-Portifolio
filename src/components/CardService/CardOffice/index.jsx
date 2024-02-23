import { useTranslation } from 'react-i18next'
import './Office.css'

const CardOffice= () =>{

    const { t } = useTranslation()

    return (

        <div className="card_design">

        <div className="div-image">
           <img className="img-office" src="/svg/iconsService/office2.svg" alt="icon ux/ui" />
         </div>
       
            <div>
                  <h1 className="h_design">Microsoft Office</h1>
           </div>
          
       
               <p className="p_d">{t('office')}</p>
        
        </div>
          
    )
}

export default CardOffice