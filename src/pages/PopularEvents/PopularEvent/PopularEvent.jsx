import { Link } from "react-router-dom";

const PopularEvent = ({pEvent}) => {
    console.log(pEvent);
    const {id, name, banner_img, tags, description} = pEvent;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl mt-4">
        <figure>
          <img
          className="w-full h-48"
            src={banner_img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            
          </h2>
          
          {
          description.length > 50 ? <p>{description.slice(0,50)}
          <Link
          to={`popular/${id}`}
           className="text-sky-400 ml-4 font-bold">Read More...</Link></p> : <p>{description}</p>
         }
      
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{tags[0]}</div>
            <div className="badge badge-outline">{tags[1]}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularEvent;
