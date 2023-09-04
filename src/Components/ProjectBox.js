import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    Github_API_To_Card_ConverterDesc : "A project where user can Search specific GitHub user Name , Bio image / Avatar, number of repositories uploaded , no. of following, followers and name of all repository. By Leveraging the power of GitHub's API , Easy visualization of GitHub user profiles . ",
    ResumebuilderGithub : "https://github.com/MalharMane/githubapi.git",
    ResumebuilderWebsite : " https://search-github-users-api-to-card.netlify.app/",


    Book_MY_Show_Backend_CloneDesc : "The aim of these project is to show/Fetch details of last selected movies , Seats and Time slot From database. Developed on top of React library, Languages used HTML , CSS , Javascript . In Backend Mongo db for storing data . It is responsive and easy to use.",
    RogFreeGithub : "https://github.com/MalharMane/Almabetter-Backend-project-Book-my-show",
    RogFreeWebsite : "https://book-my-show-almabetter-backend-proj.netlify.app/",

    Online_Resume_BuilderDesc:"It is an Responsive Webapp that simplifies the task of creating a resume for individuals. Resume Builder offers free, HR-approved resume templates to help you create a professional resume in minutes. you can choose from some of the selected template. You can edit , delete and also download resume as PDF. ",
    NewsletterGithub:"https://github.com/MalharMane/Almabetter-Resume-Builder-Capstone-Project-frontend",
    NewsletterWebsite:"https://roaring-pithivier-dc2ac7.netlify.app/"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox