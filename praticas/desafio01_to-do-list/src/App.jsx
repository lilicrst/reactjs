import { PlusCircle } from 'phosphor-react';
import { Header } from './components/Header';
import { List } from './components/List';

import './global.css';
import styles from './App.module.css';

export function App() {

  function handleCreateNewTask() {
    event.preventDefault()

    console.log("submit")
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

          <footer>            
            Criar
            <PlusCircle size={19} weight="bold"/>
          </footer>

        </form>

        <main>
          <List />
        </main>

      </div>
    </div>
  );
}
