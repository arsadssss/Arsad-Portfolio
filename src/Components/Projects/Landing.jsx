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
                <a href="https://campurl.com/infor/public/index.html" target='_blank'><img src={project1} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Infor" /></a>
                <a href="https://campurl.com/2024/Oct/BoldData/DataBase/en/database/company-ownership-structure-data/index.html" target='_blank'><img src={project2} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Bold data" /></a>
                <a href="https://campurl.com/BlissDivorce/index-nfl-AffiliateProgram.html" target='_blank'><img src={project3} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-row flex-wrap gap-8 mt-8'>
                <a href="https://arsadssss.github.io/Website-Launch/" target='_blank'><img src={project4} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Website Launch" /></a>
                <a href="https://arsadssss.github.io/Candy/" target='_blank'><img src={project5} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Candy" /></a>
                <a href="https://arsadssss.github.io/Travel-Agency/" target='_blank'><img src={project6} className={`w-[220px] h-[220px] rounded-md transition-all duration-500 ${cs.projectImg}`} alt="Projecs" /></a>
            </div>
        </div>
  )
}
