import React from 'react';
import './component.css';
import resumePDF from '../media/Documents/CV -Dan Riley-.pdf';



const Header = () => {

    return(

        <header className="siteHeader">
            <a  
                id="titleAnchor"
                href="#"
                rel="noopener noreferrer"
            >
                <h1 id="title">Dan Riley</h1>
                <h2 id="subTitle">Web Developer</h2>
            </a>

            <a  
                className="anchorTags"
                href="https://poeticider.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h3 className="anchorTagChild">Portfolio</h3>
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
                href= {resumePDF}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h3 className="anchorTagChild">resume.pdf</h3>
            </a>

        </header>
    )
 
};

export default Header;