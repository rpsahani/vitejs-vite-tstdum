import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './app.scss';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Vite + React</h1>
    </div>
  );
}

export default App;
