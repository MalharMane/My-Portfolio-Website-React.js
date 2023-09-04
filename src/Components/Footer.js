import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      
      <h4>Last Update &copy; 2023 </h4>
      <div className='footerLinks'>
        <a href="https://github.com/MalharMane" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/malhar-mane-a73236216" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:malharmanekk@gmail.com' target='_blank'><GrMail/></a>
        
      </div>
    </footer>
  )
}

export default Footer