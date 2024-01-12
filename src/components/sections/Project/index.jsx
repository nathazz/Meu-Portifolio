import { useTranslation } from "react-i18next"
import CardMed from "../../Cards/CardMed"
import CardP from "../../Cards/CardP"
import CardTrampo from "../../Cards/CardTrampo"
import "./Project.css"

const Project = () => {


    const [ t ] = useTranslation()

    return(

        <section  className="section_project">
        <h1 id="project" className="h_project">{t("project")}</h1>
        <div className="cards_container">
            <CardMed />
            <CardTrampo />
            <CardP />
        </div>
    </section>
    

    )

}


export default Project