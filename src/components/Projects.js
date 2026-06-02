import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Student Event Portal',
    desc: 'A full-stack web application for managing and organizing college club events. Features registration, scheduling, attendance tracking, and admin dashboard.',
    tech: ['React', 'JavaScript', 'MySQL', 'HTML/CSS'],
    color: '#00f5ff',
    icon: '🎓',
    category: 'Web App',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    desc: 'A 3D immersive personal portfolio built with React, featuring particle animations, interactive canvas, and smooth scroll transitions.',
    tech: ['React', 'Canvas API', 'CSS3', 'JavaScript'],
    color: '#a855f7',
    icon: '🌐',
    category: 'Frontend',
    status: 'Live',
  },
  {
    id: 3,
    title: 'Java OOP Banking System',
    desc: 'Console-based banking system demonstrating core OOP principles — inheritance, polymorphism, encapsulation. Includes account management and transaction history.',
    tech: ['Java', 'OOP', 'Data Structures'],
    color: '#f89820',
    icon: '🏦',
    category: 'Java',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'CSR Environment Dashboard',
    desc: 'Data visualization dashboard created for the World Environment Day CSR programme. Tracks sustainability metrics and environmental impact data.',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
    color: '#39ff14',
    icon: '🌱',
    category: 'Data',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Club Management System',
    desc: 'Web platform for managing student club memberships, tracking participation, and automating monthly event reminders.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    color: '#ff006e',
    icon: '🎯',
    category: 'Web App',
    status: 'In Progress',
  },
  {
    id: 6,
    title: 'Python Data Analyser',
    desc: 'Python script for analysing and visualising datasets using pandas and matplotlib. Includes automated report generation.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    color: '#3776ab',
    icon: '📊',
    category: 'Data',
    status: 'Completed',
  },
];

const categories = ['All', 'Web App', 'Frontend', 'Java', 'Data'];

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hovered, setHovered] = useState(null);

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="section-label reveal">
        <span>03</span> PROJECTS
      </div>

      <div className="projects-header reveal">
        <h2>Featured <span className="gradient-text">Projects</span></h2>
        <p>Things I've built — from academic work to personal passion projects</p>
      </div>

      <div className="filter-bar reveal">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid reveal">
        {filtered.map((project, i) => (
          <div
            className={`project-card ${hovered === project.id ? 'hovered' : ''}`}
            key={project.id}
            style={{ '--proj-color': project.color, '--delay': `${i * 0.1}s` }}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="project-card-bg"></div>
            <div className="project-top">
              <div className="project-icon">{project.icon}</div>
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tech">
              {project.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-footer">
              <a className="proj-btn" href="https://github.com/priyanka4675" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                GitHub
              </a>
            </div>
            <div className="project-number">0{i + 1}</div>
          </div>
        ))}
      </div>

      <div className="projects-cta reveal">
        <p>More projects on GitHub →</p>
        <a href="https://github.com/priyanka4675" target="_blank" rel="noopener noreferrer" className="github-link">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
          </svg>
          View All on GitHub
        </a>
      </div>
    </section>
  );
}
