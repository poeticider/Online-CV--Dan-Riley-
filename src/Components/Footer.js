import React from 'react';
import './component.css';



const Footer = () => {

    return(
        <footer class="footer">
                <a  
                    className="anchorTags"
                    href="https://www.linkedin.com/in/daniel-riley-a20389196/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3 className="anchorTagChild">LinkedIn</h3>
                </a>

                <a  
                className="anchorTags"
                href="https://github.com/poeticider"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h3 className="anchorTagChild">GitHub</h3>
            </a>

        </footer>
    )
 
};

export default Footer;