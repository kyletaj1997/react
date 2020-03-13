import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Third from './components/Third'
import State from './components/State'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import Bind from './components/Bind'
import Parent from './components/Parent'
import Conditional from './components/Conditional'
import NameList from './components/NameList'
import Form from './components/Form'
import LifeA from './components/LifeA'
import Fragment from './components/Fragment'
import PureComponents from './components/PureComponents'
import Memo from './components/Memo'
import Refs from './components/RefsDemo'
import Portal from './components/PortalsDemo'
import Hero from './components/Hero'
import Error from './components/Error'
class App extends Component {
  render(){
     return(

       <div className="App">
         <Error>
        <Hero heroName="Batman"></Hero>
        </Error>

        <Error>
        <Hero heroName="Superman"></Hero>
        </Error>
        
        <Error>
        <Hero heroName="Joker"></Hero>
        </Error>
          {/* <Portal> </Portal>
         <Refs></Refs>

       <Memo></Memo>
          <PureComponents></PureComponents>
          <Fragment></Fragment>
        <LifeA></LifeA>
        <Form></Form>
        <NameList></NameList>
        <Counter></Counter>
       <FunctionClick></FunctionClick>
       <Third name ="aa"> <p> this child of b </p></Third>
       <Bind> </Bind>
       <Parent> </Parent>
       <Conditional>  </Conditional>
     
       <Third name ="bb">
         <p> this child of bb </p>
       </Third>
       <Third name ="cc"></Third>
       <Welcome name = "a"></Welcome>
       <Welcome name = "b">
       <p> this child of b </p>
       </Welcome>
       <Welcome name = "c">
         <a>kyle</a>
       </Welcome>*/}

     </div>
       
     );
  }
}



export default App;
