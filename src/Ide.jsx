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
  gsap.fromTo(".ball", {left:"29.7%",top:"38%"}, {top:"44%" ,duration:1});
};


const BusToRual1=()=>{
  ///depart: ( 54% , 24,45% )
  gsap.fromTo(".ball",{left:"24.45%",top:"54%"},{top:"60%" ,duration:1});
};

const BusToRual2=()=>{
  ///depart: ( 54% , 35,2% )
  gsap.fromTo(".ball",{left:"35.2%",top:"54%"},{top:"60%" ,duration:1});
};

const BusToRegisters=()=>{
  ///depart: ( 53.7% , 47.8% )
  gsap.fromTo(".ball",{left:"47.8%",top:"53.7%"},{top:`55.5%` ,duration:1});
};

const DecoderToSequencer=()=>{
  ///depart: ( 59% , 78.2% )
  gsap.fromTo(".ball",{top:"78.2%",left:"59%"},{top:`79.5%` ,duration:1});
};

const IrToDecoder=()=>{
  ///depart: ( 59% , 78.2% )
  gsap.fromTo(".ball",{top:"68.2%",left:"59%"},{top:`69.8%` ,duration:1});
};

const QueueToIr=()=>{
  ///depart: ( 64.9% , 64.2% )  W:1.4% ,H:2.812
  gsap.fromTo(".ball",{left:"64.9%",top:"64.2%"},{left:`63.7%` ,duration:1});
};

const BusToQueue=()=>{
  ///depart: ( 79.1% , 53.6% )  W:1.4% ,H:2.812
  gsap.fromTo(".ball",{left:"79.1%",top:"53.6%"},{top:`64.4%` ,duration:1});
  gsap.to(".ball",{left:`78.3%` ,duration:1,delay:1});
};

const BusToAcc=()=>{
  ///depart: ( 39.7% , 54% )  W:1.4% ,H:2.812
  gsap.fromTo(".ball",{left:"39.7%",top:"54%"},{top:`89%` ,duration:1});
  gsap.to(".ball",{left:`34%` ,duration:1,delay:1});
};

const AluToAcc=()=>{
  ///depart: ( 30.3% , 83.5% )  W:1.4% ,H:2.812
  gsap.fromTo(".ball",{left:"30.3%",top:"83.5%"},{top:`84.5%` ,duration:1});
};

const MdrToBus=()=>{
  ///depart: ( 51.8% , 43.2% )
  gsap.fromTo(".ball",{left:"51.8%",top:"43.2%"},{top:`45.2%` ,duration:1});
};

const AdrToBus=()=>{
  ///depart: ( 66.3% , 25.4% )
  gsap.fromTo(".ball",{left:"66.3%",top:"25.4%"},{top:`45.2%` ,duration:1});
};

const IpToAdr=()=>{
  ///depart: ( 69% , 13.7% )
  gsap.fromTo(".ball",{left:"69%",top:"13.7%"},{top:`17.8%` ,duration:1});
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

