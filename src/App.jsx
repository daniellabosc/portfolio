import Navbar from './sections/navbar/Navbar';
import Home from './sections/home/Home'
//import About from './sections/about/About';
//import Portfolio from './sections/portfolio/Portfolio';
//import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Theme from './theme/Theme';
//import { useThemeContext } from './context/theme-context';
//import { useRef } from 'react'

const App = () => {

  return (
    <main>
        <Navbar/>
        <Home />
        {/* <Projects/> */}
        {/* <Portfolio/> */}
        <Contact/>
        <Footer/>
        <Theme/>
    </main>
  )
}

export default App