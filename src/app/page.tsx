"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    { id:1,title: "Experiential Marketing", img: "/sales.jpg", description: "Create immersive brand experiences that engage audiences and drive meaningful connections." },
    { id:2,title: "Events", img: "/event.jpg", description: "From corporate conferences to product launches, we deliver memorable events that exceed expectations." },
    { id:3,title: "Clothing & Outfit", img: "/clothing.jpg", description: "Design and production of custom apparel that represents your brand identity with style." },
    { id:4,title: "Comic Con", img: "/comic.jpg", description: "Specialized event management for pop culture conventions and fan experiences." },
    { id:5,title: "Tourism & Concert Production", img: "/tourism.jpg", description: "Complete production services for tourism campaigns and live music events." },
    { id:6,title: "Modelling", img: "/modelling.jpg", description: "Talent management and model placement for fashion, commercial, and digital campaigns." },
    { id:7,title: "Merchandise", img: "/merch.jpg", description: "Design, production, and distribution of branded merchandise that fans will love." },
    { id:8,title: "Franchise", img: "/franchise.jpg", description: "Franchise development and management services to expand your brand footprint." },
    { id:9,title: "Media Network", img: "/media.jpg", description: "Strategic media planning and placement across traditional and digital channels." },
    { id:10,title: "Television Production", img: "/tv.jpg", description: "End-to-end television production from concept development to broadcast." },
    { id:11,title: "Digital Marketing", img: "/digital_marketing.jpg", description: "Data-driven digital strategies to grow your online presence and engagement." },
    { id:12,title: "Consultancy & Services", img: "/consulting.jpg", description: "Expert guidance to optimize your marketing strategies and business operations." },
    { id:13,title: "Philanthropic Programme", img: "/philanthropy.jpg", description: "Meaningful corporate social responsibility initiatives that make a difference." },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* Hero Header Section */}
      <header className="relative w-full min-h-screen flex items-center justify-center text-center p-4 overflow-hidden">
        <Image src={"/tree.jpg"} alt="" width={1200} height={50} className="absolute w-full hidden lg:block"/>
        <Image src={"/mobile.jpeg"} alt="" width={1200} height={50} className="absolute w-full lg:hidden"/>
        <div className="absolute inset-0 bg-gradient-to-b 30 from transparent to-black"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 py-8 md:py-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in-up drop-shadow-lg font-['Bricolage_Grotesque']">
            Where Ideas Become Experiences
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Where creative ideas become unforgettable experiences.
          </p>
          <a
            href="#services"
            className="inline-block bg-white text-neutral-950 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-neutral-200 animate-fade-in-up animation-delay-600"
          >
            Explore Our Services
          </a>
        </div>
      </header>
      
      {/* Services Section */}
      <main id="services" className=" bg-black mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Discover Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative h-64 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105 group"
              onMouseEnter={() => setActiveService(service.id)}
              onClick={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Background image with blur placeholder */}
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/2j/6AAAAADo/4AAAAAElFTkSuQmCC"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-500"></div>

              {/* Service Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold leading-tight mb-2 opacity-100">
                  {service.title}
                </h3>

                {/* Description and CTA button */}
                <div
                  className={`overflow-hidden transition-all duration-900 ease-in-out ${
                    activeService === service.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-300 transition-opacity duration-500">
                    {service.description}
                  </p>
                  <button className="mt-4 w-fit px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-md transform transition-transform duration-500 ease-in-out 
                  scale-100">
                    Learn More
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>
      
      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-10">
        <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
}