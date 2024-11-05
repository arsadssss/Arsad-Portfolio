import React from 'react';
import cs from "../cs.module.css";
import project1 from "../images/Projects/BoomTherapy.png";
import project2 from "../images/Projects/LKN.png";
import project3 from "../images/Projects/Radiology.png";
import project4 from "../images/Projects/tonya.png";
import project5 from "../images/Projects/Michigan.png";
import project6 from "../images/Projects/excellence.png";
import project7 from "../images/Projects/blissDivorce.png";
import project8 from "../images/Projects/UPS.png";
import project9 from "../images/Projects/virtual.png";

export default function EmailTemplate() {
  return (
    <div className='w-full h-auto flex justify-center items-center flex-wrap flex-col'>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8'>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://campurl.com/2024/Oct/LKN/index2.html" target='_blank'><img src={project2} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="LKN Strategies" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>LKN Strategies</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Email Template</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/2024/Oct/Radiology/index.html" target='_blank'><img src={project3} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Radiology" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Radiologys</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Email Template</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/2024/Feb/BlissDivorse/Non-Family-Law.html" target='_blank'><img src={project7} className={`w-[200px] h-[210px] p-1 border-[1px] border-blue-200 rounded-md`} alt="BlissDivorce" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>BlissDivorce</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Email Template</p>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8 mt-8'>
            <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/2024/Apr/Non-pareil/tonya.html" target='_blank'><img src={project4} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Tonya" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Tonya</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Email Template</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/2024/Mar/Michigan/index1.html" target='_blank'><img src={project5} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Michigan" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Michgan</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Email Template</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/2024/Feb/excellence/index1.html" target='_blank'><img src={project6} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Excellence" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Excellence</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Email Template</p>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8 mt-8'>
            <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/2024/Oct/BoomTherapy/index.html" target='_blank'><img src={project1} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Boom Therapy" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Excellence</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Email Template</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/2024/Mar/UPS/EN.html" target='_blank'><img src={project8} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="UPS" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Excellence</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Email Template</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                <a href="https://campurl.com/2024/Apr/virtualField/indexU1.html" target='_blank'><img src={project9} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Virtual Field" /></a>
                <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Excellence</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Email Template</p>
                </div>
            </div>
        </div>
  )
}
