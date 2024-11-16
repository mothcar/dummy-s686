import React from 'react'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  console.log("Get data from Link : ", location.state)
  return (
    <>
      <div>About</div>
    </>
  )
}

export default About