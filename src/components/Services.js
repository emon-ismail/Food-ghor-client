import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
             <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* <figure><img src={img} alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">hii</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: $</p>
                <div className="card-actions justify-end">
                    {/* <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link> */}
                </div>
            </div>
        </div>



            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                } */}
            </div>
        </div>
    );
};

export default Services;