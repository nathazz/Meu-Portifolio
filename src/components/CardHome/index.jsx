import "./CardHome.css"

const CardHome = () =>{

     return(

      <div className="card_home">
      <div className="card_content">
        <h1>Opa, seja bem vindo, me chamo <span className="r">Nathan</span></h1>
        <p>Atualmente estou focado em estudar <span className="r">React</span>, <span className="n">Node.js</span> e  
         <span className="j"> JavaScript</span>, mas estou sempre aberto a novos desafios!
        </p>
        <a href="https://react.dev"><img className="img-logo" src="/svg/react70.svg" alt="logo_react" /></a>
        <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"><img className="img-logo" src="/svg/node70.svg" alt="logo_node" /></a>     
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><img className="img-logo" src="/svg/js70.svg" alt="logo_js" /></a>   
      </div>
      <img className="img-home" src="https://github.com/nathazz.png" width={230} />
    </div>
    
     )

}

export default CardHome