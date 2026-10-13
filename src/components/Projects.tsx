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
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {allTags.map(tag => (
          <button key={tag} onClick={() => setSelectedTag(tag)}>
            {tag}
          </button>
        ))}
      </div>
      {filteredProjects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}

export default Projects