import React, { useState } from 'react';
import arsad from "./images/2.png";
import arshlogo from "./images/arshlogo.jpg";
import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";
import linkedin1 from "./images/linkedin-1.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import phoneCall from "./images/phone-call.png";
import locationPin from "./images/location.png";
import emails from "./images/email.png";
import hamburger from "./images/hamburger.png";
import close from "./images/close.png";
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import cs from "./cs.module.css"
import All from './All';

const Main = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [openHome, setOpenHome] = useState();
  const [showSkill, setShowSkil] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  let handleMenu = ()=>{
    setOpenMenu(!openMenu);
  }
  let handleSkill = ()=>{
    setShowContact(false);
    setShowProject(false);
    setShowSkil(true);
    setShowAbout(false);
    setOpenHome(false);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  let handleContact = ()=>{
    setShowSkil(false);
    setShowProject(false);
    setShowContact(true);
    setShowAbout(false);
    setOpenHome(false);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  let handleProject = ()=>{
    setShowSkil(false);
    setShowContact(false);
    setShowProject(true);
    setShowAbout(false);
    setOpenHome(false);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  let handleAbout = ()=>{
    setShowSkil(false);
    setShowContact(false);
    setShowProject(false);
    setShowAbout(true);
    setOpenHome(false);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  let handleHome = ()=>{
    setShowSkil(false);
    setShowContact(false);
    setShowProject(false);
    setShowAbout(false);
    setOpenHome(true);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  function AllData(itms){
    if(showSkill){
      return <Skills />
    }else if(showContact){
      return <Contact />
    }else if(showProject){
      return <Projects />
    }else if(showAbout){
      return <About />
    }else if(openHome){
         return <All />
   }else{
      return <All />
    }
  }
  return (
    <div className={`w-full h-auto md:p-8 p-4 grid grid-cols-1 md:grid-cols-[350px_1fr] bg-[#e1e7eb] justify-start md:pr-36 relative items-start flex-wrap gap-8`}>
      {/* About Me Section */}
      <div className={`w-full h-12 cursor-pointer bg-white sticky top-4 z-20 rounded-sm hidden ${cs.crdShadow} ${cs.menu}`}>
        <div className='w-full h-full flex justify-between items-center px-4'>
          <img src={arshlogo} className='w-8 transition-all duration-500 object-cover rounded-full' alt="icons" />
          <img onClick={handleMenu} src={openMenu == true ? hamburger : close} className='w-5 transition-all duration-500' alt="icons" />
        </div>
      </div>
      <div className={`md:w-[350px] w-full md:h-[100vh] h-auto bg-white  rounded-xl flex justify-center items-center md:sticky md:top-32 flex-col pb-8 mt-24 ${cs.crdShadow}`}>
        <div className='w-full h-full relative flex justify-start items-center flex-col'>
            <div className='bg-black w-[190px] h-auto rounded-xl absolute top-[-100px]'>
              <img src={arsad} className='w-auto h-auto rounded-xl' alt="Arsad Portfolio" />
            </div>
            <div className='w-full md:h-full h-auto flex justify-start items-center flex-col md:pt-24 pt-2'>
            <h1 className='text-black text-center font-bold md:text-3xl text-2xl mt-5'>Md Arsad Ansari</h1>
            <div className='bg-gray-200 w-[170px] h-auto mt-4 rounded-sm py-1'>
               <h1 className='text-black text-center font-bold text-md'>Front-End Developer</h1>
            </div>
            <div className='w-[230px] h-auto flex justify-between items-center mt-5'>
               <div className='w-8 h-auto bg-gray-200 p-2 rounded-sm hover:bg-gray-600 transition-all duration-500'>
                   <a href="https://www.facebook.com/bariyarpury" target='_blank'><img src={facebook} className='w-6 h-auto' alt="Arsad" /></a>
               </div>
               <div className='w-8 h-auto bg-gray-200 p-2 rounded-sm hover:bg-gray-600 transition-all duration-500'>
                   <a href="https://x.com/arshtechy" target='_blank'><img src={twitter} className='w-6 h-auto' alt="Arsad" /></a>
               </div>
               <div className='w-8 h-auto bg-gray-200 p-2 rounded-sm hover:bg-gray-600 transition-all duration-500'>
                   <a href="https://instagram.com/im_4r5h" target='_blank'><img src={instagram} className='w-6 h-auto' alt="Arsad" /></a>
               </div>
               <div className='w-8 h-auto bg-gray-200 p-2 rounded-sm hover:bg-gray-600 transition-all duration-500'>
                   <a href="https://www.linkedin.com/in/md-arsad-ansari-296682130" target='_blank'><img src={linkedin} className='w-6 h-auto' alt="Arsad" /></a>
               </div>
            </div>
            <div className='md:w-[300px] w-[90%] h-auto bg-gray-200 rounded-lg p-5 mt-5'>
              <div className='w-full h-auto flex justify-between items-center pb-2'>
                <div className='w-9 h-auto bg-white p-2 rounded-sm hover:bg-gray-600 transition-all duration-500'>
                    <a href="#" target='_blank'><img src={phoneCall} className='w-6 h-auto' alt="Arsad" /></a>
                </div>
                <div className='w-[80%]'>
                  <p className='text-black font-normal text-sm'>Phone</p>
                  <h1 className='text-black font-semibold md:text-md text-sm'>+91-8292718573</h1>
                </div>
              </div>
              <hr className='bg-gray-400 w-full h-[2px]'/>
              <div className='w-full h-auto flex justify-between items-center py-2'>
                <div className='w-9 h-auto bg-white p-2 rounded-sm hover:bg-gray-600 transition-all duration-500'>
                    <a href="#" target='_blank'><img src={emails} className='w-6 h-auto' alt="Arsad" /></a>
                </div>
                <div className='w-[80%]'>
                  <p className='text-black font-normal text-sm'>Email</p>
                  <h1 className='text-black font-semibold md:text-md text-sm'>arsadsagir@gmail.com</h1>
                </div>
              </div>
              <hr className='bg-gray-400 w-full h-[2px]'/>
              <div className='w-full h-auto flex justify-between items-center py-2'>
                <div className='w-9 h-auto bg-white p-2 rounded-sm hover:bg-gray-600 transition-all duration-500'>
                    <a href="#" target='_blank'><img src={linkedin1} className='w-6 h-auto' alt="Arsad" /></a>
                </div>
                <div className='w-[80%]'>
                  <p className='text-black font-normal text-sm'>Linkedin</p>
                  <h1 className='text-black font-semibold md:text-md text-sm'>linkedin/md-arsad-ansari</h1>
                </div>
              </div>
              <hr className='bg-gray-400 w-full h-[2px]'/>
              <div className='w-full h-auto flex justify-between items-center py-2'>
                <div className='w-9 h-auto bg-white p-2 rounded-sm hover:bg-gray-600 transition-all duration-500'>
                    <a href="#" target='_blank'><img src={locationPin} className='w-6 h-auto' alt="Arsad" /></a>
                </div>
                <div className='w-[80%]'>
                  <p className='text-black font-normal text-sm'>Address</p>
                  <h1 className='text-black font-semibold md:text-md text-sm'>Bengaluru, Karnataka-560035</h1>
                </div>
              </div>
              <hr className='bg-gray-400 w-full h-[2px]'/>
            </div>
            <a href="https://techgadgetwire.com/Resume/Arsad-Ansari.pdf" download><button className={`bg-blue-600 hover:bg-white fill-white hover:fill-blue-600 transition-all duration-500 hover:text-blue-600 flex justify-center items-center px-3 py-2 mt-5 rounded-sm gap-x-1 ${cs.Bcolor} ${cs.hovr}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
             DOWNLOAD CV</button></a>
            </div>
        </div>
      </div>
      
      {/* Contact Us Section */}
      <div className='w-full h-auto md:mt-24 mt-0 flex justify-center items-center flex-col '>
        <AllData itms={true} />
        
      </div>
      {/* Navigation Bar Section */}
      <div className={`w-[95px] h-auto bg-white px-8 py-4 md:mt-24 mt-8 md:flex  ${openMenu == true ? 'hidden' : 'flex'}  justify-center items-center fixed top-8 right-4 flex-col rounded-xl ${cs.crdShadow1} `}>
          <div onClick={handleHome} className={`w-16 h-auto cursor-pointer p-2 flex justify-center flex-col rounded-md items-center hover:bg-blue-600  text-sm transition-all duration-500 ${ openHome === false ? 'bg-gray-200': cs.Bcolor2 }`}>
              {/* <img src={facebook} className='w-6 h-auto' alt="Arsad" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6' viewBox="0 0 576 512">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                </svg>
              <p className='text-center mt-1'>Home</p>
              </div>
          <div onClick={handleAbout} className={`w-16 h-auto cursor-pointer bg-gray-200 text-black fill-black hover:fill-white p-2 mt-5 flex justify-center flex-col  hover:text-white rounded-md items-center  text-sm transition-all duration-500 ${cs.Bcolor1} ${ showAbout === true ? cs.Bcolor2 : "" }`}>
              {/* <img src={facebook} className='w-6 h-auto' alt="Arsad" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 0 384 512">
              <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/>
                </svg>
              <p className='text-center mt-1'>Resume</p>
              </div>
          <div onClick={handleSkill} className={`w-16 h-auto cursor-pointer bg-gray-200 p-2 flex mt-5 justify-center flex-col fill-black hover:fill-white  rounded-md items-center text-sm  transition-all duration-500 ${cs.Bcolor1} ${ showSkill === true ? cs.Bcolor2 : " " }`}>
              {/* <img src={facebook} className='w-6 h-auto' alt="Arsad" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6' viewBox="0 0 640 512">
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
                </svg>
              <p className='text-center mt-1'>Skills</p>
              </div>
          <div onClick={handleProject} className={`w-16 h-auto cursor-pointer bg-gray-200 p-2 flex mt-5 justify-center flex-col fill-black hover:fill-white  rounded-md items-center   text-sm  transition-all duration-500 ${cs.Bcolor1} ${ showProject === true ? cs.Bcolor2 : " " }`}>
              {/* <img src={facebook} className='w-6 h-auto' alt="Arsad" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6' viewBox="0 0 576 512">
              <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"/>
                </svg>
              <p className='text-center mt-1'>Projects</p>
              </div>
          <div onClick={handleContact} className={`w-16 h-auto cursor-pointer bg-gray-200 p-2 flex mt-5 justify-center flex-col fill-black hover:fill-white  rounded-md items-center  text-sm  transition-all duration-500 ${cs.Bcolor1} ${ showContact === true ? cs.Bcolor2 : " " }`}>
              {/* <img src={facebook} className='w-6 h-auto' alt="Arsad" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6' viewBox="0 0 448 512">
              <path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/>
                </svg>
              <p className='text-center mt-1'>Contact</p>
              </div>
      </div>
      
    </div>
  )
}

export default Main;
