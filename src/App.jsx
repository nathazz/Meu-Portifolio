import Footer from "./components/Footer"
import History from "./components/sections/History"
import Home from "./components/sections/Home"
import Info from "./components/sections/Info"
import Navbar from "./components/Navbar"
import Project from "./components/sections/Project"
import Service from "./components/sections/Service"




const App = () => {
  
  
  return (
    <div>
     <Navbar/>
     <Home/>
    <History/>
     <Service/>
     <Project />
     <Info/>
     <Footer/>

     </div>
  )
}

export default App
