
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard/ServiceDetailsCard";


const ServiceDetails = () => {
    const [serviceData, setServiceData] = useState([])
    const {id} = useParams();
    const loadServices = useLoaderData()
    useEffect(()=>{
        const findData = loadServices.find(data => data.id === parseFloat(id))
        setServiceData(findData);
    },[loadServices, id])
    return (
        <div>
            
            <ServiceDetailsCard serviceData={serviceData}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;