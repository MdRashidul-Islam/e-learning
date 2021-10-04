import React, { useEffect, useState } from 'react';
import "./Home.css"
import img from '../../images/banner.png'
import Course from './Course';
const Home = () => {
  const [courses, setCourses]=useState([])
  useEffect(()=>{
    fetch('./course.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
  return (
<div>
<div className="card mb-3 container  border-0">
  <div className="row g-0">
    <div className="col-md-6 main-heading">
    <h1>Become a <span>W</span>eb <span>D</span>eveloper</h1>

    <h5>Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the font-end by learning Html, CSS and Javascript.Then master the back-end and APIs to round out your full-stack skills.</h5>
    </div>

    <div className="col-md-6 banner-logo">
      <img src={img} alt="" />
    </div>
  </div>
</div>

<div className="course">
<h1 className="fs-1 text-center fw-bold mb-4">Our Services</h1>

<div className="container course-container">
  {
courses.map(course=><Course key={course.id} course={course}></Course>)
  }
</div>
</div>
</div>
  );
};

export default Home;