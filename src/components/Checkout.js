import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import Courses from './Courses';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price, description,img} = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            // serviceName: description,

            price,
            customer: name,
            email,
            phone,
            message

        }

        

        fetch('https://assignment-11-server-lyart.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
             
            })
            .catch(er => console.error(er));


    }



   
    return (
       


<div>
<form onSubmit={handlePlaceOrder}>
<figure><img className='object-cover' src={img} alt="Shoes" /></figure>
    <h2 className="text-4xl">You are about to order: {title}</h2>
    <p>{description}</p>
    <h4 className="text-3xl">Price: {price}</h4>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
        <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
        <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
    </div>
    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

    <input className='btn' type="submit" value="Place Your Review" />
</form>
</div>






    );
};

export default Checkout;