import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={NewsletterImage} projectName="Online_Resume_Builder" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Book_MY_Show_Backend_Clone" />
        <ProjectBox projectPhoto={TindogImage} projectName="Github_API_To_Card_Converter" />
      </div>

    </div>
  )
}

export default Projects