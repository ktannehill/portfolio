import React from 'react'
import headshot from "../assets/images/headshot.jpg"
import '../style/about.css'
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiCss3 } from "react-icons/si";

const About = () => {
  return (
    <>
        <section className='container intro'>
            <aside className='headshot'>
                <img src={headshot} alt="Hi, I'm Kat!" />
            </aside>
            <div className='headline'>
                <h3>Hi, I'm</h3>
                <h1>Kat Tannehill</h1>
            </div>
            <div className='blurb padded'>
                <h3>
                    Full-stack software artist blending creative vision with React/Flask skills. Crafting intuitive web experiences through purposeful design (and puns).
                </h3>
            </div>
        </section>
        
        <section id="about" className="green-100">
            <main className='container'>
                <div className='padded'>
                    <h2>About</h2>
                    <p>
                        In the late 90s, a hyper-focused kid (me) was obsessed with building the snazziest Neopets pages around, unlocking a determination to create cool digital stuff through HTML and CSS.
                    </p>
                    <p>
                        After honing skills like communicating complex situations and juggling priorities in the high-intensity veterinary field, I've circled back as a full-stack software engineer. I have a knack for blending design with coding skills to develop responsive web apps with friendly user flows and vibrant interfaces.

                    </p>
                    <p>
                        These days, you'll find me polishing slick frontend components and constructing organized backend architectures. When I unplug, I'm either devouring an epic fantasy novel, indulging my inner foodie, or desperately trying to keep my dramatic houseplant brood alive (no judging my black thumb!). I'm here to combine technical logic with creative vision to build digital solutions that people genuinely enjoy using.
                    </p>

                    <aside id="tech-box" className='orange-accent'>
                        <span className='tech'><SiCss3 /></span>
                        <span className='tech'><SiJavascript /></span>
                        <span className='tech'><FaReact /></span>
                        <span className='tech'><FaPython /></span>
                        <span className='tech'><SiFlask /></span>
                    </aside>
                </div>
            </main>
        </section>
    </>
  )
}

export default About