import React from 'react';
import cs from "./cs.module.css"
import email from "./images/email.png";
import phoneCall from "./images/phone-call.png";
import instagram from "./images/instagram.png";
import linkedin1 from "./images/linkedin-1.png";
import locationPin from "./images/location.png";
import sendMail from "./images/send-mail.png";

const Contact = () => {
  return (
    <div className={`w-full h-auto  px-8 py-6 bg-white rounded-xl ${cs.crdShadow}`}>
        <h2 className="text-black md:text-2xl text-lg font-bold">Contact Me</h2>
        <div className="h-1 bg-gray-300 flex justify-start w-full rounded-md mb-5">
            <div className={`h-[3px] bg-blue-700 flex justify-center items-center rounded-md mb-5 ${cs.devider}`} ></div>                       
        </div>
      <div className="w-full h-auto flex justify-between items-start flex-wrap gap-4">
           <div className="md:w-[45%] w-full h-auto">
                    <h2 className="text-black text-md font-bold">Get In Touch</h2>
                    <div className="h-[2px] bg-gray-300 flex justify-start w-full rounded-md mb-5">
                        <div className="h-[2px] bg-blue-700 w-[75%] flex justify-center items-center rounded-md mb-5" ></div>                       
                    </div>
                    <a href="mailto:arsadsagir@gmail.com" target="_blank" className="no-underline"><p className={`${cs.cntctdetails1} hover:bg-white hover:shadow hover:shadow-blue-700  hover:text-black transition-all duration-700`}>
                        <img src={email} width="16px" alt="email" srcSet="" />
                        <span > arsadsagir@gmail.com</span>
                      </p></a>

                      <a href="tel:+91 8292718573" target="_blank" className="no-underline"><p className={`${cs.cntctdetails1} hover:bg-white hover:shadow-md hover:shadow-blue-700 hover:text-black transition-all duration-700`}>
                        <img src={phoneCall} width="16px" alt="" srcSet="" />
                        <span > +91-8292718573</span>
                      </p></a>
                      <a href="https://instagram.com/im_4r5h?igshid=MzNlNGNkZWQ4Mg==" target="_blank" className="no-underline"><p className={`${cs.cntctdetails1} hover:bg-white hover:shadow-md hover:shadow-blue-700 hover:text-black transition-all duration-700`}>
                        <img src={instagram} width="16px" alt="" srcSet="" />
                        <span > Instagram</span>
                      </p></a>
                      <a href="https://www.linkedin.com/in/md-arsad-ansari-296682130" target="_blank" className="no-underline"><p className={`${cs.cntctdetails1} hover:bg-white hover:shadow-md hover:shadow-blue-700 hover:text-black transition-all duration-700`}>
                        <img src={linkedin1} width="16px" alt="" srcSet="" />
                        <span > LinkedIn</span>
                      </p></a>
                      <p className={`${cs.cntctdetails1} hover:bg-white hover:shadow-md hover:shadow-blue-700 hover:text-black transition-all duration-700`}>
                        <img src={locationPin} width="16px" alt="" srcSet="" />
                        <span >Bengaluru, Karnataka-560035</span>
                      </p>
           </div>
           <div className="md:w-[45%] w-full h-auto">
                <h2 className="text-black text-md font-bold">Drop A Mail</h2>
                <div className="h-[2px] bg-gray-300 flex justify-start w-full rounded-md mb-5">
                    <div className="h-[2px] bg-blue-700 w-[75%] flex justify-center items-center rounded-md mb-5" ></div>                       
                </div>
              <div className="col-md-6 card bg-dark frm mt25 cont-info">
                      <form className='w-full' action="https://api.web3forms.com/submit" method="POST">
                      <input type="hidden" name="access_key" value="6f6e772d-decd-42c6-a23b-35a9450a7291"></input>
                        <div className="w-full mb-3 px-0">
                          <input
                            type="text"
                            className={`${cs.cntctdetails} w-full outline-none`}
                            id="exampleInputEmail1"
                            placeholder="Name"
                            name='name'
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="col-12 mb-3 px-0">
                          <input
                            type="email"
                            className={`${cs.cntctdetails} w-full outline-none`}
                            placeholder="Email"
                            name="email"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div className=" col-12 mb-3 px-0">
                          <input
                            type="text"
                            className={`${cs.cntctdetails} w-full outline-none`}
                            id="phone"
                            placeholder="Phone"
                            name='phone'
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="col-12 mb-3 px-0">
                          <textarea
                            className={`${cs.cntctdetails} w-full outline-none`}
                            placeholder="Message"
                            name="message"
                            id="exampleFormControlTextarea1"
                            rows="4"
                          ></textarea>
                        </div>
                        <div className="w-full h-auto flex justify-start items-center">
                          <button type="submit" className={`${cs.Bcolor} rounded-sm px-3 py-2 flex justify-center items-center gap-2 hover:bg-white hover:shadow-md hover:shadow-blue-700 hover:text-black transition-all duration-700`}>
                            Submit
                            <img src={sendMail} width="16px" alt="" srcSet="" />
                          </button>
                        </div>
                      </form>
                    </div>
           </div>
        </div>
    </div>
  )
}

export default Contact;
