import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lisandra"
            content="Texto qualquer"
          />
          <Post
            author="Ferdinando"
            content="Texto qualquer só que de ferdi"
          />
        </main>
      </div>
    </>
  );
}
