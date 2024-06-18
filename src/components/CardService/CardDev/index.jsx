import { useTranslation } from "react-i18next";
import "./Dev.css";

const CardDev = () => {
  const { t } = useTranslation();

  return (
    <div className="card_design dev">
        <div className="div-image">
            <img
            className="img-design"
            src="/svg/iconsService/code.svg"
            alt="icon code"
            loading="lazy"
            />
        </div>

        <div className="content">
            <div>
            <h1 className="h_design h-dev">{t("service")}</h1>
            </div>

            <p className="p_d p-dev">Landing pages, API,<br></br> Front-end, Back-end.</p>
        </div>
    </div>
  );
};

export default CardDev;
