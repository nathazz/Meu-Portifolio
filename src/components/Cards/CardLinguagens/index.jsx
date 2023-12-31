import "./CardL.css"

const CardL = () => {

  return (

    <div className="card-l">
      <h1 className="h_l">&lt;<span className="span_h">h1</span>&gt;
      Ferramentas que aprendi com o ensino:&lt;/<span className="span_h">h1</span>&gt;</h1>


    <div className="div_img">
      <div>
      <img src="/svg/php.svg" className="img_l" alt="icon_php"/>
        <img src="/svg/html.svg" className="img_l" alt="icon_html"/>
        <img src="/svg/css.svg" className="img_l" alt="icon_css"/>
      </div>
      <div>
      <img src="/svg/flutter.svg" className="img_l" alt="icon_flutter"/>
        <img src="/svg/java.svg" className="img_l" alt="icon_java"/>
        <img src="/svg/kotlin.svg" className="img_l" alt="icon_kotlin"/>
      </div>
     
    </div>
  
  
    </div>
  )

}


export default CardL