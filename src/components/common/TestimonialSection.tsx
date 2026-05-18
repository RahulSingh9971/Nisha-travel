import React from "react";
import grayStar from "../../assets/images/grayStar.png";
import redStar from "../../assets/images/redStar.png";
import google from "../../assets/images/google.png";

type Testimonial = {
  rating: string;
  title: string;
  description: string;
  name: string;
  location: string;
  avatar: string;
};

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
        <img key={i} src={redStar} alt={`average rating`} className="w-3 h-auto" />
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

const TestimonialSection: React.FC<{ data?: any }> = ({ data }) => {
  const itemsToRender = data?.items && data.items.length > 0 
    ? data.items.map((item: any) => ({
        rating: item.rating ? item.rating.toFixed(1).toString() : "5.0",
        title: item.title || "",
        description: item.review || "",
        name: item.name || "Anonymous",
        location: item.location || "",
        avatar: item.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name || "User")}&background=random`
      }))
    : testimonials;

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 lg:px-8 font-manrope">
      <div className="text-center mb-12">
        {data?.title ? (
          <h2 
            className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4 text-[#06213F]"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        ) : (
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4">
            <span className="text-[#06213F]">Real Words from Real </span>
            <span className="text-primary-red text-[#c20c15]">People</span>
          </h2>
        )}
        
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={grayStar}
                alt={`average rating`}
                className="w-3 h-auto"
              />
            ))}
            <span className="ml-2 font-bold text-gray-800">5.0</span>
            <span className="ml-1 font-medium text-gray-600">
              ({data?.subtitle || "190+ Reviews"})
            </span>
          </div>
          <img src={google} alt="Google" className="h-6 ml-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {itemsToRender.map((testimonial: any, index: number) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
