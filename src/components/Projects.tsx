import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}

export default Projects