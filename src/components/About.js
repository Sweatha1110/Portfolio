import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>This is where you describe yourself.</p>
      <img src="path_to_your_image.jpg" alt="Your Name" />
      <p>
        Download my{' '}
        <Link to="/path/to/your/resume.pdf" target="_blank" download>
          resume
        </Link>
        .
      </p>
    </div>
  );
};

export default About;
