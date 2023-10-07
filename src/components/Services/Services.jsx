import { useEffect, useState } from "react";
import Service from "./Service/Service";




const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <>
            <div className="mt-8">
                <h3 className="text-5xl font-bold text-center text-sky-400 underline">Our Service</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </>
    );
};

export default Services;