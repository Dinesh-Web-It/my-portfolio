import React from 'react'
import './footer.css'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <div >
            <div className="address">
                <footer className="footer">
                    <div className="foot-content">
                        <h4 className='foot-h4'>Business</h4>
                        <a href="#">Web Application</a>
                        <a href="#">Web Sites</a>
                        <a href="#">Portrait Drawings</a>
                    </div>
                    <div className="foot-content">
                        <h4 className='foot-h4'>About us</h4>
                        <a href="#">Blogs</a>
                        <a href="#">Channels</a>
                        <a href="#">Sponsers</a>
                    </div>
                    <div className="foot-content">
                        <h4 className='foot-h4'>Contact</h4>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="">Terms & Condision</a>
                    </div>

                </footer>
                <div className="foot-icons">
                    <div className="details">
                        <h2>Dinesh</h2>
                        <p className='icons'><a href=""><FaPhone /> +91 9345749619</a></p>
                        <p className='icons'><a href=""><IoMdMail />dinesh.webit@gmail.com</a></p>
                        <p className='icons'><a href="https://github.com/Dinesh-Web-It"><FaGithubSquare /> GitHub</a></p>
                        <p className='icons'><a href="https://www.linkedin.com/in/dinesh-k-725343293"><IoLogoLinkedin />Linked In</a></p>
                    </div>
                </div>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
            </div>

        </div>
    )
}

export default Footer