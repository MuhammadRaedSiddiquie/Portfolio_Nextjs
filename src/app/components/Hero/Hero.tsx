'use client'
import Style from "./hero.module.css"
import React from 'react'
import Image from "next/image";
import Stars from "../Stars/Stars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'




function Hero() {
  return (
    <section className="w-full h-[94vh] flex items-center justify-center bg-[#121212] gap-[10vw]">
      <aside className="flex bg-[#0a0a0a] flex-col h-[26rem] w-[34rem] rounded-2xl justify-evenly px-4 shadow-[inset_-12px_0_13px_-10px] shadow-[#04ffc3] border-r-[2px] border-[#64ffda]">
        <Stars></Stars>
        {/* <div className="profile"><Image src="" layout="fill" alt=""></Image></div> */}
        <div className="flex flex-col gap-2">
          <h2 style={{fontFamily:'monument extended',fontWeight:'100'}} className="text-3xl text-[#04ffc3] select-none">Hi! I'm</h2>
          <h1 style={{fontFamily:'monument extended'}} className="text-white text-[2.5rem] select-none">MUHAMMAD RAED</h1>
          <h3 className="text-white text-[18px] select-none">Learning Front-End Web Development passionate about creating interactive applications and
            experiences on the web.</h3>
        </div>
        <div className="w-[150px] items-center justify-center flex flex-col gap-4">
          <button className="text-white neon w-[150px] h-[50px] rounded-[22px] border-[#019975] border-[2px] cursor-pointer hover:bg-[#04a982] hover:border-white">
            <h4 className="text-lg">More</h4>
          </button>
          <div className='flex w-[150px] items-center justify-center' >
            <span className="text-white text-3xl mx-2 hover:text-[#04a982] cursor-pointer"><a target="_blank" href="https://github.com/MuhammadRaedSiddiquie/">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a></span>
            <span className="text-white text-3xl mx-2 hover:text-[#04a982] cursor-pointer"><a target="_blank" href="https://www.linkedin.com/in/raed-siddiquie/">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a></span>
            <span className="text-white text-3xl mx-2 hover:text-[#04a982] cursor-pointer"><a target="_blank" href="https://x.com/raedsiddiquie">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a></span>
          </div>
        </div>

      </aside>
      <aside className="h-[28rem] w-[30rem] flex items-center justify-center">
        <div className="w-full h-full overflow-hidden flex items-start justify-center"><Image className="z-10" src="/person.PNG" width={300} height={400} alt=""></Image></div>
      </aside>

    </section>
  )

}

export default Hero
