
import Projects from "./Projects";
import screenshot1 from "../../assets/images/portfolio-images/screenshot-1.png";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import cleaningWebsite from "../../../Screenshot 2025-11-10 at 15.51.47.png";
import card3 from "../../../Screenshot 2025-11-10 at 15.13.11.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: screenshot1,
    category: "WEB DEVELOPMENT",
    title: "Smart, Secure, And Effortless Storage",
    description:
      "Our Smart Quote System Instantly Calculates Transport Costs And Storage Size Once You Enter Your Pickup Location — No Calls, No Guesswork, Just Instant Pricing.",
    link: "https://smart-storage-management-system-06re.onrender.com/",
  },
  {
    id: 2,
    image: cleaningWebsite,
    category: "WEB DEVELOPMENT",
    title: "Professional Cleaning Service Platform",
    description:
      "A comprehensive web solution featuring automated booking systems, service management, and customer portal for seamless cleaning service operations.",
    link: "https://cleaning-website-lbx5.onrender.com/",
  },
  {
    id: 3,
    image: card3,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content px-4"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.slice(0, 3).map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
