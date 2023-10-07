import PropTypes from "prop-types";

const Service = ({ service }) => {
  
  const { name, image, description } = service;
  return (
    <>
      <div className=" card w-96 bg-base-100 shadow-xl image-full mt-4">
        <figure>
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
Service.propTypes = {
  service: PropTypes.object,
};
export default Service;
