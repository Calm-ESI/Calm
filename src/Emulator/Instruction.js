import { Registers } from "../Ide.jsx";
import { memory } from "../Ide.jsx";
import { TwosComplement } from "./ALU.js";
import { Alu1 } from "../Ide.jsx";
import { IP } from "../Ide.jsx";





class InstructionADD{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            // let res=this.value1+this.value2;
            // Registers[4].setvalue(res.toString(2));
            if(this.taille===0){
                Alu1.Rual1.setright(TwosComplement(this.value1,8));
                Alu1.Rual2.setleft(TwosComplement(this.value2,8));
                Alu1.addBinary(8);
            }else{
                Alu1.Rual1.setvalue(TwosComplement(this.value1,16));
                Alu1.Rual2.setvalue(TwosComplement(this.value2,16));
                Alu1.addBinary(16);
            }
            
        }
        ];
        this.animationSteps=[];
    }
}
class InstructionMOV00{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            Registers[this.register1].setvalue(this.value2.toString(2));
        }
        ];
        this.animationSteps=[];
    }
}
class InstructionMOV01{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            Registers[this.register1].setvalue(this.value2.toString(2));
        }
        ];
        this.animationSteps=[];
    }
}
class InstructionMOV10{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            memory.setRim(this.value2.toString(16));
            memory.setRam(this.addresse1);
            memory.write();
        }
        ];
        this.animationSteps=[];
    }
}
class InstructionMOV11{////the difference between them will be in the animation part
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            memory.setRim(this.value2.toString(16));
            memory.setRam(this.addresse1);
            memory.write();
        }
        ];
        this.animationSteps=[];
    }
}


class InstructionSUB{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            // let res=this.value1+this.value2;
            // Registers[4].setvalue(res.toString(2));
            if(this.taille===0){
                Alu1.Rual1.setright(TwosComplement(this.value1,8));
                Alu1.Rual2.setleft(TwosComplement(this.value2,8));
                Alu1.subBinary(8);
            }else{
                Alu1.Rual1.setvalue(TwosComplement(this.value1,16));
                Alu1.Rual2.setvalue(TwosComplement(this.value2,16));
                Alu1.subBinary(16);
            }
            
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionMUL{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            // let res=this.value1+this.value2;
            // Registers[4].setvalue(res.toString(2));
            if(this.taille===0){
                Alu1.Rual1.setright(TwosComplement(this.value1,8));
                Alu1.Rual2.setleft(TwosComplement(this.value2,8));
                Alu1.binaryMultiply(8);
            }else{
                Alu1.Rual1.setvalue(TwosComplement(this.value1,16));
                Alu1.Rual2.setvalue(TwosComplement(this.value2,16));
                let R4MUL=Alu1.binaryMultiply(16);
                if(Alu1.Acc.getvalue().length>16){
                    Registers[3].setvalue(R4MUL);
                }
            }
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionDIV{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            // let res=this.value1+this.value2;
            // Registers[4].setvalue(res.toString(2));
            if(this.taille===0){
                Alu1.Rual1.setright(TwosComplement(this.value1,8));
                Alu1.Rual2.setleft(TwosComplement(this.value2,8));
                let R4div=Alu1.DivBinary(8);
                Registers[3].setvalue(R4div);
            }else{
                Alu1.Rual1.setvalue(TwosComplement(this.value1,16));
                Alu1.Rual2.setvalue(TwosComplement(this.value2,16));
                let R4div=Alu1.DivBinary(16);
                Registers[3].setvalue(R4div);
            }
        }
        ];
        this.animationSteps=[];
    }
}
class InstructionAND{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            // let res=this.value1+this.value2;
            // Registers[4].setvalue(res.toString(2));
            if(this.taille===0){
                Alu1.Rual1.setright(TwosComplement(this.value1,8));
                Alu1.Rual2.setleft(TwosComplement(this.value2,8));
                Alu1.andBinary(8);
            }else{
                Alu1.Rual1.setvalue(TwosComplement(this.value1,16));
                Alu1.Rual2.setvalue(TwosComplement(this.value2,16));
                Alu1.andBinary(16);
            }
        }
        ];
        this.animationSteps=[];
    }
}
class InstructionOR{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            // let res=this.value1+this.value2;
            // Registers[4].setvalue(res.toString(2));
            if(this.taille===0){
                Alu1.Rual1.setright(TwosComplement(this.value1,8));
                Alu1.Rual2.setleft(TwosComplement(this.value2,8));
                Alu1.orBinary(8);
            }else{
                Alu1.Rual1.setvalue(TwosComplement(this.value1,16));
                Alu1.Rual2.setvalue(TwosComplement(this.value2,16));
                Alu1.orBinary(16);
            }
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionXOR{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            // let res=this.value1+this.value2;
            // Registers[4].setvalue(res.toString(2));
            if(this.taille===0){
                Alu1.Rual1.setright(TwosComplement(this.value1,8));
                Alu1.Rual2.setleft(TwosComplement(this.value2,8));
                Alu1.xorBinary(8);
            }else{
                Alu1.Rual1.setvalue(TwosComplement(this.value1,16));
                Alu1.Rual2.setvalue(TwosComplement(this.value2,16));
                Alu1.xorBinary(16);
            }
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionNOR{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            // let res=this.value1+this.value2;
            // Registers[4].setvalue(res.toString(2));
            if(this.taille===0){
                Alu1.Rual1.setright(TwosComplement(this.value1,8));
                Alu1.Rual2.setleft(TwosComplement(this.value2,8));
                Alu1.norBinary(8);
            }else{
                Alu1.Rual1.setvalue(TwosComplement(this.value1,16));
                Alu1.Rual2.setvalue(TwosComplement(this.value2,16));
                Alu1.norBinary(16);
            }
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionNAND{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            // let res=this.value1+this.value2;
            // Registers[4].setvalue(res.toString(2));
            if(this.taille===0){
                Alu1.Rual1.setright(TwosComplement(this.value1,8));
                Alu1.Rual2.setleft(TwosComplement(this.value2,8));
                Alu1.nandBinary(8);
            }else{
                Alu1.Rual1.setvalue(TwosComplement(this.value1,16));
                Alu1.Rual2.setvalue(TwosComplement(this.value2,16));
                Alu1.nandBinary(16);
            }
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionPUSH{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            memory.setRim(this.value1);
            memory.pushval();
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionPOP{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            memory.popval();
            Registers[this.register1].setvalue(memory.getRim());//the operand of pop can only be a register
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionBR{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            IP.setvalue(this.addresse1);
            /////we need to clear the queue from old instruction 
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionBE{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            if(Alu1.getFlags(0)==='1'){
                IP.setvalue(this.addresse1);
            }
            /////we need to clear the queue from old instruction 
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionBNE{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            if(Alu1.getFlags(0)==='0'){
                IP.setvalue(this.addresse1);
            }
            /////we need to clear the queue from old instruction 
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionBS{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            if(Alu1.Acc.getvalue().charAt[0]==='0'){
                IP.setvalue(this.addresse1);
            }
            /////we need to clear the queue from old instruction 
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionBI{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            if(Alu1.Acc.getvalue().charAt[0]==='1'){
                IP.setvalue(this.addresse1);
            }
            /////we need to clear the queue from old instruction 
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionBIE{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            if(Alu1.Acc.getvalue().charAt[0]==='1' | Alu1.getFlags(0)==='1' ){
                IP.setvalue(this.addresse1);
            }
            /////we need to clear the queue from old instruction 
        }
        ];
        this.animationSteps=[];
    }
}

class InstructionBSE{
    constructor(){
        this.value1=0;
        this.value2=0;
        this.addresse1=0;
        this.register1=0;
        this.taille=0;
        this.stepsNum=1;
        this.steps=[()=>{
            if(Alu1.Acc.getvalue().charAt[0]==='0' | Alu1.getFlags(0)==='1' ){
                IP.setvalue(this.addresse1);
            }
            /////we need to clear the queue from old instruction 
        }
        ];
        this.animationSteps=[];
    }
}


export {InstructionADD,InstructionMOV00,InstructionMOV01,InstructionMOV10,InstructionMOV11,InstructionSUB,InstructionMUL,InstructionDIV,InstructionBSE,InstructionBIE,InstructionBI,InstructionBS,InstructionBNE,InstructionBE,InstructionBR,InstructionPOP,InstructionPUSH,InstructionAND,InstructionOR,InstructionNAND,InstructionNOR,InstructionXOR}