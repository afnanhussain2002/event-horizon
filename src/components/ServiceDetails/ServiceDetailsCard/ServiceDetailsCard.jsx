import React from "react";

const ServiceDetailsCard = ({ serviceData }) => {
  console.log(serviceData);
  const { id, name, image, description, price } = serviceData || {};

  const handleBookmark = () =>{
   const bookmarkArray = [];
   const bookmarkItems = JSON.parse(localStorage.getItem('bookmarks'))

   if (!bookmarkItems) {

    bookmarkArray.push(serviceData)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkArray));
    
   }else{
       bookmarkArray.push(...bookmarkArray,serviceData) 
       localStorage.setItem('bookmarks', JSON.stringify(bookmarkArray))

   }
  }
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                SERVICE NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {name}
              </h1>
              <p className="leading-relaxed">{description}</p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {price}
                </span>
                <button onClick={handleBookmark} className="flex ml-auto text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">
                  Bookmark
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsCard;
