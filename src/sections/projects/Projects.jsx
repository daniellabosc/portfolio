import './projects.css'
import data from '../projects/data'
import Tabs from '../tabsList/TabsList'

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-in">
        <div className="projects__container">
            <Tabs />
        </div>
        <div className="container projects__responsive">
            {data.map((item)=>{
                return (
                    <div className="container projects__card">
                   <p>{item.job} - {item.title}</p>
                   <span  className="projects__cloud">
                    {item.tech.map((i)=>{
                        return (
                            <span>{i}</span>
                        )
                    })}
                   </span>
                   </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects