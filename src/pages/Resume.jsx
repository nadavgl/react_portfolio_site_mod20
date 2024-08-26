import React from 'react';

const Resume = () => {
    return (
        <div>
            <section id="technical-skills">
                <h2>Technical Skills</h2>
                <ul>
                    <li><strong>Languages:</strong> JavaScript, HTML, CSS, SQL</li>
                    <li><strong>Frameworks/Libraries:</strong> React, Node.js, Express.js, Bulma, Handlebars.js</li>
                    <li><strong>Databases:</strong> MongoDB, PostgreSQL</li>
                    <li><strong>Version Control:</strong> Git, GitHub</li>
                    <li><strong>Tools:</strong> VS Code, Webpack, npm </li>
                    <li><strong>APIs:</strong> RESTful APIs, GraphQL</li>
                    <li><strong>Deployment:</strong> Github Pages, Netlify</li>
                </ul>
            </section>

            <section id="development-skills">
                <h2>Development Skills</h2>
                <ul>
                    <li><strong>Frontend Development:</strong> Responsive Design, UI/UX Design</li>
                    <li><strong>Backend Development:</strong> API Design, Database Management, Server-side Logic, Authentication/Authorization</li>
                    <li><strong>Full Stack Development:</strong> End-to-End Application Development, MERN Stack</li>
                    <li><strong>Version Control:</strong> Branching, Merging, Pull Requests</li>
                    <li><strong>Problem-Solving:</strong> Debugging, Data Structures</li>
                    <li><strong>Collaboration:</strong> Agile Methodology</li>
                </ul>
            </section>

            <section id="resume-download">
                <h2>Download My Resume</h2>
                <p>
                    You can download my resume by clicking the link below:
                </p>
                <a href="/images/FakeResume.pdf" download="FakeResume.pdf">
                    Download Resume
                </a>
            </section>
        </div>
    );
}

export default Resume;
