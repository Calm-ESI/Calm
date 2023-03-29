/*import { tags as t } from '@lezer/highlight';
import { aura, auraInit } from '@uiw/codemirror-theme-aura';*/
import CodeMirror from '@uiw/react-codemirror';
import Navbar from './Navbar.jsx';
import {EditorView} from "@codemirror/view"
import { useState } from 'react';
import MC from "./Emulator/MC.js";
import Sequenceur from "./Emulator/Sequencer.js";
import Queue from "./Emulator/Queue.js";
import AddressingModes from "./Emulator/Adressing.js";
import { generalPurposeRegister } from "./Emulator/Register.js";
import { Register } from "./Emulator/Register.js";
import Alu from "./Emulator/ALU.js";
import { useEffect } from 'react';
import gsap from 'gsap';
import Console from './Console.jsx';
import Arch from './Arch.jsx';


////////////////animations declarations////////////////////////////////
let animations=[];

////////////////machine declarations////////////////////////////////
let memory=new MC();
let sequenceur=new Sequenceur();
let queue = new Queue();
let addressingModes=new AddressingModes();
let IP=new Register();
let R1= new generalPurposeRegister();
let R2=new generalPurposeRegister();
let R3=new generalPurposeRegister();
let R4=new Register();
let BR=new Register();
let IR=new Register();
let SR=new Register();
let Alu1=new Alu();
let Registers=[R1,R2,R3,R4,Alu1.Acc,BR,IR,SR];


///////////////////////////////////the component/////////////////////////
const Ide = ()=>{

  ////////////////////hooks///////////////////////////////:
  let [result,setresult]=useState("");
  let [done,setdone]=useState(false);
  let [simul,setsimul]=useState(false)

  ///////////////////////////////executions function////////////////////////////////////////
const traitement= (codeArray)=>{
Registers[0].setvalue("0000000000000010");
Registers[1].setvalue("0000000000000011");

for(let i=0;i<50;i++){//initializing first 10 bytes in memory to 0 (data memory)
memory.setRam(i);
memory.setRim("00000000");
memory.write();
}


memory.setcode(codeArray)
queue.instructionset([]);

//------//
while(queue.getqueuelen()<6){
    queue.fetchInstruction();
}
//-----//
let resulttmp="";
sequenceur.getinstrbyte();
let instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
console.log(` after first instruction :`);
resulttmp=resulttmp+` after first instruction :`;
memory.setRam(0);
memory.read(0);
console.log(`memory 0 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 0 :${memory.getRim()}`;

memory.setRam(2);
memory.read(0);
console.log(`memory 2 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 2 :${memory.getRim()}`;
memory.setRam(4);
memory.read(0);
console.log(`memory 4 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 4 :${memory.getRim()}`;
memory.setRam(6);
memory.read(0);
console.log(`memory 6 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 6 :${memory.getRim()}`;
memory.setRam(10);
memory.read(0);
console.log(`memory 10 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 10 :${memory.getRim()}`;
memory.setRam(12);
memory.read(0);
console.log(`memory 12 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 12 :${memory.getRim()}`;
memory.setRam(14);
memory.read(0);
console.log(`memory 14 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 14 :${memory.getRim()}`;
memory.setRam(16);
memory.read(0);
console.log(`memory 16 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 14 :${memory.getRim()}`;
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
sequenceur.getinstrbyte();
instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);

console.log(` after last instruction :`);
resulttmp=resulttmp+`
  after last instruction :`;
memory.setRam(0);
memory.read(0);
console.log(`memory 0 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 0 :${memory.getRim()}`;
memory.setRam(2);
memory.read(0);
console.log(`memory 2 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 2 :${memory.getRim()}`;
memory.setRam(4);
memory.read(0);
console.log(`memory 4 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 4 :${memory.getRim()}`;
memory.setRam(6);
memory.read(0);
console.log(`memory 6 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 6 :${memory.getRim()}`;
memory.setRam(10);
memory.read(0);
console.log(`memory 10 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 10 :${memory.getRim()}`;
memory.setRam(12);
memory.read(0);
console.log(`memory 12 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 12 :${memory.getRim()}`;
memory.setRam(14);
memory.read(0);
console.log(`memory 14 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 14 :${memory.getRim()}`;
memory.setRam(16);
memory.read(0);
console.log(`memory 16 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 16 :${memory.getRim()}`;
memory.setRam(20);
memory.read(0);
console.log(`memory 20 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 20 :${memory.getRim()}`;
memory.setRam(22);
memory.read(0);
console.log(`memory 22 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 22 :${memory.getRim()}`;
memory.setRam(24);
memory.read(0);
console.log(`memory 24 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 24 :${memory.getRim()}`;
memory.setRam(26);
memory.read(0);
console.log(`memory 26 :${memory.getRim()}`);
resulttmp=resulttmp+`
  memory 26 :${memory.getRim()}`;
setresult(resulttmp);


///////////////////animations to test////////////////////
const IounitToBus=(h,w)=>{
  ///depart: ( 29.7% , 38% )
  // gsap.to(".ball",{top:"44%" ,duration:3});
  gsap.fromTo(".ball", {x:w*0.425,y:h*0.39,opacity:"0"}, {opacity:"1",duration:1,delay:1});
  gsap.fromTo(".ball", {x:w*0.425,y:h*0.39}, {y:h*0.46 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};


const BusToRual1=(h,w)=>{
  ///depart: ( 54% , 24,45% )
  gsap.fromTo(".ball",{x:w*0.347,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.347,y:h*0.56},{y:h*0.625 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

const BusToRual2=(h,w)=>{
  ///depart: ( 54% , 35,2% )
  gsap.fromTo(".ball",{x:w*0.503,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.503,y:h*0.56},{y:h*0.625 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

const BusToRegisters=(h,w)=>{
  ///depart: ( 53.7% , 47.8% )
  gsap.fromTo(".ball",{x:w*0.685,y:h*0.555,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.685,y:h*0.555},{y:h*0.58 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

const IrToDecoder=(h,w)=>{
  ///depart: ( 59% , 78.2% )
  gsap.fromTo(".ball",{x:w*0.848,y:h*0.708,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.848,y:h*0.708},{y:h*0.725 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

const DecoderToSequencer=(h,w)=>{
  ///depart: ( 59% , 78.2% )
  gsap.fromTo(".ball",{x:w*0.848,y:h*0.813,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.848,y:h*0.813},{y:h*0.827 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

const QueueToIr=(h,w)=>{
  ///depart: ( 64.9% , 64.2% )  W:1.4% ,H:2.812
  gsap.fromTo(".ball",{x:w*0.93,y:h*0.6638,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.93,y:h*0.6638},{x:w*0.915 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

const BusToQueue=(h,w)=>{
  ///depart: ( 79.1% , 53.6% )  W:1.4% ,H:2.812
  gsap.fromTo(".ball",{x:w*1.135,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*1.135,y:h*0.56},{y:h*0.6638 ,duration:1,delay:2});
  gsap.to(".ball",{x:w*1.125 ,duration:1,delay:3});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:4});
};

const BusToAcc=(h,w)=>{
  ///depart: ( 39.7% , 54% )  W:1.4% ,H:2.812
  gsap.fromTo(".ball",{x:w*0.565,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.565,y:h*0.56},{y:h*0.923 ,duration:1,delay:2});
  gsap.to(".ball",{x:w*0.486 ,duration:1,delay:3});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:4});
};

const AluToAcc=(h,w)=>{
  ///depart: ( 30.3% , 83.5% )  W:1.4% ,H:2.812
  gsap.fromTo(".ball",{x:w*0.43,y:h*0.863,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.43,y:h*0.863},{y:h*0.877 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

const MdrToBus=(h,w)=>{
  ///depart: ( 51.8% , 43.2% )
  gsap.fromTo(".ball",{x:w*0.743,y:h*0.445,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.743,y:h*0.445},{y:h*0.465 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

const AdrToBus=(h,w)=>{
  ///depart: ( 66.3% , 25.4% )
  gsap.fromTo(".ball",{x:w*0.988,y:h*0.137,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.988,y:h*0.137},{y:h*0.18 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

const IpToAdr=(h,w)=>{
  ///depart: ( 69% , 13.7% )
  gsap.fromTo(".ball",{x:w*0.95,y:h*0.26,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
  gsap.fromTo(".ball",{x:w*0.95,y:h*0.26},{y:h*0.46 ,duration:1,delay:2});
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
};

/////////////data bus animations/////////////////:

const MdrTOQue=(h,w)=>{
  gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1,delay:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.874,duration:3,delay:3})
  gsap.to(".ball",{opacity:"0" ,duration:1,delay:7});
};

const MdrToReg=(h,w)=>{
  gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1,delay:1})
gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.44,duration:2,delay:3})
gsap.to(".ball",{opacity:"0" ,duration:1,delay:6});
};

const MdrToIO=(h,w)=>{
  gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1,delay:1})
gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.182,duration:3,delay:3})
gsap.to(".ball",{opacity:"0" ,duration:1,delay:7});
};
const IOToMdr=(h,w)=>{
  gsap.fromTo(".box-data",{x:w*0.182,opacity:"0"},{opacity:"1",duration:1,delay:1})
gsap.fromTo(".box-data",{x:w*0.182},{x:w*0.497,duration:3,delay:3})
gsap.to(".ball",{opacity:"0" ,duration:1,delay:7});
};
const MdrToRual1=(h,w)=>{
  gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1,delay:1})
gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.262,duration:3,delay:3})
gsap.to(".ball",{opacity:"0" ,duration:1,delay:7});
};
const MdrToRual2=(h,w)=>{
  gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1,delay:1})
gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.106,duration:3,delay:3})
gsap.to(".ball",{opacity:"0" ,duration:1,delay:7});
};
const AccToMDR=(h,w)=>{
  gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1,delay:1})
gsap.fromTo(".box-data",{x:w*0.321},{x:w*0.497,duration:2,delay:3})
gsap.to(".ball",{opacity:"0" ,duration:1,delay:6});
};

const MdrToADR=(h,w)=>{
  gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1,delay:1})
gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.705,duration:2,delay:3})
gsap.to(".ball",{opacity:"0" ,duration:1,delay:6});
};
animations[0]=IounitToBus;
animations[1]=BusToRual1;
animations[2]=BusToRual2;
animations[3]=BusToRegisters;
animations[4]=IrToDecoder;
animations[5]=QueueToIr;
animations[6]=BusToQueue;
animations[7]=BusToAcc;
animations[8]=AluToAcc;
animations[9]=MdrToBus;
animations[10]=AdrToBus;
animations[11]=IpToAdr;
animations[12]=DecoderToSequencer;
animations[13]=MdrTOQue;
animations[14]=MdrToReg;
animations[15]=MdrToIO;
animations[16]=IOToMdr;
animations[17]=MdrToRual1;
animations[18]=MdrToRual2;
animations[19]=AccToMDR;
animations[20]=MdrToADR;
}
// useEffect(()=>{
//   setTimeout(()=>{traitement()
//   setdone(true)
//   },1)
// },[])
  /////////////////////// codemirror theme ///////////////////////////////
  let myTheme = EditorView.theme({
    "&": {
      color: "white",
      backgroundColor: "#2D2D2D"
    },
    ".cm-content": {
      caretColor: "#2D2D2D"
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "#2D2D2D"
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "#2D2D2D"
    },
    ".cm-gutters": {
      backgroundColor: "#2D2D2D",
      color: "white",
      border: "none",
      fontFamily: 'JetBrains Mono',
      fontStyle: "normal",
      fontWeight: 400,
    },
  })
  /////////////////////returning the component//////////////////
return <> 
{!simul && <Navbar/>}
{/* <CodeMirror theme={aura} /> */}
{!simul &&<div style={{
  display:"flex"
}}>
<div className='codeContainer'>
<CodeMirror
  theme={myTheme}
  height="420px"
  width="500px"
/>
</div>

{!done && <div className="codeContainer console">
  <button className='execButton' onClick={()=>{traitement(["19","C8","00","00","00","01","19","C8","00","02","00","02","19","C8","00","04","00","03","19","C8","00","06","00","04","19","C8","00","0A","00","05","19","C8","00","0C","00","06","19","C8","00","0E","00","07","19","C8","00","10","00","08","01","C9","00","00","00","0A","19","8C","00","14","03","C9","00","0C","00","02","19","8C","00","16","05","D1","00","06","00","0E","19","8C","00","18","07","C9","00","10","00","06","19","8C","00","1A"])
  setdone(true)
  }}>execute</button>
    <pre style={{color:"white"}}>{result}</pre>
    </div>
  }
{done && <div className="codeContainer console">
  <div style={{width:"500px",position:"fixed",backgroundColor:"black"}}><button className='execButton' onClick={()=>{traitement(["19","C8","00","00","00","01","19","C8","00","02","00","02","19","C8","00","04","00","03","19","C8","00","06","00","04","19","C8","00","0A","00","05","19","C8","00","0C","00","06","19","C8","00","0E","00","07","19","C8","00","10","00","08","01","C9","00","00","00","0A","19","8C","00","14","03","C9","00","0C","00","02","19","8C","00","16","05","D1","00","06","00","0E","19","8C","00","18","07","C9","00","10","00","06","19","8C","00","1A"])
  setdone(true)
  }}>execute</button>
  <button className='execButton' onClick={()=>{setsimul(true)
  }}>simulate</button>
  </div>
    <pre style={{color:"white",marginTop:"2.5em"}}>{result}</pre>
    </div>
  }
</div>}
{simul && <Arch anim={animations}/>}
</>
}
export default Ide;
export {BR,IR,memory,Registers,queue,addressingModes,Alu1,IP};

