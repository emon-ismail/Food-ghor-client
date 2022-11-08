import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/img2.png'
const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content" data-theme='dark'>
      <div>
          <img alt='' src={img} width="100" height="50" viewBox="0 0 24 24" xmlns="images/abacus.png" fillRule="evenodd" clipRule="evenodd" className="fill-current"/>
          <p>Food Ghor<br />Providing Good Quality Food</p>
      </div>
      <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Food </Link>
          <Link className="link link-hover">Delivery </Link>
          <Link className="link link-hover">Fast Service</Link>
         
      </div>
      <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
         
      
      </div>
      <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
      </div>
  </footer>
    );
};

export default Footer;