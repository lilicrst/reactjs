import { Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Task.module.css';

export function Task({ title, onDeleteTask, id, onTaskDone }) {  

  function handleDeleteTask(){
    onDeleteTask(id);
  }

  function handleTaskDone(){
    console.log("tarefa feita");
    onTaskDone(id);
    //enviar o id da task que foi clicada
  }

  return (
    <div className={styles.task}>
      <button title='Marcar como concluída' onClick={handleTaskDone} value={false}>
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