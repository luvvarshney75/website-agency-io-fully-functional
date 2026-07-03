import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import Servicescard from "./Servicescard";

const Services = () => {
  const services = [
    {
      title: "AI-Powered Solutions",
      description:
        "Our AI-powered solutions are designed to revolutionize the way businesses operate. We leverage cutting-edge artificial intelligence technologies to provide innovative and efficient solutions that drive growth and success.",
      icon: assets.ads_icon,
    },
    {
      title: "Custom Software Development",
      description:
        "Our custom software development services are tailored to meet the unique needs of your business. We work closely with you to understand your requirements and deliver high-quality, scalable, and efficient software solutions that drive your business forward.",
      icon: assets.marketing_icon,
    },
    {
      title: "Cloud Computing Services",
      description:
        "Our cloud computing services provide scalable and flexible solutions for businesses of all sizes. We offer a range of cloud services, including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS), to help you optimize your operations and enhance your productivity.",
      icon: assets.content_icon,
    },
    {
      title: "Data Analytics and Insights",
      description:
        "Our data analytics and insights services help businesses make informed decisions by providing actionable insights from their data. We use advanced analytics techniques and tools to analyze your data and uncover valuable insights that can drive your business growth and success.",
      icon: assets.social_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-24 pt-30 text-gray-700"
    >
      {/* Background Image */}
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-40 -left-40 -z-10 sm:hidden"
      />

      <Title
        title="Our Services"
        description="We offer a wide range of services to help you grow your business and achieve your goals."
      />

      {/* Cards */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Servicescard services={service} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
