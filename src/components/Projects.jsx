import ProjectCard from './ProjectCard'
import zerotraceImg from '../assets/zerotrace.png'
import recipevaultImg from '../assets/recipevault.png'
import studymodeImg from '../assets/studymode.png'

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
  {
    title: 'Study Mode',
    description:
      'Study Mode is a simple productivity web app that allows users to manage tasks and stay focused using a built-in timer. Users can add tasks, mark them as complete, and track their progress while using a focus timer, as well as browse through a selection of music they can listen to while studying. The project demonstrates building an interactive React application with clean UI and state management.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Netlify'],
    image: studymodeImg,
    imageContain: true,
    link: 'https://dig5403-rachgottlieb-studymode.netlify.app/',
    linkLabel: 'View Site',
    reflection:
      'If I continued this project, I would improve the timer by adding more customization options and better visuals during countdowns. I would enhance the UI with more advanced styling and animations to make the experience more engaging. I would also consider adding user accounts or cloud storage so tasks persist across devices.',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-label">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
