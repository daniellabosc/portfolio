import Navbar from './sections/navbar/Navbar';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import { useRef } from 'react'

const App = () => {
  const {themeState} = useThemeContext();

  const mainRef = useRef();

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
        <Navbar/>
        <About/>
        {/* <Services/> */}
        <Projects/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <Theme/>
    </main>
  )
}

export default App