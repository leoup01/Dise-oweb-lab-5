import React from 'react';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import Routes from './routes/index.js';
//import Navbar from './components/Navbar';
//import Jumbotron from './components/Jumbotron';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class DynamicImport extends Component{
  state = {
    component : null
  }
  componentWillMount () {
    this.props.load()
      .then((mod) => this.setState(() => ({
        component: mod.default
      })))
  }
  render(){
    return this.props.children(this.state.component)
  };
}

//import Home from './Home';
//import Topics from './Topics';
//import Settings from './Settings';

const Home = (props) => (
  <DynamicImport load={()=>import('./routes/Home.js')}>
    {(Component) => Component === null
      ? <h1>Loading!!!</h1>
      : <Component {...props}/> }
  </DynamicImport>
)


const Topics = (props) => (
  <DynamicImport load={()=>import('./routes/Topics')}>
    {(Component) => Component === null
      ? <h1>Loading!!!</h1>
      : <Component {...props}/> }
  </DynamicImport>
)

const Settings = (props) => (
  <DynamicImport load={()=>import('./routes/Settings')}>
    {(Component) => Component === null
      ? <h1>Loading!!!</h1>
      : <Component {...props}/> }
  </DynamicImport>
)

const Page404 = (props) => (
  <DynamicImport load={()=>import('./routes/Page404')}>
    {(Component) => Component === null
      ? <h1>Loading!!!</h1>
      : <Component {...props}/> }
  </DynamicImport>
)

const BasicExample = () => (
  <Router>
    <div>
      <Header/>
      <Content/>
      <Route exact path="/" component={Home}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/components" component={Page404}/>
      <Footer/>
    </div>
  </Router>
)
export default BasicExample





