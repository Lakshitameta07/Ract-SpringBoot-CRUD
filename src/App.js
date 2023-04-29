import React from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import CreateEmployee from './components/CreateEmployee';
import NewList from './components/FuncBased/NewList';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<NewList />} />
          <Route path="/employees" element={<NewList />} />
          <Route path="/add-employees/:id" element={<CreateEmployee />} />
          <Route path="/view-employees/:id" element={<ViewEmployee />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;