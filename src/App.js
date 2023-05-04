import './App.css';
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';

//import pages
import { AddressingModesPage, Arch, CheckYourEmailPage, ComponentsPage, ExamplesPage, Hero, Ide, LearnPage, Login, NotFound, PasswordForgotPage, Profile, Register, ResetEmailSent, ResetPasswordPage } from './pages';

//import images
import asteriks from "./assets/images/decorations/asteriskgray.png"
import asteriks2 from "./assets/images/decorations/asteriskgray.png"
import { useEffect, useState } from 'react';

import ExercicesPage from "./pages/ExercicesPage";
import Level1 from "./components/Exercices/Level1/level1";
import Level2 from './components/Exercices/Level2/level2';
import Level3 from './components/Exercices/Level3/level3';
import Level4 from './components/Exercices/Level4/level4';

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
          <Route exact path="/ide" element={<Ide currentUser={currentUser}/>}/>
          <Route exact path="/archi" element={<Arch/>}/>
          <Route exact path="/examples" element={<ExamplesPage/>}/>
          <Route exact path="/learn" element={<LearnPage/>}/>
          <Route exact path="/learn/addressing-modes" element={<AddressingModesPage/>}/>
          <Route exact path="/learn/components" element={<ComponentsPage/>}/>
          <Route exact path="/register" element={<Register updateCurrentUser={setCurrentUser}/>}/>
          <Route exact path="/login" element={<Login updateCurrentUser={setCurrentUser}/>}/>
          <Route exact path="/check-email" element={<CheckYourEmailPage/>}/>
          <Route exact path="/password-forgot" element={<PasswordForgotPage/>}/>
          <Route exact path="/reset-password/email-sent" element={<ResetEmailSent/>}/>
          <Route exact path="/reset-password/:token" element={<ResetPasswordPage/>}/>
          <Route exact path="/profile" element={<Profile currentUser={currentUser} updateCurrentUser={setCurrentUser}/>}/>
          <Route path='*' element={<NotFound />}/>
          <Route exact path="/learn/Exercices" element={<ExercicesPage/>}/>
          <Route exact path="/learn/Exercices/Level1" element={<Level1/>}/>
          <Route exact path="/learn/Exercices/Level2" element={<Level2/>}/>
          <Route exact path="/learn/Exercices/Level3" element={<Level3/>}/>
          <Route exact path="/learn/Exercices/Level4" element={<Level4/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
