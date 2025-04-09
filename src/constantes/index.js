export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Form - An Electrical Voltage Converter',
        desc: 'This was one of the first projects I worked on. ' +
            'I created this tool to assist my colleagues at the company where I worked. ' +
            'It efficiently converts voltage, power, and current, making electrical calculations easier and more accessible.',
        subdesc:
            "Built as a modern front-end application using React and Vite, this project " +
            "is designed for optimal performance and developer experience, leveraging HMR and an efficient build system.",

        href: 'https://github.com/Pedro6Stein/CircuitosComReact',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#1A233B', // Um azul escuro
            border: '0.2px solid #22304A', // Azul ligeiramente mais claro para o contorno
            boxShadow: '0px 0px 60px 0px rgba(74, 144, 226, 0.5)', // Sombra azul com 50% de opacidade
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Vite + React',
                path: 'assets/vite.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
            {
                id: 4,
                name: 'CSS',
                path: '/assets/css-3.png',
            },
        ],
    },
    {
        title: 'IoT-Based Stress Monitoring System for Students',
        desc: 'This project proposes an IoT solution to monitor stress levels in high school students at ' +
            'IFSP - Campus Bragança Paulista. Using a cardiovascular sensor, heart rate data ' +
            'is collected, stored in the cloud, and displayed on a mobile app with graphs and alerts.',
        subdesc:
            'The system aims to support the Socio-Pedagogical team in promoting student well-being ' + 'by identifying stress' +
            ' patterns and providing actionable insights. It combines IoT, cloud computing, ' +
            'and mobile technologies to create a comprehensive solution for stress management ' +
            'in educational environments.',
        href: 'https://feirabragantec.com.br/2023/projeto.php?numero=INF031',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/logo-instituto-vertical.png',
        logoStyle: {
            backgroundColor: '#dbefdc',
            border: '0.2px solid #4CAF50',
            boxShadow: '0px 0px 60px 0px #4CAF50',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Figma',
                path: '/assets/figma.svg',
            },
            {
                id: 2,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
            {
                id: 3,
                name: 'Html',
                path: '/assets/html.png',
            },
            {
                id: 4,
                name: 'CSS',
                path: '/assets/css-3.png',
            },
        ],
    },
    {
        title: 'Avatar - Project with Three.js',
        desc: 'A dynamic web platform that showcases 3D models of pontoon boats, allowing users to explore and customize them in an interactive environment. The project leverages Three.js to deliver a seamless and visually engaging experience, making boat customization intuitive and immersive.',
        subdesc: 'I was responsible for the maintenance and implementation of key features, such as camera switching buttons, improvements to 3D models, and overall upkeep of the Avatar website, ensuring a high-performance and user-friendly experience.',
        href: 'https://vcat.com.br/avatar/alvorada-palace',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/LogoV.png',

        logoStyle: {
            backgroundColor: 'rgba(192, 192, 192, 0.3)', // Cinza prateado com 30% de transparência
            border: '0.2px solid rgba(208, 213, 221, 0.5)', // Borda sutil
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)' // Se quiser remover o tom esverdeado, ajuste isso
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Vite + React',
                path: 'assets/vite.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
            {
                id: 4,
                name: 'Three.Js',
                path: '/assets/3js.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'VCAT | Avatar',
        pos: 'Junior Developer',
        duration: '2025 - Present',
        title: "As a Junior Web Developer, I assist full-stack developers in their tasks, focusing on maintaining and enhancing the Avatar website. My role involves implementing new interactive elements, optimizing 3D model rendering, and ensuring a smooth user experience.",
        icon: '/assets/LogoV.png',
        animation: 'build',
    },
];