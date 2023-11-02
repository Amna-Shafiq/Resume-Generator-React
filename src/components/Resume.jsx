import React , {useEffect,useState}from 'react'
import {useNavigate,Link} from 'react-router-dom'

import {AiOutlineMail} from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { BsTelephone } from 'react-icons/bs'
const Resume = ({ imageSource, userObject,data }) => {

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  const [skills, setSkills] = useState([]);
  data = [
    {title: 'group 1', items: [userObject.firstName, userObject.lastName, userObject.university]},
    {title: 'group 2', items: [userObject.phoneNumber, userObject.email]}
  ]

  const handleCustomizeClick = () => {
    // Add code here to send data to CustomResume.jsx
    setIsButtonClicked(true);
    
    navigate('/customize-resume',{data});
    
    console.log('Sending data to CustomResume:', data);
  };
  
  return (
    <div className='resume-card'>
      <div className='resume-card-inner'>
        <div className='section section-1'>
          <h3 className='full-name'>
            {userObject.firstName} {userObject.lastName} </h3>  
     
            <img className='pfp' src={imageSource} alt={`${userObject.firstName}'s profile`} />
        </div >

        <div className="section section-3">
        <h3>Summary</h3>
        <p className='profile-info'>{userObject.profile}</p>
        </div>

        <div className="section section-2">
          <ul>

            <li className='phoneNumber'><BsTelephone className='icons'/>{userObject.phoneNumber} </li>
            <li className='email'><AiOutlineMail className='icon'/>{userObject.email}</li>
            {userObject.website ? <li className='website'><CgWebsite className='icon'/>{userObject.website}</li>:''}
          </ul>
        </div>
        <div className='section section-4 column'>
          <h4 className='horizontal'>Skills</h4>
          <p className='skill-title info'>{userObject.skills}</p>
        </div>
        <div className='section section-5 column'>
        <h4 className='horizontal'>Experience</h4>
          <p className='skill-title info'>{userObject.experience}</p>

        </div>
        <div className='section section-6 column'>
        <h4 className='horizontal'>Education</h4>
          <p className='skill-title info'>{userObject.university}</p>
        </div>
        <div className='section section-7 column'>
        <h4 className='horizontal'>Accomplishments</h4>
          <p className='skill-title info'>{userObject.accomplishments}</p>
        </div>
        <div className='section section-8 '>
          
        <h2 className='grad-year'>CLASS OF {userObject.graduationYear}</h2>
        </div>
      </div>
      <button onClick={handleCustomizeClick}>Customize Resume</button>
      </div>
      
  )
}

export default Resume