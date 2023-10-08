import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="relative bg-[url(https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?w=1380&t=st=1696794044~exp=1696794644~hmac=46896534cc4e87a9dcb36cd9b1dc288ca24e33df5d2a4257d56844198e520234)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative  mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl bg-sky-400 py-10 px-5 rounded-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let Us Arrange Your
              <strong className="block font-extrabold text-white">
                Event By Us
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Allow Us to Curate Your Special Event, Every Element Designed by Our Team
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to={"/login"}
                className="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-sky-400 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>

              <a
                href="#"
                className="block w-full rounded bg-white border border-sky-400 px-12 py-3 text-sm font-medium text-sky-400 shadow hover:text-white hover:bg-sky-400 hover:border-white focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Banner;
