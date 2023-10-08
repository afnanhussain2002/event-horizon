import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TeamsSection = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  console.log(members);
  return (
    <div className="mt-12">
      <div>
        <h2 className="mb-12 text-5xl font-bold text-center">
          Meet The <u className="text-sky-400 dark:text-sky-400 ">Team</u>
        </h2>
      </div>
      <div className="mt-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <section className="mb-32 text-center">
                <div className="mb-6 lg:mb-0">
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src={member.image}
                        className="w-full h-56 rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="mb-4 text-lg font-bold text-sky-500">{member.name}</h5>
                      <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamsSection;
