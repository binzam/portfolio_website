import { Project } from '../interfaces';
import styles from '../styles/ProjectCard.module.css';
import { useMemo, useState } from 'react';
import { usePostHog } from 'posthog-js/react';
interface ProjectCardProps {
  project: Project;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const posthog = usePostHog();
  const { screenshots, tools, links, detail = '', title } = project;
  const [isExpanded, setIsExpanded] = useState(false);
  const previewText = useMemo(() => {
    if (detail.length <= 160) return detail;
    const trimmed = detail.substring(0, 160);
    return trimmed.substring(0, trimmed.lastIndexOf(' ')) + '...';
  }, [detail]);

  return (
    <article className={styles.prj_box}>
      <div className={styles.prj_scrn_shots}>
        {screenshots?.map((screenshot, index) => (
          <div
            key={index}
            className={`${styles.prj_img} ${styles[screenshot.size]}`}
          >
            <img
              className={styles.scrn_shot_img}
              src={screenshot.src}
              alt="Screenshot"
              loading="lazy"
              width="350"
              height="170"
            />
          </div>
        ))}
      </div>
      <div className={styles.prj_info}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
        <h3>{title}</h3>
        <p>{isExpanded ? detail : previewText}</p>
        {detail.length > 160 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className={styles.readMoreBtn}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
      <div className={styles.prj_tools}>
        {tools?.map((tool, index) => (
          <img
            key={index}
            className={styles.tech_img}
            src={tool}
            alt="Tool Icon"
            loading="lazy"
          />
        ))}
      </div>

      <div className={styles.prj_links}>
        {links?.map((link, index) => (
          <a
            onClick={() => {
              posthog.capture(`Preview_Link_Clicked for ${title}`);
            }}
            key={index}
            className={`${styles.prj_link} ${styles[link.type]}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label} <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
