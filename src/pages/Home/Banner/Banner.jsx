import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="bg-gray-900 text-white rounded-b-2xl">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[600px] lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className=" text-sky-500 text-5xl font-extrabold">
            Let us Arrange your 
              <span className="sm:block"> Event with our Expert Team. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Allow us to curate your special event, with every element designed by our team.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                to="/login"
              >
                Get Started
              </Link>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
