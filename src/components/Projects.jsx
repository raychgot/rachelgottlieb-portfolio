import ProjectCard from './ProjectCard'
import zerotraceImg from '../assets/zerotrace.png'
import recipevaultImg from '../assets/recipevault.png'

const projects = [
  {
    title: 'Zero Trace',
    description:
      'Zero Trace is a multi-page static website for a fictional 100% gluten-free restaurant. I built it using HTML and CSS, with Claude helping to generate the initial structure, content, and styling. I then refined the layout and content through multiple prompts.',
    tech: ['HTML', 'CSS', 'Claude', 'Netlify'],
    image: zerotraceImg,
    link: 'https://dig4503-rachgottlieb-zerotrace-search.netlify.app/',
    linkLabel: 'View Site',
    reflection:
      'If I revisited this project, I would improve the overall design consistency and make the layout more modern. I would also focus on better responsiveness across different screen sizes and reduce how much I relied on AI for initial structure.',
  },
  {
    title: 'Recipe Vault',
    description:
      'Recipe Vault is a full stack recipe management application where users can create, edit, and save recipes. It includes authentication, a database, and AI-powered features that generate recipe descriptions and tags using Ollama running locally.',
    tech: ['React', 'Vite', 'React Router', 'Supabase', 'CSS', 'Netlify', 'Ollama'],
    image: recipevaultImg,
    link: 'https://dig4503-rachgottlieb-recipevault.netlify.app/',
    linkLabel: 'View Site',
    reflection:
      'If I continued this project, I would improve performance and make the AI features faster and more reliable. I would also improve the UI to make it more polished and spend more time fully understanding and refining the code instead of relying on AI for some implementations.',
    note: 'The AI features in Recipe Vault run locally using Ollama, so they do not work on the deployed version unless Ollama is installed.',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label">Projects</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
