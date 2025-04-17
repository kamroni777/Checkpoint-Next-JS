import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
      </Head>

      <main>
        <h1>About Me</h1>
        <section className={styles.skills}>
          <h2>Skills</h2>
          <ul>
            <li>React/Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </section>
        
        <section className={styles.experience}>
          <h2>Experience</h2>
          {/* Experience timeline */}
        </section>
      </main>
    </div>
  );
}