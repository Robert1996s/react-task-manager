import React from 'react';
import Header from './components/Header';

function App() {
  const name = 'Brad';
  const x = false;

  return (
    <div className="container">
      <Header title={1} />
    </div>
  );
}

/* class App1 extends React.Component {
  render() {
    return <h1>Helloeeee</h1>;
  }
} */

export default App;
