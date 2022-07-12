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
      <GitHub />
    </div>
  )
}

export default ProjectDisplay
