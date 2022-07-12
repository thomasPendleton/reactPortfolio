import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Thomas</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
                <h2>Front-End</h2>
                <span>ReactJS, Redux, HTML, CSS, NPM, MaterialUI, Yarn, StyledComponents</span>
            </li>
            <li className='item'>
                <h2>Back-End</h2>
                <span>NodeJS, ExpressJS, GraphQL, MySQL</span>
            </li>
            <li className='item'>
                <h2>Languages</h2>
                <span>Javascript, Typescript, Go, Python</span>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Home