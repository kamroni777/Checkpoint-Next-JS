import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>My Portfolio</span>
        </h1>
        
        <div className={styles.profile}>
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About Me &rarr;</h2>
            <p>Learn about my skills and experience</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Explore my work</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch with me</p>
          </a>
        </div>
      </main>
    </div>
  );
}