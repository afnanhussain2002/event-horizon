import React from "react";
import maps from '../../../assets/maps.jpg'

const PopularDetailsCard = ({ popularData }) => {
  console.log(popularData);
  const { id, name, banner_img, tags, description, location, date } = popularData || {};

  return (
    <>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
           `url(${banner_img})`,  
        }}
      >
        <div className=" bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
      
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 gap-5 flex-col md:flex-row">
        <div className="flex-1">
           <h3 className="text-3xl text-sky-400 font-bold">More About {name}</h3>
           <p>{description}</p>
           <p className="font-bold text-sky-400">Location: {location} </p>
           <p className="font-bold text-sky-400">Date: {date}</p>
        </div>
        <div className="flex-1">
         <img src={maps} alt="" />
        </div>
      </div>
    </>
  );
};

export default PopularDetailsCard;
