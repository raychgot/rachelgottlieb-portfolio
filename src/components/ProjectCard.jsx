export default function ProjectCard({ project }) {
  const { title, description, tech, link, linkLabel, reflection, note, image } = project

  return (
    <article className="project-card">
      {image && (
        <div className="card-image-wrap">
          <img src={image} alt={`${title} preview`} className="card-image" />
        </div>
      )}
      <div className="card-header">
        <h3>{title}</h3>
        {link && (
          <a
            className="card-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkLabel || 'View Project'} →
          </a>
        )}
      </div>

      <p className="card-description">{description}</p>

      {tech && tech.length > 0 && (
        <div>
          <p className="tech-label">Tech Stack</p>
          <ul className="tag-list" aria-label="Tech stack">
            {tech.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        </div>
      )}

      {note && (
        <div className="ai-note">
          <span>⚠</span>
          <span>{note}</span>
        </div>
      )}

      {reflection && (
        <div className="reflection">
          <p className="reflection-label">Reflection</p>
          <p>{reflection}</p>
        </div>
      )}
    </article>
  )
}
