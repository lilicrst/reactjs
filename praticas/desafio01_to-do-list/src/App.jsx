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
        title: "Achar equivalente do EmptyList pra o map do React",
        isComplete: false
      },
      {
        id: uuidv4(),
        title: "Fazer css da lista vazia",
        isComplete: false
      },
      {
        id: uuidv4(),
        title: "Fazer função dos contadores",
        isComplete: false
      }
    ]
  )

  const [newTaskText, setNewTaskText] = useState('')

  const [taskDone, setTaskDone] = useState(false);
  // ainda não sei o que esse use state tem que fazer ou monitorar, mas vou descobrir
  // o isComplete está mudando a cada click, mas não tá sendo monitorado. Dá pra ver no Elements do Console que ele guarda o valor inicial do isComplete

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, { id: uuidv4(), title: newTaskText, isComplete: false }]);
    setNewTaskText('');
  }

  function handleNewTaskInput() {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return (
        task.id !== taskToDelete
      )
    })

    setTasks(tasksWithoutDeleteOne);
  }

  function markTask(idTaskToMark) {
    const changeStateOffTask = tasks.map(task => {
      if (task.id == idTaskToMark) {
        task.isComplete = !task.isComplete
      }
    })
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
                  isComplete={task.isComplete}
                  onDeleteTask={deleteTask}
                  onTaskDone={markTask}
                />)
            })}
          </main>

        </div>

      </div>
    </div>
  );
}
