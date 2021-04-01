import logo from './logo.svg';
import './App.css';
import List from './listtest';

function App() {
    const items1=[1, 2, 3, 4];
  return (
    <div className="App">
      <header className="App-header">
        <List items1={items1}/>
      </header>
    </div>
  );
}

export default App;
