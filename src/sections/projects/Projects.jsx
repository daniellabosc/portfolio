import './projects.css'
import Tabs from '../tabsList/TabsList'

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-in" style={{backgroundColor: "#eee", padding: "6rem"}}>
        <div className="container projects__container">
            <Tabs />
        </div>
    </section>
  )
}

export default Projects