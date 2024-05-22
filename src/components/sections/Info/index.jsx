import { useRef, useState } from "react"
import "./Info.css"
import { useTranslation } from "react-i18next"
import { Overlay} from "react-bootstrap";
import { Tooltip } from "react-bootstrap";



const Info = () => {

     const [ t ] = useTranslation()

     const [show, setShow] = useState(false);
     const target = useRef(null);
    
    

     return(
        <section className="info" id="contact">

            <div className="d_h1">
            <h1>{t("contact")}</h1>
            </div>
            
         <div className="div_info">
            
            <div>
                 <h2 className="git">GitHub</h2>
                 <a href="https://github.com/nathazz" target="_blank"><img className="img_contato" src="/svg/contato/git.svg" alt="icon github"/></a>
            </div>

            <div>
                <h2 className="linkedin">Linkedin</h2>
                <a href="https://www.linkedin.com/in/nathan-silva-888a172ba/" target="_blank"><img className="img_contato"  src="/svg/contato/linkedin.svg" alt="icon linkedin" /></a>
            </div>

            <div>
                <h2 className="zap">WhatsApp</h2>
                <a aria-label="Olá, tudo bem? espero que sim!" target="_blank" href="https://wa.me/5193919197?text=opa,%20tudo%20bem?"><img className="img_contato" src="/svg/contato/zap.svg" alt="icon whatsapp" /></a>
            </div>
            <div>
           
            <div>
                     <h4 className="email">Email</h4>
                     <img ref={target} onClick={() => setShow(!show)} src="/svg/contato/email.svg" className="img_contato" alt="icon email/envelope" />

                    <Overlay target={target.current} show={show} placement="bottom">
                        {(props) => (
                        <Tooltip  id="tooltip" {...props}>
                          <a className="a-info"  href="mailto:nathansg907@gmail.com">nathansg907@gmail.com</a> 
                   </Tooltip>
                        )}
                </Overlay>

            </div>
             
            </div>
   
        </div>
        </section>
     )
}

export default Info