import { useTranslation } from "react-i18next";
import "./Design.css";

const CardDesign = () => {

  
  const [ t ] = useTranslation()

  return (
            <div className="card_design">
            <div className="div-image">
                <img
                className="img-design"
                src="/svg/iconsService/puzzle2.svg"
                alt="icon ux/ui"
                loading="lazy"
                />
            </div>

            <div className="content">
                <div>
                <h1 className="h_design">{t('title_api')}</h1>
                </div>

                <p className="p_d">{t('text_api')}</p>
            </div>
            </div>
  );
};

export default CardDesign;
