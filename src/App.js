import './App.css';
import image from './pic1.jpg';
import imageTwo from './pic2 copy.jpg';
import {Shopping } from './Shopping';


function App (){
  return (
    <div className="App"> 
    <div className="container">               
      <img src={ image}  width="250px" alt="pic"/>
      </div>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <Shopping/>
      <div className="container">
        <img src={imageTwo} width="250px" alt='pic'/>
      </div>
      </div>
  );
}

export default App;
