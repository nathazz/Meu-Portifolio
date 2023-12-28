import "./CardHome.css"

const CardHome = () =>{

     return(

     <div className="card_home">
        <div>

        <h1>Opa, seja bem vindo, me chamo Nathan</h1>
          <p>Atualmente estou focado em estudar <span className="r">React</span>, <span className="n">Node.js</span> e
             <span className="j">JavaScript</span>, mas estou sempre aberto a novos desafios!
          </p>
        </div>
        
          <img className="imagem-no-fim" src="https://github.com/nathazz.png" width={230}/>
     </div>
    
     )

}

export default CardHome