import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFire, faStar, faDollarSign, faRocket, faMobileAlt, faGift, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Website",
    price: "KSh 10,000",
    duration: "1 Week",
    description: "Profit-Friendly Scope - Professional value!",
    features: [
      "2-3 pages (Home, About, Services, Contact)",
      "Content Research",
      "Simple, clean layout design",
      "Mobile + Desktop optimized",
      "No domain setup assistance ",
      "Basic contact form or WhatsApp link",
      "Basic SEO (meta titles/descriptions)",
      "1 month free maintenance, then KSh 4,000/month",
      "Simple Hosting"
    ],
    popular: false,
    whatsappMessage: "Hi! I'm interested in the Basic Website package (KSh 10,000). Can we start my project?"
  },
  {
    id: 2,
    name: "Business Pro Website",
    price: "KSh 20,000",
    duration: "1-2 weeks",
    description: "Complete business solution - Double the value!",
    features: [
      "4-6 pages with premium custom design",
      "Content Research",
      "Advanced animations & interactions",
      "Google Analytics + Search Console setup",
      "Basic SEO optimization + keyword research",
      "Advanced contact forms + WhatsApp integration",
      "Social media integration + sharing buttons",
      "Performance optimization (fast loading)",
      "FREE 1 year premium hosting + SSL",
      "FREE domain registration",
      "2 months free maintenance, then KSh 4,000/month",
      "1 month post-launch support"
    ],
    popular: true,
    whatsappMessage: "Hi! I'm interested in the Business Pro Website package (KSh 20,000). This looks like incredible value for my business!"
  },
  {
    id: 3,
    name: "Enterprise Website",
    price: "KSh 35,000",
    duration: "2-3 weeks",
    description: "Everything you need - Ultimate business solution!",
    features: [
      "Up to 10 pages",
      "Premium custom design",
      "Content Research",
      "Advanced animations & interactions",
      "Advanced performance optimization",
      "Complete SEO setup + Google Analytics",
      "Social media integration + sharing buttons",
      "Advanced contact forms + WhatsApp integration",
      "Up to 5 major revisions",
      "Logo design if needed",
      "FREE business email setup (3 accounts)",
      "FREE 1 year hosting + domain + SSL",
      "3 months free maintenance, then KSh 4,000/month",
      "1 month priority support"
    ],
    popular: false,
    comingSoon: true,
    whatsappMessage: "Hi! I'm interested in the Enterprise Website package (KSh 35,000). This is the complete solution I need for my business!"
  }
];

const Pricing = () => {
  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254734919448?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="content px-4" id="pricing">
      <div className="text-center mb-16">
        <h2 className="section-title mb-6">
          <FontAwesomeIcon icon={faFire} className="text-orange-500 mr-2" />
          Super Affordable Websites
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          <span className="font-bold text-orange-600">Beginner-friendly prices!</span> Professional websites that won't break the bank. 
          Perfect for students, startups, and small businesses. <span className="font-semibold">Extreme value guaranteed!</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              plan.popular ? 'border-2 border-orange-500' : 'border border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            {plan.comingSoon && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
            )}

            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-orange-500 mb-2">{plan.price}</div>
                <p className="text-gray-600 text-sm mb-2">Delivery: {plan.duration}</p>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className="text-green-500 mt-1 mr-3 flex-shrink-0" 
                    />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => plan.comingSoon ? null : handleWhatsAppClick(plan.whatsappMessage)}
                disabled={plan.comingSoon}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                  plan.comingSoon
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                }`}
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                {plan.comingSoon ? 'Coming Soon' : 'Get Started on WhatsApp'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-20 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 max-w-6xl mx-auto overflow-hidden">
        <div className="p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <FontAwesomeIcon icon={faStar} className="text-orange-500 text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Why Choose Our Services
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional web development made accessible for everyone
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-6 mx-auto">
                <FontAwesomeIcon icon={faDollarSign} className="text-orange-500 text-xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Affordable Pricing</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Quality websites at competitive rates, perfect for startups and small businesses
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-6 mx-auto">
                <FontAwesomeIcon icon={faRocket} className="text-orange-500 text-xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Quick Turnaround</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Fast delivery without compromising quality, get your website live in days
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-6 mx-auto">
                <FontAwesomeIcon icon={faMobileAlt} className="text-orange-500 text-xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Flexible Payment</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Multiple payment options including M-Pesa, bank transfer, and installments
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <FontAwesomeIcon icon={faGift} className="text-orange-500 text-xl" />
                <h4 className="text-xl font-bold text-gray-900">Special Offer</h4>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Pay in 2 installments - 50% to start, 50% when satisfied with results!
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-600">
                <FontAwesomeIcon icon={faPhone} className="text-sm" />
                <span className="font-medium">Contact us on WhatsApp for student discounts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;