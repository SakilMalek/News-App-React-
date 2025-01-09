import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={12} country='us' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={12} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={12} country='us' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={12} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={12} country='us' category='technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
