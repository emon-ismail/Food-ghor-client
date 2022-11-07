import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext'
import "./Home.css"
import pc from '../assets/pc.json'
import Lottie from "lottie-react";
import Services from './Services'
import Banner from './Banner/Banner'

const Home = () => {
  const { user } = useContext(AuthContext)
  return (
    <section className='home-body'>
      <div className=''>
        <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900'>
         
         <Banner></Banner>
        <Services></Services>
  
 
  
        </div>
        
      </div>
    </section>
  )
}

export default Home
