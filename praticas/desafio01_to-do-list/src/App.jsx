import { PlusCircle } from 'phosphor-react';
import { Header } from './components/Header';
import { List } from './components/List';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.taskForm}>

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
          <List
            check="x"
            content="Construir header dessa aplicação"
          />
          <List
            check="x"
            content="Construir List dessa aplicação"
          />
          <List
            check="."
            content="Construir TextArea dessa aplicação"
          />
        </main>

      </div>
    </div>
  );
}
