import { Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

// id: int
// title: string
// isComplete: boolean

export function Task({ title }) {
  return (
    <div className={styles.task}>
      <button title='Marcar como concluída' >
        <Circle className={styles.circleIcon} size={22} weight="bold" />
      </button>
      <p>
        {title}
      </p>
      <button>
        <Trash className={styles.trashIcon} size={24} weight="light" />
      </button>
    </div>
  );
}