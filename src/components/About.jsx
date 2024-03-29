import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

import SectionWrapper from "../hoc/SectionWrapper";

import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Description from "../ui/Description";

import { AboutText } from "../constants";

import lisovyi from "../assets/lisovyi.webp";

const About = () => {
  const about = useRef(null);

  useEffect(() => {
    const aboutParent = about.current.parentElement;
    aboutParent.classList.add("mt-[-170px]");
    aboutParent.classList.add("xs:mt-0");
  }, []);

  return (
    <section
      ref={about}
      className="relative mb-[100px] mt-[-100px] pt-[100px] xs:mt-[-10px] xs:pt-[150px] sm:mt-[20px] md:mt-[160px] md:pt-[90px] xl:mt-[-160px] xl:pt-[190px]"
    >
      <div className="container">
        <div className="flex lgXl:flex-row flex-col-reverse content-center items-center gap-7 lgXl:px-[100px]">
          <motion.div
            variants={fadeIn("up", "", 0.05, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Title text={AboutText.title} />
            <Subtitle text={AboutText.subtitle} />
            <motion.div variants={fadeIn("", "", 0.05, 0.4)}>
              <Description text={AboutText.description} />
            </motion.div>
          </motion.div>
          <div>
            <motion.div
              variants={fadeIn("up", "", 0.05, 0.4)}
              viewport={{ once: true, amount: 0.25 }}
              className="green-pink-gradient p-[2px] text-center rounded-[30px] shadow-card w-full xs:w-[450px] h-full"
            >
              <div className="stack-card-bg rounded-[30px] p-1 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  className="rounded-[30px]"
                  width="100%"
                  height="100%"
                  src={lisovyi}
                  alt="lisovyi"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
