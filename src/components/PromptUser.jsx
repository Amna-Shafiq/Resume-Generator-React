 import React from 'react'
 import {useNavigate,Link} from 'react-router-dom'
 import {HiArrowRight} from 'react-icons/hi'
 import {AiOutlineMail} from 'react-icons/ai'
 import {BsTelephone} from 'react-icons/bs'
//  import {GiAges} from 'react-icons-gi'
 import {FaBirthdayCake} from 'react-icons/fa'
 import {CgWebsite} from 'react-icons/cg'
 import 'animate.css'
import Resume from './Resume'
import InputItem from './InputItem'

import { MdSchool } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';



 const PromptUser = ({handleChange,imageSource,userObject}) => {
  const navigate = useNavigate()
  const onButtonClick =()=>{
    alert(`WINDOWS DIMENSION : ${window.innerWidth},${window.innerHeight}`)
    navigate('/resume')

  }
   return (
     <>
     {onButtonClick ? <Resume userObject ={userObject} imageSource={imageSource}/>:<div className='prompt-container'></div>}
     <div className='inputs'>
      <InputItem className = 'first-name' onChange = {handleChange} label ='First Name' placeholder = 'Enter your first name' name='firstName'/>
      <InputItem className= 'last-name' onChange = {handleChange} label='Last Name' placeholder='Enter your Last Name' name='lastName'/>
      <InputItem className = 'email' onChange = {handleChange} label = {<AiOutlineMail/>} placeholder ='Enter your Email Address' name='email'/>
      <InputItem className = 'phoneNumber' onChange = {handleChange} label = {<BsTelephone/>} placeholder ='Enter your Phone Number' name='phoneNumber'/>
      <InputItem className = 'website' onChange = {handleChange} label = {<CgWebsite/>} placeholder ='Enter your Website' name='website'/>
      <InputItem className= 'date-of-birth' onChange={handleChange} label={<FaBirthdayCake/>} placeholder='Enter your date of birthday' name='dob' type='date'/>
      
      <InputItem className='skills' onChange = {handleChange} label= 'Skill' name='skills' placeholder='List one or more skills that you have' />
      <InputItem className='experience' onChange = {handleChange} label= {<BsPersonWorkspace/>} name='experience' placeholder='List work experienceyou have' />
      <InputItem className='graduationYear' onChange = {handleChange} label= {<MdSchool/>} name='graduationYear' placeholder='List your graduation Year' />
      <InputItem className='accomplishments' onChange = {handleChange} label= 'Accomplishment' name='accomplishments' placeholder='List one or more accomplishments that you have' />
      <InputItem className='university' onChange = {handleChange} label= 'University' name='university' placeholder='Enter university name' />
      <InputItem className='profile' onChange = {handleChange} label= 'profile' name='profile' placeholder='Write about yourself' />
      {
        <button className='generate-button' onClick={()=>{
          onButtonClick()

        }}>Generate resume <HiArrowRight/></button>
      }

     </div>
    
     </>
   )
 }
 
 export default PromptUser