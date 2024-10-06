import '../home/home.css'
import AboutImage from "../../assets/about.jpg";
import data from './data'
import Summary from '../summary/Summary'


const Home = ()=>{
    return (
        <section id="home" data-aos="fade-in">
        <div className="container home__container">
            <div className="home__section">
                <h5 class="home__desc">{data}</h5>
            </div>
            <div className="home__section home__responsive">
                <p>{data}</p>
               
            </div>
            <div className="home__section">

                <img src={AboutImage} alt="About" />
                <p className="home__contact home__responsive">margaretphillips003@gmail.com</p>
                <p className="home__contact home__responsive">https://www.linkedin.com/in/margaretphillips/</p>
            </div>
        </div>
        <Summary />
      </section>
    )
}

export default Home