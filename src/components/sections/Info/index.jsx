import "./Info.css"


const Info = () => {

     return(
        <section className="info">
            <h1>Contato:</h1>
            <div className="div_info">
            <div>
             <a href="https://github.com/nathazz"><img src="/svg/git.svg" alt="icon github" /></a>
             <a href="https://www.linkedin.com/in/nathansg/"><img src="/svg/linkedin.svg" alt="icon linkedin" /></a>
            </div>
            <div>
            <a aria-label="Olá, tudo bem? espero que sim!" href="https://wa.me/51993919197"><img src="/svg/zap.svg" alt="icon whatsapp" /></a>
             <img src="/svg/envelope.svg" alt="icon email/envelope" />
             
            </div>
   
            </div>
        </section>
     )
}

export default Info