import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer md:p-10 bg-teal-50 text-base-content justify-around">
  <div className=''>
    <img  className='w-40 ' src="navtitle.png" alt="" />
    <p  className='w-48 '>Do you know that according to Google, the monthly search volume for anime related topics is up to over 1 Billion times? </p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;