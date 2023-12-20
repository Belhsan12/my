import React from 'react';

function ResumeSection() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Belhsan Naffeti</h4>
              <p><em>Web and Mobile Developer with more than 2 years of experience in MERN stack. Based in Tunisia.</em></p>
              <ul>
                <li>Tunisia, Tunis</li>
                <li>52942810</li>
                <li>belhsannaffeti@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
            <h4>Master in Competitive Intelligence Monitoring</h4>
               <h5>Present</h5>
               <p><em>Ecole Superieur de Economy Digital (ESEN)</em></p>

            </div>
            <div className="resume-item">
           
            <h4>Bachelor in Information System Development</h4>
            <h5>2020 - 2023</h5>
            <p><em>ISET Kelibia</em></p>
             </div>
             <div className="resume-item">
    <h4>Computer Science Baccalaureate Admitted</h4>
    <h5>2020</h5>
    <h5>High School Sidi Hssine</h5>
    </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Web Developer</h4>
              <h5>2023 - Present</h5>
              <p><em>Transtu, Gongures, Tunisia</em></p>
              <ul>
                <li>Full Stack Developer specializing in MERN technology</li>
                <li>Designing and developing responsive web applications using MERN stack</li>
                <li>Collaborating with cross-functional teams to analyze, design, and ship new features</li>
                <li>Implementing best practices and coding standards for ensuring high-quality code</li>
                <li>Participating in code reviews and providing constructive feedback to peers</li>
              </ul>
            </div>
            <div className="resume-item">
                <h4>TRAINING INTERNSHIP: INTERN OACA</h4>
                <h5>January 7, 2022 to February 15, 2022</h5>
                <p><em>Tunisia Chargé</em></p>
                <ul>
                    <li>OACA: IT management.</li>
                    <li>Web application project to facilitate the registration and assignment of interns with supervision.</li>
                    <li>Managed up to 5 languages (html, css, js, bootstrap, php...)</li>
                    <li>Named request (OACA internship request)</li>
                </ul>
            </div>
            <div className="resume-item">
                <ul>
                    <li>INITIATION INTERNSHIP: INTERN Transtu</li>
                    <li>January 7, 2021 to February 15, 2021</li>
                    <li><em>Tunisia Chargé</em></li>
                    <li>Transtu: Information System Administration Direction.</li>
                    <li>Data migration from AS400 to MySQL.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
