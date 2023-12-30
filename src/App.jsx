import Footer from "./components/Footer"
import History from "./components/History"
import Home from "./components/Home"
import Info from "./components/Info"
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
