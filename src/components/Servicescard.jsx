import React from "react";
import { useState } from "react";
import assets from "../assets/assets";
import { useRef } from "react";  
const Servicescard = ({ services, index }) => {

const[position ,setPosition] = useState({x:0,y:0})
const [visible, setvisible] = useState(false)

const divref = useRef(null)
const handleMouseMove = (e) => {
  const rect = divref.current.getBoundingClientRect();
  setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
}
  return (
    <div className="relative overflow-hidden max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-7xl mx-auto mt-[3px] px-[3px] p-[3px] rounded-xl border border-gray-300 shadow-md"
onMouseEnter={()=>{
  setvisible(true)
}

}onMouseLeave={()=>{
  setvisible(false)
}}

ref={divref} onMouseMove={handleMouseMove}
>

      {/* Gradient Background */}
      <div className={`pointer-events-none absolute z-0 w-[300px] h-[300px] rounded-full blur-2xl bg-gradient-to-r from-blue-800 via-indigo-600 to-pink-900 ${visible ? 'opacity-70' : 'opacity-0'} mix-blend-lighten transition-opacity duration-200`} style={{ top: position.y - 50  , left: position.x - 50 }}></div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-10 p-8 transition-all rounded-[10px] border border-gray-300 shadow-md hover:m-0.5 hover:p-7.5 bg-white">

        {/* Icon */}
        <div className="bg-gray-100 rounded-full p-2">
          <img
            src={services.icon}
            alt={services.title}
            className="w-24 h-24 object-contain bg-white rounded-full"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 gap-4">
          <h3 className="text-xl font-bold">{services.title}</h3>
          <p className="text-gray-600">{services.description}</p>
        </div>

      </div>
    </div>
  );
};

export default Servicescard;
