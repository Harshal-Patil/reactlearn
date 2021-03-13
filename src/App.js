import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
     {/*<Greet name="harsh">
      <p>Welcome</p></Greet>
      <Greet name="ram"/>
      <Greet name="harry"/>
      <Welcome name="potter"/>
  <Welcome name="wisely"/> */}
      <Message/>

    </div>
  );
}

export default App;
