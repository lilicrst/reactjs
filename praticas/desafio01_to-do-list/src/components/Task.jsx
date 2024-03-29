import { Circle, Trash, CheckCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './Task.module.css';

export function Task({ title, onDeleteTask, id, onTaskDone, isComplete }) {

  const [checkState, setCheckState] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleTaskDone() {
    onTaskDone(id);
    setCheckState(!checkState)
  }

  function checkIcon(value) {
    if (checkState == false) {
      return <Circle className={styles.circleIcon} size={22} weight="bold" />
    } else {
      return <CheckCircle className={styles.checkCircleIcon} size={22} weight='fill' />
    }
  }

  function textByState(value) {
    if (checkState == false) {
      return (
        <p className={styles.text}>
          {title}
        </p>
      )
    } else {
      return (
        <p className={styles.scratchedText}>
          {title}
        </p>
      )
    }
  }

  return (
    <div className={styles.task}>
      <button title='Marcar como concluída' onClick={handleTaskDone} value={isComplete}>
        {checkIcon(isComplete)}
      </button>
      {textByState(isComplete)}
      <button onClick={handleDeleteTask}>
        <Trash className={styles.trashIcon} size={24} weight="light" />
      </button>
    </div>
  );
}