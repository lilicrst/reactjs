import styles from './List.module.css';
import { Task } from './Task';

export function List(props) {
  return (
    <div className={styles.list}>
      <header>
        <div className={styles.createdTaskInfo}>
          <strong>Tarefas criadas</strong>
          <span className={styles.counter}>5</span>
        </div>
        <div className={styles.completeTaskInfo}>
          <strong>Concluídas</strong>
          <span className={styles.counter}>2 de 5</span>
        </div>
      </header>

    <Task />
    <Task />

    </div>
  );
}