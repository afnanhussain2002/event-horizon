import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  
  const { id, name, image, description } = service;
  return (
    <>
      <div className=" card w-full bg-base-100 shadow-xl image-full ">
        <figure>
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {
          description.length > 50 ? <p>{description.slice(0,50)}
          <span>......</span></p> : <p>{description}</p>
         }
          <div className="card-actions justify-end">
           <Link to={`service/${id}`}>
            <button className="btn bg-sky-400">Show Details</button>
           </Link>
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
