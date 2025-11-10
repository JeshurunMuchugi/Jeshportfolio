import hero from "../../../hero.webp";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Years Experience",
    description: "3+",
  },
  {
    id: 2,
    title: "Projects Built",
    description: "50+",
  },
  {
    id: 3,
    title: "Technologies",
    description: "15+",
  },
];

const Introduction = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-20 lg:py-0"
      id="introduction"
    >
      <div className="content px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Content Section */}
          <div className="flex-1 text-left max-w-2xl">
            <div className="space-y-3">
              <div className="space-y-0">
                <p className="text-xl text-gray-600 font-medium tracking-wide">
                  Hello, I'm
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Jeshurun
                </h1>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 leading-relaxed">
                  Full Stack <span className="text-orange-500">Developer</span>
                </div>
              </div>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                I build modern web applications with clean code and intuitive user experiences. 
                Passionate about creating scalable solutions using the latest technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start pt-4">
                <a
                  href="mailto:example@gmail.com"
                  className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="#portfolio"
                  className="px-8 py-4 text-gray-700 font-semibold rounded-xl hover:text-orange-500 transition-all duration-300 text-center hover:shadow-lg transform hover:scale-105"
                >
                  View Portfolio
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-12 mt-12">
              {informationSummaryData.map((item) => (
                <div key={item.id} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500">{item.description}</div>
                  <div className="text-sm sm:text-base text-gray-600 mt-2 font-medium">{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl transform rotate-3 opacity-60"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-3xl opacity-20 blur-lg"></div>
              <img
                className="relative w-full h-auto object-cover rounded-3xl shadow-2xl bg-white p-2 transform hover:scale-[1.02] transition-all duration-700 hover:shadow-3xl"
                src={hero}
                alt="Jeshurun - Full Stack Developer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;