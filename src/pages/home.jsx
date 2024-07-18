import React from "react";
import NaveBar from "../Main-components/navebar/naveBar";
import FrontContent from "../Main-components/frontContent/frontContent";
import Footer from "../Main-components/footer/footer";
import Skills from "../Main-components/Skills/Skills";
import Projects from "../Main-components/projects/Projects";
import { FloatingNavDemo } from "../Ui-Components/Demos/FloatingNavDemo";
import {
  Element,
  animateScroll as scroll,
} from "react-scroll";
import { AnimatedPinDemo } from "../Ui-Components/Demos/AnimatedPinDemo";

const Home = () => {
  return (
    <div>
      <FloatingNavDemo />
      <Element name="/" className="element"><NaveBar /></Element>
      <Element name="/home" className="element"><FrontContent /></Element>
      <Element name="/skills" className="element"><Skills /> </Element>
      <Element name="/projects" className="element"><Projects /></Element>
      <Element name="/resume" className="element"><AnimatedPinDemo /></Element>
      <Element name="/contact" className="element"><Footer /></Element>
    </div>
  );
};

export default Home;
