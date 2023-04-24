/*import { tags as t } from '@lezer/highlight';
import { aura, auraInit } from '@uiw/codemirror-theme-aura';*/
import { Controlled as CodeMirror } from "react-codemirror2";
import "./style.css"

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
import Arch from '../Arch/index.jsx';
import gsap from 'gsap';
import "../../codemirror/lib/codemirror.css"
import "../../codemirror/theme/material.css";
import "../../codemirror/mode/myLang/assembly.js"

////////////////animations declarations////////////////////////////////
let animations=[];
////////////////context declarations///////////////////////////////////
let Contextarray=[];

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
  let [memo,setmemo]=useState(false);
  let [reg,setreg]=useState(false);
  let [stk,setstk]=useState(false);//for showing stack
  ///////////////////////////////executions function////////////////////////////////////////
const traitement= (codeArray)=>{
// Registers[0].setvalue("0000000000000010");
// Registers[1].setvalue("0000000000000011");

for(let i=0;i<50;i++){//initializing first 50 bytes in memory to 0 (data memory)
memory.setRam(i);
memory.setRim("00000000");
memory.write();
}


memory.setcode(codeArray)
queue.instructionset([]);

//------//
let numtmp=0;
// while(queue.getqueuelen()<6){
//     queue.fetchInstruction(animations,numtmp,1);
//     numtmp++;
// }
queue.fetchInstruction(animations,0,1,Contextarray,0);
queue.fetchInstruction(animations,numtmp,0,Contextarray,0);
queue.fetchInstruction(animations,1,1,Contextarray,0);
queue.fetchInstruction(animations,numtmp,0,Contextarray,0);
queue.fetchInstruction(animations,2,1,Contextarray,0);
queue.fetchInstruction(animations,numtmp,0,Contextarray,0);




//-----//
let resulttmp="";
sequenceur.getinstrbyte(animations,true,Contextarray);
let instrobject={...sequenceur.decode(animations,Contextarray)};
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true,Contextarray);
instrobject={...sequenceur.decode(animations,Contextarray)};
sequenceur.execute(instrobject,1,animations);
sequenceur.getinstrbyte(animations,true,Contextarray);
instrobject={...sequenceur.decode(animations,Contextarray)};
sequenceur.execute(instrobject,1,animations);
// console.log(` after first instruction :`);
// resulttmp=resulttmp+` after first instruction :`;
// memory.setRam(0);
// memory.read(0);
// console.log(`memory 0 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 0 :${memory.getRim()}`;

// memory.setRam(2);
// memory.read(0);
// console.log(`memory 2 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 2 :${memory.getRim()}`;
// memory.setRam(4);
// memory.read(0);
// console.log(`memory 4 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 4 :${memory.getRim()}`;
// memory.setRam(6);
// memory.read(0);
// console.log(`memory 6 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 6 :${memory.getRim()}`;
// memory.setRam(10);
// memory.read(0);
// console.log(`memory 10 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 10 :${memory.getRim()}`;
// memory.setRam(12);
// memory.read(0);
// console.log(`memory 12 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 12 :${memory.getRim()}`;
// memory.setRam(14);
// memory.read(0);
// console.log(`memory 14 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 14 :${memory.getRim()}`;
// memory.setRam(16);
// memory.read(0);
// console.log(`memory 16 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 14 :${memory.getRim()}`;
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);
// sequenceur.getinstrbyte(animations,true);
// instrobject=sequenceur.decode(animations);
// sequenceur.execute(instrobject,1,animations);

// console.log(` after last instruction :`);
// resulttmp=resulttmp+`
//   after last instruction :`;
// memory.setRam(0);
// memory.read(0);
// console.log(`memory 0 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 0 :${memory.getRim()}`;
// memory.setRam(2);
// memory.read(0);
// console.log(`memory 2 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 2 :${memory.getRim()}`;
// memory.setRam(4);
// memory.read(0);
// console.log(`memory 4 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 4 :${memory.getRim()}`;
// memory.setRam(6);
// memory.read(0);
// console.log(`memory 6 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 6 :${memory.getRim()}`;
// memory.setRam(10);
// memory.read(0);
// console.log(`memory 10 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 10 :${memory.getRim()}`;
// memory.setRam(12);
// memory.read(0);
// console.log(`memory 12 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 12 :${memory.getRim()}`;
// memory.setRam(14);
// memory.read(0);
// console.log(`memory 14 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 14 :${memory.getRim()}`;
// memory.setRam(16);
// memory.read(0);
// console.log(`memory 16 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 16 :${memory.getRim()}`;
// memory.setRam(20);
// memory.read(0);
// console.log(`memory 20 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 20 :${memory.getRim()}`;
// memory.setRam(22);
// memory.read(0);
// console.log(`memory 22 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 22 :${memory.getRim()}`;
// memory.setRam(24);
// memory.read(0);
// console.log(`memory 24 :${memory.getRim()}`);
// resulttmp=resulttmp+`
//   memory 24 :${memory.getRim()}`;
// memory.setRam(26);
// memory.read(0);
// console.log(`memory 26 :${memory.getRim()}`);
resulttmp=resulttmp+`
  r1 :${Registers[0].getvalue()}  acc :${Registers[4].getvalue()} `;
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
  let tablec=[];
  memory.getData().forEach((element,index) => {
      tablec.push( <tr>
      <td>
          {index}
      </td>
      <td>
          {element}
      </td>
  </tr>)
  });
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
  {/* <button className='ide-exec-button' onClick={()=>{traitement(["19","49","00","01"]) */}
  <button className='ide-exec-button' onClick={()=>{traitement(["19","C8","00","00","00","01","19","41","00","00","01","88","00","00"])
  setdone(true)
  }}>execute</button>
    <pre style={{color:"white"}}>{result}</pre>
    </div>
  }
{done && <div className="codeContainer console">
  {/* <div style={{width:"500px",position:"fixed",backgroundColor:"black"}}><button className='ide-exec-button' onClick={()=>{traitement(["19","49","00","01"]) */}
  <div style={{width:"500px",position:"fixed",backgroundColor:"black"}}><button className='ide-exec-button' onClick={()=>{traitement(["19","C8","00","00","00","01","19","41","00","00","01","88","00","00"])
  setdone(true)
  }}>execute</button>
  <button className='ide-exec-button' onClick={()=>{setsimul(true)
  }}>simulate</button>
  <button className='ide-exec-button' onClick={()=>{setreg(true)
  setmemo(false)
  setstk(false)
  }}>registers</button>
  <button className='ide-exec-button' onClick={()=>{setmemo(true)
  setstk(false)
  setreg(false)
  }}>memory</button>
    <button className='ide-exec-button' onClick={()=>{setstk(true)
  }}>stack</button>
  
  </div>
    {/* <pre style={{color:"white",marginTop:"2.5em"}}>{result}</pre> */}
    {reg && <div className="IdeReg">
                <div className="aregister">
                    <p className="aregide">R1  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{Registers[0].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregide">R1  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{Registers[0].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregide">R2  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{Registers[1].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregide">R3  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{Registers[2].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregide">R4  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{Registers[3].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregide">RI  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{Registers[6].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregide">RB  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{Registers[5].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregide">RS  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{Registers[7].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregide">Acc :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{Registers[4].getvalue()}</p></div>
                </div>
            </div> }
            {memo && <table className="contentTableMCIde">
                <tbody>
                <tr>
                    <td style={{color:"#1BE985"}}>
                        adresse
                    </td>
                    <td style={{color:"#1BE985"}}>
                        content
                    </td>
                </tr>
                    {tablec}
                </tbody>
            </table>}
    </div>
  }
</div>}

{simul && <Arch anim={animations} mem={memory} flags={Alu1.getAllFlags()} reg={Registers} theCTX={Contextarray}/>}
</>
}
export default Ide;
export {BR,IR,memory,Registers,queue,addressingModes,Alu1,IP};