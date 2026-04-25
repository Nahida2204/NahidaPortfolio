const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const projects = [
  {
    id: 1,
    title: "AI-Powered Vehicle Inspection PWA",
    category: "Internship Projects",
    tag: "Capstone · Leal & Co Ltd",
    year: "2026",
    highlight: true,
    placeholder: "cv",
    image:"/assets/AIBodyshop.png",
    description: "A Progressive Web Application developed in collaboration with Middlesex University and Leal & Co Ltd, addressing a real operational bottleneck at Leal Bodyshop. The manual vehicle inspection process — dependent on individual judgment and prone to inconsistency — was replaced with a system that uses computer vision and deep learning to detect damage zones and generate repair cost estimates automatically. The project was developed with close collaboration with subject matter experts throughout development.",
    bullets: [
      "Automated vehicle identification using OCR on Insurance Vignettes and VIN decoding", 
      "Computer vision pipeline for vehicle damage localisation and classification",
      "Automated repair cost estimation engine",
      "PWA architecture for cross-device workshop use",
      "Built from a real operational problem, not a synthetic brief"
    ],
    tech: ["Computer Vision", "Deep Learning", "PWA", "Python", "Vue.js", "OCR"]
  },
  {
    id: 2,
    title: "Automated Pills Dispensing System",
    category: "University Projects",
    tag: "University Project",
    year: "2025",
    highlight: false,
    placeholder: "pills",
    image: "/assets/PillsDispensingSystem.jpg",
    description: "An automated medication dispensing system designed to reduce manual errors in pill administration. The system manages medication schedules, dispenses the correct dosage at the correct time, and alerts users or caregivers when action is required. The project combined hardware interfacing with a software control layer, designed with reliability and safety as primary constraints — given the critical nature of medication management in real-world settings.",
    bullets: [
      "Speech Recognition to activate robot upon first use",
      "Face Recognition for user identification and personalised schedules",
      "Scheduled dispensing with configurable dosage logic",
      "Alert system for missed or overdue medication",
      "Hardware-software integration layer"
    ],
    tech: ["YOLOv8", "SpeechRecognition", "FaceRecognition", "Python","OpenCV"]
  },
  {
    id: 3,
    title: "Full Stack Shopping Website",
    category: "University Projects",
    tag: "University Project",
    year: "2025",
    highlight: false,
    placeholder: "shop",
    description: "MyAcademia is a full-stack web application developed to streamline the process of browsing and booking educational courses. The frontend was built using Vue.js, providing a dynamic and interactive user experience with features such as real-time search, filtering by location and price, and a responsive course catalog.The application includes user authentication (sign up and sign in), a shopping cart system, and a multi-step checkout process where users can review selected courses and enter their details before placing an order.This project demonstrates skills in full-stack development, API integration, state management, and user interface design, while focusing on creating a smooth and efficient user journey from course selection to checkout.",
    bullets: [
      "Developed a dynamic course catalog using Vue.js with real-time updates",
      "Integrated MongoDB database to store and manage customer orders",
      "Created a shopping cart system to add and manage selected courses",
      "Implemented search-as-you-type functionality for quick course discovery"
    ],
    tech: ["Vue.js", "Express.js", "MongoDB", "Node.js", "REST API"]
  },
  {
    id: 4,
    title: "Social Media Platform",
    category: "University Projects",
    tag: "University Project",
    year: "2023–2024",
    highlight: false,
    placeholder: "social",
    description: "BetaNetwork is a full-stack social media platform that enables users to connect, share content, and interact in real time. The application features secure authentication, dynamic content loading, and an interactive user interface built with modern web technologies.Users can register, log in, create posts, explore categorized content, and engage in real-time messaging.It also integrates Puppeteer-based web scraping to fetch and display live news from external sources, which is dynamically rendered in the UI using a Bootstrap carousel.",
    bullets: [
      "User authentication and session handling",
      "Real-time chat system",
      "Dynamic post creation and feed rendering",
      "Live news integration via web scraping"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"]
  },
  {
    id: 5,
    title: "Sentiment Analysis of Netflix App Reviews using Deep Learning",
    category: "University Projects",
    tag: "University Project",
    year: "2024–2025",
    highlight: false,
    placeholder: "nlp",
    description: "An advanced data science project exploring Natural Language Processing techniques applied to real-world text datasets. The work covered the full pipeline: data collection and cleaning, exploratory analysis, feature engineering, and model development.The goal was to automatically classify user reviews as expressing positive or negative sentiment, demonstrating how natural language processing and deep learning can be used to monitor user satisfaction at scale without manual intervention.",
    bullets: [
      "End-to-end NLP pipeline design and implementation",
      "Sentiment analysis and binary text classification",
      "Deep learning model design with TensorFlow and Keras",
      "Model evaluation with confusion matrices, learning curves, and classification reports"
    ],
    tech: ["Python", "NLP", "TensorFlow", "GloVe", "Pandas", "NLTK"]
  },
  {
    id: 6,
    title: "ERP Solution — Leal Énergie",
    category: "Internship Projects",
    tag: "Leal & Co Ltd",
    year: "2025",
    highlight: false,
    placeholder: "erp",
    image: "/assets/ERP.png",
    description: "A business process solution built for Leal Énergie using Microsoft Power Apps, designed to centralise customer management and field survey operations. Previously handled on paper, the entire workflow — from logging a customer enquiry to completing an on-site survey and generating an invoice-ready document — was consolidated into a single digital system accessible in the field.",
    bullets: [
      "Customer records and follow-up tracking system built in Power Apps",
      "Digitised survey form replacing paper-based field assessments",
      "Automated PDF generation upon survey completion",
      "Direct routing of generated documents to the invoicing department"
    ],
    tech: ["Microsoft Power Apps", "Power Automate", "PDF Automation", "Power Platform"]
  },
  {
    id: 7,
    title: "BMW Service Reception Form",
    category: "Internship Projects",
    tag: "Leal & Co Ltd",
    year: "2025",
    highlight: false,
    placeholder: "bmwform",
    image: "/assets/BMWServiceReception.png",
    description: "A digitised service reception solution built in Microsoft Power Apps for BMW, replacing a manual paper-based intake process. The app captures vehicle and customer details, supports on-the-spot image capture for documenting vehicle condition, and generates a PDF automatically upon form completion. The system was also integrated with the workshop planning tool, giving the customer care team visibility over upcoming appointments and enabling a more personalised, informed approach when receiving clients.",
    bullets: [
      "Digital service reception form replacing paper intake process",
      "In-app image capture for documenting vehicle condition at drop-off",
      "Automated PDF generation sent directly upon form submission",
      "Integration with workshop planning for customer care visibility"
    ],
    tech: ["Microsoft Power Apps", "Power Automate", "PDF Automation", "Power Platform"]
  },
  {
    id: 8,
    title: "Best Fit Labour Card",
    category: "Internship Projects",
    tag: "Leal & Co Ltd",
    year: "2025",
    highlight: false,
    placeholder: "labourcard",
    image: "/assets/BestDriveApp.png",
    description: "A digitalised labour card system built to replace the manual paper workflow used at Best Fit, covering the full journey from client reception through to tyre mounting. The solution was developed in close collaboration with the team on the ground, with the interface and workflow customised to reflect how they actually work — making adoption straightforward and the day-to-day process significantly more efficient.",
    bullets: [
      "End-to-end digital workflow from client reception to tyre mounting",
      "Replaced manual paper-based labour cards entirely",
      "Workflow designed collaboratively with the operational team",
      "Personalised interface to match actual shop-floor usage patterns"
    ],
    tech: ["Microsoft Power Apps", "Power Automate", "Power Platform"]
  },
  {
    id: 9,
    title: "BMW & KIA Test Drive App",
    category: "Internship Projects",
    tag: "Leal & Co Ltd",
    year: "2025",
    highlight: false,
    placeholder: "testdrive",
    image: "/assets/TestDrive.png",
    description: "A calendar-based test drive management application built in Microsoft Power Apps for both the BMW and KIA brands. The app allows service advisors to schedule test drives and automatically handles the full surrounding workflow — digital departure and return forms are completed in-app, reminder emails are sent to both the client and the service advisor ahead of the booking, and an Outlook calendar event is created automatically at the time of booking.",
    bullets: [
      "Calendar-based test drive scheduling for BMW and KIA",
      "Digital departure and return forms completed within the app",
      "Automated reminder emails sent to client and service advisor",
      "Outlook calendar event created automatically upon booking"
    ],
    tech: ["Microsoft Power Apps", "Power Automate", "Outlook Integration", "Power Platform"]
  },
  {
    id: 10,
    title: "PNL Event Booking App",
    category: "Internship Projects",
    tag: "Leal & Co Ltd",
    year: "2025",
    highlight: false,
    placeholder: "pnl",
    image: "/assets/PNLEvents.png",
    description: "A full-stack internal event booking application built for employees, covering events such as psychologist appointments and company sessions. Employees can browse available events and make bookings through a clean interface, while administrators have a separate management view to create events, monitor bookings, and manage capacity. The application was built from scratch using Vue.js on the frontend and Express.js on the backend.",
    bullets: [
      "Employee-facing booking interface for internal events and appointments",
      "Admin panel for creating events and managing bookings",
      "Session-based access control separating employee and admin roles",
      "Full-stack build with Vue.js frontend and Express.js backend"
    ],
    tech: ["Vue.js", "Express.js", "HTML", "CSS", "Node.js"]
  }
];

const skills = {
  technical: ["Python", "C#", "Java", "JavaScript", "MySQL", "HTML/CSS", "Vue.js"],
  ai: ["Computer Vision", "Deep Learning", "NLP", "OpenCV","ResNet-50", "YOLO"],
  automation: ["Microsoft Power Apps", "Power Automate", "Make.com"],
  tools: ["Express.js", "Node.js", "BeautifulSoup", "Selenium", "Bootstrap", "Git"]
};

app.get('/api/projects', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    return res.json(projects.filter(p => p.category === category));
  }
  res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Not found' });
  res.json(project);
});

app.get('/api/skills', (req, res) => res.json(skills));

app.get('/api/categories', (req, res) => {
  const cats = ['All', ...new Set(projects.map(p => p.category))];
  res.json(cats);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Portfolio → http://localhost:${PORT}`));
