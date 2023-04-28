import './App.css';
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';

//import pages
import { AddressingModesPage, Arch, ComponentsPage, DatabaseEditor, ExamplesPage, Hero, Ide, LearnPage } from './pages';

//import images
import asteriks from "./assets/images/decorations/asteriskgray.png"
import asteriks2 from "./assets/images/decorations/asteriskgray.png"

function App() {
  return (
    <Router>
      <div className="App">
        
        <img src={asteriks} className="lowerasteriks" alt=""onMouseEnter={(e)=>{
          e.currentTarget.src=require('./assets/images/decorations/asteriskgreen.png');
        }} onMouseLeave={(e)=>{
          e.currentTarget.src=require('./assets/images/decorations/asteriskgray.png');
        }}>
        </img>
        
        <img src={asteriks2} className="upperasteriks" alt="" onMouseEnter={(e)=>{
          e.currentTarget.src=require('./assets/images/decorations/asteriskgreen.png');
          // e.currentTarget.className="upperasteriksgreen";
        }} onMouseLeave={(e)=>{
          e.currentTarget.src=require('./assets/images/decorations/asteriskgray.png');
          // e.currentTarget.className="upperasteriks";
        }} >
        </img>
        
        <Routes>
          <Route exact path="/" element={<Hero/>}/>
          <Route exact path="/ide" element={<Ide/>}/>
          <Route exact path="/archi" element={<Arch/>}/>
          <Route exact path="/database-editor" element={<DatabaseEditor/>}/>
          <Route exact path="/examples" element={<ExamplesPage/>}/>
          <Route exact path="/learn" element={<LearnPage/>}/>
          <Route exact path="/learn/addressing-modes" element={<AddressingModesPage/>}/>
          <Route exact path="/learn/components" element={<ComponentsPage/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
