import React from 'react';
import cs from "./cs.module.css"
import project1 from "./images/Projects/Campaign.png";
import project2 from "./images/Projects/dashboard.png";
import project3 from "./images/Projects/arsadport.png";
import project4 from "./images/Projects/tonya.png";
import project5 from "./images/Projects/Michigan.png";
import project6 from "./images/Projects/excellence.png";
import project7 from "./images/Projects/blissDivorce.png";
import project8 from "./images/Projects/UPS.png";
import project9 from "./images/Projects/virtual.png";

const Projects = () => {
  return (
    <div className={`w-full h-auto  px-8 py-6 bg-white mb-8 rounded-xl ${cs.crdShadow}`}>
        <div className='w-full h-auto flex justify-between items-center flex-wrap'>
             <h2 className="text-black md:text-2xl text-lg font-bold">Projects</h2>
             <ul className='w-auto h-auto flex justify-center flex-wrap gap-4 list-none'>
                <li className='border-b-2 border-[#ff7322]'>Landing Pages</li>
                <li className='border-b-2 hover:border-[#ff7322]'>Email Templates</li>
                <li className='border-b-2 hover:border-[#ff7322]'>ReactJs Projects</li>
                <li className='border-b-2 hover:border-[#ff7322]'>Website</li>
             </ul>
        </div>
        <div className="h-1 bg-gray-300 flex justify-start md:w-[30%] w-full rounded-md mb-5">
            <div className={`h-[3px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`} ></div>                       
        </div>
        <div className='w-full h-auto flex justify-center items-center flex-wrap flex-col'>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8'>
                <a href="https://beta.campaigntemplate.com/" target='_blank'><img src={project1} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
                <a href="https://campurl.com/infor/public/index.html" target='_blank'><img src={project2} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
                <a href="https://pinkflamingo.techgadgetwire.com/" target='_blank'><img src={project3} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8 mt-8'>
                <a href="https://campurl.com/2024/Apr/Non-pareil/tonya.html" target='_blank'><img src={project4} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
                <a href="https://campurl.com/2024/Mar/Michigan/index1.html" target='_blank'><img src={project5} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
                <a href="https://campurl.com/2024/Feb/excellence/index1.html" target='_blank'><img src={project6} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8 mt-8'>
                <a href="https://campurl.com/2024/Feb/BlissDivorse/Non-Family-Law.html" target='_blank'><img src={project7} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
                <a href="https://campurl.com/2024/Mar/UPS/EN.html" target='_blank'><img src={project8} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
                <a href="https://campurl.com/2024/Apr/virtualField/indexU1.html" target='_blank'><img src={project9} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
            </div>
        </div>
    </div>
  )
}

export default Projects;
