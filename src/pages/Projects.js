import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css'
import { ProjectList } from '../helpers/projectList.js'

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return <ProjectItem key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
