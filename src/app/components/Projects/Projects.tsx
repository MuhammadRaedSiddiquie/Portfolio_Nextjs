import React from 'react'
import Style from "./project.module.css"
import Image from "next/image"

function Projects() {
  return (
    <section className={Style.section} id='projects'>
      <h1>PROJECTS</h1>
      <div className={Style.projects}>
        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/cal.jpg.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://muhammadraedsiddiquie.github.io/Calculator_Js/" target="_blank">
            <div className={Style.cardtext}>
              <h1>Calculator</h1>
              <p>A simple calculator made with html,css and javascript</p>
              <div><span>Html</span><span>Css</span><span>Ts</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/smash.jpg.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://muhammadraedsiddiquie.github.io/Smash_it/" target="_blank">
            <div className={Style.cardtext}>
              <h1>SmashIT</h1>
              <p>A fun Insect smashing game designed with html,css and javascript</p>
              <div><span>Html</span><span>Css</span><span>Js</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/hangman.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://muhammadraedsiddiquie.github.io/Analog_clock/" target="_blank">
            <div className={Style.cardtext}>
              <h1>Hangman</h1>
              <p>An interactive popular Hangman game design using pure Css and Javascript</p>
              <div><span>Html</span><span>Css</span><span>Js</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/rps.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://muhammadraedsiddiquie.github.io/Rock_paper_scissor_1/" target="_blank">
            <div className={Style.cardtext}>
              <h1>Rock-Paper-Scissor</h1>
              <p>An interactive Rock,Paper & Scissor Game enabled with Ai using html,css and javascript
              </p>
              <div><span>Html</span><span>Css</span><span>Js</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/portfolio.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://muhammadraedsiddiquie.github.io/MuhammadRaedSiddiquie-Portfolio_Web_Design/" target="_blank">
            <div className={Style.cardtext}>
              <h1>Portfolio</h1>
              <p>Interactive and Simple Modern Web Development Portfolio designed with custom Css & Js</p>
              <div><span>React</span><span>Css</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/tiktak.png" layout='fill' alt=""></Image>
          </div>
          <a href="">
            <div className={Style.cardtext}>
              <h1>Tik Tak Toe</h1>
              <p>A simple tik tak game with html, css and javascript</p>
              <div><span>Html</span><span>Ts</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

      </div>
    </section>
  )
}

export default Projects
