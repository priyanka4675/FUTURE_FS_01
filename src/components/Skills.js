import React, { useEffect, useRef } from 'react';
import './Skills.css';

const techSkills = [
  { name: 'Java', level: 80, color: '#f89820', icon: '☕' },
  { name: 'Python', level: 75, color: '#3776ab', icon: '🐍' },
  { name: 'JavaScript', level: 78, color: '#f0db4f', icon: 'JS' },
  { name: 'React', level: 72, color: '#61dafb', icon: '⚛' },
  { name: 'HTML / CSS', level: 88, color: '#e34f26', icon: '</>' },
  { name: 'C / C++', level: 70, color: '#00599c', icon: 'C+' },
  { name: 'MySQL', level: 68, color: '#00758f', icon: '🛢' },
  { name: 'Data Structures', level: 74, color: '#a855f7', icon: '∑' },
];

const tools = [
  { name: 'VS Code', icon: '🖥' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'AutoCAD', icon: '📐' },
  { name: 'MS Excel', icon: '📊' },
  { name: 'MS Word', icon: '📝' },
  { name: 'OOP', icon: '🧩' },
];

const softSkills = [
  { name: 'Teamwork', icon: '🤝', desc: 'Collaborative & supportive' },
  { name: 'Leadership', icon: '🚀', desc: 'Event organizer & campus lead' },
  { name: 'Time Management', icon: '⏱', desc: 'Deadline-driven & efficient' },
  { name: 'Communication', icon: '💬', desc: 'Verbal & written clarity' },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="section-label reveal">
        <span>02</span> SKILLS
      </div>

      <div className="skills-header reveal">
        <h2>Technical <span className="gradient-text">Arsenal</span></h2>
        <p>Technologies and tools I work with to build impactful software</p>
      </div>

      {/* Technical Skills Grid */}
      <div className="tech-grid reveal">
        {techSkills.map((skill, i) => (
          <div className="skill-card" key={skill.name} style={{ '--delay': `${i * 0.07}s`, '--color': skill.color }}>
            <div className="skill-card-inner">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar-wrap">
                <div className="skill-bar" style={{ '--level': skill.level + '%' }}></div>
              </div>
              <div className="skill-level">{skill.level}%</div>
            </div>
            <div className="skill-card-glow"></div>
          </div>
        ))}
      </div>

      <div className="skills-bottom reveal">
        {/* Tools */}
        <div className="tools-section">
          <h3 className="sub-heading">Tools & Frameworks</h3>
          <div className="tools-grid">
            {tools.map(tool => (
              <div className="tool-chip" key={tool.name}>
                <span className="tool-icon">{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="soft-section">
          <h3 className="sub-heading">Soft Skills</h3>
          <div className="soft-grid">
            {softSkills.map(s => (
              <div className="soft-card" key={s.name}>
                <span className="soft-icon">{s.icon}</span>
                <div>
                  <div className="soft-name">{s.name}</div>
                  <div className="soft-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="languages-section reveal">
        <h3 className="sub-heading">Languages</h3>
        <div className="languages-row">
          {[
            { lang: 'Telugu', level: 7, label: 'Native' },
            { lang: 'English', level: 5, label: 'Proficient' },
            { lang: 'Hindi', level: 3, label: 'Conversational' },
          ].map(l => (
            <div className="language-item" key={l.lang}>
              <div className="language-name">{l.lang}</div>
              <div className="language-dots">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className={`lang-dot ${i < l.level ? 'filled' : ''}`}></div>
                ))}
              </div>
              <div className="language-label">{l.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
