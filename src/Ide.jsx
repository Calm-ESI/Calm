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
const initialWidthPercentage = "1.4%";
const initialHeightPercentage = "2.812%";
const IounitToBus=(h,w)=>{
  ///depart: ( 29.7% , 38% )
  // gsap.to(".ball",{top:"44%" ,duration:3});
  gsap.fromTo(".ball", {left:"29.7%",top:"38%"}, {top:"44%" ,duration:1});
};

const BusToRual2=()=>{
  ///depart: ( 54% , 35,2% )
  gsap.fromTo(".ball",{left:"35.2%",top:"54%"},{top:"60%" ,duration:1});
};

const BusToRegisters=(width, height)=>{
  ///depart: ( 53.7% , 47.8% )
  gsap.fromTo(".ball",{left:`${0.694 * width}px`,top:`${0.50 * height}px`},{top:`${ 0.613 * height}px` ,duration:1});
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

const fitRual = () => {
  gsap.to(".ball", {borderRadius: "25%", width: "5%", height: "4.5%"});
}

const fitRegister = () => {
  gsap.to(".ball", {borderRadius: "15%", left:"686px", width: "8.166%", height: "4.3%"});
}

const fitFlags = () => {
  gsap.timeline().fromTo(".ball", {top: "54.6%", left: "24.6%"}, {top: "71.25%"})
  .to(".ball", {left: "23.6%"})
  .to(".ball", {borderRadius: "25%", top: "70.5%", left: "18.65%", width: "4.95%", height: "4.6%"}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "71.25%", left: "23.6%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit
}

const enterFlags = () => {
  gsap.timeline().fromTo(".ball",{left:"35.2%",top:"54%"},{top:"71.5%" ,duration:1}).to(".ball", {left: "23.6%"})
  .to(".ball", {borderRadius: "25%", left:"18.75%", top: "70.5%" , width: "4.8%", height: "4.55%"}); //transformation function
}

const enterMDR = () => {
  gsap.timeline().fromTo(".ball", {left:"29.7%",top:"38%"}, {top:"44%"})
  .to(".ball", {left:`51.9%`})
  .to(".ball", {top: "39%"})
  .to(".ball", {borderRadius: "15%", left:"48%", top: "33%", width: "9.2%", height: "6%" , duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", left: "51.9%", top: "39%", width: initialWidthPercentage, height: initialHeightPercentage, duration: 1}) //unfit
}

const enterIoUnit = () => {
  gsap.timeline().fromTo(".ball", {left:"29.9%",top:"44%"}, {top:"34.3%"})
  .to(".ball", {borderRadius: "15%", left: "27%", top: "24.5%", width: "7.4%", height: "9.8%", duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", left: "29.9%", top: "34.3%", width: initialWidthPercentage, height: initialHeightPercentage, duration: 1}) //unfit

}

const fitIP = () => {
  gsap.timeline().to(".ball", {top: "12.45%"})
  .to(".ball", {borderRadius: "25%", left: "66.6%", top: "6.7%", width: "6.1%", height: "5.61%", duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", left: "69%", top: "12.45%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit
}

const fitMAR = () => {
  gsap.timeline().fromTo(".ball", {top: "19.5%", left: "69%"}, {left: "60.25%"})
  .to(".ball", {rotation: "270_ccw"}) //rotate the circle before transofrmation
  .to(".ball", {borderRadius: "0%", top: "17%",left: "55.7%", width: "8.16%", height: "5%", duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "19.5%", left: "60.25%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit
  .to(".ball", {rotation: "0_ccw", duration: "1"}) //undo rotation
}

const fitIR = () => {
  gsap.timeline().fromTo(".ball", {top: "19.5%", left: "60.25%"}, {left:"66.4%"})
  .to(".ball", {top: "44.5%"})
  .to(".ball", {left: "79.1%"})
  .to(".ball", {top: "58%"})
  .to(".ball", {left: "63.9%"})
  .to(".ball", {borderRadius: "15%", top: "56.75%", left: "55.7%", width: "8.2%", height: "5.2%", duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "58%", left: "63.9%", width: initialWidthPercentage, height: initialHeightPercentage, duration: 1}) //unfit
}

const fitDecoder = () => {
  gsap.timeline().fromTo(".ball", {top: "58%", left: "63.9%", }, {left: "59.25%"})
  .to(".ball", {top: "63%"})
  .to(".ball", {borderRadius: "15%", top: "65.8%", left: "55.75%", width: "8.15%", height: "5.25%"}) //transfromation function
  .to(".ball", {borderRadius: "50%", top: "63%", left: "59.25%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit
}

const fitSequencer = () => {
  gsap.timeline().fromTo(".ball", {top: "63%", left: "59.25%"}, {top: "72%"})
  .to(".ball", {borderRadius: "15%", top: "74.85%", left: "55.75%", width: "8.15%", height: "5.25%"}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "72%", left: "59.25%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit
}

const fitRUAL1 = () => {
  gsap.timeline().fromTo(".ball", {top: "44.5%", left: "79.1%"}, {left: "24.6%"})
  .to(".ball", {top: "54.6%"})
  .to(".ball", {borderRadius: "25%", top: "57.5%", left: "22.9%", width: "4.85%", height: "4.65%"}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "54.6%", left: "24.6%", width: initialWidthPercentage, height: initialHeightPercentage}) // unfit
}

const fitRUAL2 = () => {
  gsap.timeline().fromTo(".ball", {top: "80.55%", left: "30.15%"}, {left: "39.7%"})
  .to(".ball", {top: "44.5%"})
  .to(".ball", {left: "35.4%"})
  .to(".ball", {top: "54.6%"})
  .to(".ball", {borderRadius: "25%", top: "57.5%", left: "33.7%", width: "4.85%", height: "4.65%", duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "54.6%", left: "35.4%", width: initialWidthPercentage, height: initialHeightPercentage}) // unfit
}

const globalFittingAnimations = () => {
  // enter the IO unit
  gsap.timeline().fromTo(".ball", {left:"29.9%",top:"44.5%"}, {top:"34.3%"})
  .to(".ball", {borderRadius: "15%", left: "27%", top: "24.5%", width: "7.4%", height: "9.8%", duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", left: "29.9%", top: "34.3%", width: initialWidthPercentage, height: initialHeightPercentage, duration: 1}) //unfit

  //back to data bus
  .to(".ball", {top: "44.5%"})

  //enter MDR
  .to(".ball", {left:`51.9%`})
  .to(".ball", {top: "39%"})
  .to(".ball", {borderRadius: "15%", left:"48%", top: "33%", width: "9.2%", height: "6%" , duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", left: "51.9%", top: "39%", width: initialWidthPercentage, height: initialHeightPercentage, duration: 1}) //unfit

  //back to data bus
  .to(".ball", {top: "44.5%"})

  //go to address bus
  .to(".ball", {left: "66.4%"})
  .to(".ball", {top: "19.5%"})
  .to(".ball", {left: "69%"})

  //enter IP
  .to(".ball", {top: "12.45%"})
  .to(".ball", {borderRadius: "25%", left: "66.6%", top: "6.7%", width: "6.1%", height: "5.61%", duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", left: "69%", top: "12.45%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit

  //back to address bus
  .to(".ball", {top: "19.5%"})

  //enter MAR
  .to(".ball", {left: "60.25%"})
  .to(".ball", {rotation: "270_ccw"})
  .to(".ball", {rotation: "270_ccw"}) //rotate the circle before transofrmation
  .to(".ball", {borderRadius: "0%", top: "17%",left: "55.7%", width: "8.16%", height: "5%", duration: 1}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "19.5%", left: "60.25%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit
  .to(".ball", {rotation: "0_ccw", duration: "1"}) //undo rotation

  //back to Data bus
  .to(".ball", {left: "66.4%"})
  .to(".ball", {top: "44.5%"})

  //move to IR
  .to(".ball", {left: "79.1%"})
  .to(".ball", {top: "58%"})
  .to(".ball", {left: "63.9%"})

  //enter IR
  .to(".ball", {borderRadius: "15%", top: "56.75%", left: "55.7%", width: "8.2%", height: "5.2%"}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "58%", left: "63.9%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit

  //move to Decoder
  .to(".ball", {left: "59.25%"})
  .to(".ball", {top: "63%"})
  .to(".ball", {borderRadius: "15%", top: "65.8%", left: "55.75%", width: "8.15%", height: "5.25%"}) //transfromation function
  .to(".ball", {borderRadius: "50%", top: "63%", left: "59.25%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit

  //go to Sequencer
  .to(".ball", {top: "72%"})

  //enter Sequencer
  .to(".ball", {borderRadius: "15%", top: "74.85%", left: "55.75%", width: "8.15%", height: "5.25%"}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "72%", left: "59.25%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit

  //back to data bus
  .to(".ball", {top: "58%"})
  .to(".ball", {left: "79.1%"})
  .to(".ball", {top: "44.5%"})

  //go to RUAL1
  .to(".ball", {left: "24.6%"})
  .to(".ball", {top: "54.6%"})

  //enter RUAL1
  .to(".ball", {borderRadius: "25%", top: "57.5%", left: "22.9%", width: "4.85%", height: "4.65%"}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "54.6%", left: "24.6%", width: initialWidthPercentage, height: initialHeightPercentage}) // unfit

  //go to Flags
  .to(".ball", {top: "71.25%"})
  .to(".ball", {left: "23.6%"})

  //enter Flags
  .to(".ball", {borderRadius: "25%", top: "70.5%", left: "18.65%", width: "4.95%", height: "4.6%"}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "71.25%", left: "23.6%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit

  //go to ACC
  .to(".ball", {left: "30.15%"})
  .to(".ball", {top: "76.15%"})

  //enter ACC
  .to(".ball", {borderRadius: "15%", top: "79.1%", left: "27.89%", width: "6.1%", height: "5.8%"}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "76.15%", left: "30.15%", width: initialWidthPercentage, height: initialHeightPercentage}) //unfit

  //back to Data bus
  .to(".ball", {top: "80.55%"})
  .to(".ball", {left: "39.7%"})
  .to(".ball", {top: "44.5%"})

  //go to RUAL2
  .to(".ball", {left: "35.4%"})
  .to(".ball", {top: "54.6%"})

  //enter RUAL2
  .to(".ball", {borderRadius: "25%", top: "57.5%", left: "33.7%", width: "4.85%", height: "4.65%", duration: 2}) //transformation function
  .to(".ball", {borderRadius: "50%", top: "54.6%", left: "35.4%", width: initialWidthPercentage, height: initialHeightPercentage}) // unfit

}

animations[0] = globalFittingAnimations;
// animations[0] = temp;

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

  // //animation to fit into the RUAL registers
  // animations[0] = BusToRual2;
  // animations[1] = fitRual;

  // //animation to fit into the 7 registers
  // animations[0]=BusToRegisters;
  // animations[1]=fitRegister;

  // //animation to fit into the flags register
  // animations[0] = enterFlags;
  // animations[1] = fitFlags;
  
  // // animation to fit into the MDR register
  // animations[0] = enterMDR;

  // // animation to fit into the IO unit register
  // animations[0] = enterIoUnit;
  
  // //global dimonstration of transformations
  // animations[0] = globalFittingAnimations;

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

