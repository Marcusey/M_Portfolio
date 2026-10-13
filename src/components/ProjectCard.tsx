import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a href={project.repoUrl}>Repo</a>
      {project.liveUrl && <a href={project.liveUrl}>Live demo</a>}
    </article>
  )
}

export default ProjectCard