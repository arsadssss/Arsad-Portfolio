import React from "react";
import cs from "../cs.module.css";
import project1 from "../images/Projects/Campaign.png";
import project2 from "../images/Projects/arshify.png";
import project3 from "../images/Projects/food.png";
import project4 from "../images/Projects/flamingo.png";
import project5 from "../images/Projects/resumeBuilder.png";
import project6 from "../images/Projects/WeatherApp.png";
import project7 from "../images/Projects/AgeCalculator.png";
import project8 from "../images/Projects/ReactPro.png";
import project9 from "../images/Projects/valentine.png";

const ReactProjects = () =>{
    return(
         <div className='w-full h-auto flex justify-center items-center flex-wrap flex-col gap-8'>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8'>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://beta.campaigntemplate.com/" target='_blank'><img src={project1} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Template Showcase" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Template Showcase</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>React Js Project</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://arsadssss.github.io/arshify/" target='_blank'><img src={project2} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Arshify" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Arshify - Music Player</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Javascript Project</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://arsadssss.github.io/food/" target='_blank'><img src={project3} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Food" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Food</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Javascript Project</p>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8'>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://arsadssss.github.io/Pink-Flamingo/" target='_blank'><img src={project4} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Pink Flamingo" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Pink Flamingo</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>React Js Project</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://arsadssss.github.io/Resume-Builder/" target='_blank'><img src={project5} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Resume Builder" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Resume Builder</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Javascript Project</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://arsadssss.github.io/Weather-App/" target='_blank'><img src={project6} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Weather App" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Weather App</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>React Js Project</p>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8'>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://arsadssss.github.io/Age-Calculator/" target='_blank'><img src={project7} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Age Calculator" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Age Calculator</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Javascript Project</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://arsadssss.github.io/ReactProjects/" target='_blank'><img src={project8} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="React Small Projects" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Small Projects</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>React Js Project</p>
                </div>
                <div className={`${cs.projectscard} transition-all duration-500 ${cs.projectImg} flex justify-center items-center flex-col gap-2`}>
                  <a href="https://arsadssss.github.io/valentine/valentineDayProposal.html" target='_blank'><img src={project9} className={`w-[200px] h-[210px] border-[1px] p-1 border-blue-200 rounded-md`} alt="Valentine" /></a>
                  <h3 className='font-bold text-lg text-gray-900 text-left w-full'>Valentine</h3>
                  <p className='text-sm text-gray-400 text-[14px] text-left w-full'>Javascript Project</p>
                </div>
            </div>
        </div>
    )
}

export default ReactProjects;