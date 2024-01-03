import Footer from "./components/Footer"
import History from "./components/sections/History"
import Home from "./components/sections/Home"
import Info from "./components/sections/Info"
import Navbar from "./components/Navbar"



const App = () => {
  
  return (
    <div>
     <Navbar/>
     <Home/>
     <div  className="div_h">
     <h1 id="historia" className="h-history">Um pouco da minha Historia:</h1>
     </div>
     
     <History/>
   
     <Info/>
     <Footer/>

     </div>
  
    
  
  )
}

export default App
