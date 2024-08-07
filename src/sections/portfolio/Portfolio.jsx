import './portfolio.css'
import Projects from './Projects'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects] = useState(data);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <p>
      Some examples of my work.
      </p>
      <div className="container portfolio__container">
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio