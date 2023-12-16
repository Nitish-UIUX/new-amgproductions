import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="about">
                    <h2 >About us</h2>

                    <p style={{ textAlign: 'justify' }}>
                        Unauthorized use and / or duplication of this material (including but not limited to the proprietary names, service marks, logos, brand names, trade names, graphics, designs, copyrights, trade dress, and all other intellectual property) without express and written permission from this site’s author and / or owner is strictly prohibited.
                    </p>
                </div>

                <div className="important-links">
                    <ul id='list_1'>
                        <h2>Important Links</h2>
                        <li><a href="#" target="_blank">My Cart</a></li>
                        <li><a href="#" target="_blank">My Account</a></li>
                        <li><a href="#" target="_blank">Services</a></li>
                        <li><a href="#" target="_blank">About Us</a></li>
                        <li><a href="#" target="_blank">Our Review</a></li>
                    </ul>
                </div>
                <div className="social-media">
                    <h2>Social Media</h2>
                    <ul id='social'>
                        <li>
                            <a href="#" target="_blank"><img src="images/facebook.gif" alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><img src="images/insta.gif" alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><img src="images/inkedin.gif" alt="Twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><img src="images/youtube.gif" alt="youtube" />
                            </a>
                        </li>
                    </ul>
                    <ul id='list_1'>
                    <h2>Contact Us</h2>
                        <li><i class="ri-mail-send-line"></i> contact@amgproductions.net</li>
                        <li><i class="ri-phone-line"></i> +91-8767794712</li>
                    </ul>
                </div>
                <div className="static-pages">
                    {/* Static Pages section content */}
                    <ul id='list_1'>
                        <h2>Static Pages</h2>
                        <li><a href="#" target="_blank" > Privacy Policy </a></li>
                        <li><a href="#" target="_blank" >Terms & Conditions</a></li>
                        <li><a href="#" target="_blank" > Refund & Returns </a></li>
                        <li><a href="#" target="_blank" > Link-1</a></li>
                        <li><a href="#" target="_blank" > LInk-2</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2021 AMG Productions | All Rights Reserved.</p>
            </div>
        </>

    );
};

export default Footer;