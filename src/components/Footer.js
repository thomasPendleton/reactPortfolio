import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className='socialMedia'>
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <div>
        <p>&copy; 2022 thomasPendleton</p>
      </div>
    </div>
  )
}

export default Footer
