import Navbar from './sections/navbar/Navbar';
import Home from './sections/home/Home'
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Theme from './theme/Theme';

const App = () => {

  return (
    <main>
        <Navbar/>
        <Home />
        <Projects/>
        <Contact/>
        <Footer/>
        <Theme/>
    </main>
  )
}

export default App