import React from 'react';
import cs from "./cs.module.css";
import html from "./images/html5.png";
import css from "./images/css-3.png";
import javascript from "./images/js.png";
import wp from "./images/wordpress.png";
import git from "./images/git.png";
import php from "./images/php.png";
import bootstrap from "./images/bootstrap.png";
import tailwind from "./images/tailwindcss.png";
import react from "./images/react.png";
import photo from "./images/adobe-photoshop.png";
import xd from "./images/xd.png";

const Skills = () => {
  return (
    <div className={`w-full h-auto px-8 py-6 bg-white mb-8 rounded-xl ${cs.crdShadow}`}>
      <h2 className="text-black md:text-2xl text-lg font-bold">Skills</h2>
        <div className="h-1 bg-gray-300 flex justify-start w-full rounded-md mb-5">
            <div className={`h-[3px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`} ></div>                       
        </div>
        <div className='w-full h-auto flex justify-center items-start flex-row flex-wrap gap-8'>
            <div className={`md:w-[42%] w-full h-auto`}>
                 <h2 className="text-black text-md font-bold">Tech Stack</h2>
                    <div className="h-[2px] bg-gray-300 flex justify-start w-full rounded-md mb-5">
                        <div className={`h-[2px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`} ></div>                       
                    </div>
                <div className={`w-full h-auto  flex justify-start items-center  rounded-md hover:bg-white hover:text-blue-700 bg-orange-400 shadow-orange-700 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={html} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4 `}>
                        <h1>HTML5</h1>
                    </div>
                </div>
                <div className={`w-full h-auto  flex justify-start items-center mt-5 rounded-md hover:bg-white hover:text-blue-700 bg-sky-500 shadow-sky-800 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={css} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4`}>
                        <h1>CSS3</h1>
                    </div>
                </div>
                <div className={`w-full h-auto  flex justify-start items-center mt-5 rounded-md hover:bg-white hover:text-blue-700 bg-yellow-300 shadow-yellow-800 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={javascript} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4`}>
                        <h1>JavaScript</h1>
                    </div>
                </div>
                <div className={`w-full h-auto  flex justify-start items-center mt-5 rounded-md hover:bg-white hover:text-blue-700 bg-blue-400 shadow-blue-800 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={php} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4`}>
                        <h1>Core PHP</h1>
                    </div>
                </div>
                <div className={`w-full h-auto  flex justify-start items-center mt-5 rounded-md hover:bg-white hover:text-blue-700 bg-teal-300 shadow-teal-800 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={wp} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4`}>
                        <h1>Wordpress</h1>
                    </div>
                </div>
                <div className={`w-full h-auto  flex justify-start items-center mt-5 rounded-md hover:bg-white hover:text-blue-700 bg-gray-100 shadow-gray-900 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={git} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4`}>
                        <h1>Git/Github</h1>
                    </div>
                </div>
            </div>
            <div className="md:w-[42%] w-full h-auto flex justify-start items-center rounded-md hover:bg-white hover:text-blue-700">
            <div className={`w-[350px] h-auto`}>
                    <h2 className="text-black text-md font-bold">Framework</h2>
                    <div className="h-[2px] bg-gray-300 flex justify-start w-full rounded-md mb-5">
                        <div className={`h-[2px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`}></div>                       
                    </div>
                <div className={`w-full h-auto  flex justify-start items-center rounded-md hover:bg-white text-blue-100 hover:text-blue-700 bg-purple-500 shadow-purple-800 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={bootstrap} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4`}>
                        <h1>Bootstrap</h1>
                    </div>
                </div>
                <div className={`w-full h-auto  flex justify-start items-center mt-5 rounded-md hover:bg-white text-gray-200 hover:text-blue-700 bg-slate-900 shadow-purple-800 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={tailwind} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4`}>
                        <h1>Tailwind CSS</h1>
                    </div>
                </div>
                <div className={`w-full h-auto  flex justify-start items-center mt-5 rounded-md hover:bg-white text-black  hover:text-blue-700 bg-indigo-400 shadow-indigo-800 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={react} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4 `}>
                        <h1>ReactJS</h1>
                    </div>
                </div>
                <h2 className="text-black text-md mt-5 font-bold">Designing Tools</h2>
                    <div className="h-[2px] bg-gray-300 flex justify-start w-full rounded-md mb-5">
                        <div className={`h-[2px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`} ></div>                       
                    </div>
                 <div className={`w-full h-auto  flex justify-start items-center mt-5 rounded-md hover:bg-white text-[#29d4ff] bg-teal-950 hover:text-blue-700 shadow-indigo-800 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={photo} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4 `}>
                        <h1>Photoshop</h1>
                    </div>
                </div>    
                 <div className={`w-full h-auto  flex justify-start items-center mt-5 rounded-md hover:bg-white text-blue-100 hover:text-blue-700 bg-pink-950 shadow-indigo-800 shadow-sm ${cs.hovr} transition-all duration-500`}>
                    <div className='w-[50px] flex justify-center items-center'>
                        <img src={xd} className='w-[35px] h-auto' alt="skills" />
                    </div>
                    <div className={`flex justify-start items-center p-4 `}>
                        <h1>Adobe XD</h1>
                    </div>
                </div>    
            </div>
            </div>
      </div>
    </div>
  )
}

export default Skills;
