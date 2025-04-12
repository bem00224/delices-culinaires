import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../style/Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer-text'>Créé avec <span className="heart">❤️</span> par Bah Elhadj Mamadou</p>
            <p className='footer-text'>© 2025 - Bah Elhadj Mamadou</p>
            <p className='me-trouver'>Retrouvez-moi sur : </p>
            <div className='social-icons'>
                <a href='linkedin.com/in/elhadj-mamadou-bah-02676531b' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className='icon' />
                </a>
                <a href='https://github.com/bem00224' target='_blank' rel="noopener noreferrer" aria-label='GitHub'>
                    <FaGithub className='icon'/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
