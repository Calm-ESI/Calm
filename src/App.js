import './App.css';
import asteriks from "./assets/asteriskgray.png"
import asteriks2 from "./assets/asteriskgray.png"
import asteriksgreen from "./assets/asteriskgreen.png"
import asteriks2green from "./assets/asteriskgreen.png"
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import Hero from './Hero.jsx';
import Ide from './Ide.jsx';
import Arch from './Arch.jsx';
import Riad from './Riad'
function App() {
  return (
    <Router>
      <div className="App">
        
        <img src={asteriks} className="lowerasteriks" alt=""onMouseEnter={(e)=>{
          e.currentTarget.src=require('./assets/asteriskgreen.png');
        }} onMouseLeave={(e)=>{
          e.currentTarget.src=require('./assets/asteriskgray.png');
        }}>
        </img>
        
        <img src={asteriks2} className="upperasteriks" alt="" onMouseEnter={(e)=>{
          e.currentTarget.src=require('./assets/asteriskgreen.png');
          // e.currentTarget.className="upperasteriksgreen";
        }} onMouseLeave={(e)=>{
          e.currentTarget.src=require('./assets/asteriskgray.png');
          // e.currentTarget.className="upperasteriks";
        }} >
        </img>
        
        <Routes>
          <Route exact path="/" element={<Hero/>}/>
          <Route exact path="/ide" element={<Ide/>}/>
          <Route exact path="/archi" element={<Arch/>}/>
        </Routes>
        
        <Riad/>
      </div>
    </Router>
  );
}

export default App;
