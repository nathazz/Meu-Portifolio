import CardCal from "../CardCaldeira"
import CardL from "../CardLinguagens"
import CardQi from "../CardQI"
import "./History.css"

const History = () => {


  return(
    <section className="section-history">
        <CardQi/>
        <CardL/>
        <CardCal/>

    </section>

  )

}

export default History