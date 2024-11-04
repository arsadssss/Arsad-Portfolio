import React from 'react';
import ReactProjects from './ReactProjects';
import Landing from './Landing';
import EmailTemplate from './EmailTemplate';
import Wordpress from './Wordpress';

export default function AllProjects() {
  return (
    <div className='w-full h-auto'>
         <EmailTemplate />
         <Landing />
         <ReactProjects />
         <Wordpress />
    </div>
  )
}
