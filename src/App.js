import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
     {/*<Greet name="harsh">
      <p>Welcome</p></Greet>
      <Greet name="ram"/>
      <Greet name="harry"/>
      <Welcome name="potter"/>
  <Welcome name="wisely"/> 
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>*/}
      <ParentComponent/>

    </div>
  );
}

export default App;
