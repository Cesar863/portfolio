import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [pages] = useState([
    { name: 'about me'},
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
