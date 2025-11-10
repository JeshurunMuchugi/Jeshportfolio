import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Pricing from "../components/pricing/Pricing";
import WorkTogether from "../components/workTogether/WorkTogether";

import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="introduction-profile-background">
        <Introduction />
      </div>
      
      {/* About Section */}
      <div className="bg-white py-20">
        <Profile />
      </div>
      
      {/* Work Process Section */}
      <div className="bg-soft-white py-20">
        <WorkProcess />
      </div>
      
      {/* Portfolio Section */}
      <div className="bg-white py-20">
        <Portfolio />
      </div>
      
      {/* Pricing Section */}
      <div className="bg-soft-white py-20">
        <Pricing />
      </div>
      
      {/* Work Together Section */}
      <div className="bg-gray-900 py-20">
        <WorkTogether />
      </div>

      {/* Services Section */}
      <div className="bg-soft-white py-20">
        <Profession />
      </div>
      
      {/* Happy Clients Section */}
      <div className="bg-white py-16">
        <HappyClients />
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-soft-white py-20">
        <Testimonial />
      </div>
      
      {/* Contact Section */}
      <div className="bg-white py-20">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
