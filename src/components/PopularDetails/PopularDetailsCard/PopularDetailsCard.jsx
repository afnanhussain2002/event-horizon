import { IoLocationOutline, IoCalendarClearOutline } from "react-icons/io5";

const PopularDetailsCard = ({ popularData }) => {
  console.log(popularData);
  const { id, name, banner_img, tags, description, location, date } = popularData || {};

  return (
    <>
     <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={banner_img}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
      <p className="mb-8 leading-relaxed">{description}</p>
      <div className="flex flex-col justify-center gap-3">
        <div className="flex justify-center items-center text-center gap-2">
        <IoLocationOutline/>
        <p> {location}</p>
        </div>
        <div className="flex justify-center items-center text-center gap-2">
        <IoCalendarClearOutline/>
        <p> {date}</p>
        </div>
        
        
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default PopularDetailsCard;
