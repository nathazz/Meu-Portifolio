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
     <h1 className="h-history">Um pouco da minha Historia:</h1>
     <History/>
     <Info/>
     <Footer/>

     </div>
  
    
  
  )
}

export default App
