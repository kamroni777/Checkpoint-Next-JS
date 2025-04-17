import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
      </Head>

      <main>
        <h1>My Projects</h1>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      imageUrl: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    
  ];

  return {
    props: {
      projects
    }
  };
};