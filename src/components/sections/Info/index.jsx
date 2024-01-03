import { useState } from "react"
import "./Info.css"


const Info = () => {

    // const [email, setEmail] = useState("")

    // const mudarE = () =>{
    //     setEmail("nathansg907@gmail.com")
    // }

    // const deletarE = () =>{
    //     setEmail('')
    // }

    // const alternarE = () => {
    //     if (email === "") {
    //       mudarE();
    //     } else {
    //       deletarE();
    //     }
    //   };

    const [openModal, setModal] = useState (false)
      
     return(
        <section className="info" id="contato">
            <div className="d_h1">
            <h1>Contato:</h1>
            </div>
         <div className="div_info">
            
            <div>
                 <h2 className="git">GitHub</h2>
                 <a href="https://github.com/nathazz" target="_blank"><img className="img_contato" src="/svg/contato/git.svg" alt="icon github"/></a>
            </div>

            <div>
                <h3 className="linkedin">Linkedin</h3>
                <a href="https://www.linkedin.com/in/nathansg/" target="_blank"><img className="img_contato"  src="/svg/contato/linkedin.svg" alt="icon linkedin" /></a>
            </div>

            <div>
                <h3 className="zap">WhatsApp</h3>
                <a aria-label="Olá, tudo bem? espero que sim!" target="_blank" href="https://wa.me/51993919197"><img className="img_contato"  src="/svg/contato/zap.svg" alt="icon whatsapp" /></a>
            </div>
            <div>
           
            <div>
                     <h4 className="email">Email</h4>
                    <img onClick={() => setModal(true)} src="/svg/contato/email.svg" className="img_contato" alt="icon email/envelope" />
                    
            </div>
             
            </div>
   
        </div>
        </section>
     )
}

export default Info