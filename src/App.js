import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    { name: 'about me'},
    { name: 'portfolio'},
    { name: 'contact'},
    { name: 'resume'},
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Home currentPage={currentPage}></Home>
      </main>
      <Footer />
    </div>
  );
}

export default App;
