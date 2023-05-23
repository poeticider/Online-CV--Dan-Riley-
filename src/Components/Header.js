import React from 'react';
import './component.css';



const Header = () => {

    return(

        <header className="siteHeader">
            <a  
                id="titleAnchor"
                href="https://poeticider.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h1 id="title">Dan Riley</h1>
                
            </a>

                <h2 id="subTitle">Web Developer</h2>
            <a  
                className="anchorTags"
                href="https://www.linkedin.com/in/daniel-riley-a20389196/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h3 className="anchorTagChild">linkedIn</h3>
            </a>

            <a  
                className="anchorTags"
                href="mailto:d.riley0189@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h3 className="anchorTagChild">d.riley0189@gmail.com</h3>
            </a>

            <a  
                className="anchorTags"
                href="https://github.com/poeticider"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h3 className="anchorTagChild">gitHub</h3>
            </a>

        </header>
    )
 
};

export default Header;