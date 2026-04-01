import { BsDropbox, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbBrandNetflix } from "react-icons/tb";
import { FaShopify } from "react-icons/fa";
import {
  Bootstrap,
  Brainwave,
  Certificate,
  CSS,
  Dental,
  Figma,
  Hoobank,
  Html,
  JQuery,
  Js,
  lightPortfolio,
  Portfolio,
  React,
  Tailwind,
  Ts,
  User1,
  User2,
  User3,
  User4,
  VirtualR,
  FAQ,
  WebHeader,
  AuthForm,
} from "../assets/images";
import {
  MdApi,
  MdBugReport,
  MdDeveloperMode,
  MdSettings,
} from "react-icons/md";
import { SiFrontendmentor } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";

export const Companies_logos = [
  {
    icon: BsDropbox,
    lable: "DropBox",
  },
  {
    icon: TbBrandNetflix,
    lable: "Netflex",
  },
  {
    icon: BsInstagram,
    lable: "Instagram",
  },
  {
    icon: FaShopify,
    lable: "Shopify",
  },
  {
    icon: BsWhatsapp,
    lable: "Whatsapp",
  },
];

export const tools = [
  {
    icon: Figma,
    name: "Figma",
    usage: "Design tool",
  },
  {
    icon: Html,
    name: "HTML",
    usage: "Web Structure",
  },
  {
    icon: CSS,
    name: "CSS",
    usage: "User Interface",
  },
  {
    icon: Bootstrap,
    name: "Bootstrap",
    usage: "CSS Framework",
  },
  {
    icon: Js,
    name: "JavaScript",
    usage: "Interaction",
  },
  {
    icon: Ts,
    name: "TypeScript",
    usage: "Strong JS",
  },
  {
    icon: Tailwind,
    name: "Tailwind",
    usage: "CSS Framework",
  },
  {
    icon: React,
    name: "React",
    usage: "Js library",
  },
  {
    icon: JQuery,
    name: "JQery",
    usage: "Js library",
  },
];

export const ServicesInfo = [
  {
    icon: MdDeveloperMode,
    title: "Web Development",
    desc: `I build modern, fast, and responsive websites using the latest technologies.
My workflow is focused on clean code, smooth performance, and scalable structure using React, JavaScript, and Tailwind CSS.
`,
  },
  {
    icon: SiFrontendmentor,
    title: "Front-End UI / UX Design",
    desc: `I build modern, fast, and responsive websites using the latest technologies.
My workflow is focused on clean code, smooth performance, and scalable structure using React, JavaScript, and Tailwind CSS.
`,
  },
  {
    icon: MdSettings,
    title: "Component-Based Development",
    desc: `I build clean, reusable, and scalable components using React.
This ensures a well-organized codebase and a professional front-end structure.
`,
  },
  {
    icon: MdBugReport,
    title: "Optimization & Bug Fixing",
    desc: `I improve slow websites, fix errors, and optimize UI/UX for better performance.
Your site will run smoothly, load faster, and feel more professional.
`,
  },
  {
    icon: MdApi,
    title: "API Integration",
    desc: `I integrate REST APIs into websites—
fetching, displaying, and managing data efficiently while keeping the UI smooth.
`,
  },
  {
    icon: CgPerformance,
    title: "Performance Optimization",
    desc: `Improving Website performance to make it load faster, run, smoother and deliver a better user experience.`,
  },
];

export const projects_info = [
  {
    darkimage: Certificate,
    lightimage: Certificate,
    type: "website",
    theme: true,
    title: "React Certificate",
    desc: "A specialized platform designed to guide developers through structured, industry-level React certification preparation.",
    link: "https://react-certificate-green.vercel.app/",
  },
  {
    darkimage: Hoobank,
    lightimage: Hoobank,
    type: "website",
    theme: true,
    title: "Hoobank",
    desc: "A fully responsive fintech interface built to showcase seamless digital banking services with a clean user-focused design.",
    link: "https://hoo-bank-woad.vercel.app/",
  },
  {
    darkimage: Brainwave,
    lightimage: Brainwave,
    type: "website",
    theme: true,
    title: "Brainwave",
    desc: "A modern AI-driven landing page crafted to highlight advanced digital innovation and futuristic user experiences.",
    link: "https://brain-wave-self.vercel.app/",
  },
  {
    darkimage: VirtualR,
    lightimage: VirtualR,
    type: "website",
    theme: true,
    title: "VirtualR",
    desc: "A visually immersive VR landing page introducing next-generation virtual experiences through elegant, modern UI design.",
    link: "https://virtual-r-one-kohl.vercel.app/",
  },
  {
    darkimage: Dental,
    lightimage: Dental,
    type: "website",
    theme: true,
    title: "Dental",
    desc: "A professional healthcare website created to present dental services with clarity, trust, and a patient-friendly layout.",
    link: "https://dental-two-sandy.vercel.app/",
  },
  {
    darkimage: Portfolio,
    lightimage: lightPortfolio,
    type: "website",
    theme: true,
    title: "Portfolio",
    desc: "A personal developer showcase designed to reflect my skills, creativity, and modern web-development craftsmanship.",
    link: "#",
  },
  {
    darkimage: FAQ,
    lightimage: FAQ,
    type: "mini",
    theme: true,
    title: "FAQs",
    desc: "This FAQ component is a fully interactive and reusable built in react, designed to deliver smooth expand-collapse transition and clean structure.",
    link: "#",
  },
  {
    darkimage: AuthForm,
    lightimage: AuthForm,
    type: "mini",
    theme: true,
    title: "Authentication Form",
    desc: "The authentication form is a secure, responsive and validation-driven React feature that handles user login and registration with proper state management.",
    link: "#",
  },
  {
    darkimage: WebHeader,
    lightimage: WebHeader,
    type: "mini",
    theme: true,
    title: "Website Header",
    desc: "This website header is a modern, adaptive Header built with react, featuring a clean design, mobile-first responsiveness and interactive menu behavior.",
    link: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Amine ouali",
    role: "Software engineer",
    content:
      "Khalid consistently demonstrates strong problem-solving abilities and a deep understanding of software principles. His approach to building scalable and clean solutions reflects a level of maturity rare for developers at his stage.",
    rating: 3,
    image: User1,
  },
  {
    id: 2,
    name: "Amine ouali",
    role: "FrontEnd developer",
    content:
      "Khalid has an exceptional eye for detail and user experience. His React and UI work is clean, modern, and highly optimized — always delivering interfaces that feel smooth, intuitive, and professional.",
    rating: 3,
    image: User2,
  },
  {
    id: 3,
    name: "Max Nour",
    role: "BackEnd developer",
    content:
      "Working with Khalid was impressive; he writes structured, secure, and efficient backend logic. His understanding of APIs, data flow, and system architecture makes every collaboration seamless.",
    rating: 4,
    image: User3,
  },
  {
    id: 4,
    name: "Abdullah",
    role: "FullStack developer",
    content:
      "Khalid brings complete ownership to a project — from front-end UI to back-end systems. His ability to align functionality with design and deliver end-to-end solutions makes him a reliable and highly capable full-stack developer.",
    rating: 5,
    image: User4,
  },
];
