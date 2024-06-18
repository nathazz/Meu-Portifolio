import { useTranslation } from "react-i18next";
import "./Office.css";

const CardOffice = () => {
  const { t } = useTranslation();

  return (
            <div className="card_design">
            <div className="div-image">
                <img
                className="img-office"
                src="/svg/iconsService/cell.svg"
                alt="icon office"
                loading="lazy"
                />
            </div>

            <div className="content">
                <div>
                <h1 className="h_design">{t('office')}</h1>
                </div>

                <p className="p_d">Android e IOS</p>
            </div>
            </div>
  );
};

export default CardOffice;
