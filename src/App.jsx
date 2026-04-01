import { useState, useEffect } from "react";
// import "./App.css";
import Hero from "./Components/Hero";
import { BiMoon, BiSun, BiUpArrowAlt } from "react-icons/bi";
import Companies from "./Components/Companies";
import EssentialTools from "./Components/EssentialTools";
import About from "./Components/About";
import Service from "./Components/Service";
import MyProjects from "./Components/MyProjects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { ScrollParallax } from "react-just-parallax";
import Button from "./Components/Common/Button";
import Anchor from "./Components/Common/anchor";
import { Route, Routes } from "react-router-dom";
import { testimonials as initialTestimonials } from "../src/constant";
import TestimonialFormWrapper from "./Components/Common/TestimonialFormWrapper";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const AddTestimonial = (newTestimonial) => {
    setTestimonials((prev) => [...prev, newTestimonial]);
  };
  return (
    <>
      <div
        id="start"
        className="space-y-30 bg-white dark:bg-black overflow-hidden"
      >
        <Hero />
        <ScrollParallax>
          <Companies />
        </ScrollParallax>
        <About />
        <Service />
        <EssentialTools />
        <MyProjects darkMode={darkMode} />
        <Testimonials testimonials={testimonials} />
        <Routes>
          <Route
            path="/testimonialForm"
            element={<TestimonialFormWrapper onSave={AddTestimonial} />}
          />
        </Routes>
        <Contact />
        <Footer />
        <div className="relative">
          <Button
            label={darkMode ? <BiSun /> : <BiMoon />}
            classes={`fixed bg-black dark:bg-white text-white dark:text-black rounded-full text-3xl p-2 right-5 bottom-5 animate-pulse cursor-pointer`}
            onClick={handleToggleTheme}
          />
          <Anchor
            label={<BiUpArrowAlt />}
            classes={`fixed bg-black dark:bg-white text-white dark:text-black rounded-full text-3xl p-2 right-5 bottom-20 animate-pulse cursor-pointer`}
            href="#start"
          />
        </div>
      </div>
    </>
  );
}

export default App;
