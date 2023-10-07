import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PopularDetailsCard from "./PopularDetailsCard/PopularDetailsCard";



const PopularDetails = () => {
   const [popularData, setPopularData] = useState()

     const {id} = useParams();
     const data = useLoaderData()
     console.log(data);
      

     useEffect(()=>{
          const findData = data?.find(popularData => popularData.id === parseFloat(id))
          setPopularData(findData);
     },[id, data])

   
  

    return (
        <div>
            <PopularDetailsCard popularData ={popularData}></PopularDetailsCard>

           
        </div>
    );
};

export default PopularDetails;