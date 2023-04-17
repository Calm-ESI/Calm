// import './RiadPage.css';
import img from './assets/to-do-list 2.png' ;
import img1 from './assets/Vector.png' ;
import img2 from './assets/heart.png';
import img3 from './assets/Vector123.png';
import img4 from './assets/Vector(2).png';
import img5 from './assets/Vector(3).png';
import AOS from 'aos';
import React, {useEffect} from 'react';
import'aos/dist/aos.css'


function App() {
 

  const Part1=()=>{
    return(
      <>
      <div className="div1">
           
           <div> 
            <div className="slogan">slogan slogan slogan</div>
            <div className="div2"><p >calM will help you uderstand the basics of how the CPU works and also will go you an insight on more advanced topics with outstanding illustrations</p>
            </div> 
             <div className="logo">our logo</div> 
              </div></div>
      </>
    )

  }
  const Part2=()=>{
    return(
      <>
  <div className="div3">
<h1 className="whycalm ">why calM</h1>
           <div className="div4"><span className="txt1" >Hna bdlou titre then aktbou blik khdemna 3lih comme project te3 university men ESI ..etc</span></div>
</div>
      </>
    )
  }

  const Part3=()=>{
     return(
      <>
      <div className="part3"><h2 className="part3-1">What we offer</h2><h3 className="part3-2">Hna tahder 3la Learn et 3la emulation wsimulation bli ne9edrou ndirouhoum THen tro7 mouraha tel9a learn</h3></div>
           <div className="part3-4"><img  className='todolist' src={img}/></div>
      
      </>
     )


  }
  const Part4=()=>{
    return(
      <>
      <div className="part4">
            <h1 className="part4-1">Learn</h1>
            <h3 className="part4-2" >---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h3>
            <button className="part4-3"></button>
            </div>
      </>
    )
  }
  const Part5=()=>{
    return(
      <>
      <div className="part5">
         <div className="part5-1"> 
                <h1 className="emul">Emulation</h1>
                <h2 className="emul-1"> You can write your machin ecode and execute it</h2>
         
          </div>
         <div className="part5-2">
               <h1 className="simul">Simulation</h1> 
              <h2 className="simul-1"> ---------------------------------------------------</h2>
         </div>
         <button className="part5-3">Let's code</button>
      
       </div>
      </>
    )
  }
  const Part6=()=>{
    return(
      <>
      <h1 className="part6-1"> keep intouch :</h1>
      <h2 className="part6-2">Discord Server</h2>
      <div className="part6-3"><img   src={img1}/></div>
      <div className="part6-4">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
      </>
    )
  }
  const Part7=()=>{
    return(
      <>
      <div className="part7-1"> 
         <img className="ceour-vert" src={img2}/>
          <h2 className="part7-2">Thanks for everyone who contributed to this project</h2>
          <h2 className="part7-3">you can always contribute from here:</h2>
          <div className="part7-4"></div>
       <div className="part7-5" >
              <button className="part7-6"> <h1 className="part7-9">Email us</h1>
              <img className="mail-icon"   src={img4}/>
      
              </button>
              <h2 className="part7-7">You can reach us out anytime</h2>
              <h2 className="part7-8">Follow us for updates</h2>
              <img className="git-icon" src={img3}/>
               <img className="disc-icon"   src={img1}/>
               <img className="in-icon"   src={img5}/>
      
          
          </div>
       </div>
      </>
    )
  }
  return (
    <div className="App">
      
      <Part1></Part1>
      <Part2></Part2>
      <Part3></Part3>
      <Part4></Part4>
      <Part5></Part5>
      <Part6></Part6>
      <Part7></Part7>
           
      </div>
    
    
    
  );
}

export default App;

