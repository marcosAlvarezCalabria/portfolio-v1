import { useState } from 'react';
import type { ContactItem, Project, SkillItem } from '../../domain/entities/portfolio';
import { useGridPointer } from '../hooks/use-grid-pointer';
import { usePortfolioPage } from '../hooks/use-portfolio-page';
import portraitImage from '../assets/profile-marcos.png';
import './portfolio-page.css';

function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(project.defaultOpen ?? false);

  return (
    <article className="project-card">
      <div className="project-head">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <div className="project-meta">
            {project.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <span className="project-tag">{project.tag}</span>
      </div>
      {(project.details.length > 0 || project.links.length > 0) && (
        <div className="project-details">
          <button
            className="project-summary-toggle"
            type="button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span>{project.details.length > 0 ? 'Open case study details' : 'Open project links'}</span>
            <span className="summary-icon">{isOpen ? '−' : '+'}</span>
          </button>
          {isOpen && (
            <div className="project-body">
              {project.details.length > 0 && (
                <div className="detail-grid">
                  {project.details.map((detail) => (
                    <div key={detail.title} className="detail-block">
                      <strong>{detail.title}</strong>
                      <p>{detail.body}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="link-list">
                {project.links.map((link) =>
                  link.href ? (
                    <a key={link.label} className="chip" href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <span key={link.label} className="chip">
                      {link.label}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function SkillLogo({ skill }: { skill: SkillItem }) {
  if (skill.iconUrl) {
    return <img src={skill.iconUrl} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />;
  }

  if (skill.rasterIconUrl) {
    return <img className="tech-logo-raster" src={skill.rasterIconUrl} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />;
  }

  if (skill.iconSvgPaths) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {skill.iconSvgPaths.map((path) => (
          <path key={path} d={path}></path>
        ))}
      </svg>
    );
  }

  return <span>{skill.label.slice(0, 1)}</span>;
}

function ContactSwitch({ item, isOpen, onToggle }: { item: ContactItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <article className={`contact-switch ${isOpen ? 'is-open' : ''}`}>
      <button className="contact-switch-trigger" type="button" aria-expanded={isOpen} onClick={onToggle}>
        <span className="contact-switch-main">
          <span className="contact-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              {item.iconSvgPaths.map((path) => (
                <path key={path} d={path}></path>
              ))}
            </svg>
          </span>
          <span className="contact-meta">
            <span className="contact-name">{item.title}</span>
            <span className="contact-state">{item.state}</span>
          </span>
        </span>
        <span className="contact-switch-icon" aria-hidden="true"></span>
      </button>
      <div className="contact-panel">
        <div className="contact-link-shell">
          <strong>{item.detailLabel}</strong>
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.body}
          </a>
        </div>
      </div>
    </article>
  );
}

export function PortfolioPage() {
  const content = usePortfolioPage();
  const [openContact, setOpenContact] = useState<string | null>(null);

  useGridPointer();

  return (
    <div className="page-shell">
      <header className="site-nav">
        <div className="nav-inner">
          <a className="brand-mark" href="#top">Marcos Alvarez</a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="section-inner hero-grid">
            <div className="hero-copy-stack">
              <span className="eyebrow">{content.hero.eyebrow}</span>
              <h1 className="hero-title">{content.hero.title}</h1>
              <p className="hero-subtitle">{content.hero.subtitle}</p>
              <p className="hero-body">{content.hero.body}</p>
              <div className="hero-actions">
                {content.hero.actions.map((action, index) => (
                  <a
                    key={action.label}
                    className={index === 0 ? 'button' : 'button-secondary'}
                    href={action.href}
                    target={action.href?.startsWith('http') ? '_blank' : undefined}
                    rel={action.href?.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

            <aside className="hero-visual">
              <div className="hero-portrait-wrap">
                <figure className="hero-portrait-frame">
                  <img src={portraitImage} alt={content.hero.portraitAlt} />
                </figure>
                <div className="hero-aside">
                  <h2>{content.hero.proofTitle}</h2>
                  <div className="proof-list">
                    {content.hero.proofItems.map((item) => (
                      <div key={item.kicker} className="proof-item">
                        <span className="proof-kicker">{item.kicker}</span>
                        <span className="proof-value">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-inner">
            <div className="split-section">
              <div>
                <span className="section-label">{content.projects.label}</span>
                <h2 className="section-heading">{content.projects.heading}</h2>
              </div>
              <p className="section-copy">{content.projects.copy}</p>
            </div>
            <div className="project-list">
              {content.projects.items.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-inner">
            <div className="split-section">
              <div>
                <span className="section-label">{content.skills.label}</span>
                <h2 className="section-heading">{content.skills.heading}</h2>
              </div>
              <p className="section-copy">{content.skills.copy}</p>
            </div>
            <div className="group-grid">
              {content.skills.groups.map((group) => (
                <article key={group.title} className="skill-card">
                  <h3>{group.title}</h3>
                  <div className="tech-list">
                    {group.skills.map((skill) => (
                      <span key={skill.label} className="tech-pill">
                        <span className="tech-logo" aria-hidden="true">
                          <SkillLogo skill={skill} />
                        </span>
                        <span className="tech-label">{skill.label}</span>
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-inner">
            <div className="split-section">
              <div>
                <span className="section-label">{content.about.label}</span>
                <h2 className="section-heading">{content.about.heading}</h2>
              </div>
              <div className="section-copy">
                {content.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-inner">
            <div className="split-section">
              <div>
                <span className="section-label">{content.contact.label}</span>
                <h2 className="section-heading">{content.contact.heading}</h2>
              </div>
              <p className="section-copy">{content.contact.copy}</p>
            </div>
            <div className="contact-grid">
              {content.contact.items.map((item) => (
                <ContactSwitch
                  key={item.slug}
                  item={item}
                  isOpen={openContact === item.slug}
                  onToggle={() => setOpenContact((current) => (current === item.slug ? null : item.slug))}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">{content.footer}</div>
      </footer>
    </div>
  );
}
