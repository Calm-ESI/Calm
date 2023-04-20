/*import { tags as t } from '@lezer/highlight';
import { aura, auraInit } from '@uiw/codemirror-theme-aura';*/
import { Controlled as CodeMirror } from "react-codemirror2";

// import components
import { NavBar } from "../../components"

import {EditorView} from "@codemirror/view"
import { useState } from 'react';
import MC from "../../Emulator/MC.js";
import Sequenceur from "../../Emulator/Sequencer.js";
import Queue from "../../Emulator/Queue.js";
import AddressingModes from "../../Emulator/Adressing.js";
import { generalPurposeRegister } from "../../Emulator/Register.js";
import { Register } from "../../Emulator/Register.js";
import Alu from "../../Emulator/ALU.js";
// import Console from './Console.jsx';
import Arch from '../Arch/index.jsx';

import "../../codemirror/lib/codemirror.css"
import "../../codemirror/theme/material.css";
import "../../codemirror/mode/myLang/assembly.js"

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
sequenceur.getinstrbyte(animations,true);
let instrobject={...sequenceur.decode(animations)};
console.log(instrobject);

sequenceur.execute(instrobject,1,animations);
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
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true);
instrobject=sequenceur.decode(animations);
sequenceur.execute(instrobject,1,animations);

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




// animations[0]=BusToIr;


// animations[0]=IounitToBus;
// animations[1]=BusToRual1;
// animations[2]=BusToRual2;
// animations[3]=BusToRegisters;
// animations[4]=IrToDecoder;
// animations[5]=QueueToIr;
// animations[6]=BusToQueue;
// animations[7]=BusToAcc;
// animations[8]=AluToAcc;
// animations[9]=MdrToBus;
// animations[10]=AdrToBus;
// animations[11]=IpToAdr;
// animations[12]=DecoderToSequencer;
// animations[13]=MdrTOQue;
// animations[14]=MdrToReg;
// animations[15]=MdrToIO;
// animations[16]=IOToMdr;
// animations[17]=MdrToRual1;
// animations[18]=MdrToRual2;
// animations[19]=AccToMDR;
// animations[20]=MdrToADR;
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
  const [code, setCode] = useState("");
return <> 
{!simul && <NavBar/>}
{/* <CodeMirror theme={aura} /> */}
{!simul &&<div style={{
  display:"flex"
}}>
<div className='codeContainer'>
<CodeMirror

  value={code}

  options={{ 
    mode: "8086",
    theme: "material",
    lineNumbers:true,
    readOnly: false,

  }}
  onBeforeChange={(editor, data, value) => {
    setCode(value);
  }}
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
{simul && <Arch anim={animations} mem={memory} flags={Alu1.getAllFlags()} reg={Registers}/>}
</>
}
export default Ide;
export {BR,IR,memory,Registers,queue,addressingModes,Alu1,IP};

