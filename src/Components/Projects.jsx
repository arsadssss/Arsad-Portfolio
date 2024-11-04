import React, { useState } from 'react';
import cs from "./cs.module.css"
import ProjectsData from "./Projects/ProjectsData";
import ReactProjects from './Projects/ReactProjects';
import Landing from './Projects/Landing';
import EmailTemplate from './Projects/EmailTemplate';
import Wordpress from './Projects/Wordpress';

const Projects = () => {
    const [project, setProject] = useState(false);
    const [proVal, setProval] = useState('');
    const getLandingPro = (val) =>{
        setProject(true);
        let newVal = val;
        setProval(newVal);
        console.log(proVal)
    }

    const NavItems = ProjectsData.map((v,i)=>{
        return(
            <li key={v.id} className={`border-b-2 text-sm cursor-pointer text-black font-semibold hover:border-[#ff7322] ${ proVal === v.val ? 'border-[#ff7322]' : 'border-b-gray-200'}`} onClick={()=>getLandingPro(v.val)}>{v.name}</li>
        );
    });

    let renderPro;

    if(proVal === "EmailTemplate"){
        renderPro = <EmailTemplate />
    }else if(proVal === "Landing"){
        renderPro = <Landing />
    }
    else if(proVal === "ReactProjects"){
        renderPro = <ReactProjects />
    }
    else if(proVal === "Wordpress"){
        renderPro = <Wordpress />
    }else{
        renderPro = <EmailTemplate />
    }
  return (
    <div className={`w-full h-auto  px-8 py-6 bg-white mb-8 rounded-xl ${cs.crdShadow}`}>
        <div className='w-full h-auto flex justify-between items-center flex-wrap'>
            <div className='basis-[30%]'>
               <h2 className="text-black md:text-2xl text-lg font-bold">Projectsss</h2>
               <div className="h-1 w-full bg-gray-300 flex justify-start rounded-md mb-5">
                   <div className={`h-[3px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`} ></div>                       
               </div>
            </div>
             <ul className='basis[70%] h-auto flex justify-center flex-wrap gap-4 list-none'>
                {NavItems}
             </ul>
        </div>
        <hr className='w-full mb-5 text-black' />
        {renderPro}
    </div>
  )
}

export default Projects;
