// import React, { useState, useEffect } from 'react';
import Skills from './Skills';

const About = () => {

  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-text-secondary mb-4">
          As a current student and a aspiring researcher focused on machine learning applications in physics and systems, 
          I am deeply committed to using technology to solve complex problems. My academic and recreational projects 
          are where I try to apply my knowledge. I spend all of my time learning, researching, playing chess, and 
          exercising (mainly playing basketball and boxing).
        </p>
      </section>


      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>
    </div>
  );
};

export default About;