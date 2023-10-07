import homeBanner from '../../../assets/home_banner.jpg'

const Banner = () => {
  return (
    <>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            `url(${homeBanner})`,
        }}
      >
        <div className=" bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"></h1>
            <p className="mb-5">
              
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
