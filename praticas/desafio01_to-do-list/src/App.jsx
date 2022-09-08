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
        isComplete: true
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
        title: "Fazer js dos contadores",
        isComplete: false
      }
    ]
  )

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask() {
    event.preventDefault()
    
    setTasks([...tasks, {id: uuidv4(), title: newTaskText, isComplete: false}]);
    setNewTaskText('');
  }

  function handleNewTaskInput() {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return (
        task.id !== taskToDelete)
    })

    console.log(tasksWithoutDeleteOne)
    setTasks(tasksWithoutDeleteOne);
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>

          <textarea
            name="task"
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleNewTaskInput}
            required
          />

          <button type='submit' disabled={newTaskText.length == 0}>
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
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  onDeleteTask={deleteTask}
                />)
            })}
          </main>

        </div>

      </div>
    </div>
  );
}
