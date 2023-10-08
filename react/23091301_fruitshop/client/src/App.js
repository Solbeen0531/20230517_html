import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const Home = () => {
    return (
      <h1>Home</h1>
    );
  }

  return (
    <BrowserRouter>
      <div class="App">
        <Routes>
          <Route path='/' element={<Home></Home>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
