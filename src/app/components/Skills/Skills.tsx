'use client'
import React from 'react'
import Style from "./skills.module.css"
import Image from 'next/image';
import Background from '../Images/java.png';
import { useState , useEffect} from 'react';


function Skills() {
  const [count, setCount] = useState(0);
  const [angle, setAngle] = useState(0);
  const spinner = document.getElementById('carousel')

  const incrementCount = () => {
    setCount(prevState => prevState + 1);
    setAngle(prevAngle => prevAngle - 45); 
  };
  const discrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setAngle((prevAngle) => prevAngle + 45);
  };

  useEffect(()=>{
    spinner?.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
    console.log(count)
  },[count])

  return (
    <section className={Style.section}>
      <h1>SKILLS</h1>
      <div className={Style.scene}>
        <div className={Style.carousel} id='carousel'>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 0 ? "shadow" : "noshadow"]}`}>

            <p >"With a strong foundation in Python, I leverage its versatility to build efficient back-end solutions. From scripting and automation to building full-fledged web applications, I use Python's extensive libraries and frameworks to create scalable and maintainable code."</p>
            {/* <h2 className='heading'>Python</h2> */}
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 1 ? "shadow" : "noshadow"]}`} >

            <p >"Java has been instrumental in building enterprise-level applications. I bring expertise in using Java for back-end services, Android development, and large-scale systems, with a focus on performance, scalability, and security."</p>
            {/* <h2 className='heading'>Java</h2> */}
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 2 ? "shadow" : "noshadow"]}`}>

            <p >"I incorporate TypeScript into my development workflow to ensure robust, type-safe code. By extending JavaScript with static typing, I can catch errors early in the development process, resulting in more reliable and scalable applications."</p>
            {/* <h2 className='heading'>Typescript</h2> */}
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 3 ? "shadow" : "noshadow"]}`}>

            <p >"Next.js enables me to build lightning-fast, SEO-friendly web applications. I specialize in creating server-side rendered applications and leveraging Next.js’s powerful static site generation to deliver optimized solutions for users."</p>
            {/* <h2 className='heading'>NextJs</h2> */}
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 4 ? "shadow" : "noshadow"]}`}>

            <p >"React is my go-to library for building modular and responsive user interfaces. I enjoy creating reusable components and crafting fluid user experiences while ensuring state management and data flow remain efficient and organized."</p>
            {/* <h2 className='heading'>React</h2> */}
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 5 ? "shadow" : "noshadow"]}`}>

            <p >"JavaScript is the backbone of dynamic web applications, and I excel at using it to create engaging, interactive user experiences. Whether working with vanilla JavaScript or modern frameworks, I focus on performance and user-centric design."</p>
            {/* <h2 className='heading'>Javascript</h2> */}
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 6 ? "shadow" : "noshadow"]}`}>

            <p >"JavaScript is the backbone of dynamic web applications, and I excel at using it to create engaging, interactive user experiences. Whether working with vanilla JavaScript or modern frameworks, I focus on performance and user-centric design."</p>
            {/* <h2 className='heading'>C++</h2> */}
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 7 ? "shadow" : "noshadow"]}`}>
            <p >"JavaScript is the backbone of dynamic web applications, and I excel at using it to create engaging, interactive user experiences. Whether working with vanilla JavaScript or modern frameworks, I focus on performance and user-centric design."</p>
            {/* <h2 className='heading'>Node</h2> */}
          </div>

        </div>
      </div>
      <div style={{width:'100%',position: 'absolute'}}>
        <span className={Style.arrows} onClick={discrementCount}>&lt;</span>
        <span className={Style.arrows} onClick={incrementCount}>&gt;</span>
      </div>
    </section>
  )
}

export default Skills