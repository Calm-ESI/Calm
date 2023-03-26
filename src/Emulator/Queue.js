import { memory,IP } from "../Ide.jsx";
import { TwosComplement } from "./ALU.js";
class Queue {
    constructor(instructionBytes) {
    this.instructionBytes = instructionBytes;
    }
    getqueuelen(){
        return this.instructionBytes.length;
    }
    fetchInstruction(){
        memory.setRam(IP.getvalue());
        memory.read(1);
        let instruction=memory.getRim();
        this.instructionBytes.push(instruction);
        IP.setvalue(TwosComplement(parseInt(IP.getvalue(),2)+1,16));
    }
    push(value) {
    this.instructionBytes.push(value);
    }
    shift() {
    return this.instructionBytes.shift();//in hexa
    }
    /////this one is for test reasons
    instructionset(hexains){
        this.instructionBytes=hexains;//in hexa
    }
    ////////////////
}
export default Queue;