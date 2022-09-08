import { Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({ title, onDeleteTask, id }) {

  function handleDeleteTask(){
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <button title='Marcar como concluída' >
        <Circle className={styles.circleIcon} size={22} weight="bold" />
      </button>
      <p>
        {title}
      </p>
      <button onClick={handleDeleteTask}>
        <Trash className={styles.trashIcon} size={24} weight="light" />
      </button>
    </div>
  );
}