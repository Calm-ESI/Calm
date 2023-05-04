/*import { tags as t } from '@lezer/highlight';
import { aura, auraInit } from '@uiw/codemirror-theme-aura';*/
import { Controlled as CodeMirror } from "react-codemirror2";
import "./style.css"
import UAParser from 'ua-parser-js';
import Toggle from 'react-styled-toggle';
// import components
import { NavBar } from "../../components"

import {EditorView} from "@codemirror/view"
import { useState , useRef } from 'react';
import MC from "../../Emulator/MC.js";
import Sequenceur from "../../Emulator/Sequencer.js";
import Queue from "../../Emulator/Queue.js";
import AddressingModes from "../../Emulator/Adressing.js";
import { generalPurposeRegister } from "../../Emulator/Register.js";
import { Register } from "../../Emulator/Register.js";
import Alu, { TwosComplement } from "../../Emulator/ALU.js";
import Arch from '../Arch/index.jsx';
import gsap from 'gsap';
import "../../codemirror/lib/codemirror.css"
import "../../codemirror/theme/material.css";
import "../../codemirror/mode/myLang/assembly.js"
/////import assembler//////////
import { Assembler } from "../../assembler/Assembler";
import HelpSection from "../../components/HelpSection";
import {helpDescription} from "../../Constants/HelpDescription";
import {HexaToCode} from "../../HexaToCode/HexaToCode"
import { Errorcalm } from "../../assembler/Errorcalm";
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

const handleRefresh = () => {
  window.location.reload();
};

/////////////////////////////function needed in assembling
function convertStrings(arr) {
  const result = [] ;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j += 2) {
      result.push(arr[i][j] + arr[i][j+1]);
    }
  }
  return result;
}

///////////////////////////////////the component/////////////////////////
const Ide = ()=>{
  ////////////////////hooks///////////////////////////////:
  let [result,setresult]=useState("");
  let [done,setdone]=useState(false);
  let [simul,setsimul]=useState(false)
  let [memo,setmemo]=useState(false);
  let [reg,setreg]=useState(false);
  let [stk,setstk]=useState(false);//for showing stack
  let [isHexa,setIsHexa]=useState(false);
  let [iscode,setIsCode]=useState(true);
  ///////////////////////////////executions function////////////////////////////////////////
const traitement= (codeArray)=>{
// Registers[0].setvalue("0000000000000010");
// Registers[1].setvalue("0000000000000011");

for(let i=0;i<50;i++){//initializing first 50 bytes in memory to 0 (data memory)
memory.setRam(TwosComplement(i,8));
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



console.log(queue.getinstwithoutshift())
//-----//
let resulttmp="";
let instrobject={};
while(instrobject.name!=="stop"){
  sequenceur.getinstrbyte(animations,true,Contextarray);
  instrobject={...sequenceur.decode(animations,Contextarray)};
  if(instrobject.name!=="stop"){
    console.log(instrobject);
    sequenceur.execute(instrobject,1,animations);
  }
}

// resulttmp=resulttmp+`
//   r1 :${Registers[0].getvalue()}  acc :${Registers[4].getvalue()} `;
// setresult(resulttmp);




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
  let [checktest,setChecktest]=useState(false);
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
  let tablestk=[];
  memory.getstack().forEach((element,index) => {
      tablestk.push( <tr>
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
  ///////////////::
  const codeMirrorRef = useRef(null); 
  const handleStoreCode = () => {
    const editor = codeMirrorRef.current.editor;
    const code = editor.getValue(); // Get the current content of the editor

    // Split the code into lines
    const lines = code.split('\n');

    // Create an array to store lines of code without comments
    const codeArray = [];

    // Create an array to store comments
    const commentArray = [];

    // Loop through each line to separate lines of code and comments
    lines.forEach(line => {
      // Use regular expression to match single-line comments
      const singleLineComment = line.match(/\/\/.*$/gm);

      if (singleLineComment) {
        // If a single-line comment is found, store it in commentArray
        commentArray.push(singleLineComment[0].trim());
      }

      // Use regular expression to remove comments from the line
      const lineWithoutComment = line.replace(/\/\/.*$/gm, '').trim();

      if (lineWithoutComment !== '') {
        // If the line without comments is not empty, store it in codeArray
        codeArray.push(lineWithoutComment.toUpperCase());
      }
    });
    return codeArray;
    // console.log('Code without comments:', codeArray);
    // console.log('Comments:', commentArray);
  };
  ///////////////////
    // let input = ["MOV 10*,10","MOV R2,2","ADD R1,R2"]
    // console.log(convertStrings(Assembler.assemblecode(input)));
    // console.log(Assembler.assemblecode(input));
    const Hexagen= (codeArray,hexaArray) => {
      // Join array elements with newline character
      let code=[];
     for (let index = 0; index < codeArray.length; index++) {
       code[index]=hexaArray[index]+"  //"+codeArray[index]   
     }    
      code = code.join('\n');
     // const editor = codeMirrorRef.current.editor; // Get CodeMirror editor instance from ref
     // editor.setValue(code); // Set the value of the editor to the joined code array
     return code;
   };


return <> 
{!simul && <NavBar/>}
{/* <CodeMirror theme={aura} /> */}
{!simul &&<div style={{
  display:"flex"
}} className="ide_container">
  
{/* <div className='codeContainer'>
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
</div> */}
<div className='codeContainer' id="cont">
<div style={{display:"flex",gap:"10rem",padding:"0.5rem 0",}}>
{iscode && <button onClick={()=>{
    const editor = codeMirrorRef.current.editor;
    editor.setValue('');
    editor.setValue(Hexagen(handleStoreCode(),Assembler.assemblecode(handleStoreCode())));
    setChecktest(!checktest);
    setIsCode(false);
        setIsHexa(true);
  }} className="convert-btn">To Hexa </button>}
  
  {isHexa && <button onClick={()=>{
    const editor = codeMirrorRef.current.editor;
    editor.setValue('');
    let code="";
    for (let m = 0; m < handleStoreCode().length; m++) {
      // code=code+HexaToCode(Assembler.assemblecode(handleStoreCode())[m])+"\n";
      code=code+HexaToCode(handleStoreCode()[m])+"\n";
    }
    editor.setValue(code);
    setChecktest(!checktest);
    setIsCode(true);
    setIsHexa(false);
  }} className="convert-btn">To code </button>}
  
  {/* <p style={{display:"inline",margin:"0 -2px",fontSize:"10px"}}>code</p> */}
  <div className="togglebutton" style={{position: "relative",top:"0.3rem"}}>
  <Toggle labelRight="hexa" labelLeft="code" backgroundColorChecked="#1BE985" backgroundColorUnchecked="#263238" checked={checktest} onChange={()=>{
      if(iscode){
        setIsCode(false);
        setIsHexa(true);
        setChecktest(!checktest);
      }else{
        setIsCode(true);
        setIsHexa(false);
        setChecktest(!checktest);
      }
    }
  } />
  </div>
  {/* <p style={{display:"inline",margin:"0 -2px",fontSize:"10px"}}>Hexa</p> */}
  </div>
<CodeMirror

  // theme={myTheme}

  // width="500px"
  value={code}
  ref={codeMirrorRef}
  // onBeforeChange={this.handleEditorChange}
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
{/* <button onClick={handleStoreCode} className="compileBtn">Compile</button> */}


</div>
{!done && <div className="codeContainer console">
  <button className='ide-exec-button' onClick={()=>{
    let inputouter=[];
    if(iscode){
      inputouter=Assembler.assemblecode(handleStoreCode())
    }else{
      inputouter=handleStoreCode();
    }
    let input=convertStrings(inputouter);
    input.push("ff");
    if(Errorcalm.errorr==0){
    // let n=handleStoreCode().length;
    console.log(input)
    traitement(input)
    setdone(true)}
    setresult(Errorcalm.printError());
  }}>execute</button>
    <pre style={{color:"red"}}>{result}</pre>
    </div>
  }

{done && <div className="codeContainer console">
  <div style={{width:"35%",position:"fixed",backgroundColor:"black", borderRadius: "0.6rem"}}><button className='ide-exec-button' onClick={handleRefresh}>re-write</button>
  <button className='ide-exec-button' onClick={()=>{
  const parser = new UAParser();
  const result = parser.getResult();
  result.device.type==='mobile'? alert('Simulation not availble for this type of devices') : setsimul(true) ;
  }}>animate</button>
  <button className='ide-exec-button' onClick={()=>{setreg(true)
  setmemo(false)
  setstk(false)
  }}>registers</button>
  <button className='ide-exec-button' onClick={()=>{setmemo(true)
  setstk(false)
  setreg(false)
  }}>memory</button>
    <button className='ide-exec-button' onClick={()=>{setstk(true)
    setreg(false)
    setmemo(false)
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
            {memo && <table className="contentTableMCIde" style={{fontFamily: "JetBrains Mono"}}>
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
            {stk && <table className="contentTableMCIde">
                <tbody>
                <tr>
                    <td style={{color:"#1BE985"}}>
                        adresse
                    </td>
                    <td style={{color:"#1BE985"}}>
                        content
                    </td>
                </tr>
                    {tablestk}
                </tbody>
            </table>}
    </div>
  }
</div>}
{!simul && <HelpSection helpDescription={helpDescription}/>}
{simul && <Arch anim={animations} mem={memory} flags={Alu1.getAllFlags()} reg={Registers} theCTX={Contextarray}/>}

</>
}
export default Ide;
export {BR,IR,memory,Registers,queue,addressingModes,Alu1,IP};