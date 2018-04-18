import React from 'react';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import Header from './components/stateless/Header';
import Content from './components/statefull/Content';
import Footer from './components/stateless/Footer';


const App = () => (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
)
export default App
