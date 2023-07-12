import React from 'react';
import './footer.css';

const Footer=()=>{
    return(
        <div className='footer'>
            <div className=' sb_footer section_padding'>
                <div className='footer_links'>
                    <div footer='footer_linksdiv'>
                        <h3>For Buisnesses</h3>
                        <p>Employee</p>
                        <p>Health Plans</p>
                        <p>Individual</p>
                    </div>
                    <div className='footer_linksdiv'>
                        <h3 style={{color: "black"}}>Resources</h3>
                        <p>Resource Centre</p>
                        <p>Testimonials</p>
                        <p>STV</p>
                    </div>
                    <div className='footer_linksdiv'>
                        <h3 style={{color: "black"}}>Company</h3>
                        <p>About</p>
                        <p>Press</p>
                        <p>Career</p>
                    </div>
                </div>
                <hr></hr>
                <div className='footer_below'>
                    <div className='footer_copyright'>
                        <p>
                            @{new Date().getFullYear()} CodeInn. All rights reserved.
                        </p>
                    </div>
                    <div className='footer_below_links'>
                        <div>
                            <p>Terms & Conditions</p>
                            <p>Privacy</p>
                            <p>Security</p>
                            <p>Cookie Declaration</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;