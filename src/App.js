import React from 'react';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


const BasicExample = () => (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
)
export default BasicExample





