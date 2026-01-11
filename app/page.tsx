'use client';
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, Code, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

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
      name: 'Freddy\'s Booking App',
      description: 'Modern booking platform designed for a local barber to manage appointments and showcase services.',
      tech: ['Next.js', 'TypeScript', 'SQLite', 'Vercel'],
      link: 'https://fredfadezzz.vercel.app',
      image: '🪒'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadResumePDF = () => {
    const link = document.createElement('a');
    link.href = '/StevenLee_Resume_2026.pdf';
    link.download = 'Steven_Lee_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadResumeDOCX = () => {
    const link = document.createElement('a');
    link.href = '/StevenLee_Resume_2026.docx';
    link.download = 'Steven_Lee_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviewResume = () => {
    window.open('/StevenLee_Resume_2026.pdf', '_blank');
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
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-white hover:text-gray-300 transition hover:cursor-pointer">
              SL
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('client-work')} className="text-gray-400 hover:text-white transition">Client Work</button>
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
              <button onClick={() => scrollToSection('client-work')} className="block w-full text-left text-gray-400 hover:text-white py-2">Client Work</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-400 hover:text-white py-2">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-400 hover:text-white py-2">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Steven Lee
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-6">
                Computer Science Graduate from <a href="https://www.southernct.edu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 underline transition">SCSU</a>
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl">
                
                
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center px-4 py-2 bg-white text-black rounded-lg font-semibold text-sm">
                  <Download size={16} className="mr-2" />
                  <span>Download Resume</span>
                  <div className="mx-2 text-gray-400">|</div>
                  <button
                    onClick={handleDownloadResumePDF}
                    className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition text-xs font-semibold"
                  >
                    PDF
                  </button>
                  <div className="mx-1.5 text-gray-600">|</div>
                  <button
                    onClick={handleDownloadResumeDOCX}
                    className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition text-xs font-semibold"
                  >
                    DOCX
                  </button>
                </div>
                <button
                  onClick={handlePreviewResume}
                  className="px-6 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition text-sm"
                >
                  Preview Resume
                </button>
              </div>
              <div className="flex gap-3 mt-6 justify-center md:justify-start">
                <a href="https://github.com/stevenLeecode" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition">
                  <Github className="text-white" size={20} />
                </a>
                <a href="https://linkedin.com/in/steven-lee-782753283/" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition">
                  <Linkedin className="text-white" size={20} />
                </a>
                <a href="mailto:splee6177@gmail.com" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition">
                  <Mail className="text-white" size={20} />
                </a>
                
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-zinc-800 p-1 shadow-2xl">
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
      <section id="client-work" className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client Work
            </h2>
          </div>

          {clientWork.map((work, idx) => (
            <div key={idx} className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-6 md:p-10 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 shadow-2xl hover:shadow-white/5">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{work.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{work.name}</h3>
                      <p className="text-gray-500 text-xs">Full-Stack Web Application</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-base mb-4 leading-relaxed">
                    {work.description}
                  </p>

                  <div className="mb-6">
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tech.map((tech, tidx) => (
                      <span key={tidx} className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-lg text-xs border border-zinc-700 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={work.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
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
            </div>
          ))}

          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-3 text-sm">Interested in working together?</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 border-2 border-zinc-700 text-white rounded-xl font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm"
            >
              Let's Build Something
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition group flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition">{project.title}</h3>
                  <Code className="text-gray-400" size={20} />
                </div>
                <p className="text-gray-400 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech, tidx) => (
                    <span key={tidx} className="px-2 py-1 bg-zinc-800 text-gray-300 rounded-lg text-xs border border-zinc-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1 mb-4 flex-1">
                  {project.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="text-gray-500 text-xs flex items-start gap-2">
                      <span className="text-gray-600 mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <button onClick={handleCopyEmail} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-zinc-700 transition group relative">
              <Mail className="text-gray-400 mx-auto mb-2 group-hover:scale-110 transition" size={24} />
              <h3 className="text-white font-semibold mb-1 text-sm">Email</h3>
              <p className="text-gray-500 text-xs">splee6177@gmail.com</p>
              {emailCopied && (
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
                  Copied!
                </div>
              )}
            </button>

            <a href="https://linkedin.com/in/steven-lee-782753283/" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-zinc-700 transition group">
              <Linkedin className="text-gray-400 mx-auto mb-2 group-hover:scale-110 transition" size={24} />
              <h3 className="text-white font-semibold mb-1 text-sm">LinkedIn</h3>
              <p className="text-gray-500 text-xs">Connect with me</p>
            </a>

            <a href="https://github.com/stevenLeecode" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-zinc-700 transition group">
              <Github className="text-gray-400 mx-auto mb-2 group-hover:scale-110 transition" size={24} />
              <h3 className="text-white font-semibold mb-1 text-sm">GitHub</h3>
              <p className="text-gray-500 text-xs">Check out my code</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Steven Lee. Built with Next.js & TypeScript. Hosted with AWS.
          </p>
        </div>
      </footer>
    </div>
  );
}
