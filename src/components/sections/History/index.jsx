
import "./History.css"
import { useTranslation } from "react-i18next"

const a = {
  fontWeight: '700',
  color: 'black',
  textDecoration: 'none'
}

const span = {
  color:'#348A9E'
}



const History = () => {

  const [t] = useTranslation()

  return(
    <section id="history" className="section-history">
   
      <h1 className="h-history" >{t("title_about")} <span style={span}>{t("title_about_two")}</span></h1>
      <p className='p-history'>
   {t("about_one")} <a style={a} href="https://qi.edu.br/" target="_blank">{t("span_one")}</a>, {t("about_two")}
       <br /> <br /> {t("about_trhee")} <span style={a}>{t("span_two")}</span> {t("about_four")}
        </p>
   
    </section>

  )

}

export default History