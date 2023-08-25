import React from 'react';
import './component.css';

const Main = () => {
    return (
        <main className="mainSiteParent">
            <div className="mainSidebarChild">

                <h2 className="sidebarTitle">Coding skills</h2>

                <h3>Good knowledge of:</h3>
                <div className="skillsDiv">
                    <h3>React</h3>
                    <h3>JavaScript</h3>
                    <h3>Ruby</h3>
                    <h3>Python</h3>
                    <h3>Git/Node.js</h3>
                    <h3>CSS/HTML</h3>
                    
                </div>
                <br></br>

                <h3>Some knowledge of:</h3>
                <div className="skillsDiv">
                    <h3>Ruby on Rails</h3>
                    <h3>Php</h3>
                    <h3>JQuery</h3>
                    <h3>TypeScript</h3>
                    <h3>Java</h3>
                    <h3>C#</h3>
                    <h3>WordPress</h3>
                    <h3>SQL</h3>
                    <h3>Docker</h3>

                </div>
                <br></br>

                <h3>Other skills:</h3>
                
                <div className="skillsDiv">
                    <h3>French/Spanish Language</h3>
                    <h3>Teaching/Education</h3>
                    <h3>Dynamic Learning</h3>
                    <h3>Time Management</h3>
                    <h3>Organisational Skills</h3>
                    <h3>Tech Support</h3>

                </div>


            </div>

            <div className="mainSiteChild">
                <h2 className="mainTitle">Current Goals</h2>
                <h3 id="goalsSubTitle">My ambition is to become a full-time Web-Developer.</h3>
                    <p className="mainP">
                        In 2021 I made the decision to career-switch into 
                        programming and I haven't looked back since!
                        
                    </p>

                    <aside>I am currently studying <strong>SQL</strong> and <strong>PHP</strong>.</aside>
                

                <br></br>

                <h2 className="mainTitle">Personal Informantion</h2>
                <p>
                    I have lived and worked across the globe as a linguist, teacher, political-scientist and now web-developer.<br></br>

                    After completing a 12-month foundational traineeship in programming last year,
                    I made the top 7% of 20,000 candidates to be accepted onto an intensive Web-Development
                    course. This was co-certified by the University of Manchester in partnership with the Department for Education 
                    specialising in React, JavaScript, Node, Git Bash, HTML and CSS. My final grade was 99%.
                </p>

                <br></br>

                <h2 className="mainTitle">NoteWorthy <span id="titleJobs">Work</span> + <span id="titleEdu">Education</span></h2>

                <ul>
                <li className="mainULJobs">Web Developer at The Curious, Shrewsbury, UK. 2023.</li>
                    <li className="mainULEdu">Web-Development Bootcamp. University of Manchester/HyperionDev (Remote) 2022 - 2023.</li>
                    <li className="mainULJobs">Junior Ruby on Rails Developer at SuperByte, Shrewsbury, UK. 2022.</li>
                    <li className="mainULEdu">Coding Traineeship. IT Career Switch (Remote) 2021 - 2022.</li>
                    <li className="mainULJobs">English Instructor at Wall Street English Academy, Jeddah, Saudi Arabia. 2020 - 2021.</li>
                    <li className="mainULEdu">M.A. Political Science: Latin American Studies. Stockholm University, Stockholm, Sweden. 2017 - 2019.</li>
                    <li className="mainULEdu">M.A.Erasmus semester (studies entirely in French/Spanish). Sorbonne Nouvelle, Paris, France. 2018.</li>
                    <li className="mainULJobs">English Instructor at Velvet Academy, Bilbao, Spain. 2017.</li>
                    <li className="mainULJobs">English Instructor at YBM Academy, Kondae, Seoul, South Korea. 2015 - 2016.</li>
                    <li className="mainULEdu">TEFL Training and Certification. Via Lingua, Istanbul, Turkey. 2015.</li>
                    <li className="mainULJobs">English Instructor and Community Volunteer at Maison de l'Amitié, Montréal, Canada. 2014 - 2015.</li>
                    <li className="mainULJobs">Wildlife Volunteer at Rainsong Wildlife Sanctuary, Cabuya, Costa Rica. 2013.</li>
                    <li className="mainULEdu">B.A. Modern Languages: French and Spanish. Nottingham Trent University, Nottingham, UK. 2010 - 2014.</li>
                </ul>

                <br></br>

                <h2 className="mainTitle">Profile</h2>

                <p>
                    Polite, punctual, self-driven and positive. Apt at taking initiative/acting decisively with good attention to detail.
                    Strong leadership/management skills and a robust independent worker. Open-minded and always willing to learn with a development
                    mindset. Clear and concise communication skills, and will get along with almost anyone regardless of their background. 
                    Passion for travel, language/culture, gaming/geekdom, academia and music. Good competence with computers; both software and hardware.
                </p>

            </div>
        </main>
    )
};

export default Main;