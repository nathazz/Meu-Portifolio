import { useTranslation } from "react-i18next";
import "./Skills.css"


const CardSkills = () =>{

    const { t } = useTranslation();

 return(

    <div className='skills'>
        <h1 className="h_skills">{t("title_skills")}</h1>
        <ul>
            <li>
                <div className="div_t">
                <h3 className="h3">React.js</h3>
            <p>{t("year_one")}</p>
                </div>
                <span className="b"><span className="react"></span></span>
    
            </li>
            <li>
            <div className="div_t">
            <h3 className="h3">JavaScript</h3>
            <p>{t("year_two")}</p>
            </div>
                <span className="b"><span className="js"></span></span>
            </li>
            <li>
            <div className="div_t">
            <h3 className="h3">Node.js(express)</h3>
            <p>{t("year_trhee")}</p>
            </div>
                <span className="b"><span className="node"></span></span>
            </li>
            <li>
            <div className="div_t">
            <h3 className="h3">MySQL/MongoDB</h3>
            <p>{t("year_four")}</p>
            </div>
                <span className="b"><span className="db"></span></span>
            </li>
        </ul>
    </div>
 )

}

export default CardSkills