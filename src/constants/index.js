import { geek, gdsc} from "../assets/images";
import { 
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    react,
    tailwindcss,
    python,
    cpp,
    java,
    sklearn,
    pandas,
    pygame,
    minion,
    portfolio,
    nike
} from "../assets/icons";

export const skills = [

        {
        imageUrl: cpp,
        name: "cpp",
        type: "Language",
    },
    {
        imageUrl: java,
        name: "java",
        type: "Language",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Language",
    },
    {
        imageUrl: sklearn,
        name: "sklearn",
        type: "Library",
    },
    {
        imageUrl: pandas,
        name: "pandas",
        type: "Library",
    },
    {
        imageUrl: pygame,
        name: "pygame",
        type: "Library",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },


    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    


    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }

];

export const experiences = [

    {
        title: "Coding Tutor",
        company_name: "Geek Express",
        icon: geek,
        iconBg: "#FFFFFF",
        date: "oct 2022 - present",
        points: [
            "Taught coding principles and guided students in app and game development.",
            "Communicated complex concepts clearly.",
            "Created an engaging learning environment",
            "Facilitated hands-on coding projects for practical experience using different coding languages and platforms",
        ],
    },

    {
        title: "Google Developer Student Clubs Leader",
        company_name: "USEK-Zahle",
        icon: gdsc,
        iconBg: "#FFFFFF",
        date: "april 2022 - jan 2023",
        points: [
            "Collaborated with a diverse group of volunteers from different Universities to create Events for people who are interested in Google Technologies",
            "Collected and analyzed feedback from participants to continually improve the quality of the events",
        ],
    }
 

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Hani0101',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hani-abdel-ghani-612a9623b/',
    }
];

export const projects = [
    {
        iconUrl: minion,
        theme: 'btn-back-yellow',
        name: 'Movie Recommendation System',
        description: 'Developed a web application that helps users find movies that are similar to the films they enjoy watching.',
        link: 'https://github.com/Hani0101/Movie-Recommendation-System',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-green',
        name: '3D-Portfolio',
        description: 'This Portfolio that you are viewing right now. one of the most exciting projects I have ever worked on!',
        link: 'https://github.com/Hani0101/3D-web-Portfolio',
    },
    {
        iconUrl: nike,
        theme: 'white',
        name: 'Nike Landing Page',
        description: 'Designed and built a Website as a replica of the nike landing page.',
    },
 
];