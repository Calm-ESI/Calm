import { useState , useRef } from 'react';
import Toggle from 'react-styled-toggle';
import { Controlled as CodeMirror } from "react-codemirror2";
import UAParser from 'ua-parser-js';
import "./style.css"

///// import components //////
import { NavBar, HelpSection, SaveCodeButton } from "../../components"


////// import machine components //////
import MC from "../../Emulator/MC.js";
import Sequenceur from "../../Emulator/Sequencer.js";
import Queue from "../../Emulator/Queue.js";
import AddressingModes from "../../Emulator/Adressing.js";
import { generalPurposeRegister } from "../../Emulator/Register.js";
import { Register } from "../../Emulator/Register.js";
import Alu, { TwosComplement } from "../../Emulator/ALU.js";
import Arch from '../Arch/index.jsx';

///// import editor styles //////
import "../../codemirror/lib/codemirror.css"
import "../../codemirror/theme/material.css";
import "../../codemirror/mode/myLang/assembly.js"

/////import assembler modules//////////
import { Assembler } from "../../assembler/Assembler";
import {helpDescription} from "../../Constants/HelpDescription";
import {HexaToCode} from "../../HexaToCode/HexaToCode"
import { Errorcalm } from "../../assembler/Errorcalm";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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
const Ide = ({currentUser})=>{
  ////////////////////hooks///////////////////////////////:
  let [result,setresult]=useState("");
  let [done,setdone]=useState(false);
  let [simul,setsimul]=useState(false)
  let [memo,setmemo]=useState(false);
  let [reg,setreg]=useState(false);
  let [stk,setstk]=useState(false);//for showing stack
  let [isHexa,setIsHexa]=useState(false);
  let [iscode,setIsCode]=useState(true);
  let [iserr,seterr]=useState(false);


  ///////////////////////////////executions function////////////////////////////////////////

  const traitement= (codeArray)=>{
    for(let i=0;i<50;i++){//initializing first 50 bytes in memory to 0 (data memory)
      memory.setRam(TwosComplement(i,8));
      memory.setRim("00000000");
      memory.write();
    }

    memory.setcode(codeArray)
    queue.instructionset([]);

    let numtmp=0;
    
    queue.fetchInstruction(animations,0,1,Contextarray,0);
    queue.fetchInstruction(animations,numtmp,0,Contextarray,0);
    queue.fetchInstruction(animations,1,1,Contextarray,0);
    queue.fetchInstruction(animations,numtmp,0,Contextarray,0);
    queue.fetchInstruction(animations,2,1,Contextarray,0);
    queue.fetchInstruction(animations,numtmp,0,Contextarray,0);



    console.log(queue.getinstwithoutshift())
    
    let instrobject={};
    while(instrobject.name!=="stop"){
      sequenceur.getinstrbyte(animations,true,Contextarray);
      instrobject={...sequenceur.decode(animations,Contextarray)};
      if(instrobject.name!=="stop"){
        console.log(instrobject);
        sequenceur.execute(instrobject,1,animations);
      }
    }

  }

  let [checktest,setChecktest]=useState(false);

  /////////////////////returning the component//////////////////
  let tablec=[];
  memory.getData().forEach( (element,index) => {
    tablec.push(
      <tr>
        <td>
            {index}
        </td>
        <td>
            {element}
        </td>
      </tr>
    )
  });

  let tablestk=[];
  memory.getstack().forEach((element,index) => {
    tablestk.push(
      <tr>
        <td>
            {index}
        </td>
        <td>
            {element}
        </td>
      </tr>
    )
  });

  /////////////////////returning the component//////////////////
  const [code, setCode] = useState("");
  const [editMode, setEditMode] = useState({isEditMode: false, programName: null, programId: null});

  const {state} = useLocation();
  console.log("ide state:",state);
  useEffect(()=>{
    if(state){
      setEditMode(state.editMode);
      setCode(state.code);
    }
  
  },[state])

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
  };
  
  const handleStoreCode2 = () => {
    const editor = codeMirrorRef.current.editor;
    const code = editor.getValue(); // Get the current content of the editor
    
    // Split the code into lines
     const lines = code.split('\n');
  
    // Create an array to store the full code with comments
    const codeArray = [];
  
    // Loop through each line
    lines.forEach(line => {
      // Add the line to the codeArray
      codeArray.push(line);
    });
  
    return codeArray;
  };
  
 
  
  const Hexagen= (codeArray,hexaArray) => {
    // Join array elements with newline character
    let code=[];
    for (let index = 0; index < codeArray.length; index++) {
      code[index]=hexaArray[index]+"  //"+codeArray[index]   
    }    
  
    code = code.join('\n');
    return code;
  };

  useEffect(()=>{
    
    let storedArray = JSON.parse(localStorage.getItem('arr'));           
    console.log("stored_array",storedArray);
     storedArray=storedArray.join('\n');
    setCode(storedArray)
  
  },[])

  return (
    <> 
      {!simul && 
        <>
          <NavBar/>
          <div style={{display:"flex"}} className="ide_container">
        
            <div className='codeContainer' id="cont">
              <div style={{display:"flex",gap:"10rem",padding:"0.5rem 0",}}>
                {iscode && 
                  <button onClick={()=>{
                    const editor = codeMirrorRef.current.editor;
                    editor.setValue('');
                    editor.setValue(Hexagen(handleStoreCode(),Assembler.assemblecode(handleStoreCode())));
                    setChecktest(!checktest);
                    setIsCode(false);
                    setIsHexa(true);
                  }} 
                  className="convert-btn">
                    To Hexa 
                  </button>
                }
        
                {isHexa && 
                  <button onClick={()=>{
                    const editor = codeMirrorRef.current.editor;
                    editor.setValue('');
                    let code="";
                    for (let m = 0; m < handleStoreCode().length; m++) {
                      code=code+HexaToCode(handleStoreCode()[m])+"\n";
                    }
                    editor.setValue(code);
                    setChecktest(!checktest);
                    setIsCode(true);
                    setIsHexa(false);
                  }}
                  className="convert-btn">
                    To code 
                  </button>
                }
        
                <div className="togglebutton" style={{position: "relative",top:"0.3rem"}}>
                  <Toggle 
                    labelRight="hexa" 
                    labelLeft="code" 
                    backgroundColorChecked="#1BE985" 
                    backgroundColorUnchecked="#263238" 
                    checked={checktest} 
                    onChange={()=>{
                        if(iscode){
                          setIsCode(false);
                          setIsHexa(true);
                          setChecktest(!checktest);
                        }else{
                          setIsCode(true);
                          setIsHexa(false);
                          setChecktest(!checktest);
                        }
                      }} 
                  />
                </div>
              </div>
              <CodeMirror
                value={code}
                ref={codeMirrorRef}
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
            {!done && 
              <div className="codeContainer console">
                <button 
                className='ide-exec-button' 
                onClick={()=>{
                  setdone(true);
                  let inputouter=[];

                  if(iscode){
                    inputouter=Assembler.assemblecode(handleStoreCode())
                  }else{
                    inputouter=handleStoreCode();
                  }
                  let input=convertStrings(inputouter);
                  input.push("ff");
                  
                  try {
    
                    if (Errorcalm.errorr === 0) {
                      traitement(input);
                     
                      
                       
                    }else{
                      setresult(Errorcalm.printError());
                       seterr(true);
                    }

                    
                  } catch (error){

                    seterr(true);
                    setresult("this is not hexa code");
                    
                    console.log("hiiiiiiiiiiiiiiiiiiii");
                  }
                  
                }}>
                  execute
                </button>

              </div>
            }
            
            



            {done && 
              <div className="codeContainer console">
                <div style={{width:"35%",position:"fixed",backgroundColor:"black", borderRadius: "0.6rem"}}>
                  <button className='ide-exec-button' onClick={()=>{
                  

                    let arr=[];
                    // const editor = codeMirrorRef.current.editor;
                    // const code = editor.getValue(); // Get the current content of the editor
                    arr=handleStoreCode2();
                    console.log(arr);
                    console.log("old arr=",arr);
                    localStorage.setItem('arr', JSON.stringify(arr));
                     window.location.reload();
                  }}>re-write</button>

                  {!iserr &&< button 
                    className='ide-exec-button' 
                    onClick={()=>{
                      const parser = new UAParser();
                      const result = parser.getResult();
                      result.device.type==='mobile'? alert('Simulation not availble for this type of devices') : setsimul(true) ;
                    }}>
                    animate
                  </button>
                  }
                  {!iserr &&<button 
                    className='ide-exec-button' 
                    onClick={()=>{
                      setreg(true)
                      setmemo(false)
                      setstk(false)
                    }}
                  >
                    registers
                  </button>
                  }
                  {!iserr &&<button 
                  className='ide-exec-button' 
                  onClick={()=>{
                    setmemo(true)
                    setstk(false)
                    setreg(false)
                  }}
                  >
                    memory
                  </button>
                  } 
                  {!iserr &&<button 
                  className='ide-exec-button' 
                  onClick={()=>{
                    setstk(true)
                    setreg(false)
                    setmemo(false)
                  }}>
                    stack
                  </button>
                  }
                </div>
                {reg && 
                  <div className="IdeReg">
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
                  </div> 
                }
                {memo && 
                  <table className="contentTableMCIde" style={{fontFamily: "JetBrains Mono"}}>
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
                  </table>
                }
                {stk && 
                  <table className="contentTableMCIde">
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
                  </table>
                }
                {console.log(result)}
                <pre style={{color:"red"}}>{`
${result}`}</pre>
              </div>
            }
          </div>
          <HelpSection helpDescription={helpDescription}/>
          <SaveCodeButton code={code} currentUser={currentUser} editMode={editMode}/>
        </>
      }
      {simul && 
        <Arch anim={animations} mem={memory} flags={Alu1.getAllFlags()} reg={Registers} theCTX={Contextarray}/>
      }
    </>
  )
}

export default Ide;
export {BR,IR,memory,Registers,queue,addressingModes,Alu1,IP};
