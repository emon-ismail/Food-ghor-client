import React from 'react';
import img5 from '../images/biryani.jpg'
const NewCome = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img5} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">New Come</h1>
            <p className="py-6">Biryani fully homemade</p>
            
          </div>
        </div>
      </div>
    );
};

export default NewCome;