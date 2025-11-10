import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Nairobi, Kenya",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "jeshurunmuchugi@mail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "0722836384",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-4">
      <div
        className="content p-6 md:p-12 lg:p-16 bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-7xl mx-auto"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl max-lg:hidden font-bold text-gray-900 mb-2">
                Do you have a <span className="text-orange-500">Project Idea</span>?
              </h2>
              <p className="text-xl font-semibold text-gray-700 max-lg:hidden mb-4">
                Let's discuss your project!
              </p>
              <p className="text-base sm:text-lg max-lg:text-center pt-4 font-normal text-gray-600 leading-relaxed">
                I'm available for freelance work and excited to collaborate on your next project. 
                Let's create something amazing together!
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5">
            <div className="lg:hidden text-center mb-6">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Do you have a <span className="text-orange-500">Project Idea</span>?
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Let's discuss your project!
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;