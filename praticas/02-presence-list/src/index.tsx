import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home'

import './styles/global.scss';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render (<Home />);

//render (<App />, document.getElementById('root')

/* Mudanças do react 17 para o 18
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
*/