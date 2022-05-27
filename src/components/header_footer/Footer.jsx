import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Quiz</div>
                <div className="footer_copyright">
                    Made with  
                <span style={{color : 'grey'}}>♥</span> By 
                <a href="https://github.com/ritank1998?tab=repositories" target="_blank"rel="noopener noreferrer"> Ritank Saxena  
                </a>
                
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;