import './Footer.css'
import {
    FaFacebookF, FaInstagram, FaLinkedinIn, FaCcVisa, FaCcMastercard, FaCcPaypal,FaApplePay} from "react-icons/fa";
import { House } from "lucide-react";
import logo from "../../../assets/images/logo/logo.png"

function Footer() {
    return (
        <div className='Footer-Section'>
            <div className='footerInfo'>
                <div className='footerLogo'>
                    <a href="#">
                        <img className='footerLogoImg' src={logo} alt="" />
                    </a>
                    <p>Shop Smart - Sell Smart!</p>
                </div>
                <div className="footerContent">
                    <div className="links forSame">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Mission & Vision</a>
                            </li>
                            <li>
                                <a href="">How It Works</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="helpCenter forSame">
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <a href="">Help Center</a>
                            </li>
                            <li>
                                <a href="">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="socialLinks forSame">
                        <h3>Follow Us</h3>
                        <div className='socialLogos'>
                            <FaFacebookF size={28} />
                            <FaInstagram size={28} />
                            <FaLinkedinIn size={28} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='paymentSec'>
                    <h3>Secure Payments</h3>
                <div className='payMethodLogo'>
                    <FaCcPaypal size={40} />
                    <FaCcVisa size={40} />
                    <FaCcMastercard size={40} />
                </div>
                <p>© 2026 Banjulo.com. All rights reserved. </p>
            </div>
        </div>
    )
}


export default Footer;