import { InstructionADD,InstructionMOV00,InstructionMOV01,InstructionMOV10,InstructionMOV11,InstructionSUB,InstructionMUL,InstructionDIV } from "./Instruction.js";

function hash(key){
    if(key=="0000000"){
        return 0;
    }else if(key=="000110000"){
        return 1;
    }else if(key=="000110001"){
        return 2;
    }else if(key=="000110010"){
        return 3;
    }else if(key=="000110011"){
        return 4;
    }else if(key=="0000001"){
        return 5;
    }else if(key=="0000010"){
        return 6;
    }else if(key=="0000011"){
        return 7;
    }
    
}
let ADDinst=new InstructionADD();
let MOV00inst=new InstructionMOV00();
let MOV01inst=new InstructionMOV01();
let MOV10inst=new InstructionMOV10();
let MOV11inst=new InstructionMOV11();
let SUBinst=new InstructionSUB();
let MULinst=new InstructionMUL();
let DIVinst=new InstructionDIV();
let hashmap=[{
    key:"00",
    instrObject:ADDinst,
},
{
    key:"030",
    instrObject:MOV00inst,
},
{
    key:"031",
    instrObject:MOV01inst,
},
{
    key:"032",
    instrObject:MOV10inst,
},
{
    key:"033",
    instrObject:MOV11inst,
},
{
    key:"01",
    instrObject:SUBinst,
},
{
    key:"02",
    instrObject:MULinst,
},
{
    key:"03",
    instrObject:DIVinst,
},
];
export {hash,hashmap};