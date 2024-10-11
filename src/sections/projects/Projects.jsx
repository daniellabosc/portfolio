import './projects.css'
import data from '../projects/data'
//import Tabs from '../tabsList/TabsList'

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-in">
        {/* <div className="projects__container">
            <Tabs />
        </div> */}
        <div className="fluid-container projects__responsive">
            {data.map((item)=>{
                return (
                    <div className="container projects__card">
                   <h5>{item.job} - {item.title}</h5>
                   <ul>
                   {item.points.map((i)=><li key={i}>{i}</li>)}
                   </ul>
                   <div  className="projects__cloud">
                    {item.tech.map((i)=>{
                        return (
                            <span><strong>{i}</strong></span>
                        )
                    })}
                   </div>
                   </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects