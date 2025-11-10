import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Jeshurun consistently demonstrates strong problem-solving skills and attention to detail in his coding projects.",
    quote: `His dedication to learning new technologies and implementing clean, efficient code is impressive. He approaches challenges with enthusiasm and delivers quality solutions.`,
    name: "Sarah Mitchell",
    designation: "Senior Developer, Tech Mentor",
  },
  {
    message:
      "Outstanding performance in collaborative coding projects and excellent communication skills.",
    quote: `Jeshurun shows great potential as a developer. His ability to understand complex requirements and translate them into functional code is remarkable for someone at his level.`,
    name: "David Chen",
    designation: "Lead Instructor, Code Academy",
  },
  {
    message:
      "Reliable, eager to learn, and produces high-quality work consistently.",
    quote: `His GitHub contributions and project portfolio demonstrate a strong foundation in programming principles. I'm confident he'll make a valuable addition to any development team.`,
    name: "Maria Rodriguez",
    designation: "Code Review Specialist",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
