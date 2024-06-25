import React , {useState} from 'react'
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer.jsx"

function App() {
    const [darkMode , setDarkMode] = useState(false)

    function toggle(){
      setDarkMode(prevDarkMode =>  !prevDarkMode) 
    }

    return(
      <section className="site-container">
        <Header darkMode={darkMode} toggleDarkMode={toggle}/>
        <MainContent darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
      </section>
    )
}

export default App
