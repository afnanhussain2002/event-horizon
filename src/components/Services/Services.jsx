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
                <h3 className="text-5xl font-bold text-center">Our <span className="underline text-sky-400">Service</span></h3>
            </div>
            <div className="grid gap-3 grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </>
    );
};

export default Services;