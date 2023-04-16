import { memory,IP } from "../Ide.jsx";
import { TwosComplement } from "./ALU.js";
import { gsap } from "gsap";

const IpToAdr={
    value:"",
    anim:(val,h,w)=>{
    ///depart: ( 69% , 13.7% )
    gsap.fromTo(".ball",{x:w*0.746,y:h*0.26,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{x:w*0.746,y:h*0.26},{y:h*0.46 ,duration:1,delay:2});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const IPToMAR={
    value:"",
    anim:(h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.753,opacity:"0"},{opacity:"1",duration:1,delay:1})
    gsap.fromTo(".box-ADR",{x:w*0.753},{x:w*0.648,duration:2,delay:3})
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:6});
  },}
  const fitToMdr={
    value:"",
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{x:w*0.49,y:h*0.38,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.11,height:h*0.06,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToMdr={
    value:"",
    anim:(val,h,w)=>{
        gsap.fromTo(".ball",{x:w*0.49,y:h*0.38,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        gsap.fromTo(".ball",{x:w*0.49,y:h*0.38,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
    },}
  const fitToMar={
    value:"",
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{x:w*0.623,y:h*0.165,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.032,height:h*0.14,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const fitToIr={
    value:"",
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{x:w*0.6,y:h*0.6495,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.055,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToIr={
    value:"",
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{x:w*0.6,y:h*0.6495,borderRadius:"10px",width:w*0.1,height:h*0.055,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const fitToDecode={
    value:"",
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{x:w*0.6,y:h*0.753,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.055,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToDecode={
    value:"",
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{x:w*0.6,y:h*0.753,borderRadius:"10px",width:w*0.1,height:h*0.055,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const fitToSequencer={
    value:"",
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{x:w*0.6,y:h*0.858,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.055,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const MdrToBus={
    value:"",
    anim:(val,h,w)=>{
    ///depart: ( 51.8% , 43.2% )
    gsap.fromTo(".ball",{x:w*0.539,y:h*0.445,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{x:w*0.539,y:h*0.445},{y:h*0.465 ,duration:1,delay:2});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const MdrTOQue={
    value:"",
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1,delay:1})
    gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.874,duration:3,delay:3})
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:7});
  },}
  const BusToQueue={
    value:"",
    anim:(val,h,w)=>{
    ///depart: ( 79.1% , 53.6% )  W:1.4% ,H:2.812
    gsap.fromTo(".ball",{x:w*0.931,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{x:w*0.931,y:h*0.56},{y:h*0.6638 ,duration:1,delay:2});
    gsap.to(".ball",{x:w*0.921 ,duration:1,delay:3});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:4});
  },}
  const QueueToIr={
    value:"",
    anim:(val,h,w)=>{
    ///depart: ( 64.9% , 64.2% )  W:1.4% ,H:2.812
    gsap.fromTo(".ball",{x:w*0.726,y:h*0.6638,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{x:w*0.726,y:h*0.6638},{x:w*0.711 ,duration:1,delay:2});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const IrToDecoder={
    value:"",
    anim:(val,h,w)=>{
    ///depart: ( 59% , 78.2% )
    gsap.fromTo(".ball",{x:w*0.644,y:h*0.708,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{x:w*0.644,y:h*0.708},{y:h*0.725 ,duration:1,delay:2});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  
  const DecoderToSequencer={
    value:"",
    anim:(val,h,w)=>{
    ///depart: ( 59% , 78.2% )
    gsap.fromTo(".ball",{x:w*0.644,y:h*0.813,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.fromTo(".ball",{x:w*0.644,y:h*0.813},{y:h*0.827 ,duration:1,delay:2});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}


class Queue {
    constructor(instructionBytes) {
    this.instructionBytes = instructionBytes;
    }
    getqueuelen(){
        return this.instructionBytes.length;
    }
    fetchInstruction(animations){
        memory.setRam(IP.getvalue());
        memory.read(1);
        let instruction=memory.getRim();
        this.instructionBytes.push(instruction);
        IP.setvalue(TwosComplement(parseInt(IP.getvalue(),2)+1,16));
        //animation:
        // animations.push({
        //     value:"",
        //     anim:IpToAdr.anim,
        // });
        // animations.push({
        //     value:"",
        //     anim:IPToMAR.anim,
        // });
        // animations.push({
        //     value:"",
        //     anim:fitToMar.anim,
        // });
        // ////animation of read from MC
        // animations.push({
        //     value:"",
        //     anim:fitToMdr.anim,
        // });
        // animations.push({
        //     value:"",
        //     anim:infitToMdr.anim,
        // });
        // animations.push({
        //     value:"",
        //     anim:MdrToBus.anim,
        // });
        // animations.push({
        //     value:"",
        //     anim:MdrTOQue.anim,
        // });
        // animations.push({
        //     value:"",
        //     anim:BusToQueue.anim,
        // });
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