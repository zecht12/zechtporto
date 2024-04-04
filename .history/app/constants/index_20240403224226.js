import {mobile,backend,creator,web,javascript,
typescript,html,css,reactjs,tailwind,nodejs,mongodb,git,figma,dockercarrent,jobit,tripguide,threejs, grock} from "@/public/assets";

    export const navLinks = [
        {
        id: "about",
        title: "About",
        },
        {
        id: "work",
        title: "Work",
        },
        {
        id: "contact",
        title: "Contact",
        },
    ];
    
    const services = [
        {
        title: "Web Developer",
        icon: web,
        },
        {
        title: "React Native Developer",
        icon: mobile,
        },
        {
        title: "Backend Developer",
        icon: backend,
        },
        {
        title: "3D Artist",
        icon: creator,
        },
    ];
    
    const technologies = [
        {
        name: "HTML 5",
        icon: html,
        },
        {
        name: "CSS 3",
        icon: css,
        },
        {
        name: "JavaScript",
        icon: javascript,
        },
        {
        name: "TypeScript",
        icon: typescript,
        },
        {
        name: "React JS",
        icon: reactjs,
        },
        {
        name: "Tailwind CSS",
        icon: tailwind,
        },
        {
        name: "Node JS",
        icon: nodejs,
        },
        {
        name: "MongoDB",
        icon: mongodb,
        },
        {
        name: "Supabase",
        icon: mongodb,
        },
        {
        name: "Prisma",
        icon: mongodb,
        },
        {
        name: "Three JS",
        icon: threejs,
        },
        {
        name: "git",
        icon: git,
        },
        {
        name: "figma",
        icon: figma,
        },
        {
        name: "docker",
        icon: docker,
        },
    ];
    
    const experiences = [
        {
        title: "React.js Developer",
        company_name: "Grock Revolution",
        icon:grock,
        iconBg: "#383E56",
        date: "December 2022 - January 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
        },
        {
        title: "Fullstack Next Js Developer",
        company_name: "Grock Revolution",
        icon: grock,
        iconBg: "#383E56",
        date: "January 2023 - October 2024",
        points: [
            "Developing and maintaining web applications using Nextjs and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Making IrisPerfume website bussiness.",
            "Implementing Web3 Blockchain on nextjs application for securing data and transparent process.",
        ],
        },
        // {
        //     title: "Fullstack Web3 Developer Using nextjs",
        //     company_name: "",
        //     icon:"",
        //     iconBg: "#E6DEDD",
        //     date: "January 2023 - Now",
        //     points: [
        //         "Developing and maintaining web applications using Nextjs and other related technologies.",
        //         "Implementing responsive design and ensuring cross-browser compatibility.",
        //         "Implementing Web3 Blockchain on nextjs application for securing data and transparent process.",
        //     ],
        // },
    ];
    
    const testimonials = [
        {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        },
    ];
    
    const projects = [
        {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
            name: "react",
            color: "blue-text-gradient",
            },
            {
            name: "mongodb",
            color: "green-text-gradient",
            },
            {
            name: "tailwind",
            color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
        },
        {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
            name: "react",
            color: "blue-text-gradient",
            },
            {
            name: "restapi",
            color: "green-text-gradient",
            },
            {
            name: "scss",
            color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
        },
        {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
            name: "nextjs",
            color: "blue-text-gradient",
            },
            {
            name: "supabase",
            color: "green-text-gradient",
            },
            {
            name: "css",
            color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
        },
    ];
    
    export { services, technologies, experiences, testimonials, projects };