import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-body'>
         <div className="blog-body'">  <div className="hero  bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl " />
    <div>
      <h1 className="text-3xl font-bold ">Difference between SQL and NoSQL</h1>
      <h3 className="py-6 text-2xl ">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h3>
     
    </div>
  </div>
</div></div>
<br />
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">What is JWT, and how does it work?</h1>
      <h3 className="py-6 text-2xl ">What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</h3>
     
    </div>
  </div>
</div>
<br />
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold"> What is the difference between javascript and NodeJS?</h1>
      <h3 className="py-6 text-2xl ">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</h3>
     
    </div>
  </div>
</div>
<br />

           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold"> How does NodeJS handle multiple requests at the same time?</h1>
      <h3 className="py-6 text-2xl ">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</h3>
     
    </div>
  </div>
</div>
<br />
        </div>
    );
};

export default Blog;