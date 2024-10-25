'use client'
import React from 'react'
import Style from "./about.module.css"
import { useState } from 'react'

function About() {
  const [count,setCount]=useState(0)

  function incrementCount(num){
    setCount(state=>state=num)
  }


  return (
    <section className={Style.section}>
      <h1>ABOUT ME</h1>
      <div className='flex items-center w-[74%] h-[55vh] items-center justify-between'>
        <div className='flex flex-col items-center justify-between w-[22%] h-[100%] z-10'>
          <span className={` ' flex w-[80%] h-[3.75rem] bg-[#0a0a0a] z-10 items-center justify-center text-[1.3rem] hover:text-[#04ffc3] euro text-['monument extended'] text-white rounded-[8px] border-2 border-[#04ffce]' ${Style[count==0?'active':'']}`} onClick={()=>incrementCount(0)}>INTRODUCTION</span>
          <span className={` ' flex w-[80%] h-[3.75rem] bg-[#0a0a0a] z-10 items-center justify-center text-[1.3rem] hover:text-[#04ffc3] euro text-['monument extended'] text-white rounded-[8px] border-2 border-[#04ffce]' ${Style[count==1?'active':'']}`} onClick={()=>incrementCount(1)}>EDUCATION</span>
          <span className={` ' flex w-[80%] h-[3.75rem] bg-[#0a0a0a] z-10 items-center justify-center text-[1.3rem] hover:text-[#04ffc3] euro text-['monument extended'] text-white rounded-[8px] border-2 border-[#04ffce]' ${Style[count==2?'active':'']}`} onClick={()=>incrementCount(2)}>SKILLS</span>
          <span className={` ' flex w-[80%] h-[3.75rem] bg-[#0a0a0a] z-10 items-center justify-center text-[1.3rem] hover:text-[#04ffc3] euro text-['monument extended'] text-white rounded-[8px] border-2 border-[#04ffce]' ${Style[count==3?'active':'']}`} onClick={()=>incrementCount(3)}>EXPERIENCE</span>
        </div>
        <div className='w-[72%] h-[100%] text-white rounded-[8px] border-2 border-[#04ffce]  shadow-[0_0_0_500px] shadow-[#0b0b0b] overflow-scroll overflow-x-hidden'>
          <div className={`'text-center hidden flex-col h-[100%] px-8 border-b-2 items-start justify-start' ${Style[count==0?'visible':'']}`}>
            <h3 className='text-white text-[2.4rem] franklin my-6'>Introduction</h3>
            <p className='text-white text-[1.3rem] font-[inter] my-2 leading-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia mollitia eum, necessitatibus cumque quisquam animi explicabo consectetur similique laboriosam iure accusantium consequatur nihil facere quis repudiandae quidem culpa facilis voluptatum?</p>
          </div>
          <div className={`'text-center hidden flex-col h-[100%] px-8 border-b-2 items-center justify-start' ${Style[count==1?'visible':'']}`}>
            <h3 className='text-white text-[2.4rem] franklin my-6'>Education</h3>
            <p className='text-white text-[1.3rem] font-[inter] my-2 leading-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia mollitia eum, necessitatibus cumque quisquam animi explicabo consectetur similique laboriosam iure accusantium consequatur nihil facere quis repudiandae quidem culpa facilis voluptatum?</p>
          </div>
          <div className={`'text-center hidden flex-col h-[100%] px-8 border-b-2 items-center justify-start' ${Style[count==2?'visible':'']}`}>
            <h3 className='text-white text-[2.4rem] franklin my-6'>Skills</h3>
            <p className='text-white text-[1.3rem] font-[inter] my-2 leading-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia mollitia eum, necessitatibus cumque quisquam animi explicabo consectetur similique laboriosam iure accusantium consequatur nihil facere quis repudiandae quidem culpa facilis voluptatum?</p>
          </div>
          <div className={`'text-center hidden flex-col h-[100%] px-8 border-b-2 items-center justify-start' ${Style[count==3?'visible':'']}`}>
            <h3 className='text-white text-[2.4rem] franklin my-6'>Experience</h3>
            <p className='text-white text-[1.3rem] font-[inter] my-2 leading-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia mollitia eum, necessitatibus cumque quisquam animi explicabo consectetur similique laboriosam iure accusantium consequatur nihil facere quis repudiandae quidem culpa facilis voluptatum?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
