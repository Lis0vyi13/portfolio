import telegram from "/telegram.svg";

export const navLinks = [
  { key: 1, title: "About", url: "#about" },
  { key: 2, title: "Stack", url: "#stack" },
  { key: 3, title: "Benefits", url: "#benefits" },
  { key: 4, title: "Projects", url: "#projects" },
  { key: 5, title: "Contact", url: "#contact" },
];

export const HeroText = {
  description:
    "I'm frontend developer specializing in creating captivating user interfaces and dynamic web applications. Passionate about blending creativity with functionality to deliver seamless digital experiences",
};

export const AboutText = {
  title: "Introduction",
  subtitle: "About me",
  description:
    "Hey, my name is Olexandr, and I'm a 20 years old Frontend Developer based in Poltava. I'm excited to share my passion for development and my drive to excel in this field. With a focus on JavaScript and the React framework, I'm confident that I bring a strong foundation for growth. I see myself in your company because I'm not just looking for a job - I'm seeking an opportunity to grow, develop, and make a real difference in the world of development. I'm ready to join your team and move forward together towards new heights of success.",
  stack: "Tech Stack",
};

export const StackText = {
  title: "What do i work with",
  subtitle: "Tech stack",
};
export const StackCards = [
  { key: 1, url: "https://skillicons.dev/icons?i=html", text: "HTML" },
  { key: 2, url: "https://skillicons.dev/icons?i=css", text: "CSS" },
  { key: 3, url: "https://skillicons.dev/icons?i=js", text: "JavaScript" },
  { key: 4, url: "https://skillicons.dev/icons?i=scss", text: "SCSS/SASS" },
  {
    key: 5,
    url: "https://skillicons.dev/icons?i=bootstrap",
    text: "Bootstrap",
  },
  { key: 6, url: "https://skillicons.dev/icons?i=tailwind", text: "Tailwind" },
  { key: 7, url: "https://skillicons.dev/icons?i=react", text: "React" },
  { key: 8, url: "https://skillicons.dev/icons?i=redux", text: "Redux" },
];

export const BenefitsText = {
  title: "Why should I be part of your team",
  subtitle: "Benefits",
};

export const experiences = [
  {
    i: 1,
    title: "Passion-Driven Performance",
    description:
      "I approach each project with a genuine enthusiasm for my work, viewing it as an opportunity to channel my talents and energy. By investing myself fully in every task, I strive to create outcomes that are not only technically proficient but also meaningful and inspiring. This dedication to my craft ensures that I consistently deliver results that exceed expectations and resonate with stakeholders.",
  },
  {
    i: 2,
    title: "Meticulous Attention to Detail",
    description:
      "One of my core strengths lies in my ability to pay meticulous attention to detail. Whether it's reviewing code line by line or ensuring the accuracy of project specifications, I prioritize precision and thoroughness in every aspect of my work. By maintaining a keen eye for detail, I can identify and rectify potential issues early in the process, ultimately contributing to the overall quality and success of the project.",
  },
  {
    i: 3,
    title: "Continuous Learning and Adaptability",
    description:
      "I believe that the key to staying relevant and effective in today's ever-evolving landscape is through continuous learning and adaptability. I actively seek out opportunities to expand my knowledge and skills, whether it's by taking on new challenges or staying updated on emerging technologies. This willingness to embrace change and learn from experiences enables me to adapt quickly to shifting priorities and requirements, ultimately positioning me to make valuable contributions to the success of the team and the organization as a whole.",
  },
];

export const ProjectsText = {
  title: "My work",
  subtitle: "Projects",
  description:
    "Below are demonstrations of my expertise and proficiency. Each showcase provides a concise overview of the project, accompanied by access to its code repository and live demonstrations. These websites underscore my capacity to tackle intricate challenges, adeptly navigate diverse technologies, and efficiently oversee project initiatives.",
};

export const projects = [
  {
    key: 1,
    title: "Weather App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, incidunt?",
    img: "./weather-app.webp",
    url: "https://github.com/Lis0vyi13/Weather-App",
    tags: [
      { name: "Javascript", color: "#f0dc55" },
      { name: "OpenWeatherAPI", color: "#eb6e4b" },
      { name: "Tailwind", color: "#38bdf8" },
    ],
  },
  {
    key: 2,
    title: "Marvel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, incidunt?",
    img: "./marvel.webp",
    url: "https://github.com/Lis0vyi13/marvel",
    tags: [
      { name: "React", color: "#66dbfb" },
      { name: "MarvelAPI", color: "#ee242b" },
      {
        name: "SCSS",
        color: "#d1699d",
      },
    ],
  },
  {
    key: 3,
    title: "Garden",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, incidunt?",
    img: "./garden.png",
    url: "https://github.com/Lis0vyi13/garden",
    tags: [
      { name: "React", color: "#66dbfb" },
      { name: "Redux", color: "#754cb9" },
      { name: "Tailwind", color: "#38bdf8" },
      { name: "Stripe", color: "#6860ff" },
    ],
  },
];

export const ContactText = {
  title: "Get in touch",
  subtitle: "Contact",
};

export const ContactFormText = {
  inputName: {
    label: "Your name",
    name: "name",
    placeholder: "What is your name?",
  },
  inputEmail: {
    label: "Your email",
    name: "email",
    placeholder: "What is your email?",
    type: "email",
  },
  textAreaMessage: {
    label: "Your message",
    name: "message",
    placeholder: "What do you want to say?",
  },
  submitButton: "Send",
};

export const ContactIcons = [
  {
    name: "telegram",
    href: "https://web.telegram.org/k/#@lisovyi13",
    src: telegram,
  },
];
