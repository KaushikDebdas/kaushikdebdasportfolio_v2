// Navigation Data
const navigationItems = [
    { "label": "Home", "href": "#home", "icon": "fas fa-home" },
    { "label": "Projects", "href": "#projects", "icon": "fas fa-project-diagram" },
    { "label": "Skills", "href": "#skills", "icon": "fas fa-cogs" },
    { "label": "Experience", "href": "#experience", "icon": "fas fa-briefcase" },
    { "label": "Education", "href": "#education", "icon": "fas fa-graduation-cap" },
    { "label": "Certificates", "href": "#certificates", "icon": "fas fa-certificate" },
    { "label": "Contact", "href": "#contact", "icon": "fas fa-envelope" }
];

// Projects Data
const projects = [
    {
        "title": "Web Automation Testing",
        "description": "Developed and maintained an automated testing project in Python. Implemented logging, Excel integration, headless mode, and mouse event automation for streamlined testing processes. Features parallel execution and comprehensive reporting.",
        "technologies": ["Selenium", "Python", "Pytest", "Jenkins"],
        "image": "assets/images/projects/webautomation.jpg",
        "alt": "Web Automation Testing",
        "github": "https://github.com/KaushikDebdas/pythonSQAProject/tree/master/SampleProject4",
        "live": "https://github.com/KaushikDebdas/pythonSQAProject/tree/master/SampleProject4",
        "category": "automation",
        //"stats": "⭐ 45 stars • 23 forks"
    },
    {
        "title": "REST API Testing Using Postman",
        "description": "Comprehensive REST API testing framework with automated reporting, contract testing, and integration. Supports multiple environments and data-driven testing.",
        "technologies": ["Postman", "Newman", "Allure"],
        "image": "assets/images/projects/restAPI.jpg",
        "alt": "API testing framework",
        "github": "https://github.com/KaushikDebdas/API-Testing",
        "live": "https://github.com/KaushikDebdas/API-Testing",
        "category": "api",
        //"stats": "⭐ 56 stars • 31 forks"
    },
    {
        "title": "Performance Testing Suite",
        "description": "Load and stress testing solution for a SaaS platform handling 10,000+ concurrent users. Includes real-time monitoring, custom metrics, and automated scalability testing.",
        "technologies": ["JMeter"],
        "image": "assets/images/projects/performance.png",
        "alt": "Performance testing dashboard",
        "github": "https://github.com/KaushikDebdas/Performance-Testing",
        "live": "https://github.com/KaushikDebdas/Performance-Testing",
        "category": "performance",
        //"stats": "⭐ 67 stars • 42 forks"
    },
    {
        "title": "Learn & Earn - An Intelligent Networking Platform",
        "description": "Learn and Earn is an intelligent networking platform where users will be able to take and pay tuition at their convenience. Through this website, students will be able to earn money by using their leisure time. This is also a community-based web application like school-college or university students can & their academic resources here.",
        "technologies": ["Laravel", "HTML", "CSS", "Bootstrap", "JavaScript"],
        "image": "assets/images/projects/learnearn.png",
        "alt": "Learn & Earn - An Intelligent Networking Platform",
        "github": "https://github.com/KaushikDebdas/learn_and_earn",
        "live": "https://github.com/KaushikDebdas/mobile-banking-qa",
        "category": "web",
        //"stats": "⭐ 32 stars • 15 forks"
    },
    {
        "title": "Pioneer Bank System",
        "description": "This is a simple javascript web project. Here users can Deposit money and user can withdraw money. The total balance is also updated in this project. This project build with HTML,CSS,Bootstrap & JavaScript.",
        "technologies": ["HTML", "CSS", "Bootstrap", "JavaScript"],
        "image": "assets/images/projects/pioneer.png",
        "alt": "Healthcare system automation",
        "github": "https://github.com/KaushikDebdas/pioneer-bank",
        "live": "https://kaushikdebdas.github.io/pioneer-bank/",
        "category": "web",
        //"stats": "⭐ 28 stars • 12 forks"
    },
    {
        "title": "Care Giver Managment System",
        "description": "This web-based project will provide caregiving services to ensure a better, easier, and reliable caregiving system. This system will help them to hire caregivers so that when the person is out of home their children or older relatives can be looked after by receiving proper care.",
        "technologies": ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        "image": "assets/images/projects/caregiver.PNG",
        "alt": "Healthcare system automation",
        "github": "https://github.com/KaushikDebdas/Care-Giver-System",
        "live": "https://github.com/KaushikDebdas/Care-Giver-System",
        "category": "web",
        //"stats": "⭐ 28 stars • 12 forks"
    },
    {
        "title": "Poultry Farm Management System",
        "description": "This is a simple php project. Build a web based project that can efficiently handle and manage various activities of a poultry farm and all these activities will be happening under the supervision of the administrator.",
        "technologies": ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        "image": "assets/images/projects/pultry.jpg",
        "alt": "Healthcare system automation",
        "github": "https://github.com/KaushikDebdas/PoultryFarmManagmentSystem",
        "live": "https://github.com/KaushikDebdas/PoultryFarmManagmentSystem",
        "category": "web",
        //"stats": "⭐ 28 stars • 12 forks"
    },
    {
        "title": "Free Time Tutoring",
        "description": "A web based intelligent platform for personal tutor and consultation. The online teaching method is becoming a very popular day by day. Through this website, students will be able to earn money by using their leisure time. This is a simple php project.",
        "technologies": ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        "image": "assets/images/projects/freetimetutoring.PNG",
        "alt": "Accessibility testing report",
        "github": "https://github.com/KaushikDebdas/FreeTimeTutoring",
        "live": "https://github.com/KaushikDebdas/FreeTimeTutoring",
        "category": "web",
        //"stats": "⭐ 23 stars • 8 forks"
    }
];

// Skills Data
const testingMethodologies = [
    { "name": "Test Automation", "level": 95, "description": "Automated testing frameworks and scripts" },
    { "name": "Manual Testing", "level": 90, "description": "Exploratory, functional, and regression testing" },
    { "name": "Performance Testing", "level": 85, "description": "Load, stress, and scalability testing" },
    { "name": "Security Testing", "level": 80, "description": "Vulnerability assessment and security audits" },
    { "name": "API Testing", "level": 92, "description": "REST and SOAP API validation" }
];

const toolsTechnologies = [
    { "name": "Selenium", "level": 95, "description": "Web automation testing" },
    { "name": "JUnit/TestNG", "level": 90, "description": "Unit testing frameworks" },
    { "name": "Cypress", "level": 88, "description": "End-to-end testing" },
    { "name": "JMeter", "level": 85, "description": "Performance and load testing" },
    { "name": "Postman", "level": 93, "description": "API testing and documentation" },
    { "name": "JIRA/Azure", "level": 94, "description": "Bug tracking and project management" }
];

// Work Experience Data
const workExperience = [
    { 
        "title": "Associate Engineer, Software Quality Assurance", 
        "company": "Era InfoTech Ltd.", 
        "period": "June, 2024 – Present", 
        "description": "Owned end-to-end quality strategy for the Core Banking System (CBS) and Loan Origination System across NBFI portfolios. Drove a 40% reduction in bug leakage by implementing robust test automation frameworks, championing shift-left testing, and enforcing stringent regulatory compliance standards.",
        "achievements": [
            "Reduced regression testing time by 60% by designing and implementing automated test suites for the Loan Origination and Corporate Internet Banking platforms.",
            "Conducted comprehensive end-to-end testing of the Core Banking System (CBS) and Loan Origination System, ensuring strict regulatory compliance through manual, automation, and in-depth financial data validation.",
            "Performed load testing to validate system performance and stability under high-volume transaction conditions.",
            "Executed manual test scripts for the Corporate Internet Banking platform, verifying functionality and usability to deliver a seamless customer experience."
        ]
    },
    { 
        "title": "Software Quality Assurance Intern", 
        "company": "RedDot Digital Limited", 
        "period": "January, 2024 – May, 2024", 
        "description": "Conducted comprehensive manual, API, mobile, and load testing in Multicat Platform. Ensured accurate inventory management, order fulfillment, and reporting. Tested the sales app's user interface, functionality, and integration. Verified the delivery app's ability to track orders and optimize routes.",
        "achievements": [
            "Executed comprehensive testing across manual, API, mobile, and load domains for the Multicat Platform, ensuring end-to-end quality across all components.",
            "Tested the sales application for UI/UX consistency, core functionality, and backend API integration to deliver a frictionless user experience.",
            "Verified the delivery application's capabilities, including real-time order tracking and route optimization, to ensure efficient operations."
        ]
    }
];

// Education Data
const educationData = [
    {
        "degree": "Master of Science in Computer Science and Engineering",
        "institution": "United International University",
        "location": "Dhaka, Bangladesh",
        "period": "June 2022 - September 2023",
        "major": "Software Engineering",
        "courses": ["Software Engineering", "Software Testing", "Data Mining", "Database Management", "Network Security", "Project Management"],
        /*
        "achievements": [
            "Completed 50+ academic projects",
            "Active member of Computer Science Club",
            "Participated in university hackathons"
        ]
        */
    },
    {
        "degree": "Bachelor of Science in Computer Science and Engineering",
        "institution": "United International University",
        "location": "Dhaka, Bangladesh",
        "period": "May 2016 - October 2021",
        "major": "Computer Science and Engineering",
        "courses": ["Web Development", "Database Management", "Object-Oriented Programming", "Maths", "Data Structure"]
    },
    {
        "degree": "Higher Secondary Certificate (HSC)",
        "institution": "Dhaka Imperial College",
        "location": "Dhaka, Bangladesh",
        "period": "July 2013 - August 2015",
        "major": "Science",
        "courses": ["Physics", "Chemistry", "Mathematics", "Biology", "ICT"]
    },
    {
        "degree": "Secondary School Certificate (SSC)",
        "institution": "Motijheel Govt. Boy's High School",
        "location": "Dhaka, Bangladesh",
        "period": "May 2011 - May 2013",
        "major": "Science",
        "courses": ["Physics", "Chemistry", "Mathematics", "Biology", "Higher Mathematics"]
    }
];

// Certificates Data
const certificatesData = [
    {
        "title": "Java Solution Architect Training",
        "issuer": "Scholarhat",
        "date": "2025",
        "credentialId": "Credential ID: DBSL141125",
        "link": "https://drive.google.com/file/d/14KTVraB404LygPB5-ly_8A_Gg2RDPaB5/view?usp=sharing",
        "color": "from-blue-600 to-blue-800",
        "icon": "fas fa-vial",
        "category": "Development"
    },
    {
        "title": "SQA and Cyber Security Course",
        "issuer": "IT Training BD",
        "date": "2023",
        "credentialId": "Credential ID: ITB-B15-3512",
        "link": "https://drive.google.com/file/d/14KTVraB404LygPB5-ly_8A_Gg2RDPaB5/view?usp=sharing",
        "color": "from-purple-600 to-purple-800",
        "icon": "fas fa-code",
        "category": "QA & Security"
    },
    {
        "title": "Advanced Microsoft Excel",
        "issuer": "Online Course 365 Data Science",
        "date": "2021",
        "credentialId": "Credential ID: CC-18B739051D",
        "link": "https://drive.google.com/file/d/1y9nuvvAoz2vdfLkooYJwsXonmWqUohMK/view?usp=sharing",
        "color": "from-green-600 to-green-800",
        "icon": "fa-regular fa-file-excel",
        "category": "Tools"
    },
    {
        "title": "Completion of Claude 101",
        "issuer": "Anthropic",
        "date": "2026",
        "link": "https://verify.skilljar.com/c/ma88cdbsrhr8",
        "color": "from-orange-600 to-orange-800",
        "icon": "fa-brands fa-claude",
        "category": "Tools"
    },
    {
        "title": "Completion of Claude Code 101",
        "issuer": "Anthropic",
        "date": "2026",
        "link": "https://verify.skilljar.com/c/3sb66s6is9gt",
        "color": "from-orange-600 to-orange-800",
        "icon": "fa-solid fa-robot",
        "category": "Tools"
    },
    {
        "title": "PCAP - Programming Essentials in Python",
        "issuer": "Online Course CISCO",
        "date": "2021",
        "link": "https://drive.google.com/file/d/1PaoGVETUpLcQvIAfO8L2n2249cyPLNsz/view?usp=sharing",
        "color": "from-yellow-600 to-yellow-800",
        "icon": "fas fa-code-branch",
        "category": "Development"
    },
    {
        "title": "Introduction To Cyber Security",
        "issuer": "Online Course CISCO",
        "date": "2021",
        "link": "https://drive.google.com/file/d/1x4or64jgde8E4VKLzhvV7FXqtL21JlBm/view?usp=sharing",
        "color": "from-orange-600 to-orange-800",
        "icon": "fas fa-plug",
        "category": "QA & Security"
    }
];

// Contact Information
const contactInfo = [
    { "type": "Email", "value": "kaushikdebdas27@gmail.com", "icon": "fas fa-envelope", "link": "mailto:kaushikdebdas27@gmail.com" },
    { "type": "Phone", "value": "+880 1757921768", "icon": "fas fa-phone", "link": "tel:01757921768" },
    { "type": "Location", "value": "D-1, Shaptapadi, Shamibag, Dhaka - 1100, Bangladesh", "icon": "fas fa-map-marker-alt", "link": "https://maps.app.goo.gl/CRzyPJ9ipHN757Fn9"},
    { "type": "LinkedIn", "value": "linkedin.com/in/KaushikDebdas", "icon": "fab fa-linkedin", "link": "https://www.linkedin.com/in/kaushik-debdas-233589208/" }
];

// Social Links
const socialLinks = [
    { "platform": "LinkedIn", "icon": "fab fa-linkedin", "url": "https://www.linkedin.com/in/kaushik-debdas-233589208/", "color": "bg-blue-700" },
    { "platform": "GitHub", "icon": "fab fa-github", "url": "https://github.com/KaushikDebdas", "color": "bg-gray-800" },
    { "platform": "Twitter", "icon": "fab fa-twitter", "url": "https://twitter.com", "color": "bg-blue-400" }
];

// Footer Links
const footerLinks = [
    { "label": "Privacy Policy", "href": "#privacy" },
    { "label": "Terms of Service", "href": "#terms" },
    { "label": "Sitemap", "href": "#sitemap" },
    { "label": "Accessibility", "href": "#accessibility" }
];