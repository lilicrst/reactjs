import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task';

import './global.css';
import styles from './App.module.css';
import { useState } from 'react';


export function App(props) {

  const [tasks, setTasks] = useState(
    [
      {
        id: uuidv4(),
        title: 'Problema "Each child in a list should have a unique key prop" (ver no console)',
        isComplete: false
      },      
      {
        id: uuidv4(),
        title: "Deixar css do checkIcon de acordo com o estado",
        isComplete: false
      },
      {
        id: uuidv4(),
        title: "Fazer css da lista vazia",
        isComplete: false
      },
      {
        id: uuidv4(),
        title: "Fazer js das tasks e dos contadores",
        isComplete: false
      }
    ]
  )

  function handleCreateNewTask() {
    event.preventDefault()

    const newTaskText = event.target.task.value

    setTasks([...tasks, {id: uuidv4(), title: newTaskText, isComplete: false}]);
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>

          <textarea
            name="task"
            placeholder='Adicione uma nova tarefa'
          />

          <button type='submit'>
            Criar
            <PlusCircle size={19} weight="bold" />
          </button>

        </form>

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

          <main>
            {tasks.map(task => {
              return (
                <Task
                  title={task.title}
                />)
            })}
          </main>

        </div>

      </div>
    </div>
  );
}
