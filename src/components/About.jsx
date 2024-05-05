import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

import SectionWrapper from "../hoc/SectionWrapper";

import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Description from "../ui/Description";

import { AboutText } from "../constants";

import lisovyi from "/me.webp";

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
      className="relative mb-[100px] mt-[-50px] pt-[50px] xs:mt-[-160px] xs:pt-[150px] xs+:mt-[-80px] sm:mt-[-80px] md:mt-[10px] mdLg:mt-[40px] lg:mt-[190px] md:pt-[60px] xl:mt-[-160px] xl:pt-[190px]"
    >
      <div className="container">
        <div className="flex lgXl:flex-row flex-col-reverse content-center items-center gap-7 lgXl:px-[100px]">
          <motion.div
            variants={fadeIn("up", "", 0.05, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Title text={AboutText.title} />
            <Subtitle text={AboutText.subtitle} />
            <motion.div variants={fadeIn("", "", 0.05, 0.4)}>
              <Description text={AboutText.description} />
            </motion.div>
          </motion.div>
          <motion.div className="w-full xs:w-auto">
            <motion.div
              variants={fadeIn("up", "", 0.25, 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="relative green-pink-gradient p-[3px] text-center rounded-[30px] shadow-card w-full"
            >
              <div className="stack-card-bg relative overflow-hidden bg-cover rounded-[30px] p-1 h-[420px] xs:h-[520px] w-full xs:w-[450px] flex justify-evenly items-center flex-col">
                <img
                  className="rounded-[30px] absolute"
                  width="100%"
                  height="520"
                  src={lisovyi}
                  alt="lisovyi"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
