import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const SeeDetails = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://assignment-11-server-fjjt0yfhy-emon-ismail.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold text-orange-600"> Foods</h2>
               
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                   services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default SeeDetails;