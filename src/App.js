import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const name = 'Brad';
  const x = false;

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task 1',
      day: 'Feb 5',
      reminder: true,
    },
    {
      id: 2,
      text: 'Task 2',
      day: 'Feb 6',
      reminder: true,
    },
    {
      id: 3,
      text: 'Task 3',
      day: 'Feb 7',
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header title={1} />
      <Tasks tasks={tasks} />
    </div>
  );
}

/* class App1 extends React.Component {
  render() {
    return <h1>Helloeeee</h1>;
  }
} */

export default App;
