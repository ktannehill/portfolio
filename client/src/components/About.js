import React from 'react'
import headshot from "../assets/images/headshot.jpg"
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiCss3 } from "react-icons/si";

const About = () => {
  return (
    <>
        <section className='box padded two-thirds'>
            <aside id='main-img'>
                <img src={headshot} alt="Hi, I'm Kat!" />
            </aside>
            <main id='blurb'>
                <h2>Hi, I'm</h2>
                <h1 className='orange-block'>Kat Tannehill</h1>
                <h3>
                    Full-stack software artist blending creative vision with React/Flask skills. Crafting intuitive web experiences through purposeful design (and puns).
                </h3>
            </main>
        </section>
        <section id="loc-about" className="dark-green-bg padded">
            <main className='two-thirds'>
                <h1 className='orange-block'>About</h1>
                <p>
                    Just call me the digital da Vinci - a full-stack software engineer skilled at transforming creative concepts into finely-tuned, functional web apps through meticulously crafted code. With a background in graphic design and years spent bringing order to the chaos of veterinary clinics, I've developed a knack for managing complexity with efficiency and creative problem-solving.
                </p>
                <p>
                    My toolkit? React for off-the-hook user interfaces, Flask for robust backend logic, and an overarching philosophy that celebrates purposeful design, seamless performance, and maybe an expertly-timed pun (sorry not sorry).
                </p>
                <p>
                    While I thrive on envisioning and executing digital experiences that inspire human connection, my creative talents extend beyond the screen. You can find me being a total foodie in the kitchen, or attempting to convince my temperamental houseplants that yes, I totally have a green thumb.

                </p>
                <p>
                    At my core, I'm a skilled communicator and collaborator who efficiently transforms new challenges into refined solutions. I live for those "aha" moments when an insight blossoms into functional, beautiful code that people genuinely enjoy using.
                </p>
                <aside id="tech-box" className='orange-accent'>
                    <span className='tech'><SiCss3 /></span>
                    <span className='tech'><SiJavascript /></span>
                    <span className='tech'><FaReact /></span>
                    <span className='tech'><FaPython /></span>
                    <span className='tech'><SiFlask /></span>
                </aside>
            </main>
        </section>
    </>
  )
}

export default About