import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task';
import { EmptyList } from './components/EmptyList'

import './global.css';
import styles from './App.module.css';
import { useState } from 'react';


export function App(props) {

  const [tasks, setTasks] = useState(
    [      
      {
        id: uuidv4(),
        title: "Fazer função dos contadores",
        isComplete: false
      }
    ]
  )

  const [newTaskText, setNewTaskText] = useState('')

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

  function emptyTaskList() {
    if (tasks.length <= 0) {
      return (        
        <EmptyList />
      )
    }
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
            {emptyTaskList()}
          </main>

        </div>

      </div>
    </div>
  );
}
