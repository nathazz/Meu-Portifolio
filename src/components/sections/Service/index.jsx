import { useTranslation } from 'react-i18next'
import CardDesign from '../../CardService/CardDesign'
import CardDev from '../../CardService/CardDev'
import CardOffice from '../../CardService/CardOffice'
import './Service.css'



const Service = () => {

        const { t } = useTranslation()

        return(

                <section className='section-service'>
              
                <h2 className="h_service">{t('myS')}</h2>
                <div className="cards_cntD">
                     <CardDesign/>
                    <CardDev/>
                   <CardOffice/>
                </div>
        
            
                </section>
        )

       
}

export default Service