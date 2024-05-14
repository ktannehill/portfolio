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
            <main>
                <h3>Hi, I'm</h3>
                <h1>Kat Tannehill</h1>
                <h3>
                    Full-stack software artist blending creative vision with React/Flask skills. Crafting intuitive web experiences through purposeful design (and puns).
                </h3>
            </main>
        </section>
        
        <section id="about" className="dark-green-bg padded">
            <main className='two-thirds'>
                <h2>About</h2>
                <p>
                    It all started in the late 90s, a hyper-focused kid determined to craft the snazziest Neopets page the web had ever seen. Spoiler alert: that kid was me. Using just HTML and CSS that I picked up after school, I dove headfirst into coding. Turns out, my thirst for creativity and insatiable curiosity were a perfect storm for a budding programmer.
                </p>
                <p>
                    Fast forward through a decade of veterinary adventures where I became a pro at juggling multiple priorities, clearly communicating complex situations, and creating order from the chaos. But that itch to build rad digital stuff never quite went away. My fingers were tugging me back to the keyboard, craving the satisfaction of transforming lines of code into something beautifully functional.
                </p>
                <p>
                    You might think that's quite a jump, from prescribing pet meds to programming web apps, but I'm here to tell you the two actually have more in common than you'd expect. Let's just say, whether troubleshooting buggy code or diagnosing a sick pup, my creative problem-solving skills are top-notch. Both fields demand unshakable resilience, adaptability, and an unrelenting curiosity that leaves no stone unturned.

                </p>
                <p>
                    I've circled back to unleashing my tech talents and creative energies as a full-fledged software engineer. With a knack for crafting intuitive, functional web apps and nifty user experiences, I'm ready to merge my eye for design with my coding gumption. Back to my roots of combining vision with execution to build digital solutions that people genuinely enjoy using.
                </p>
                <p>
                    When I'm not stuck to my desk, you can usually find me stuck to a fantasy book, or in the kitchen attempting to satisfy my inner foodie. I can also be spotted nurturing my jungle of (overly dramatic) houseplants, pretending I have a green thumb.
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