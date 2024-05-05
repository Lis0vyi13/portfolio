import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

import { Tilt } from "react-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Description from "../ui/Description";

import SectionWrapper from "../hoc/SectionWrapper";

import { ProjectsText, projects } from "../constants";

const ProjectCard = ({ title, description, img, url, i, tags }) => {
  return (
    <a href={url}>
      <motion.div
        variants={fadeIn("", "", i * 0.2, 0.3)}
        viewport={{ once: true, amount: 0.15 }}
        className="w-full h-full rounded-[20px]"
      >
        <Tilt className="h-full" options={{ max: 45, scale: 1, speed: 450 }}>
          <div className="card-bg rounded-[20px] p-4 h-full flex flex-col">
            <div className="relative w-full min-h-[300px] md:min-h-[230px]">
              <LazyLoadImage
                className={"w-full h-full bg-cover object-cover rounded-2xl"}
                src={img}
                height="100%"
                width="100%"
                alt={title}
              />
              <div className="absolute right-2 top-2">
                <img
                  width={35}
                  height="auto"
                  src="https://skillicons.dev/icons?i=github"
                  alt=""
                />
              </div>
            </div>
            <h3 className="text-white text-[22px] mt-4 font-bold">{title}</h3>
            <p className="mt-4 text-secondary text-[14px]">{description}</p>

            {tags.length > 0 && (
              <div className="flex h-full pb-1 flex-wrap mt-5 gap-3 grow">
                {tags.map((tag) => (
                  <p
                    className="text-[14px] font-bold"
                    key={tag.name}
                    style={{ color: tag.color }}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </Tilt>
      </motion.div>
    </a>
  );
};

const ProjectsInitial = () => {
  return (
    <div className="container lg-container">
      <motion.div
        variants={fadeIn("up", "", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Title text={ProjectsText.title} />
        <Subtitle text={ProjectsText.subtitle} />
        <Description text={ProjectsText.description} />
      </motion.div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 px-1 mt-6">
        {projects.map((card) => {
          const { key, ...data } = card;
          return <ProjectCard key={key} i={key} {...data} />;
        })}
      </section>
    </div>
  );
};

const Projects = SectionWrapper(ProjectsInitial, "projects", {
  marginTop: "75px",
});
export default Projects;
