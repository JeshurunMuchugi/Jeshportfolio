import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <img src={data?.image} alt={`${data?.title} image`} />
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        <a
          href={data?.link}
          target={data?.link.startsWith('http') ? '_blank' : '_self'}
          rel={data?.link.startsWith('http') ? 'noopener noreferrer' : ''}
          className="btn relative overflow-hidden border-2 border-picto-primary text-picto-primary bg-white hover:text-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-500 mt-5 xs:py-5.75 px-6 max-sm:w-full group"
        >
          <span className="absolute inset-0 bg-picto-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative z-10">View Project</span>
          <span className="ms-1 xs:ms-3 relative z-10">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span>
        </a>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Projects;
