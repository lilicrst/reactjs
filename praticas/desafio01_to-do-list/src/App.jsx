import { Header } from './components/Header';
import { List } from './List';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

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
    </div>
  );
}
