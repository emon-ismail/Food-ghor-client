import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ethImg from '../assets/eth.jpeg'
import { AuthContext } from '../contexts/UserContext'
import Topics from './Topics'
import "./Courses.css"

const Courses = () => {


  return (
     <div>
            <form >
            
                <h2 className="text-4xl">Give Your review</h2>
              
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" className="input input-ghost w-full  input-bordered" required />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Place Your Review" />
            </form>
        </div>
  )
}

export default Courses
