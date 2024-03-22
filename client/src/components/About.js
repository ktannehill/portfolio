import React from 'react'
import headshot from "../assets/headshot.jpg"
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiCss3 } from "react-icons/si";

const SKILLS = ["React", "JavaScript", "Python", "SQL", "Flask"]

const About = () => {
  return (
    <div id="container">
        <div>
            <h1>I'm Kat Tannehill</h1>
            <img src={headshot} alt="Hi, I'm Kat!" />
        </div>
        <div className="dark-green-bg">
            <p>
                Brownie candy liquorice tart gummies danish soufflé. Brownie wafer gummi bears macaroon jelly-o pastry sesame snaps chupa chups wafer. Pie tiramisu bear claw topping cupcake cotton candy donut chupa chups. Fruitcake carrot cake candy marshmallow chocolate cake. Candy canes sugar plum dragée jelly-o cookie candy. Dragée gummies bonbon chocolate bar jelly macaroon cupcake danish. Donut dessert cheesecake sesame snaps oat cake caramels chupa chups danish cake. Brownie cake sesame snaps icing lollipop macaroon chupa chups oat cake candy canes. Oat cake jelly beans jelly beans jujubes lemon drops jelly beans. Bear claw gingerbread sweet roll sesame snaps oat cake candy canes pudding macaroon danish. Biscuit wafer topping icing icing pastry chocolate donut pastry. Gingerbread chocolate sweet roll pudding shortbread jelly beans.
            </p>
        </div>
    </div>
  )
}

export default About