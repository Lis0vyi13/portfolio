import{r as a,L as r}from"./index-CgJGauO3.js";import{n as o,m as c,f as m}from"./index-DXQHTDFW.js";const p=({list:n})=>{const[t,l]=a.useState(!1);return React.createElement("div",{onClick:()=>{l(s=>!s)},className:"burger mdLg:hidden block relative cursor-pointer p-2"},React.createElement("div",{className:"relative w-[20px] h-[20px] scale-x-[-1]"},React.createElement("span",{className:`absolute top-0 h-[2.5px] bg-white rounded-10 w-1/2 transition-all duration-300 ${t&&"rotate-45 w-[140%] origin-left"}`}),React.createElement("span",{className:`absolute top-1/2 h-[2.5px] bg-white rounded-10 w-full transition-opacity duration-300 ${t&&"opacity-0"}`}),React.createElement("span",{className:`absolute top-full h-[2.5px] bg-white rounded-10 w-3/4 transition-all duration-300 ${t&&"-rotate-45 origin-left w-[140%]"}`})),React.createElement("div",{className:"transition-all burger-menu absolute right-0 mt-6 min-w-[150px] rounded-xl "+(t?"opacity-1 pointer-events-auto":"opacity-0 pointer-events-none")},React.createElement("ul",{className:"burger-menu__content text-left flex flex-col gap-4 p-4"},n)))},w=()=>{const[n,t]=a.useState(""),[l,s]=a.useState(!1);a.useEffect(()=>{const e=()=>{s(window.scrollY>50)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e,{passive:!0})},[]);const i=a.useMemo(()=>o.map(e=>React.createElement("li",{key:e.key,className:"navbar__link transition-all hover:text-white",onClick:()=>t(e.title)},React.createElement("a",{className:n===e.title?"text-white":"text-secondary",href:e.url},e.title))),[n]);return React.createElement(c.header,{variants:m("down","",.05,.25),initial:"hidden",whileInView:"show",className:`navbar sticky top-0 z-50 ${l?"bg-main":"bg-transparent"} `},React.createElement("div",{className:"container"},React.createElement("nav",{className:"navbar__content py-3 flex justify-between gap-[40px] items-center"},React.createElement("div",{className:"navbar__logo"},React.createElement(r,{className:"logo inline-flex items-center gap-2 sm:w-[333px]",to:"/portfolio/",onClick:()=>window.scrollTo(0,0)},React.createElement("img",{width:60,height:"auto",src:"/logo-violet.webp",alt:"logo"}),React.createElement("div",{className:"logo-text transition-all flex capitalize font-bold"},React.createElement("h1",null,"Lisovyi  "),React.createElement("span",{className:"sm:block hidden"},"| Frontend Developer")))),React.createElement("ul",{className:"mdLg:flex hidden navbar__links flex-wrap justify-end items-center gap-8"},i),React.createElement(p,{list:i}))))};export{w as default};
