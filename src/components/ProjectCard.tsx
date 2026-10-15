import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="card">
      <img src={project.image} alt={project.title} />
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">
          {project.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="card-links">
          <a href={project.repoUrl}>Repo</a>
          {project.liveUrl && <a href={project.liveUrl}>Live demo</a>}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard