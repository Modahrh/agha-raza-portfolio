import React from 'react';
import ProjectsCard from '../../Cards/ProjectsCard/ProjectsCard';
import projectsData from '../../Data/projectsData';
import ProjectsIntro from '../../Components/PojectsIntro/ProjectsIntro';
import './projects.css'

const Projects = () => {
  return (
    <section className="projects-section">
      <div className='project-section-intro'>
      <ProjectsIntro />
      </div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            linkname={project.linkname}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
