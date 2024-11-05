import React from 'react';
import cs from "./cs.module.css";
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';

const All = () => {
  return (
    <div className='w-full h-auto'>
           <About />
           <Skills />
           <Projects />
           <Contact />
    </div>
  )
}

export default All;