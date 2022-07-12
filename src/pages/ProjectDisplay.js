import GitHub from '@mui/icons-material/GitHub'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/projectList'
import '../styles/projectDisplay.css'

const ProjectDisplay = () => {
  const { id } = useParams()
  const project = ProjectList[id]
 
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href="https://github.com/thomasPendleton/jamming">
        <GitHub />
      </a>
    </div>
  )
}

export default ProjectDisplay
