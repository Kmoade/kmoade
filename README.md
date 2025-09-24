## Compiler KTHS






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Khanyisile Sekatane - Animated Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #f9c5d1, #d8b5ff);
            color: #333;
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        /* Floating bubbles background */
        .bubbles {
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
            top: 0;
            left: 0;
        }
        
        .bubble {
            position: absolute;
            bottom: -100px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            animation: float 15s infinite ease-in;
        }
        
        .bubble:nth-child(1) {
            width: 40px;
            height: 40px;
            left: 10%;
            animation-duration: 8s;
        }
        
        .bubble:nth-child(2) {
            width: 20px;
            height: 20px;
            left: 20%;
            animation-duration: 5s;
            animation-delay: 1s;
        }
        
        .bubble:nth-child(3) {
            width: 50px;
            height: 50px;
            left: 35%;
            animation-duration: 7s;
            animation-delay: 2s;
        }
        
        .bubble:nth-child(4) {
            width: 80px;
            height: 80px;
            left: 50%;
            animation-duration: 11s;
            animation-delay: 0s;
        }
        
        .bubble:nth-child(5) {
            width: 35px;
            height: 35px;
            left: 55%;
            animation-duration: 6s;
            animation-delay: 1s;
        }
        
        .bubble:nth-child(6) {
            width: 45px;
            height: 45px;
            left: 65%;
            animation-duration: 8s;
            animation-delay: 3s;
        }
        
        .bubble:nth-child(7) {
            width: 25px;
            height: 25px;
            left: 75%;
            animation-duration: 7s;
            animation-delay: 2s;
        }
        
        .bubble:nth-child(8) {
            width: 80px;
            height: 80px;
            left: 80%;
            animation-duration: 6s;
            animation-delay: 1s;
        }
        
        @keyframes float {
            0% {
                bottom: -100px;
                transform: translateX(0);
            }
            50% {
                transform: translateX(100px);
            }
            100% {
                bottom: 1080px;
                transform: translateX(-200px);
            }
        }
        
        header {
            background: linear-gradient(135deg, rgba(179, 153, 212, 0.9), rgba(226, 115, 150, 0.9));
            color: white;
            text-align: center;
            padding: 4rem 1rem;
            position: relative;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
            margin-bottom: 3rem;
        }
        
        .header-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
            animation: fadeInDown 1s ease;
        }
        
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            margin-bottom: 1.5rem;
            transition: all 0.5s ease;
            animation: pulse 2s infinite 1s;
        }
        
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
            }
            70% {
                box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
            }
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }
        
        .tagline {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            opacity: 0;
            animation: fadeIn 1s ease 0.5s forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .scroll-down {
            font-size: 2rem;
            margin-top: 1rem;
            animation: bounce 2s infinite;
            display: inline-block;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-20px);
            }
            60% {
                transform: translateY(-10px);
            }
        }
        
        nav {
            background: linear-gradient(to right, rgba(179, 153, 212, 0.9), rgba(226, 115, 150, 0.9));
            padding: 1rem;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            backdrop-filter: blur(5px);
        }
        
        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
        }
        
        nav ul li {
            margin: 0 1.5rem;
        }
        
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            transition: all 0.3s ease;
            position: relative;
        }
        
        nav ul li a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: white;
            transition: width 0.3s ease;
        }
        
        nav ul li a:hover::after {
            width: 100%;
        }
        
        nav ul li a:hover {
            transform: translateY(-3px);
            text-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        section {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        h2 {
            text-align: center;
            margin-bottom: 2rem;
            font-size: 2rem;
            color: #6a3093;
            position: relative;
            display: inline-block;
        }
        
        h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to right, #e27396, #b399d4);
            border-radius: 3px;
        }
        
        .about-content {
            display: flex;
            gap: 2rem;
            background: rgba(255,255,255,0.8);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.3);
            transform-style: preserve-3d;
            transition: all 0.5s ease;
        }
        
        .about-content:hover {
            transform: translateY(-5px) rotateX(1deg) rotateY(1deg);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        
        .about-text {
            flex: 2;
        }
        
        .skills {
            margin-top: 1.5rem;
        }
        
        .skills h3 {
            margin-bottom: 1rem;
            color: #8a2be2;
        }
        
        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
        }
        
        .skill {
            background-color: #f0d6ff;
            color: #6a3093;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        
        .skill:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            background-color: #e27396;
            color: white;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .project-card {
            background: rgba(255,255,255,0.8);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
            transform: translateY(0) rotate(0);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.3);
            opacity: 0;
            animation: fadeInUp 0.5s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }
        
        .project-card:hover {
            transform: translateY(-10px) rotate(-1deg);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        .project-img {
            height: 200px;
            overflow: hidden;
            position: relative;
        }
        
        .project-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        
        .project-card:hover .project-img img {
            transform: scale(1.1) rotate(1deg);
        }
        
        .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(104, 58, 141, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.5s ease;
        }
        
        .project-card:hover .project-overlay {
            opacity: 1;
        }
        
        .view-project {
            color: white;
            text-decoration: none;
            background: #e27396;
            padding: 0.8rem 1.5rem;
            border-radius: 30px;
            font-weight: 500;
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.5s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .project-card:hover .view-project {
            transform: translateY(0);
            opacity: 1;
        }
        
        .project-info {
            padding: 1.5rem;
        }
        
        .project-info h3 {
            margin-bottom: 0.5rem;
            color: #6a3093;
            transition: all 0.3s ease;
        }
        
        .project-card:hover .project-info h3 {
            color: #e27396;
        }
        
        .project-info p {
            color: #555;
            margin-bottom: 1rem;
        }
        
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .project-tag {
            background-color: #f0d6ff;
            color: #6a3093;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .project-tag:hover {
            background-color: #e27396;
            color: white;
            transform: translateY(-2px);
        }
        
        .experience-item {
            background: rgba(255,255,255,0.8);
            padding: 2rem;
            border-radius: 15px;
            margin-bottom: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.3);
            transition: all 0.5s ease;
        }
        
        .experience-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        
        .experience-item h3 {
            margin-bottom: 0.5rem;
            color: #8a2be2;
        }
        
        .experience-date {
            color: #9c6fad;
            font-style: italic;
            margin-bottom: 1rem;
        }
        
        .experience-description ul {
            margin-left: 1.5rem;
        }
        
        .experience-description li {
            margin-bottom: 0.5rem;
            position: relative;
            padding-left: 1.5rem;
        }
        
        .experience-description li::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: #e27396;
        }
        
        .contact-form {
            background: rgba(255,255,255,0.8);
            padding: 2rem;
            border-radius: 15px;
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.3);
            transition: all 0.5s ease;
        }
        
        .contact-form:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #6a3093;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #d8b5ff;
            border-radius: 4px;
            font-size: 1rem;
            background-color: rgba(255,255,255,0.7);
            transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #b399d4;
            box-shadow: 0 0 0 3px rgba(179, 153, 212, 0.3);
        }
        
        .form-group textarea {
            height: 150px;
            resize: vertical;
        }
        
        button {
            background: linear-gradient(to right, #b399d4, #e27396);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
            font-weight: 500;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.5s ease;
            width: 100%;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
        }
        
        button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: 0.5s;
        }
        
        button:hover::before {
            left: 100%;
        }
        
        button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        
        footer {
            background: linear-gradient(to right, rgba(179, 153, 212, 0.9), rgba(226, 115, 150, 0.9));
            color: white;
            text-align: center;
            padding: 3rem 2rem;
            margin-top: 4rem;
            clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }
        
        .social-links {
            margin-top: 1.5rem;
            display: flex;
            justify-content: center;
            gap: 1.5rem;
        }
        
        .social-links a {
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
            transition: all 0.5s ease;
            display: inline-block;
        }
        
        .social-links a:hover {
            transform: translateY(-5px) scale(1.2);
            color: #f0d6ff;
        }
        
        @media (max-width: 768px) {
            .about-content {
                flex-direction: column;
            }
            
            nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            nav ul li {
                margin: 0.5rem 0;
            }
            
            header {
                clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
                padding-bottom: 5rem;
            }
            
            footer {
                clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);
                padding-top: 4rem;
            }
        }
    </style>
</head>
<body>
    <!-- Floating bubbles background -->
    <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
    </div>
    
    <header>
        <div class="header-content">
            <img src="https://via.placeholder.com/150" alt="Khanyisile Sekatane" class="profile-img">
            <h1>KHANYISILE SEKATANE</h1>
            <p class="tagline">Software Developer | Junior Programmer | Client Service Consultant</p>
            <div class="scroll-down">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    </header>
    
    <nav>
        <ul>
            <li><a href="#about"><i class="fas fa-user"></i> About</a></li>
            <li><a href="#skills"><i class="fas fa-code"></i> Skills</a></li>
            <li><a href="#projects"><i class="fas fa-laptop-code"></i> Projects</a></li>
            <li><a href="#experience"><i class="fas fa-briefcase"></i> Experience</a></li>
            <li><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
        </ul>
    </nav>
    
    <section id="about">
        <h2>About Me</h2>
        <div class="about-content">
            <div class="about-text">
                <p>I am a dedicated and charismatic leader with a proven ability to balance team objectives and emotional dynamics. Guided by integrity, respect, and relentless passion, I motivate others to take initiative and achieve excellence.</p>
                <p>An accomplished Software Developer with expertise in PHP, Python, C#, JavaScript, and more, skilled in debugging and optimizing code for reliability and performance. Frequently praised for communication by my peers, I can be relied upon to help your team achieve its goals.</p>
                
                <div class="skills">
                    <h3>My Approach</h3>
                    <p>I thrive in detail-oriented environments while continuously seeking opportunities for growth. By strategically managing time, resources, and priorities, I drive impactful results and foster a culture of innovation in the workplace.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="skills">
        <h2>Technical Skills</h2>
        <div class="about-content">
            <div class="skills-container">
                <span class="skill">PHP</span>
                <span class="skill">Python</span>
                <span class="skill">C#</span>
                <span class="skill">JavaScript</span>
                <span class="skill">HTML/CSS</span>
                <span class="skill">.NET</span>
                <span class="skill">Java</span>
                <span class="skill">MySQL</span>
                <span class="skill">Linux</span>
                <span class="skill">Ubuntu</span>
                <span class="skill">Windows OS</span>
                <span class="skill">Power BI</span>
                <span class="skill">OneDrive</span>
                <span class="skill">SharePoint</span>
                <span class="skill">GitHub</span>
                <span class="skill">CompTIA Security+</span>
                <span class="skill">MEDI Switch</span>
                <span class="skill">MS Office</span>
                <span class="skill">User Experience Design</span>
                <span class="skill">Testing & Debugging</span>
                <span class="skill">Technical Consulting</span>
            </div>
        </div>
    </section>
    
    <section id="projects">
        <h2>Featured Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-img">
                    <img src="https://via.placeholder.com/600x400" alt="MOADE Light OS">
                    <div class="project-overlay">
                        <a href="#" class="view-project">View Project <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>MOADE Light OS</h3>
                    <p>Message-Oriented Application Development Environment developed at ELASI with JavaScript, HTML, CSS, and PHP.</p>
                    <div class="project-tags">
                        <span class="project-tag">JavaScript</span>
                        <span class="project-tag">PHP</span>
                        <span class="project-tag">System Design</span>
                    </div>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-img">
                    <img src="https://via.placeholder.com/600x400" alt="Corona Assist">
                    <div class="project-overlay">
                        <a href="#" class="view-project">View Project <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Corona Assist</h3>
                    <p>Web-based applications developed for Mediwell Medical and Dental Center during the COVID-19 pandemic.</p>
                    <div class="project-tags">
                        <span class="project-tag">Web Development</span>
                        <span class="project-tag">Healthcare</span>
                        <span class="project-tag">API Integration</span>
                    </div>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-img">
                    <img src="https://via.placeholder.com/600x400" alt="School LMS">
                    <div class="project-overlay">
                        <a href="#" class="view-project">View Project <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>School LMS Modifications</h3>
                    <p>PHP modifications to the Learning Management System at Sunward Park High School.</p>
                    <div class="project-tags">
                        <span class="project-tag">PHP</span>
                        <span class="project-tag">LMS</span>
                        <span class="project-tag">Education</span>
                    </div>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-img">
                    <img src="https://via.placeholder.com/600x400" alt="Healthcare Admin">
                    <div class="project-overlay">
                        <a href="#" class="view-project">View Project <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Healthcare Administration</h3>
                    <p>Systems developed for Professional Provident Scheme including MIP and Wordindex Robots.</p>
                    <div class="project-tags">
                        <span class="project-tag">Healthcare IT</span>
                        <span class="project-tag">Excel</span>
                        <span class="project-tag">PuTTY</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="experience">
        <h2>Professional Experience</h2>
        <div class="experience-item">
            <h3>Junior Programmer</h3>
            <p class="experience-date">JUN 2019 - APR 2025 | ELASI</p>
            <div class="experience-description">
                <ul>
                    <li>Developer on a light OS for MOADE (Message-Oriented Application Development Environment)</li>
                    <li>Debugged existing codebase to identify and fix bugs</li>
                    <li>Developed and tested code for web applications using JavaScript, HTML, CSS, and PHP</li>
                    <li>Created database queries to retrieve data from MySQL databases</li>
                    <li>Worked closely with product managers to understand customer needs</li>
                </ul>
            </div>
        </div>
        
        <div class="experience-item">
            <h3>ICT and Software Developer</h3>
            <p class="experience-date">JUN 2019 - SEP 2021 | Sunward Park High School</p>
            <div class="experience-description">
                <ul>
                    <li>Daily backups for the school LMS</li>
                    <li>Modifying the program/system using php</li>
                    <li>Wifi maintenance (Zone Director)</li>
                    <li>Ordering ICT Devices</li>
                    <li>PC setups and maintenance</li>
                </ul>
            </div>
        </div>
        
        <div class="experience-item">
            <h3>Software Developer (Corona Assist)</h3>
            <p class="experience-date">JAN 2020 - DEC 2021 | Mediwell Medical and Dental Center</p>
            <div class="experience-description">
                <ul>
                    <li>Full-time developer for Corona Assist</li>
                    <li>Designed and implemented various web-based applications for clients</li>
                    <li>Optimized code for better performance, scalability, reliability, security and maintainability</li>
                    <li>Collaborated with project stakeholders to ensure successful delivery of software solutions</li>
                </ul>
            </div>
        </div>
    </section>
    
    <section id="contact">
        <h2>Contact Me</h2>
        <div class="contact-form">
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message <i class="fas fa-paper-plane"></i></button>
            </form>
        </div>
    </section>
    
    <footer>
        <p>&copy; 2025 Khanyisile Sekatane. All rights reserved.</p>
        <div class="social-links">
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="mailto:sekatanekhanyi@gmail.com"><i class="fas fa-envelope"></i></a>
            <a href="tel:0671287289"><i class="fas fa-phone"></i></a>
        </div>
    </footer>
    
    <script>
        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section');
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            sections.forEach(section => {
                observer.observe(section);
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                });
            });
            
            // Form submission animation
            const contactForm = document.querySelector('form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const submitButton = this.querySelector('button[type="submit"]');
                    submitButton.innerHTML = 'Sending <i class="fas fa-spinner fa-spin"></i>';
                    submitButton.style.opacity = '0.8';
                    
                    // Simulate form submission
                    setTimeout(() => {
                        submitButton.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                        submitButton.style.background = 'linear-gradient(to right, #4CAF50, #2E7D32)';
                        
                        // Reset form
                        setTimeout(() => {
                            contactForm.reset();
                            submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                            submitButton.style.background = 'linear-gradient(to right, #b399d4, #e27396)';
                            submitButton.style.opacity = '1';
                        }, 3000);
                    }, 1500);
                });
            }
            
            // Floating bubble animation
            const bubblesContainer = document.querySelector('.bubbles');
            for (let i = 0; i < 20; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                
                // Random size between 10px and 60px
                const size = Math.random() * 50 + 10;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                
                // Random position
                bubble.style.left = `${Math.random() * 100}%`;
                
                // Random animation duration between 5s and 15s
                const duration = Math.random() * 10 + 5;
                bubble.style.animationDuration = `${duration}s`;
                
                // Random delay
                const delay = Math.random() * 5;
                bubble.style.animationDelay = `${delay}s`;
                
                bubblesContainer.appendChild(bubble);
            }
        });
    </script>
</body>
</html>
