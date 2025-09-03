"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [ModalOpen, setmodalOpen] = useState(false)

  const services = [
    { id:1, type:"video",title: "Experiential Marketing", img: "/em.mp4", description: "Create immersive brand experiences that engage audiences and drive meaningful connections." },
    { id:3, type:"img",title: "Clothing & Outfit", img: "/clothing.jpg", description: "Design and production of custom apparel that represents your brand identity with style." },
    { id:4, type:"video",title: "Kiddies Services", img: "/kids.mp4", description: "Create fun and safe environments for children's events, from birthday parties to educational workshops and entertainment." },
    { id:5, type:"img",title: "Tourism & Concert Production", img: "/tourism.jpg", description: "Complete production services for tourism campaigns and live music events." },
    { id:2, type:"video",title: "Events", img: "/events.mp4", description: "From corporate conferences to product launches, we deliver memorable events that exceed expectations." },
    { id:6, type:"img",title: "Modelling", img: "/modelling.jpg", description: "Talent management and model placement for fashion, commercial, and digital campaigns." },
    { id:8, type:"video",title: "Talent Management", img: "/talent_management.mp4", description: "We provide expert career management for artists and creators, securing opportunities and guiding their professional growth." },
    { id:7, type:"img",title: "Merchandise", img: "/merch.jpg", description: "Design, production, and distribution of branded merchandise that fans will love." },
    { id:9, type:"img",title: "Media Network", img: "/media.jpg", description: "Strategic media planning and placement across traditional and digital channels." },
    { id:10, type:"img",title: "Television Production", img: "/tv.jpg", description: "End-to-end television production from concept development to broadcast." },
    { id:11, type:"img",title: "Digital Marketing", img: "/digital_marketing.jpg", description: "Data-driven digital strategies to grow your online presence and engagement." },
    { id:14, type:"video",title: "Music Publishing", img: "/music.mp4", description: "Our team manages the copyrights and licensing of musical compositions, ensuring fair compensation for songwriters and composers."},
    { id:12, type:"img",title: "Consultancy & Services", img: "/consulting.jpg", description: "Expert guidance to optimize your marketing strategies and business operations." },
    { id:13, type:"img",title: "Philanthropic Programme", img: "/philanthropy.jpg", description: "Meaningful corporate social responsibility initiatives that make a difference." },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
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
      <main id="services" className="container mx-auto px-4 py-16">
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
              {/* Background video with object-cover and no controls */}
              {service.type == "video" ?(<video
                src={service.img}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                autoPlay
                loop
                muted
                playsInline
              />):(
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/2j/6AAAAADo/4AAAAAElFTkSuQmCC"
              />)}
              
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Floating CTA Button */}
      <div onClick={()=>setmodalOpen(true)} className="fixed bottom-6 right-6 z-10">
        <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
          Contact Us
        </a>
      </div>
    {ModalOpen &&(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
        <div className="bg-neutral-900 rounded-2xl p-8 max-w-lg w-full text-center relative transform transition-transform duration-300 scale-100 animate-fade-in-up">
          {/* Close Button */}
          <button
            onClick={()=>setmodalOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300">
              We’d love to hear from you.
            </p>
            <div className="space-y-4 text-left w-full max-w-xs">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <span className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-400">Email Address</p>
                  <a href="mailto:Timerockfamilyentertainment@gmail.com" className="text-white hover:text-blue-400 transition-colors text-xs md:text-base">Timerockfamilyentertainment@gmail.com</a>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-center space-x-3">
                <span className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.99 1.15l-1.13 5.46a2 2 0 00.72 1.94l2.57 2.57a2 2 0 001.94.72l5.46-1.13a1 1 0 011.15.99V19a2 2 0 01-2 2h-1a15 15 0 01-14-14V3z" />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-400">Phone Number</p>
                  <a href="tel:09122072401" className="text-white hover:text-purple-400 transition-colors">+234910000234</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
}