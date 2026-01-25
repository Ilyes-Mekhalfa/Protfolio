import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Cpu, Zap, Users, Target, Facebook } from 'lucide-react';
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // const projects = [
  //   {
  //     title: "E-Commerce Platform with AI Recommendations",
  //     problem: "Traditional e-commerce platforms struggle with personalized user experiences, leading to high bounce rates and low conversion.",
  //     solution: "Developed a full-stack e-commerce application featuring an AI-powered recommendation engine that analyzes user behavior in real-time.",
  //     tech: ["React.js", "Node.js", "MongoDB", "TensorFlow.js", "Stripe API", "AWS"],
  //     impact: ["40% increase in session duration", "28% improved conversion rate", "1,000+ transactions in beta", "35% reduced cart abandonment"],
  //     color: "from-blue-500 to-purple-600"
  //   },
  //   {
  //     title: "Real-Time Collaboration Tool",
  //     problem: "Remote teams need efficient ways to collaborate synchronously without the overhead of constant video calls.",
  //     solution: "Built a collaborative workspace enabling teams to work together in real-time with live editing, messaging, and task management.",
  //     tech: ["Next.js", "Socket.io", "Redis", "WebRTC", "OAuth 2.0", "MongoDB"],
  //     impact: ["500+ concurrent users", "<100ms latency", "45% reduced meeting time", "92% user satisfaction"],
  //     color: "from-green-500 to-teal-600"
  //   },
  //   {
  //     title: "AI-Powered Content Generator Dashboard",
  //     problem: "Content creators spend hours generating, editing, and optimizing content for different platforms manually.",
  //     solution: "Created an AI-assisted content generation platform using NLP and machine learning to create and optimize content across channels.",
  //     tech: ["React.js", "Python", "OpenAI GPT", "PostgreSQL", "Docker", "AWS Lambda"],
  //     impact: ["60% reduced creation time", "10,000+ pieces generated", "3 positions SEO improvement", "8 languages supported"],
  //     color: "from-orange-500 to-red-600"
  //   }
  // ];

  const skills = {
    frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "Python"],
    database: ["MongoDB", "PostgreSQL", "Redis", "Mongoose"],
    aiml: ["TensorFlow.js", "OpenAI API", "NumPy", "Pandas"],
    tools: ["Git/GitHub", "Docker", "CI/CD"]
  };

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "MedQuiz Website(Quizoo)",
      period: "JUN 2025 - Present",
      points: [
        "Quiz Website designed fore medical students to help them to prepare well for their exams",
        "Tech Stack used : MERN Stack (MongoDB, Express.js, React.js, Node.js)",
        "Ai integrated to generate explanations for the answers"
      ]
    },
    {
      title: "Backend Developer",
      company: "Wastoo",
      period: "Aug 2025 - present",
      points: [
        "Built and maintained scalable backend services for a waste management platform",
        "Using Next Js AND MYsQL to create efficient APIs and database Schemas"
      ]
    },
    {
      title: "Web/AI Developer",
      company: "Youth's House",
      period: "01-03 Nov 2025",
      points: [
        "Delivered custom web/app solution for the Youth's house in the Hackathon orgnised by the Minsitry of Youths in algeria ",
        "Develpoed web admin dashboard to manage events and youth's activities" ,
        "Recommendation System Using API key to suggest activites based of user interests",
        "Ai powered Chatbot to help youth's find relevent information quickly"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hey, Im Ilyes Mekhalfa
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-slate-700 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className={`max-w-4xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hello World, Im Ilyes Mekhalfa
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Turning complex problems into elegant, user-centered solutions
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            I specialize in building scalable web applications using the MERN stack, with a passion for integrating AI to create smarter, more intuitive digital experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View My Work
            </button>
            {/* <button className="px-8 py-3 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Hi, I'm a full-stack MERN developer  with a proven track record of delivering high-impact projects. With years of hands-on experience, I'm driven by the challenge of crafting code that doesn't just work—it performs, scales, and delights users.
              </p>
              <p className="text-lg text-gray-300">
                My expertise spans the entire development lifecycle, from architecting scalable backend systems to creating intuitive, responsive user interfaces. I'm particularly passionate about leveraging AI and machine learning to solve real-world problems.
              </p>
              <p className="text-lg text-gray-300">
                Currently seeking opportunities to contribute to innovative teams where I can leverage my technical expertise and problem-solving mindset to drive meaningful results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-blue-500/30">
                <Code className="text-blue-400 mb-3" size={32} />
                <h3 className="font-bold text-xl mb-2">Clean Code</h3>
                <p className="text-gray-400 text-sm">Writing maintainable, scalable solutions</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-6 rounded-xl border border-green-500/30">
                <Zap className="text-green-400 mb-3" size={32} />
                <h3 className="font-bold text-xl mb-2">Performance</h3>
                <p className="text-gray-400 text-sm">Optimized for speed and efficiency</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-xl border border-orange-500/30">
                <Cpu className="text-orange-400 mb-3" size={32} />
                <h3 className="font-bold text-xl mb-2">AI Integration</h3>
                <p className="text-gray-400 text-sm">Smart, data-driven applications</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-500/30">
                <Users className="text-purple-400 mb-3" size={32} />
                <h3 className="font-bold text-xl mb-2">Collaboration</h3>
                <p className="text-gray-400 text-sm">Team player with strong communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm border border-blue-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-green-400">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-500/20 rounded-full text-sm border border-green-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-orange-400">AI/ML</h3>
              <div className="flex flex-wrap gap-2">
                {skills.aiml.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-orange-500/20 rounded-full text-sm border border-orange-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-pink-500/50 transition-all lg:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-pink-400">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-pink-500/20 rounded-full text-sm border border-pink-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all group"
              >
                <div className="p-8">
                  <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold mb-4`}>
                    Project {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                      <Target size={18} />
                      Problem:
                    </h4>
                    <p className="text-gray-400">{project.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                      <Zap size={18} />
                      Solution:
                    </h4>
                    <p className="text-gray-400">{project.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                      <Code size={18} />
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-sm border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-purple-400 font-semibold mb-2">Impact & Results:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-purple-400 mt-1">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                      <ExternalLink size={18} />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors">
                      <Github size={18} />
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="text-blue-400 mt-1">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="mb-4">
              <h4 className="text-xl text-blue-400 font-semibold">Engineering & Master Degree </h4>
              <p className="text-gray-400">The higher school of computer science 08th May 1945 in Sidi Bel Abbes | 2023-now</p>
            </div>
            {/* <div>
              <h4 className="font-semibold mb-2">Certifications:</h4>
              <ul className="space-y-1 text-gray-400">
                <li>• AWS Certified Developer Associate</li>
                <li>• MongoDB Certified Developer</li>
                <li>• Meta Front-End Developer Professional Certificate</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, and organizations looking for dedicated talent. Let's chat about your next project!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ilyes-mekalfa-6477b61b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="/ilyes.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-all"
            >
              <Download size={20} />
              Download CV
            </a>
            <a
              href="https://www.facebook.com/ilyes.mekhalfa.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all hover:scale-105"
            >
              <Facebook size={20} />
              Fcebook
            </a>
            <a
              href="https://github.com/Ilyes-Mekhalfa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <p className="text-gray-400 text-sm">I typically respond within 24 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 text-center text-gray-400">
        <p>© 2025 YourName. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
