import './projects.css'
import data from './data'
import Card from '../../components/Card'
import Tabs from '../tabsList/TabsList'

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-in">
        <div className="container projects__container">
            <Tabs />
            {/* <h2>Projects</h2>
           <p>My current and recent projects.</p>
                    {
                        data.map(item => (
                            <Card key={item.id} className="projects__card">
                                <h5>{item.job} - {item.title}</h5>
                                {item.points.length > 0 && 
                                <ul>
                                {item.points.map((point, index)=><li key={index}>{point}</li>)}
                                </ul>}
                                <p className="projects__desc">{item.desc}</p>
                            </Card>
                        ))
                    } */}
               
        </div>
    </section>
  )
}

export default Projects