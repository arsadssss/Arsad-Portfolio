import React from 'react'
import cs from "./cs.module.css";

const About = () => {
  return (
    <div className={`w-full h-auto px-8 py-6 mb-8 bg-white rounded-xl ${cs.crdShadow}`}>
        <h2 className="text-black md:text-2xl text-lg font-bold">Resume</h2>
            <div className="h-[4px] bg-gray-300 flex justify-start w-full rounded-md mb-5">
                <div className={`h-[3px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`} ></div>                       
            </div>
        <div className='bg-blue-100 w-full rounded-md p-7'>
            <h1 className='text-gray-800 font-bold md:text-xl text-md'>Profile Summary</h1>
            <p className='md:text-md text-sm text-black'>
               As an experienced Frontend Developer, I blend the art of design with the skill of programming to deliver immersive and engaging user experiences. My technical prowess, combined with a keen eye for aesthetics, allows me to create seamless web applications that resonate with users. Here's what I bring to the table:
               <br />Technical Expertise:</p>
               <ul className='list-disc pl-4 md:text-md text-sm'>
                <li>HTML5, CSS</li>
                <li>Bootstrap: Proficient in crafting responsive and visually appealing web interfaces.</li>
                <li>Tailwind CSS: Skilled in using utility-first CSS frameworks for efficient styling.</li>
                <li>JavaScript: Adept at enhancing user interactions and creating dynamic web elements.</li>
                <li>React.js: Proficient in creating reusable and flexible components using React.js for cutting-edge web applications.</li>
                <li>WordPress: Familiar with customizing themes and plugins for content management.</li>
                <li>Adobe XD and Photoshop: Proficient in designing intuitive user interfaces.</li>
               </ul>
            
        </div> 
           <h2 className="text-black md:text-2xl text-xl mt-5 font-bold">Work Experience</h2>
            <div className="h-[4px] bg-gray-300 flex justify-start w-full rounded-md mb-5">
                <div className={`h-[3px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`} ></div>                       
            </div>
        <div className='bg-orange-100 w-full rounded-md mt-8 p-7'>
            <div className='w-full h-auto flex justify-start items-start flex-row gap-x-4'>
                <div className="w-[4px] bg-gray-300 flex justify-start h-[80px] rounded-md mb-5">
                    <div className="w-[4px] bg-blue-700 h-full flex justify-center items-center rounded-md mb-5" ></div>                       
                </div>
                <div>
                    <h1 className='text-black md:text-xl text-lg font-bold'>Web Designer and Front-End Developer</h1>
                    <p className='text-black md:text-md text-sm'>Ayanshtech Pvt. Ltd.</p>
                    <p className='text-black md:text-md text-sm'>May-2021 To April-2022</p>
                </div>
            </div>
            <h1 className='text-black md:text-md text-sm font-bold'><sup>**</sup>Key Responsibilities<sup>**</sup></h1>
            <ul className='list-disc pl-4 md:text-md text-sm'>
                <li>Transforming visual designs (PSD/XD) into semantic and standards-compliant HTML code.</li>
                <li>Managing and maintaining WordPress websites, ensuring high performance and responsiveness.</li>
                <li>Developing and optimizing user-facing features using React.js framework.</li>
                <li>Creating responsive HTML email templates compatible across various email clients.</li>
                <li>Designing and implementing visually appealing and user-friendly website templates.</li>
            </ul>
        </div>  
        <div className='bg-blue-100 w-full rounded-md mt-8 p-7'>
            <div className='w-full h-auto flex justify-start items-start flex-row gap-x-4'>
                <div className="w-[4px] bg-gray-300 flex justify-start h-[80px] rounded-md mb-5">
                    <div className="w-[4px] bg-blue-700 h-full flex justify-center items-center rounded-md mb-5" ></div>                       
                </div>
                <div>
                    <h1 className='text-black md:text-xl text-lg font-bold'>Front-End Developer</h1>
                    <p className='text-black md:text-md text-sm'>LakeB2B - Champion Group</p>
                    <p className='text-black md:text-md text-sm'>April-2023 To Present</p>
                </div>
            </div>
            <h1 className='text-black md:text-md text-sm font-bold'><sup>**</sup>Key Responsibilities<sup>**</sup></h1>
            <ul className='list-disc pl-4 md:text-md text-sm'>
                <li>Converting Photoshop/Adobe XD design template into HTML Webpages</li>
                <li>Designing and implementing email campaign templates and converting into HTML template, generating links on cPanel.</li>
                <li>Managing and pushing custome webpage on WordPress websites, ensuring high performance.</li>
                <li>Developing and optimizing user-facing features using React.js framework.</li>
                <li>Creating responsive HTML email templates compatible across various email clients.</li>
            </ul>
        </div>  
        <h2 className="text-black md:text-xl text-lg mt-6 font-bold">Education</h2>
        <div className="h-1 bg-gray-300 flex justify-start w-full rounded-md mb-5">
            <div className={`h-[3px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`} ></div>                       
        </div>
        <div className='w-full h-auto mt-8 flex justify-center items-start flex-wrap gap-8'>
            <div className={`md:w-[30%] w-full h-auto p-8 rounded-md bg-orange-200 hover:bg-blue-600 text-sm text-black hover:text-white transition-all duration-500 ${cs.crd}`}>
                <div className={`${cs.cardbody}`}>
                    <div className='w-full h-auto flex justify-start items-center bg-white rounded-full '>
                       <div className={`w-[40px] h-[40px] p-2 flex justify-center flex-col fill-white hover:fill-black rounded-3xl items-center bg-blue-500`}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 448 512">
                            <path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/>
                            </svg>
                        </div>
                        <p className='text-center text-black font-bold ml-1 text-md'>Matric</p>
                    </div>
                    <h5 className={`my-3`}>2012-2014</h5>
                    <p>R. S. R. <br />High School <br /> Bariyarpur Sitamarhi</p>
                </div>
            </div>
            <div className={`md:w-[30%] w-full h-auto p-8 rounded-md bg-blue-200 hover:bg-blue-600 text-sm text-black hover:text-white transition-all duration-500 ${cs.crd}`}>
                <div className={`${cs.cardbody}`}>
                    <div className='w-full h-auto pr-1 flex justify-start items-center bg-white rounded-full '>
                       <div className={`w-[40px] h-[40px] p-2 flex justify-center flex-col fill-white hover:fill-black rounded-3xl items-center bg-blue-500`}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 448 512">
                            <path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/>
                            </svg>
                        </div>
                        <p className='text-center text-black font-bold ml-1 text-md'>Sr. Secondary</p>
                    </div>
                    <h5 className={`my-3`}>2014-2016</h5>
                    <p>DR.I.S.N.R.K.P.L.D.Kishan <br />College Bariyarpur <br /> Sitamarhi</p>
                </div>
            </div>
            <div className={`md:w-[30%] w-full h-auto p-8 rounded-md bg-orange-200 hover:bg-blue-600 text-sm text-black hover:text-white transition-all duration-500 ${cs.crd}`}>
                <div className={`${cs.cardbody}`}>
                    <div className='w-full h-auto  pr-1 flex justify-start items-center bg-white rounded-full '>
                       <div className={`w-[40px] h-[40px] p-2 flex justify-center flex-col fill-white hover:fill-black rounded-3xl items-center bg-blue-500`}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 448 512">
                            <path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/>
                            </svg>
                        </div>
                        <p className='text-center text-black font-bold ml-1 text-md'>B.Tech (CS)</p>
                    </div>
                    <h5 className={`my-3`}>2016-2020</h5>
                    <p>Sanskar College of <br />Engineering and <br /> Technology.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;