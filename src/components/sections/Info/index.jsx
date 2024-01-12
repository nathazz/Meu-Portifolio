import { useRef, useState } from "react"
import "./Info.css"
import { useTranslation } from "react-i18next"
import { Overlay} from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

import GitIcon from '/Meu-Portifolio/svg/contato/git.svg?url'
import LinkedinIcon from '/Meu-Portifolio/svg/contato/linkedin.svg?url'
import ZapIcon from '/Meu-Portifolio/svg/contato/zap.svg?url'
import EmailIcon from '/Meu-Portifolio/svg/contato/email.svg?url'



const Info = () => {

     const [ t ] = useTranslation()

     const [show, setShow] = useState(false);
     const target = useRef(null);
    

     return(
        <section className="info" id="contato">

            <div className="d_h1">
            <h1>{t("contact")}</h1>
            </div>
            
         <div className="div_info">
            
            <div>
                 <h2 className="git">GitHub</h2>
                 <a href="https://github.com/nathazz" target="_blank"><img className="img_contato" src={GitIcon} alt="icon github"/></a>
            </div>

            <div>
                <h3 className="linkedin">Linkedin</h3>
                <a href="https://www.linkedin.com/in/nathansg/" target="_blank"><img className="img_contato"  src={LinkedinIcon} alt="icon linkedin" /></a>
            </div>

            <div>
                <h3 className="zap">WhatsApp</h3>
                <a aria-label="Olá, tudo bem? espero que sim!" target="_blank" href="https://wa.me/5193919197?text=opa,%20tudo%20bem?"><img className="img_contato"  src={ZapIcon} alt="icon whatsapp" /></a>
            </div>
            <div>
           
            <div>
                     <h4 className="email">Email</h4>
                     <img ref={target} onClick={() => setShow(!show)} src={EmailIcon} className="img_contato" alt="icon email/envelope" />

                    <Overlay target={target.current} show={show} placement="bottom">
                        {(props) => (
                        <Tooltip  id="tooltip" {...props}>
                            nathansg907@gmail.com
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