import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Services", url: "services" },
  { id: 6, name: "Contact", url: "contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-20">
      <div className="content py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-12 w-12">
                <rect width="100" height="100" rx="20" fill="#ff6b35"/>
                <text x="50" y="70" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" textAnchor="middle" fill="white">J</text>
              </svg>
              <h3 className="text-2xl font-bold ml-3 text-white">
                Jesh
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Passionate developer creating innovative solutions with clean, efficient code.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.url}`}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-orange-400 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-orange-400 w-4" />
                <span>jeshurunmuchugi@mail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-orange-400 w-4" />
                <span>0722836384</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jeshurun Muchugi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;