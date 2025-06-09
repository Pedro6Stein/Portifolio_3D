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
        texture: '/textures/project/project3.mp4',
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
        texture: '/textures/project/project4.mp4',
        logo: '/assets/LogoV.png',

        logoStyle: {
            backgroundColor: 'rgba(192, 192, 192, 0.3)', // Cinza prateado com 30% de transparência
            border: '0.2px solid rgba(208, 213, 221, 0.5)', // Borda sutil
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)' // Se quiser remover o tom esverdeado, ajuste isso
        },
        spotlight: '/assets/spotlight3.png',
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
    {
        title: 'Mobile Product Manager - VCAT',
        desc: 'A mobile application developed with React Native and TypeScript using Expo Go, focused on product management and an interactive catalog. The app integrates with the SAP API and follows a clean architecture, allowing scalable feature additions without modifying the core codebase.',
        subdesc: 'I was responsible for the architecture and development of this mobile app using only React Native and Tailwind. The clean and modular structure ensures maintainability and future scalability, while SAP integration brings real-time product data into the app.',
        href: 'https://vcat.com.br/app',
        texture: '/textures/project/project6.mp4',
        logo: '/assets/LogoV.png',

        logoStyle: {
            backgroundColor: 'rgba(192, 192, 192, 0.3)',
            border: '0.2px solid rgba(208, 213, 221, 0.5)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)'
        },
        spotlight: '/assets/spotlight3.png',
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
                name: 'Tailwind CSS',
                path: '/assets/tailwindcss.png',
            },
             {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
        ],
    }


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
        name: 'Instituto Federal',
        pos: 'Physics Tutor & Project Developer',
        duration: 'High School',
        title: "During high school, I had the privilege of being a Physics tutor, helping fellow students understand key concepts. " +
            "I also developed several projects, including a website, a mobile app, and a sensor-based device using ESP32, which was showcased at the Bragantec science fair.",
        icon: '/assets/IFlogo.png',
        animation: 'idle',
    },
    {
        id: 2,
        name: 'SunLab Power',
        pos: 'Administrative & Technical Assistant',
        duration: '2024 - 2025',
        title: "As an administrative and technical assistant, I helped the company develop detailed documentation and conducted employee performance research based on data analysis principles. " +
            "I created reports to support decision-making and also worked on the electronics side, assisting with hardware assembly.",
        icon: '/assets/SunLab.jpg',
        animation: 'victory',

    },
    {
        id: 3,
        name: 'VCAT',
        pos: 'Junior Developer',
        duration: '2025 - Present',
        title: "Development of a mobile application in React Native and TypeScript for product management and interactive catalog.\nImplementation of unit tests for meshes in Three.js, ensuring integrity and quality of 3D models.\nCreation of REST endpoints in Java (Spring Boot), defining controllers and services for internal systems integration.\nCode version control with Git, promoting good commit and branching practices.\nAdjustments and modeling of 3D assets in Blender, optimizing performance and visual consistency in applications.",
        icon: '/assets/LogoV.png',
        animation: 'clapping'

    },
];