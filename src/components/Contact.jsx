import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
    <div className='container contact' id='contact'>
    <h1>CONTACT ME</h1>
    <div className='contact-icon' data-aos="zoom-in-up"
    data-aos-duration="1000">
    <a  href="https://www.instagram.com/" target='_blank' className='items'> <FaInstagramSquare  className='icons'/> </a>
    <a  href="https://developers.facebook.com/docs/facebook-login/" target='_blank' className='items'> <CiFacebook className='icons'/> </a>
    <a href="https://www.linkedin.com/uas/login-submit?_l=en_US" target='_blank' className='items'> <CiLinkedin className='icons'/> </a>
    <a href="https://x.com/?lang=en" target='_blank' className='items'> <FaSquareXTwitter className='icons'/></a>
    <a href="https://github.com/" target='_blank' className='items'> <FaGithubSquare className='icons'/>  </a>
    <a href="https://support.google.com/mail/answer/56256?hl=en" target='_blank' className='items'> <CgMail className='icons'/> </a>
    </div>
    </div>
    </>
  )
}

export default Contact