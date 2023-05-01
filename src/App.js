import './App.css';
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';

//import pages
import { AddressingModesPage, Arch, ComponentsPage, ExamplesPage, Hero, Ide, LearnPage, Login, NotFound, Profile, Register } from './pages';

//import images
import asteriks from "./assets/images/decorations/asteriskgray.png"
import asteriks2 from "./assets/images/decorations/asteriskgray.png"
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect( ()=>{
    const loggedInUser = localStorage.getItem('user');
    
    if(loggedInUser){
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, [])

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
          <Route exact path="/examples" element={<ExamplesPage/>}/>
          <Route exact path="/learn" element={<LearnPage/>}/>
          <Route exact path="/learn/addressing-modes" element={<AddressingModesPage/>}/>
          <Route exact path="/learn/components" element={<ComponentsPage/>}/>
          <Route exact path="/register" element={<Register updateCurrentUser={setCurrentUser}/>}/>
          <Route exact path="/login" element={<Login updateCurrentUser={setCurrentUser}/>}/>
          <Route exact path="/profile" element={<Profile currentUser={currentUser} updateCurrentUser={setCurrentUser}/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
