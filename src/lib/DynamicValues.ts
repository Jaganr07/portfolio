import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";

class DynamicValues {
    static initialInformation: IInitialInformation = {
        name: "Jaganathan R",
        occupation: "Software Engineer",
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send?phone=9344331605"
        },

    ]

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: "Jaganathan R",
                    logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                },
                {
                    title: "Student",
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png"
                },
                {
                    title: "Languages",
                    desc: "English,Tamil,Telugu",
                    logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png"
                },
                {
                    title: "Nationality",
                    desc: "Indian",
                    logo: "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/in.svg"
                },
                {
                    title: "Resume",
                    desc: "Click the link icon to view/download",
                    link: "https://drive.google.com/file/d/1nc8VqbQTNKtOKKeCpEh09kJhRFa3SuK7/view?usp=sharing",
                    logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png"
                }
            ]
        },
    ]

    static skills: Array<ITitledListItem> = [
        {
            text: "Programming / Markup Languages",
            arr: [
                {
                    title: 'C',
                    logo: 'https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png',
                },
                {
                    title: 'Java',
                    logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
                },
                {
                    title: 'Python',
                    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
                },
                {
                    title: 'JavaScript',
                    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                },
                {
                    title: 'HTML',
                    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                },
                {
                    title: 'CSS',
                    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
                },
            ]
        },
        {
            text: "Databases",
            arr: [
                {
                    title: 'MongoDB',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png'
                },
                {
                    title: 'SQL',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/ffeb437f-0d63-40e5-9bc3-041d5715d67e',
                },
            ]
        },
        {
            text: "Libraries / Frameworks / Techs",
            arr: [
                {
                    title: 'ReactJS',
                    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                },
                {
                    title: 'React Native',
                    logo: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg'
                },
                {
                    title: 'Firebase',
                    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
                },
                {
                    title: 'Flask',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/2183bb2b-7680-49f1-a626-b1f647e7d656'
                },
                {
                    title: 'Git',
                    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                },
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png'
                },

                {
                    title: 'Expo',
                    logo: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg'
                },

            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'VS Code',
                    logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png'
                },
                {
                    title: 'Figma',
                    logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
                },
                {
                    title: 'Postman',
                    logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
                },
                {
                    title: 'Visily AI',
                    logo: 'https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/vi.svg'
                },
                {
                    title: 'XAMPP',
                    logo: 'https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/xampp-svgrepo-com.svg'
                },
            ]
        },
    ]

    static projects: Array<ITitledListItem> = [
        {
            text: "Web and Mobile Apps",
            arr: [
                {
                    title: "FitTrip",
                    link: "https://github.com/Jaganr07/Hackera_FitTrip.git",
                    logo: "https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/fittrip.svg",
                    desc: "FitTrip is a smart gym mobile booking app designed for travelers who don’t want to miss workouts while on vacation or work trips",
                },
                {
                    title: "GiveBites",
                    link: "https://github.com/Jaganr07/BITSS.git",
                    logo: "https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/text%20(1).svg",
                    desc: "An app to donate meals easily and support NGOs in fighting hunger. ",
                },
                {
                    title: "Online Debate and Voting System",
                    link: "https://github.com/Jaganr07/Online-Debate-and-Voting-System.git",
                    logo: "https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/8393149.svg",
                    desc: "A web app that enables users to participate in debates, share opinions, and cast votes in a transparent and interactive way.",
                },
                {
                    title: "Bus Seating Capacity Monitoring System",
                    link: "https://github.com/Jaganr07/Bus-Seating-Capacity-Monitoring-System.git",
                    logo: "https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/5030991.svg",
                    desc: "An IoT-based solution using sensors and ESP8266 to track real-time seat availability in buses, improving passenger convenience and reducing overcrowding.",
                },
            ]
        }, 
        {
            text: "Extension",
            arr: [
                {
                    title: "Smart Email Writer",
                    link: "https://github.com/Jaganr07/Email_Writer.git",
                    logo: "https://raw.githubusercontent.com/Jaganr07/Email_Writer/refs/heads/master/email-writer-ext/gamil.svg",
                    desc: "Smart Email Writer is an AI-powered application that generates professional email replies in a chosen tone, helping users save time while maintaining a polished and human-like communication style.",
                },
            ]
        },
    ]

    static contacts: Array<ITitledListItem> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'WhatsApp',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://api.whatsapp.com/send?phone=+919344331605',
                    desc: "+919344331605"
                },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'jaganr2005@gmail.com',
                    link: 'mailto:jaganr2005@gmail.com'
                },
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png',
                    link: 'https://github.com/Jaganr07'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/jaganr2005'
                },
            ]
        },
        
    ]
}

// 
// Dont change anything below this line
// 
export const combinedInformation: ICombinedInformation = {
    initialInformation: DynamicValues.initialInformation,
    directMessageItems: DynamicValues.directMessageItems,
    routes: [
        {
            name: "About",
            items: DynamicValues.about,
        },
        {
            name: "Skills",
            items: DynamicValues.skills,
        },
        {
            name: "Projects",
            items: DynamicValues.projects,
        },
        {
            name: "Contact",
            items: DynamicValues.contacts,
        },
    ]
}