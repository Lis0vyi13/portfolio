import{r as a,j as e,L as r}from"./index-BNodiQA0.js";import{n as c,m as d,f as p}from"./index-Dh5WvrK4.js";const x=({list:n})=>{const[t,l]=a.useState(!1),o=()=>{l(i=>!i)};return e.jsxs("div",{onClick:o,className:"burger mdLg:hidden block relative cursor-pointer p-2",children:[e.jsxs("div",{className:"relative w-[20px] h-[20px] scale-x-[-1]",children:[e.jsx("span",{className:`absolute top-0 h-[2.5px] bg-white rounded-10 w-1/2 transition-all duration-300 ${t&&"rotate-45 w-[140%] origin-left"}`}),e.jsx("span",{className:`absolute top-1/2 h-[2.5px] bg-white rounded-10 w-full transition-opacity duration-300 ${t&&"opacity-0"}`}),e.jsx("span",{className:`absolute top-full h-[2.5px] bg-white rounded-10 w-3/4 transition-all duration-300 ${t&&"-rotate-45 origin-left w-[140%]"}`})]}),e.jsx("div",{className:`transition-all burger-menu absolute right-0 mt-6 min-w-[150px] rounded-xl ${t?"opacity-1 pointer-events-auto":"opacity-0 pointer-events-none"}`,children:e.jsx("ul",{className:"burger-menu__content text-left flex flex-col gap-4 p-4",children:n})})]})},m=""+new URL("../logo-violet.webp",import.meta.url).href,v=()=>{const[n,t]=a.useState(""),[l,o]=a.useState(!1);a.useEffect(()=>{const s=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s,{passive:!0})},[]);const i=a.useMemo(()=>c.map(s=>e.jsx("li",{className:"navbar__link transition-all hover:text-white",onClick:()=>t(s.title),children:e.jsx("a",{className:n===s.title?"text-white":"text-secondary",href:s.url,children:s.title})},s.key)),[n]);return e.jsx(d.header,{variants:p("down","",.05,.25),initial:"hidden",whileInView:"show",className:`navbar sticky top-0 z-50 ${l?"bg-main":"bg-transparent"} `,children:e.jsx("div",{className:"container",children:e.jsxs("nav",{className:"navbar__content py-3 flex justify-between gap-[40px] items-center",children:[e.jsx("div",{className:"navbar__logo",children:e.jsxs(r,{className:"logo inline-flex items-center gap-2 sm:w-[333px]",to:"/portfolio/",onClick:()=>window.scrollTo(0,0),children:[e.jsx("img",{width:60,height:"auto",src:m,alt:"logo"}),e.jsxs("div",{className:"logo-text transition-all flex capitalize font-bold",children:[e.jsx("h1",{children:"Lisovyi  "}),e.jsx("span",{className:"sm:block hidden",children:"| Frontend Developer"})]})]})}),e.jsx("ul",{className:"mdLg:flex hidden navbar__links flex-wrap justify-end items-center gap-8",children:i}),e.jsx(x,{list:i})]})})})};export{v as default};
