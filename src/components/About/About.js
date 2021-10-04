import React from 'react';
import './About.css'
import img from '../../images/aboutus.jpg'

const About = () => {
  return (
    <div className="card mb-3 border-0 about-section">
  <div className="row g-0">
    <div className="col-md-6">
      <img className="about-logo" src={img} alt="" />
    </div>
    <div className="col-md-6 col-sm-12">
    <div className="card-body">
        <h1 className="card-title text-center">About US</h1>
        <p className="card-text text-start">The strategic importance and project budget for your web efforts will largely determine the size and skill depth of your web site development team. Even for a smaller project, however, you’ll need to cover the core team disciplines. In most small to medium projects one person may handle multiple tasks or someone with specialized expertise (graphic design, for instance) is hired for specific assignments. Many managers who are assigned the responsibility of creating a web site don’t have the luxury of picking specialist team members. Inventory the skills and aptitudes in the team you assemble, and consider careful outsourcing to supply any expertise your team lacks.The core skill sets needed in a web site development team are: <br />
        1.Strategy and planning <br />
        2.Project management <br />
        3.Information architecture and user interface design <br />
        4.Graphic design for the web <br />
        5.Web technology <br />
        6.Site production</p>
        <button className='footer-btn'>Join With Us</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default About;