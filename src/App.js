import './App.css';
import React, { useState, useEffect } from 'react';
import Resume from './components/Resume';
import NonExistentPage from './components/NonExistentPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PromptUser from './components/PromptUser';
import CustomResume from './components/CustomResume';

const converter = require('number-to-words');
const defaultData = [
  {title: 'group 1', items: ['Amna', 'Shafiq', 'amna.shafiq.r@gmail.com']},
  {title: 'group 2', items: ['NUST', '2022','+92300078601']}
]
function App() {
  const [data, setData] = useState([]);  
  // Initialize state variables
  const [userInfo, setUserInfo] = useState([]);
  const [source, setSource] = useState('');
  useEffect(() => {
      setData(defaultData)
    })
  // Generate a random number and convert it to words
  const random_number = Math.floor(Math.random() * 10e4);
  const random_alpha_num = converter.toWords(random_number);

  // Function to convert a random number to words
  const getRandomNumber = (randNum) => {
    return converter.toWords(randNum);
  }

  // Function to generate a random image source
  const generateImage = () => {
    setSource(`https://robohash.org/stefan-${random_alpha_num}`);
    console.log(source); // Log the image source
  }

  // Run the image generation when the component mounts
  useEffect(() => {
    generateImage();
  }, []);

  // Function to handle changes in user information
  function handleChange(e) {
    setUserInfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value
      };
    });
  }

  return (
    <Router>
      <Routes>
        {/* Define routes for the application */}
        <Route exact path="/" element={<PromptUser userObject={userInfo} imageSource={source} handleChange={handleChange} />} />
        <Route path="/resume" element={<Resume userObject={userInfo} imageSource={source} />} />
        <Route path="*" element={<NonExistentPage />} /> {/* Page not found route */}
        <Route path="/customize-resume" element={<CustomResume data={data} />} /> 
      </Routes>
    </Router>
  );
}
export default App;
