import Footer from "./components/Footer"
import History from "./components/sections/History"
import Home from "./components/sections/Home"
import Info from "./components/sections/Info"
import Navbar from "./components/Navbar"
import { useTranslation } from "react-i18next"



const App = () => {
  const [t] = useTranslation()
  
  return (
    <div>
     <Navbar/>
     <Home/>
    
     <History/>
   
     <Info/>
     <Footer/>

     </div>
  
    
  
  )
}

export default App
