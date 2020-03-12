import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Third from './components/Third'

class App extends Component {
  render(){
     return(
       <div className="App">
       <Third></Third>
       </div>
       
     );
  }
}



export default App;
