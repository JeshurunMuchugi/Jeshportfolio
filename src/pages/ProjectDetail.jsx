import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt, faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import card1 from "../assets/images/portfolio-images/card-1.png";
import card2 from "../assets/images/portfolio-images/card-2.png";
import card3 from "../assets/images/portfolio-images/card-3.png";
import card4 from "../assets/images/portfolio-images/card-4.png";
import card5 from "../assets/images/portfolio-images/card-5.png";
import card6 from "../assets/images/portfolio-images/card-6.png";

const projectsData = {
  1: {
    id: 1,
    image: card1,
    title: "E-Commerce Dashboard",
    category: "UI-UX DESIGN",
    description: "A comprehensive admin dashboard for managing online store operations with real-time analytics and inventory management.",
    fullDescription: "This project showcases a modern e-commerce dashboard built with React and Node.js. The dashboard provides real-time analytics, inventory management, order tracking, and customer insights. The interface is designed with a focus on usability and efficiency, allowing store administrators to manage their operations seamlessly.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    features: [
      "Real-time sales analytics",
      "Inventory management system",
      "Order tracking and management",
      "Customer relationship management",
      "Responsive design for all devices"
    ],
    liveUrl: "https://example-ecommerce-dashboard.com",
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard"
  },
  2: {
    id: 2,
    image: card2,
    title: "Social Media Platform",
    category: "WEB DEVELOPMENT",
    description: "Modern social networking platform with real-time messaging, post sharing, and community features.",
    fullDescription: "A full-stack social media platform that enables users to connect, share content, and communicate in real-time. Built with Vue.js and Firebase, it features user authentication, post creation and sharing, real-time messaging, and community groups.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io", "Node.js"],
    features: [
      "User authentication and profiles",
      "Real-time messaging system",
      "Post creation and sharing",
      "Community groups and forums",
      "Mobile-responsive design"
    ],
    liveUrl: "https://example-social-platform.com",
    githubUrl: "https://github.com/yourusername/social-platform"
  },
  3: {
    id: 3,
    image: card3,
    title: "Fitness Tracking App",
    category: "MOBILE APP",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics with AI recommendations.",
    fullDescription: "A comprehensive fitness tracking application that helps users monitor their health and fitness goals. The app includes workout tracking, nutrition logging, progress analytics, and AI-powered recommendations for personalized fitness plans.",
    technologies: ["React Native", "Python", "TensorFlow", "AWS", "MongoDB"],
    features: [
      "Workout tracking and planning",
      "Nutrition and calorie logging",
      "Progress analytics and insights",
      "AI-powered recommendations",
      "Social features and challenges"
    ],
    liveUrl: "https://example-fitness-app.com",
    githubUrl: "https://github.com/yourusername/fitness-app"
  },
  4: {
    id: 4,
    image: card4,
    title: "Banking Interface",
    category: "UI-UX DESIGN",
    description: "Secure and intuitive banking application interface with advanced security features and seamless user experience.",
    fullDescription: "A modern banking interface designed with security and user experience as top priorities. The application features account management, transaction history, bill payments, and advanced security measures including two-factor authentication.",
    technologies: ["React", "TypeScript", "Stripe API", "Node.js", "PostgreSQL"],
    features: [
      "Secure account management",
      "Transaction history and analytics",
      "Bill payment system",
      "Two-factor authentication",
      "Real-time notifications"
    ],
    liveUrl: "https://example-banking-app.com",
    githubUrl: "https://github.com/yourusername/banking-interface"
  },
  5: {
    id: 5,
    image: card5,
    title: "Learning Management System",
    category: "WEB DEVELOPMENT",
    description: "Comprehensive educational platform with course management, progress tracking, and interactive learning tools.",
    fullDescription: "An advanced learning management system that facilitates online education with course creation, student enrollment, progress tracking, and interactive learning tools. Built for educators and students to enhance the online learning experience.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "WebRTC", "Tailwind CSS"],
    features: [
      "Course creation and management",
      "Student enrollment system",
      "Progress tracking and analytics",
      "Interactive video lessons",
      "Assignment and quiz system"
    ],
    liveUrl: "https://example-lms.com",
    githubUrl: "https://github.com/yourusername/lms-platform"
  },
  6: {
    id: 6,
    image: card6,
    title: "Travel Companion",
    category: "MOBILE APP",
    description: "Smart travel planning application with itinerary management, local recommendations, and offline maps.",
    fullDescription: "A comprehensive travel companion app that helps users plan, organize, and navigate their trips. Features include itinerary planning, local recommendations, offline maps, expense tracking, and travel journal functionality.",
    technologies: ["Flutter", "Google Maps API", "Node.js", "Redis", "MongoDB"],
    features: [
      "Trip planning and itinerary management",
      "Local recommendations and reviews",
      "Offline maps and navigation",
      "Expense tracking and budgeting",
      "Travel journal and photo sharing"
    ],
    liveUrl: "https://example-travel-app.com",
    githubUrl: "https://github.com/yourusername/travel-companion"
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="btn btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="content py-20">
        {/* Back Button */}
        <Link 
          to="/portfolio" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 group transition-all duration-300"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Portfolio
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Image */}
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {project.category}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                <FontAwesomeIcon icon={faEye} className="mr-2" />
                View Live Site
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                View Code
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;