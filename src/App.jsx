import "./index.css";
import profile from "./assets/profile.jpeg";

function App() {
  return (
    <div className="app">

      {/* BACKGROUND GLOWS */}
      <div className="bg-glow glow-pink"></div>
      <div className="bg-glow glow-blue"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">MP</h2>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-left">

          <h1>
            Hi, I'm <span>Mohana Priya</span>
          </h1>

          <h3>
            AI & ML Enthusiast • Web Developer
          </h3>

          <p>
            Passionate Computer Science Engineering student focused on
            building futuristic web experiences and exploring AI/ML
            technologies with creativity and innovation.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download>
            <button>Download Resume</button>
            </a>

            <a
              href="https://github.com/priyahub20"
              target="_blank"
            >
              <button className="outline-btn">GitHub</button>
            </a>
          </div>

        </div>

        {/* PROFILE IMAGE */}
        <div className="hero-right">

          <div className="image-wrapper">
            <img src={profile} alt="Mohana Priya" />
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="section" id="about">

        <h2 className="section-title">About Me</h2>

        <div className="glass-card">

          <p>
            Detailed-oriented Computer Science Graduate with hands-on full-stack development experience and 
            a specialization in AI/ML. Strong communicator with a proven ability to work collaboratively, adapt to 
            new challenges, and contribute effectively to team projects. Proficient in MERN stack, Python, and 
            Tensorflow witha a portfolio of intelligent web applications. Eager to leverage strong algorithm 
            design skills and rapid prototyping abiliies to build next-generation software. 
          </p>

        </div>

      </section>

     {/* EDUCATION */}
<section className="section">

  <h2 className="section-title">Education</h2>

  <div className="education-grid">

    <div className="education-card">

      <h3>Higher Secondary Education</h3>

      <p>
        Jaigopal Garodia Vivekananda Vidyalaya Higher Secondary School
      </p>

      <span>2021 Batch</span>

    </div>

    <div className="education-card">

      <h3>
        B.E Computer Science & Engineering
      </h3>

      <p>DMI College of Engineering</p>

      <span>CGPA: 8.4 • 2022 - 2026</span>

    </div>

  </div>

</section>

      {/* SKILLS */}
      <section className="section" id="skills">

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">React & HTML</div>
          <div className="skill-card">Javascript</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">PostgreSQL</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">Power BI</div>
          <div className="skill-card">Machine Learning (TensorFLOW)</div>
          <div className="skill-card">Pandas & NumPy</div>
          <div className="skill-card">Matplotlib & Seaborn</div>
        </div>

      </section>

      {/* STRENGTHS */}
      <section className="section">

        <h2 className="section-title">Strengths</h2>

        <div className="strength-grid">

          <div className="glass-card">Problem Solving</div>
          <div className="glass-card">Teamwork</div>
          <div className="glass-card">Adaptability</div>
          <div className="glass-card">Time Management</div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="section">

        <h2 className="section-title">Experience</h2>

        <div className="timeline">

          <div className="timeline-card">
            <h3>Data Analyst Intern</h3>
            <p>VLOG Innovations LLP (Virtual) Worked on data analysis concepts and Power BI 
              dashboards to derive insights from datasets.</p>
          </div>

          <div className="timeline-card">
            <h3>Industrial Training</h3>
            <p>Hyundai (KIML) ands-on industrial training with exposure to manufacturing workflows and
            quality processes.</p>
          </div>

          <div className="timeline-card">
            <h3>IIT Madras Workshop</h3>
            <p>Attended 2 Days National Tech Workshop by technobytes based on DevOps theoritical concepts.</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          
    <div className="project-card">
     <h3>BMW Dashboard</h3>
  <p>
    Power BI dashboard with KPI analytics and database management.
  </p>

  <div className="project-tools">
    <span>Power BI</span>
    <span>DAX</span>
    <span>SQL</span>
    <span>Data Visualization</span>
  </div>
</div>

<div className="project-card">
  <h3>Restaurant UI/UX</h3>

  <p>
    Modern responsive restaurant-style React web application with an interactive and realistic UI design.
  </p>

  <div className="project-tools">
    <span>React.js</span>
    <span>JavaScript</span>
    <span>HTML5</span>
    <span>CSS3</span>
  </div>
</div>

<div className="project-card">
  <h3>SOS Emergency Website</h3>

  <p>
    Frontend application for emergency awareness and women safety.
  </p>

  <div className="project-tools">
    <span>React.js</span>
    <span>JavaScript</span>
    <span>CSS3</span>
    <span>Responsive UI</span>
  </div>
</div>

<div className="project-card">
  <h3>E-Commerce Website</h3>

  <p>
    Designed and deployed a responsive website to showcase the
    company’s inventory of products and detailed specifications.
  </p>

  <div className="project-tools">
    <span>React.js</span>
    <span>Node.js</span>
    <span>MongoDB</span>
    <span>REST API</span>
  </div>
</div>

<div className="project-card">
  <h3>Disaster Awareness Application</h3>

  <p>
    Web-based quiz, guidelines and instructions to promote
    disaster preparedness.
  </p>

  <div className="project-tools">
    <span>JavaScript</span>
    <span>HTML5</span>
    <span>CSS3</span>
    <span>UI Design</span>
  </div>
</div>

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section className="section">

        <h2 className="section-title">Certifications</h2>

        <div className="skills-grid">

          <div className="skill-card">Blockchain Fundamentals</div>
          <div className="skill-card">Prompt Engineering</div>
          <div className="skill-card">CCNA Networking</div>
          <div className="skill-card">Data Analytics</div>
          <div className="skill-card">UI & UX</div>
          <div className="skill-card">NPTEL</div>
          <div className="skill-card">SQL (Hackerrank)</div>
          <div className="skill-card">Basics to Python</div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">

        <h2 className="section-title">Contact</h2>

        <p>mohanapriya162020@gmail.com</p>

        <div className="contact-links">

          <a
            href="https://github.com/priyahub20"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohana-priya-r-7b4363284"
            target="_blank"
          >
            LinkedIn
          </a>

        </div>

      </section>

    </div>
  );
}

export default App;