import React from 'react';
import cs from "../cs.module.css";
import project1 from "../images/Projects/dashboard.png";
import project2 from "../images/Projects/BoldData.png";
import project3 from "../images/Projects/BlissLanding.png";
import project4 from "../images/Projects/weblaunch.jpg";
import project5 from "../images/Projects/candy.png";
import project6 from "../images/Projects/travelAgency.jpg";

export default function Landing() {
  return (
    <div className='w-full h-auto flex justify-center items-center flex-wrap flex-col'>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8'>
            <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/infor/public/index.html" target='_blank'><img src={project1} className={`w-[200px] h-[210px] border-[1px] border-blue-200 rounded-md`} alt="Infor" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Infor</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Landing Page</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/2024/Oct/BoldData/DataBase/en/database/company-ownership-structure-data/index.html" target='_blank'><img src={project2} className={`w-[200px] h-[210px] border-[1px] border-blue-200 rounded-md`} alt="Bold data" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Bold Data</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Landing Page</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/BlissDivorce/index-nfl-AffiliateProgram.html" target='_blank'><img src={project3} className={`w-[200px] h-[210px] border-[1px] border-blue-200 rounded-md`} alt="Projecs" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>BlissDivorce</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Landing Page</p>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8 mt-8'>
            <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://arsadssss.github.io/Website-Launch/" target='_blank'><img src={project4} className={`w-[200px] h-[210px] border-[1px] border-blue-200 rounded-md`} alt="Website Launch" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Website Launch</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Landing Page</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://arsadssss.github.io/Candy/" target='_blank'><img src={project5} className={`w-[200px] h-[210px] border-[1px] border-blue-200 rounded-md`} alt="Candy" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Candy</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Landing Page</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://arsadssss.github.io/Travel-Agency/" target='_blank'><img src={project6} className={`w-[200px] h-[210px] border-[1px] border-blue-200 rounded-md`} alt="Projecs" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Travel Agency</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Landing Page</p>
                </div>
            </div>
        </div>
  )
}
