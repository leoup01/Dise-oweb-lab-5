import React from 'react';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


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

const Home = (props) => (
  <DynamicImport load={()=>import('../routes/Home.js')}>
    {(Component) => Component === null
      ? <h1>Loading!!!</h1>
      : <Component {...props}/> }
  </DynamicImport>
)

const Topics = (props) => (
  <DynamicImport load={()=>import('../routes/Topics')}>
    {(Component) => Component === null
      ? <h1>Loading!!!</h1>
      : <Component {...props}/> }
  </DynamicImport>
)

const Settings = (props) => (
  <DynamicImport load={()=>import('../routes/Settings')}>
    {(Component) => Component === null
      ? <h1>Loading!!!</h1>
      : <Component {...props}/> }
  </DynamicImport>
)

const Page404 = (props) => (
  <DynamicImport load={()=>import('../routes/Page404')}>
    {(Component) => Component === null
      ? <h1>Loading!!!</h1>
      : <Component {...props}/> }
  </DynamicImport>
)

const LeftColumn = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/components" component={Page404}/>
      <h1>Columna Izquierda</h1>
      <h2>Contenido dinamico con promesas segun el route</h2>
      
    </div>
  </Router>
)

export default LeftColumn;