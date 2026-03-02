import grayStar from "../.././assets/images/grayStar.png";
import redStar from "../.././assets/images/redStar.png";
import google from "../.././assets/images/google.png";

// Type definitions
type Testimonial = {
  rating: string;
  title: string;
  description: string;
  name: string;
  location: string;
  avatar: string;
};

const TestimonialCard: React.FC<Testimonial> = ({
  rating,
  title,
  description,
  name,
  location,
  avatar,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <img src={redStar} alt={`average rating`} className="w-3 h-auto" />
      ))}
      <span className="ml-2 text-sm font-bold text-gray-800">{rating}</span>
    </div>
    <h3 className="font-extrabold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
    <div className="flex items-center">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full mr-3 object-cover"
      />
      <div>
        <p className="font-medium text-gray-800 text-sm">{name}</p>
        <p className="font-medium text-gray-500 text-xs">{location}</p>
      </div>
    </div>
  </div>
);

const testimonials: Testimonial[] = [
  {
    rating: "5.0",
    title: "Best Visa Agency!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    name: "Tiffany",
    location: "from Canada",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    rating: "5.0",
    title: "Best Visa Agency!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    name: "Tiffany",
    location: "from Canada",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    rating: "5.0",
    title: "Best Visa Agency!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    name: "Tiffany",
    location: "from Canada",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    rating: "5.0",
    title: "Best Visa Agency!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    name: "Tiffany",
    location: "from Canada",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];

const RealWorldServices: React.FC = () => {
  return (
    <section className="relative bg-white font-manrope">
      {/* Testimonials Section */}
      <div className="bg-[#EAF0F6] md:py-10 py-8 rounded-b-[85%]" />
      <div className="py-20 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4">
            <span className="text-[#06213F]">Real Words from Real </span>
            <span className="text-red-600">People</span>
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <img
                  src={grayStar}
                  alt={`average rating`}
                  className="w-3 h-auto"
                />
              ))}
              <span className="ml-2 font-bold text-gray-800">5.0</span>
              <span className="ml-1font-medium text-gray-600">
                (190+ Reviews)
              </span>
            </div>
            <img src={google} alt="Google" className="h-6 ml-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <div className="bg-[#EAF0F6] md:py-[60px] py-14 rounded-t-[85%]" />
       <div className="mt-auto">
              <button className="absolute left-1/2 -translate-x-1/2 md:bottom-10 bottom-8 bg-[#C40808] text-white font-bold text-sm px-5 py-2 ">
                CONTACT US
              </button>
            </div>
    </section>
  );
};

export default RealWorldServices;
