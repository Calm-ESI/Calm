import MC from "./MC.js";
import Sequenceur from "./Sequencer.js";
import Queue from "./Queue.js";
import AddressingModes from "./Adressing.js";
import { generalPurposeRegister } from "./Register.js";
import { Register } from "./Register.js";
import Alu from "./ALU.js";


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

Registers[0].setvalue("0000000000000010");
Registers[1].setvalue("0000000000000011");

for(let i=0;i<50;i++){//initializing first 10 bytes in memory to 0 (data memory)
memory.setRam(i);
memory.setRim("00000000");
memory.write();
}

// memory.setcode(["19","89","00","00","19","90","00","00","19","C8","00","05","00","05","01","CA","00","05","00","00","07","08"])
// queue.instructionset([]);

// //------//
// while(queue.getqueuelen()<6){
//     queue.fetchInstruction();
// }
// //-----//

// console.log(`step 0 :
// R1: ${Registers[0].getvalue()}
// R2: ${Registers[1].getvalue()}
// Acc: ${Registers[4].getvalue()}`);


// sequenceur.getinstrbyte();
// let instrobject=sequenceur.decode();
// sequenceur.execute(instrobject,0);
// console.log(` after first instruction :
// R1: ${Registers[0].getvalue()}
// R2: ${Registers[1].getvalue()}
// Acc: ${Registers[4].getvalue()}`);
// memory.setRam(0);
// memory.read(0);
// console.log(`memory 0 :${memory.getRim()}`);
// memory.setRam(3);
// memory.read(0);
// console.log(`memory 3 :${memory.getRim()}`);


// sequenceur.getinstrbyte();
// instrobject=sequenceur.decode();
// sequenceur.execute(instrobject,0);
// console.log(` after 2nd instruction :
// R1: ${Registers[0].getvalue()}
// R2: ${Registers[1].getvalue()}
// Acc: ${Registers[4].getvalue()}`);
// memory.setRam(0);
// memory.read(0);
// console.log(`memory 0 :${memory.getRim()}`);
// memory.setRam(3);
// memory.read(0);
// console.log(`memory 3 :${memory.getRim()}`);


// sequenceur.getinstrbyte();
// instrobject=sequenceur.decode();
// sequenceur.execute(instrobject,0);
// console.log(` after 3rd instruction :
// R1: ${Registers[0].getvalue()}
// R2: ${Registers[1].getvalue()}
// Acc: ${Registers[4].getvalue()}`);
// memory.setRam(0);
// memory.read(0);
// console.log(`memory 0 :${memory.getRim()}`);
// memory.setRam(5);
// memory.read(0);
// console.log(`memory 5 :${memory.getRim()}`);
// memory.setRam(3);
// memory.read(0);
// console.log(`memory 3 :${memory.getRim()}`);


// sequenceur.getinstrbyte();
// instrobject=sequenceur.decode();
// sequenceur.execute(instrobject,0);
// console.log(` after 4th instruction :
// R1: ${Registers[0].getvalue()}
// R2: ${Registers[1].getvalue()}
// Acc: ${Registers[4].getvalue()}`);
// memory.setRam(0);
// memory.read(0);
// console.log(`memory 0 :${memory.getRim()}`);
// memory.setRam(5);
// memory.read(0);
// console.log(`memory 5 :${memory.getRim()}`);
// memory.setRam(3);
// memory.read(0);
// console.log(`memory 3 :${memory.getRim()}`);


// sequenceur.getinstrbyte();
// instrobject=sequenceur.decode();
// sequenceur.execute(instrobject,0);
// console.log(` after 5th instruction :
// R1: ${Registers[0].getvalue()}
// R2: ${Registers[1].getvalue()}
// Acc: ${Registers[4].getvalue()}`);
// memory.setRam(0);
// memory.read(0);
// console.log(`memory 0 :${memory.getRim()}`);
// memory.setRam(5);
// memory.read(0);
// console.log(`memory 5 :${memory.getRim()}`);
// memory.setRam(3);
// memory.read(0);
// console.log(`memory 3 :${memory.getRim()}`);

memory.setcode(["19","C8","00","00","00","01","19","C8","00","02","00","02","19","C8","00","04","00","03","19","C8","00","06","00","04","19","C8","00","0A","00","05","19","C8","00","0C","00","06","19","C8","00","0E","00","07","19","C8","00","10","00","08","01","C9","00","00","00","0A","19","8C","00","14","03","C9","00","0C","00","02","19","8C","00","16","05","D1","00","06","00","0E","19","8C","00","18","07","C9","00","10","00","06","19","8C","00","1A"])
queue.instructionset([]);

//------//
while(queue.getqueuelen()<6){
    queue.fetchInstruction();
}
//-----//




sequenceur.getinstrbyte();
let instrobject=sequenceur.decode();
sequenceur.execute(instrobject,0);
console.log(` after first instruction :`);
memory.setRam(0);
memory.read(0);
console.log(`memory 0 :${memory.getRim()}`);
memory.setRam(2);
memory.read(0);
console.log(`memory 2 :${memory.getRim()}`);
memory.setRam(4);
memory.read(0);
console.log(`memory 4 :${memory.getRim()}`);
memory.setRam(6);
memory.read(0);
console.log(`memory 6 :${memory.getRim()}`);
memory.setRam(10);
memory.read(0);
console.log(`memory 10 :${memory.getRim()}`);
memory.setRam(12);
memory.read(0);
console.log(`memory 12 :${memory.getRim()}`);
memory.setRam(14);
memory.read(0);
console.log(`memory 14 :${memory.getRim()}`);
memory.setRam(16);
memory.read(0);
console.log(`memory 16 :${memory.getRim()}`);
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
memory.setRam(0);
memory.read(0);
console.log(`memory 0 :${memory.getRim()}`);
memory.setRam(2);
memory.read(0);
console.log(`memory 2 :${memory.getRim()}`);
memory.setRam(4);
memory.read(0);
console.log(`memory 4 :${memory.getRim()}`);
memory.setRam(6);
memory.read(0);
console.log(`memory 6 :${memory.getRim()}`);
memory.setRam(10);
memory.read(0);
console.log(`memory 10 :${memory.getRim()}`);
memory.setRam(12);
memory.read(0);
console.log(`memory 12 :${memory.getRim()}`);
memory.setRam(14);
memory.read(0);
console.log(`memory 14 :${memory.getRim()}`);
memory.setRam(16);
memory.read(0);
console.log(`memory 16 :${memory.getRim()}`);
memory.setRam(20);
memory.read(0);
console.log(`memory 20 :${memory.getRim()}`);
memory.setRam(22);
memory.read(0);
console.log(`memory 22 :${memory.getRim()}`);
memory.setRam(24);
memory.read(0);
console.log(`memory 24 :${memory.getRim()}`);
memory.setRam(26);
memory.read(0);
console.log(`memory 26 :${memory.getRim()}`);


export {BR,IR,memory,Registers,queue,addressingModes,Alu1,IP}