import {mobile,backend,creator,web,javascript,
typescript,html,css,reactjs,tailwind,nodejs,mongodb,git,figma,docker,carrent,jobit,tripguide,threejs, grock, supabase, prisma} from "@/public/assets";

    const navLinks = [
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
        icon: supabase,
        },
        {
        name: "Prisma",
        icon: prisma,
        },
        {
        name: "git",
        icon: git,
        },
        {
        name: "figma",
        icon: figma,
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
        // {
        // testimonial:
        //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        // name: "Sara Lee",
        // designation: "CFO",
        // company: "Acme Co",
        // image: "https://randomuser.me/api/portraits/women/4.jpg",
        // },
    ];
    
    const projects = [
        {
        name: "Literacrypto Dev",
        description:
            "Web application that for our crypto class membership, there's so much opputunity like call coin, airdrop and many more.",
            tags: [
                {
                name: "Nextjs",
                color: "blue-text-gradient",
                },
                {
                name: "Supabase",
                color: "green-text-gradient",
                },
                {
                name: "Prisma",
                color: "pink-text-gradient",
                },
            ],
        image: carrent,
        source_code_link: "https://github.com/zecht12/literacrypto",
        },
        {
        name: "Zechtnime Dev",
        description:
            "Web application that for displaying anime images that includes fan art some 18+ images and many more.",
        tags: [
            {
            name: "Nextjs",
            color: "blue-text-gradient",
            },
            {
            name: "Supabase",
            color: "green-text-gradient",
            },
            {
            name: "Prisma",
            color: "pink-text-gradient",
            },
        ],
            image: jobit,
            source_code_link: "https://github.com/zecht12/Learning-2fa",
        },
    ];
    
    export { services, technologies, experiences, testimonials, projects, navLinks };