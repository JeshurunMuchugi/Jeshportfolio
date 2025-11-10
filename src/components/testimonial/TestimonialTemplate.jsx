const TestimonialTemplate = ({ testimonial }) => {
  return (
    <div className="testimonial-card animate-fade-in-up mx-4 my-8">
      <div className="text-center">
        <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-600 leading-relaxed">
          {testimonial?.message}
        </p>
        <div className="testimonial-quote text-base sm:text-lg md:text-xl font-medium mb-8 px-4">
          {testimonial?.quote}
        </div>
        <div className="testimonial-author text-center">
          <p className="text-lg font-semibold text-gray-800 mb-1">
            {testimonial?.name}
          </p>
          <p className="text-sm text-orange-600 font-medium">
            {testimonial?.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTemplate;