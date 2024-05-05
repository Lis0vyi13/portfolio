import { motion } from "framer-motion";
import { fadeIn, heroLine } from "../animations/motion";

import { HeroText } from "../constants";

import laptop_center from "/laptop/laptop_center.webp";
import laptop_left from "/laptop/laptop_left.webp";

const Hero = () => {
  return (
    <div className="relative min-h-[800px] mt-[-180px] sm:mt-[-155px]">
      <div className="hero-content h-full relative pt-[85px]">
        <div className="container overflow-x-hidden flex justify-between relative z-10">
          <div className="flex overflow-x-hidden absolute top-[130px] z-10 sm:left-[30px] md:left-[50px] lg:left-[100px] gap-[30px]">
            <div className="flex self-start flex-col justify-center items-center">
              <div className="rounded-full w-[20px] h-[20px] bg-violet" />
              <motion.div
                variants={heroLine()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="h-[220px] relative z-11 xs:h-[240px] sm:h-[270px] md:h-[300px] lg:h-[380px] w-[5px] violet-gradient"
              />
            </div>
            <motion.div
              variants={fadeIn("right", "", 0.05, 0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="pr-[15px] sm:pr-[40px]"
            >
              <h1 className="font-black text-[27px] xxs:text-[30px] xs:text-[40px] sm:text-[48px] md:text-[58px] lg:text-[68px]">
                Hi! I&apos;m&nbsp;
                <span className="text-violet text-[27px] xxs:text-[30px] xs:text-[40px] sm:text-[48px] md:text-[58px] lg:text-[68px]">
                  Olexandr
                </span>
              </h1>
              <h3 className="font-medium text-[16px] xxs:mt-2 xs:mt-0 xxs:text-[17.5px] xs:text-[19px] sm:text-[21px] md:text-[23px] lg:text-[26px] md:max-w-[700px] xl:max-w-[580px] max-w-[550px]">
                {HeroText.description}
              </h3>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("", "", 0.2, 1)}
            className="h-full w-full relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="pr-3 grid justify-center items-center xl:block">
              <div className="lg:mt-[200px] xl:mt-0 lg:mr-[-350px] xl:mr-[-540px] 2xl:mt-[-80px] pr-3">
                <img
                  className="scale-[0.6] hidden xl:block relative z-0"
                  src={laptop_left}
                />
              </div>
              <img
                className="min-w-[380px] ml-[10px] xs:ml-0 pt-[390px] xs:pt-[400px] self-center xs+:pt-[380px] xs+:min-w-[560px] xsSm:pt-[350px] sm:pt-[390px] sm:w-[560px] md:w-[600px] mdLg:w-[800px] mdLg:scale-[0.8] mdLg:pt-[350px] lg:scale-[0.9] lg:pt-[200px] block xl:hidden relative z-0"
                src={laptop_center}
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* поменять ноут на webp + поменять фон в контактах */}
      <a
        href="#about"
        className="absolute z-20 left-1/2 flex justify-center items-start cursor-pointer -translate-x-1/2 bottom-0 sm:bottom-[40px] md:bottom-[30px] mdLg:bottom-[120px] xl:bottom-[150px] xl:mt-[-130px] 2xl:mt-[-170px] rounded-3xl w-[34px] h-[60px] border-[3px] border-secondary"
      >
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 mt-[8px] rounded-full bg-secondary"
        />
      </a>
    </div>
  );
};

export default Hero;
