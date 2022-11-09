import React from 'react';
import { Link } from 'react-router-dom';
import { FcAssistant, FcBusinessman, FcConferenceCall, FcRating, IconName } from "react-icons/fc";

const CoreFeatures = () => {
    return (
        <div>
           <div>
           <h3 className='text-center text-error'>Core Features</h3>
            <h1 className='text-center font-bold text-2xl m-3'> Why Choose Us</h1>
            <p className='text-center m-5'>we believe in Quality.  <br /> Our Goal is provide good food  around.</p>
           </div>

           <div className='flex flex-wrap justify-center gap-10 my-10 '>
           <div className=''>
           <div className='flex  justify-center '>
           
         
           </div >
           
            </div>

           <div className='border-2 shadow-2xl p-4 hover:bg-orange-500'>
          <div className='flex  justify-center'><FcAssistant></FcAssistant></div>
           <Link><h4 className='font-medium text-2xl'>24/7 Support</h4></Link>
           </div>

      

           <div className='border-2 shadow-2xl p-4 hover:bg-orange-500'>
           <div className='flex  justify-center ' > <FcRating></FcRating></div>
            <Link><h4 className='font-medium text-2xl'>Believe in Quality</h4></Link>
           </div>

           </div>
        </div>
    );
};

export default CoreFeatures;