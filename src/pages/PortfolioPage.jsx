import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./portfolio.css";
import card1 from "../assets/images/portfolio-images/card-1.png";
import card2 from "../assets/images/portfolio-images/card-2.png";
import card3 from "../assets/images/portfolio-images/card-3.png";
import card4 from "../assets/images/portfolio-images/card-4.png";
import card5 from "../assets/images/portfolio-images/card-5.png";
import card6 from "../assets/images/portfolio-images/card-6.png";

const portfolioProjects = [
  {
    id: 1,
    image: card1,
    category: "UI-UX DESIGN",
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online store operations with real-time analytics and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    link: "#!",
    featured: true
  },
  {
    id: 2,
    image: card2,
    category: "WEB DEVELOPMENT",
    title: "Social Media Platform",
    description: "Modern social networking platform with real-time messaging, post sharing, and community features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
    link: "#!",
    featured: true
  },
  {
    id: 3,
    image: card3,
    category: "MOBILE APP",
    title: "Fitness Tracking App",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics with AI recommendations.",
    technologies: ["React Native", "Python", "TensorFlow", "AWS"],
    link: "#!",
    featured: false
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Banking Interface",
    description: "Secure and intuitive banking application interface with advanced security features and seamless user experience.",
    technologies: ["Figma", "React", "TypeScript", "Stripe API"],
    link: "#!",
    featured: true
  },
  {
    id: 5,
    image: card5,
    category: "WEB DEVELOPMENT",
    title: "Learning Management System",
    description: "Comprehensive educational platform with course management, progress tracking, and interactive learning tools.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "WebRTC"],
    link: "#!",
    featured: false
  },
  {
    id: 6,
    image: card6,
    category: "MOBILE APP",
    title: "Travel Companion",
    description: "Smart travel planning application with itinerary management, local recommendations, and offline maps.",
    technologies: ["Flutter", "Google Maps API", "Node.js", "Redis"],
    link: "#!",
    featured: false
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("ALL");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = ["ALL", "UI-UX DESIGN", "WEB DEVELOPMENT", "MOBILE APP"];

  useEffect(() => {
    // Simulate loading and animate in
    setTimeout(() => {
      setIsLoading(false);
      setVisibleProjects(portfolioProjects);
    }, 500);
  }, []);

  const filteredProjects = filter === "ALL" 
    ? visibleProjects 
    : visibleProjects.filter(project => project.category === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-transparent"></div>
        <div className="content py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className={`transform transition-all duration-1000 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link 
                to="/" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 group transition-all duration-300"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                My <span className="text-orange-500 relative">
                  Portfolio
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore my collection of projects showcasing innovative design solutions and cutting-edge development work.
              </p>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400 rounded-full opacity-40 animate-ping"></div>
      </div>

      {/* Filter Section */}
      <div className="content py-12">
        <div className={`transform transition-all duration-1000 delay-300 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-200'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transform transition-all duration-700 hover:scale-105 ${
                !isLoading ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-orange-500 text-sm font-semibold tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group"
                  >
                    <span className="mr-2">View Project</span>
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="transition-transform duration-300 group-hover:translate-x-1" 
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="mb-6 opacity-90">
              Let's create something amazing together. Get in touch to discuss your next project.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;