
import { useState } from "react"

import "./Home.css"
import { useEffect } from "react"
import Loader from "../../Loaders/Loader"
import CardHome from "../../Cards/CardHome"

const Home = () => {

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => setLoading(false), 500)
    }, [])

    return(
        <section className="section_home">
        <div className={`container ${loading ? 'loading' : ''}`}>
              {loading ? <Loader /> : <CardHome/>}
        </div>
            </section>
    )
}

export default Home