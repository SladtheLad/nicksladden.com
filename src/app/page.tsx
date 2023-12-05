import Walkthrough from '@/app/walkthrough';
import styles from './page.module.css';

const sections = [
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          architecto accusamus consequatur exercitationem tempore excepturi
          tempora, amet debitis maiores labore laborum temporibus iusto alias
          reprehenderit aliquid itaque cum assumenda ipsam!`,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          architecto accusamus consequatur exercitationem tempore excepturi
          tempora, amet debitis maiores labore laborum temporibus iusto alias
          reprehenderit aliquid itaque cum assumenda ipsam!`,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          architecto accusamus consequatur exercitationem tempore excepturi
          tempora, amet debitis maiores labore laborum temporibus iusto alias
          reprehenderit aliquid itaque cum assumenda ipsam!`,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Walkthrough sections={sections} />
    </main>
  );
}
