import React from 'react';
import ProjectCard from '../components/ProjectCard';
import {
  FULLSTACK_PROJECTS,
  LANDING_PAGE_PROJECTS,
  REACT_PROJECTS,
} from '../data/projectsData';
import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <h1>Here are a few projects I&apos;ve worked on recently.</h1>
      <div className={styles.projects_group}>
        <h2>Landing Pages</h2>
        <div className={styles.projects_grid}>
          {LANDING_PAGE_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className={styles.projects_group}>
        <h2>Web Apps</h2>
        <div className={styles.projects_grid}>
          {REACT_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className={styles.projects_group}>
        <h2>Full-stack Web Apps</h2>
        <div className={styles.projects_grid}>
          {FULLSTACK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
