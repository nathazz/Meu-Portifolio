import { useTranslation } from "react-i18next";
import "./Dev.css";

const CardDev = () => {
  const { t } = useTranslation();

  return (
    <div className="card_design">
        <div className="div-image">
            <img
            className="img-design"
            src="/svg/iconsService/code.svg"
            alt="icon code"
            />
        </div>

        <div className="content">
            <div>
            <h1 className="h_design">{t("service")}</h1>
            </div>

            <p className="p_d">Landing pages, API, Front-end, Back-end.</p>
        </div>
    </div>
  );
};

export default CardDev;
