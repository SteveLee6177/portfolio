'use client';
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, Code, Briefcase, User, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    databases: ['MySQL', 'MongoDB', 'SQLite'],
    tools: ['Linux', 'Git', 'GitHub', 'Google Cloud Platform', 'Visual Studio Code', 'Jira', 'Node.js', 'React', 'Next.js', 'Vercel', 'AWS']
  };

  const projects = [
    {
      title: 'RageBuilt - Full Stack Website',
      description: 'A comprehensive platform for automotive enthusiasts to design and share their custom vehicle builds. Collaborative Capstone worked on by Steven Lee, Camrenn Wallace Rivera and Brian Hathaway',
      tech: ['Node.js', 'MySQL', 'Figma'],
      highlights: [
        'Designed and implemented complete backend architecture',
        'Structured database schema for user accounts and vehicle components',
        'Collaborated with Figma for UI/UX planning'
      ],
      github: 'https://www.github.com/CamrennWallace-Rivera/Ragebuilt.io',
    },
    {
      title: 'Freshwater Aquarium Fish Tracking',
      description: 'Real-time object detection system using computer vision to track and analyze fish behavior.',
      tech: ['Python', 'YOLOv8', 'Raspberry Pi', 'Streamlit'],
      highlights: [
        'Fine-tuned YOLOv8 model for fish detection',
        'Implemented edge inference with Raspberry Pi',
        'Built interactive dashboard with heat maps and activity patterns'
      ],
      github: 'https://www.github.com/SteveLee6177/freshwater-aquarium-fish-tracking',
    }
  ];

  const clientWork = [
    {
      name: 'Fred Fadezzz Barbering',
      description: 'A modern, professional booking platform designed for a local barber to manage appointments and showcase services. Features real-time availability, seamless booking flow, and responsive design for mobile and desktop users.',
      tech: ['Next.js', 'TypeScript', 'SQLite', 'Vercel'],
      link: 'https://fredfadezzz.vercel.app',
      highlights: [
        'Built complete full-stack booking system with real-time availability',
        'Designed intuitive UI/UX for seamless client experience',
        'Implemented SQLite database for efficient appointment management',
        'Deployed on Vercel with continuous integration'
      ],
      image: '🪒'
    }
  ];

  const experience = [
    {
      role: 'Student IT Technician',
      company: 'Southern Connecticut State University',
      period: 'May 2023 - May 2024',
      location: 'New Haven, CT',
      responsibilities: [
        'Troubleshot and activated network jacks and switch ports',
        'Handled tickets in Blackboard SmartView for network issues',
        'Managed network infrastructure and cable management',
        'Performed networking repairs on UPS and APs'
      ]
    }
  ];

  const hobbies = [
    { name: 'Biking', emoji: '🚴' },
    { name: 'Working Out', emoji: '💪' },
    { name: 'Gaming', emoji: '🎮' },
    { name: 'Programming', emoji: '💻' },
    { name: 'Basketball', emoji: '🏀' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    const resumeContent = `Steven Lee
splee6177@gmail.com • linkedin.com/in/steven-lee-782753283/ • github.com/stevenLeecode

EDUCATION
Southern Connecticut State University, New Haven CT                                    May 2025
Bachelor of Science in Computer Science with a minor in Data Science
Relevant Coursework: Data Structures and Algorithms, Data Visualization, Software Design and Development,
System Administration, Artificial Intelligence, Cloud Services, Generative AI

WORK EXPERIENCE
Student IT Technician                                                                  May 2023 - May 2024
Southern Connecticut State University, New Haven CT
• Troubleshot and activated network jacks and switch ports for users using a fluke
• Handled tickets in Blackboard SmartView to assist users with network issues
• Set up small net gear ethernet switches
• Cleaned up network closets and cable management
• Transported network switches around the university and helped install them
• Networking repairs on UPS's and APs around the university

Colossal Kielbasa                                                                      May 2022 - August 2024
Ansonia, CT
• Cooked kielbasa and pierogies with attention to cleanliness and presentation
• Provided customer service by taking and processing orders

PROJECTS
RageBuilt - Full Stack Website
• Designed and implemented the complete backend using Node.js and MySQL
• Structured the database schema to efficiently store user accounts, vehicle components, and build configurations
• Collaborated with Figma for UI/UX planning to ensure user-friendly design and navigation

Freshwater Aquarium Fish Tracking – Real-Time Object Detection System
• Fine-tuned a YOLOv8 object detection model to detect and track individual fish with high accuracy
• Captured and streamed live video feeds using a Raspberry Pi, processing frames locally for edge inference
• Developed a REST API to serve the collected tracking data to frontend and external applications
• Built an interactive dashboard using Streamlit, enabling users to visualize fish paths, heat maps, and activity patterns

TECHNICAL SKILLS
Programming Languages: Python, JavaScript, Java, SQL, TypeScript
Databases: MySQL, MongoDB
Developmental Tools: Linux, Git, GitHub, Google Cloud Platform, Visual Studio Code, Jira

EXTRACURRICULARS
• Participated in the Computer Science Club`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Steven_Lee_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleCopyEmail = async () => {
    try {
      // Check if clipboard API is available
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText('splee6177@gmail.com');
      } else {
        // Fallback method for older browsers or server-side rendering
        const textArea = document.createElement('textarea');
        textArea.value = 'splee6177@gmail.com';
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Still show the copied message even if there's an error
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              SL
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition">Home</button>
              <button onClick={() => scrollToSection('client-work')} className="text-gray-400 hover:text-white transition">Client Work</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-400 hover:text-white transition">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white transition">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-400 hover:text-white py-2">Home</button>
              <button onClick={() => scrollToSection('client-work')} className="block w-full text-left text-gray-400 hover:text-white py-2">Client Work</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-400 hover:text-white py-2">About</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-400 hover:text-white py-2">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-400 hover:text-white py-2">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-400 hover:text-white py-2">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Steven Lee</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-6">
                Full Stack Developer & Computer Science Graduate
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl">
                Building professional web applications for real clients. Recent CS graduate from Southern Connecticut State University.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={handleDownloadResume}
                  className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
                >
                  Contact Me
                </button>
              </div>
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a href="https://github.com/stevenLeecode" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition">
                  <Github className="text-white" size={24} />
                </a>
                <a href="https://linkedin.com/in/steven-lee-782753283/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition">
                  <Linkedin className="text-white" size={24} />
                </a>
                <a href="mailto:splee6177@gmail.com" className="p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition">
                  <Mail className="text-white" size={24} />
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-zinc-800 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border-2 border-zinc-700">
                  <img
                    src="/pfp.jpg"
                    alt="Profile picture"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Work Section - Featured */}
      <section id="client-work" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real-world projects built for actual clients. Professional web solutions that drive business results.
            </p>
          </div>

          {clientWork.map((work, idx) => (
            <div key={idx} className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 shadow-2xl hover:shadow-white/5">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">{work.image}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{work.name}</h3>
                      <p className="text-gray-500 text-sm">Full-Stack Web Application</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {work.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {work.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="text-gray-400 flex items-start gap-3">
                          <span className="text-white mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {work.tech.map((tech, tidx) => (
                      <span key={tidx} className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg text-sm border border-zinc-700 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={work.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={20} />
                    <span>Visit Live Site</span>
                  </a>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-zinc-800 rounded-2xl border-2 border-zinc-700 overflow-hidden shadow-2xl hover:border-zinc-600 transition-all duration-300">
                    <iframe
                      src="https://fredfadezzz.vercel.app"
                      className="w-full h-full"
                      title={`FredFadez Booking Platform`}
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
                </div>
              </div>

              <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Interested in working together?</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-zinc-700 text-white rounded-xl font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Let's Build Something
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About <span className="text-gray-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <User className="text-gray-400" />
                Background
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a 22-year-old recent graduate from Southern Connecticut State University with a Bachelor's in Computer Science and a minor in Data Science. Graduating in May 2025, I've built a strong foundation in software development, cloud services, and AI technologies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My experience ranges from network administration to full-stack development, and I'm passionate about creating efficient, user-friendly applications that solve real-world problems.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition">
              <h3 className="text-2xl font-bold text-white mb-4">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, idx) => (
                  <div key={idx} className="bg-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-700 transition">
                    <div className="text-4xl mb-2">{hobby.emoji}</div>
                    <div className="text-gray-300">{hobby.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Technical <span className="text-gray-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition">
              <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg text-sm border border-zinc-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition">
              <h3 className="text-xl font-bold text-white mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg text-sm border border-zinc-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition">
              <h3 className="text-xl font-bold text-white mb-4">Tools & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg text-sm border border-zinc-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Work <span className="text-gray-400">Experience</span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-gray-400 text-lg">{exp.company}</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, ridx) => (
                    <li key={ridx} className="text-gray-400 flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Featured <span className="text-gray-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition">{project.title}</h3>
                  <Code className="text-gray-400" size={24} />
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tidx) => (
                    <span key={tidx} className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-lg text-sm border border-zinc-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="text-gray-500 text-sm flex items-start gap-2">
                      <span className="text-gray-600 mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-gray-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <button onClick={handleCopyEmail} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition group relative">
              <Mail className="text-gray-400 mx-auto mb-4 group-hover:scale-110 transition" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-500 text-sm">splee6177@gmail.com</p>
              {emailCopied && (
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
                  Copied!
                </div>
              )}
            </button>

            <a href="https://linkedin.com/in/steven-lee-782753283/" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition group">
              <Linkedin className="text-gray-400 mx-auto mb-4 group-hover:scale-110 transition" size={32} />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-500 text-sm">Connect with me</p>
            </a>

            <a href="https://github.com/stevenLeecode" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition group">
              <Github className="text-gray-400 mx-auto mb-4 group-hover:scale-110 transition" size={32} />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-500 text-sm">Check out my code</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Steven Lee. Built with Next.js & TypeScript. Hosted on AWS.
          </p>
        </div>
      </footer>
    </div>
  );
}
