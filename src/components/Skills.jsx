const technicalSkills = [
  'HTML', 'CSS', 'JavaScript', 'Claude', 'Figma', 'Responsive Design',
]

const softSkills = [
  'Problem-Solving', 'Teamwork', 'Detail-Oriented', 'Organization', 'Time Management',
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-label">Skills</h2>
      <div className="skills-groups">
        <div className="skills-group">
          <p className="skills-group-label">Technical</p>
          <ul className="skill-tags" aria-label="Technical skills">
            {technicalSkills.map((skill) => (
              <li key={skill} className="skill-tag skill-tag--technical">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-group">
          <p className="skills-group-label">Soft Skills</p>
          <ul className="skill-tags" aria-label="Soft skills">
            {softSkills.map((skill) => (
              <li key={skill} className="skill-tag skill-tag--soft">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
