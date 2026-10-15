import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All')

  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter(project => project.tags.includes(selectedTag))

  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))]

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p className="projects-intro">A selection of my work. Filter by technology.</p>
      <div className="filters">
        {allTags.map(tag => (
          <button
            key={tag}
            className={tag === selectedTag ? 'filter active' : 'filter'}
            aria-pressed={tag === selectedTag}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="projects-count">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>
      <div className="project-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects