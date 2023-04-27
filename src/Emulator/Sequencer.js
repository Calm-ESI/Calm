import { Register } from "./Register.js";
import { queue, Registers, addressingModes } from "../pages/Ide";
import { hash, hashmap } from "./Opcodes.js";
import { gsap } from "gsap";
// import Console from "../Console.jsx";____conflict!!!!!!!!!!
const fitToR2={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,x:w*0.442,y:h*0.666,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const AccToRUAL2={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.321,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.321},{x:w*0.262,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}

  const AccToRUAL1={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.321,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.321},{x:w*0.106,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  const AccToBus={
    value:"",
    target:".ball",
    time:4000,
    anim:(val,h,w)=>{
    ///depart: ( 39.7% , 54% )  W:1.4% ,H:2.812
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.282,y:h*0.923,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.282,y:h*0.923},{x:w*0.361 ,duration:1,delay:1});
    gsap.to(".ball",{y:h*0.56 ,duration:1,delay:2});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const fitToAcc={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.07,height:h*0.055,x:w*0.1995,y:h*0.91,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.07,height:h*0.055,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToAcc={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
        // gsap.fromTo(".ball",{x:w*0.1995,y:h*0.91,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        // gsap.fromTo(".ball",{x:w*0.1995,y:h*0.91,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1});
    },}
  const infitToR2={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.666,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.666,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1});
    },}

  const fitToR1={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
      gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,x:w*0.442,y:h*0.6105,opacity:"0"},{opacity:"1" ,duration:1});
    //   gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
    //   gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
    },}


  const fitToR3={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,x:w*0.442,y:h*0.7205,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}

  const infitToR3={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.7205,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.7205,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1});
    },}

  const fitToR4={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,x:w*0.442,y:h*0.7735,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}

  const infitToR4={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.7735,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.7735,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1});
    },}

  const fitToIdr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,x:w*0.442,y:h*0.8277,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToIdr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.8277,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.8277,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1});
    },}
  const fitToBr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,x:w*0.442,y:h*0.8815,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToBr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.8815,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.8815,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1});
    },}
  const fitToSr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,x:w*0.442,y:h*0.9347,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToSR={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.9347,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.9347,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1});
    },}

    const BusToRual2={
        value:"",
        target:".ball",
        time:3000,
        anim:(val,h,w)=>{
        ///depart: ( 54% , 35,2% )
        gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.299,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1});
        gsap.fromTo(".ball",{x:w*0.299,y:h*0.56},{y:h*0.625 ,duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
      },}
      const RegToRual1={
        value:"",
        target:".box-data",
        time:3000,
        anim:(val,h,w)=>{
        gsap.fromTo(".box-data",{x:w*0.44,opacity:"0"},{opacity:"1",duration:1})
      gsap.fromTo(".box-data",{x:w*0.44},{x:w*0.106,duration:1,delay:1})
      gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
      },}
      const fitToRual2={
        value:"",
        target:".ball",
        time:1000,
        anim:(val,h,w)=>{
        gsap.fromTo(".ball",{borderRadius:"20px",width:w*0.067,height:h*0.05,x:w*0.275,y:h*0.658,opacity:"0"},{opacity:"1" ,duration:1});
        // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"20px",width:w*0.067,height:h*0.05,duration:1,delay:1});
        // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
      },}
const BusToRual1={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 54% , 24,45% )
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.143,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.143,y:h*0.56},{y:h*0.625 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const RegToRual2={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.44,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.44},{x:w*0.262,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  const fitToRual1={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"20px",width:w*0.067,height:h*0.05,x:w*0.12,y:h*0.658,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"20px",width:w*0.067,height:h*0.05,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToR1={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.6105,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        // gsap.fromTo(".ball",{x:w*0.442,y:h*0.6105,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1});
    },}
const IpToAdr={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 69% , 13.7% )
    gsap.fromTo(".ball",{x:w*0.746,y:h*0.26,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.746,y:h*0.26},{y:h*0.46 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const IPToMAR={
    value:"",
    target:".box-ADR",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-ADR",{x:w*0.753,opacity:"0"},{opacity:"1",duration:1})
    gsap.fromTo(".box-ADR",{x:w*0.753},{x:w*0.648,duration:1,delay:1})
    gsap.to(".box-ADR",{opacity:"0" ,duration:1,delay:2});
  },}
  const fitToMdr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.11,height:h*0.06,x:w*0.49,y:h*0.38,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.11,height:h*0.06,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToMdr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
        // gsap.fromTo(".ball",{x:w*0.49,y:h*0.38,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
        // gsap.fromTo(".ball",{x:w*0.49,y:h*0.38,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
        // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
        gsap.to(".ball",{opacity:"0" ,duration:1});
    },}
  const fitToMar={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.032,height:h*0.14,x:w*0.623,y:h*0.165,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.032,height:h*0.14,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const fitToIr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.055,x:w*0.6,y:h*0.6495,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.055,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToIr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    // gsap.fromTo(".ball",{x:w*0.6,y:h*0.6495,borderRadius:"10px",width:w*0.1,height:h*0.055},{opacity:"1" ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1});
  },}
  const fitToDecode={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.055,x:w*0.6,y:h*0.753,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.055,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const infitToDecode={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    // gsap.fromTo(".ball",{x:w*0.6,y:h*0.753,borderRadius:"10px",width:w*0.1,height:h*0.055,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1});
  },}
  const fitToSequencer={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.055,x:w*0.6,y:h*0.858,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.055,duration:1,delay:1});
    // gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const MdrToBus={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 51.8% , 43.2% )
    gsap.fromTo(".ball",{x:w*0.539,y:h*0.445,opacity:"0"},{opacity:"1" ,duration:1,});
    gsap.fromTo(".ball",{x:w*0.539,y:h*0.445},{y:h*0.465 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const MdrTOQue={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
    gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.874,duration:1,delay:1})
    gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  const BusToQueue={
    value:"",
    target:".ball",
    time:4000,
    anim:(val,h,w)=>{
    ///depart: ( 79.1% , 53.6% )  W:1.4% ,H:2.812
    gsap.fromTo(".ball",{x:w*0.931,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.931,y:h*0.56},{y:h*0.6638 ,duration:1,delay:1});
    gsap.to(".ball",{x:w*0.921 ,duration:1,delay:2});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
  },}
  const QueueToIr={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 64.9% , 64.2% )  W:1.4% ,H:2.812
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.726,y:h*0.6638,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.726,y:h*0.6638},{x:w*0.711 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const IrToDecoder={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 59% , 78.2% )
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.644,y:h*0.708,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.644,y:h*0.708},{y:h*0.725 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  
  const DecoderToSequencer={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 59% , 78.2% )
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.644,y:h*0.813,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.644,y:h*0.813},{y:h*0.827 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const fitqueue6={
    value:"",
    target:".queue1",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue1",{opacity:"0"},{opacity:"1",duration:1});
  },}
  const fitqueue5={
    value:"",
    target:".queue2",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue2",{opacity:"0"},{opacity:"1",duration:1});
  },}
  const fitqueue4={
    value:"",
    target:".queue3",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue3",{opacity:"0"},{opacity:"1",duration:1});
  },}
  const fitqueue3={
    value:"",
    target:".queue4",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue4",{opacity:"0"},{opacity:"1",duration:1});
  },}
  const fitqueue2={
    value:"",
    target:".queue5",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue5",{opacity:"0"},{opacity:"1",duration:1});
  },}
  const fitqueue1={
    value:"",
    target:".queue6",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue6",{opacity:"0"},{opacity:"1",duration:1});
  },}
  
  const infitqueue6={
    value:"",
    target:".queue1",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue1",{opacity:"1"},{opacity:"0",duration:1});
  },}
  const infitqueue5={
    value:"",
    target:".queue2",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue2",{opacity:"1"},{opacity:"0",duration:1});
  },}
  const infitqueue4={
    value:"",
    target:".queue3",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue3",{opacity:"1"},{opacity:"0",duration:1});
  },}
  const infitqueue3={
    value:"",
    target:".queue4",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue4",{opacity:"1"},{opacity:"0",duration:1});
  },}
  const infitqueue2={
    value:"",
    target:".queue5",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue5",{opacity:"1"},{opacity:"0",duration:1});
  },}
  const infitqueue1={
    value:"",
    target:".queue6",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue6",{opacity:"1"},{opacity:"0",duration:1});
  },}



function hex2bin(hex){
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
}
function Dec2bin(dec){
    return ("00000000" + (parseInt(dec, 10)).toString(2)).substr(-8);
}

function animateDecoderSequencer(animations,InsName){
    animations.push({
            value:InsName,
            target:fitToDecode.target,
            time:fitToDecode.time,
            anim:fitToDecode.anim,
        });
        animations.push({
            value:InsName,
            target:infitToDecode.target,
            time:infitToDecode.time,
            anim:infitToDecode.anim,
        });
        animations.push({
            value:"",
            target:DecoderToSequencer.target,
            time:DecoderToSequencer.time,
            anim:DecoderToSequencer.anim,
        });
        animations.push({
            value:InsName,
            target:fitToSequencer.target,
            time:fitToSequencer.time,
            anim:fitToSequencer.anim,
        });
}

class Sequenceur{
    constructor(){
        this.RI=new Register();
    };
    getinstrbyte(animations,is_animated,Contextarray){//from the queue
        let Inshex=queue.shift();
        let Ins=hex2bin(Inshex);
        this.RI.setvalue(Ins);
        console.log(`this is RI here${this.RI.getvalue()}`)
        //the animation for this instruction goes here
        /////those 2 animations must be at the same time___________________
        if(is_animated){
            let key=hex2bin(Inshex).substring(0,4);
            console.log(key);
            if(key>="0010"){//instructions with 1 general byte
                animations.push({
                    value:"",
                    nom:"QueueToIr",
                    target:QueueToIr.target,
                    time:QueueToIr.time,
                    anim:QueueToIr.anim,
                });
                animations.push({
                    value:Ins,
                    nom:"fitToIr",
                    target:fitToIr.target,
                    time:fitToIr.time,
                    anim:fitToIr.anim,
                });
                animations.push({
                    value:Ins,
                    target:infitToIr.target,
                    time:infitToIr.time,
                    anim:infitToIr.anim,
                });
                animations.push({
                    value:"",
                    target:IrToDecoder.target,
                    time:IrToDecoder.time,
                    anim:IrToDecoder.anim,
                });
            }else{//instruction with 2 general bytes
                let Inshex2=queue.getinstwithoutshift();
                animations.push({
                    value:"",
                    nom:"QueueToIr",
                    target:QueueToIr.target,
                    time:QueueToIr.time,
                    anim:QueueToIr.anim,
                });
                animations.push({
                    value:"",
                    nom:"QueueToIr",
                    target:QueueToIr.target,
                    time:QueueToIr.time,
                    anim:QueueToIr.anim,
                });
                animations.push({
                    value:Inshex.toString()+Inshex2.toString(),
                    nom:"fitToIr",
                    target:fitToIr.target,
                    time:fitToIr.time,
                    anim:fitToIr.anim,
                });
                animations.push({
                    value:Inshex.toString()+Inshex2.toString(),
                    target:infitToIr.target,
                    time:infitToIr.time,
                    anim:infitToIr.anim,
                });
                animations.push({
                    value:"",
                    target:IrToDecoder.target,
                    time:IrToDecoder.time,
                    anim:IrToDecoder.anim,
                });
            }
        // animations.push({
        //     value:"",
        //     nom:"QueueToIr",
        //     target:QueueToIr.target,
        //     time:QueueToIr.time,
        //     anim:QueueToIr.anim,
        // });
        // animations.push({
        //     value:Ins,
        //     target:fitToIr.target,
        //     time:fitToIr.time,
        //     anim:fitToIr.anim,
        // });
        // animations.push({
        //     value:Ins,
        //     target:infitToIr.target,
        //     time:infitToIr.time,
        //     anim:infitToIr.anim,
        // });
        // animations.push({
        //     value:"",
        //     target:IrToDecoder.target,
        //     time:IrToDecoder.time,
        //     anim:IrToDecoder.anim,
        // });
        // animations.push({
        //     value:Ins,
        //     target:fitToDecode.target,
        //     time:fitToDecode.time,
        //     anim:fitToDecode.anim,
        // });
        // animations.push({
        //     value:Ins,
        //     target:infitToDecode.target,
        //     time:infitToDecode.time,
        //     anim:infitToDecode.anim,
        // });
        // animations.push({
        //     value:"",
        //     target:DecoderToSequencer.target,
        //     time:DecoderToSequencer.time,
        //     anim:DecoderToSequencer.anim,
        // });
        // animations.push({
        //     value:Ins,
        //     target:fitToSequencer.target,
        //     time:fitToSequencer.time,
        //     anim:fitToSequencer.anim,
        // });
        ///animation of the sequencer
    }
    queue.fetchInstruction(animations,4,false,Contextarray,1);//----///here we have the fetch from the memory
    }
    decode(animations,Contextarray){
        let instruction=this.RI.getvalue();
        let key=instruction.substring(0,4);
        let index=0;
        let instrObject;
        if(key=="1111"){
            console.log("here we have stop")
            return {
                name:"stop",
            };
        }else{
        if(key>='0100'){
            let numreg=instruction.substring(4,7);
            let taille=instruction.charAt(7);
            index=hash(key);
            instrObject=hashmap[index].instrObject;
            animateDecoderSequencer(animations,instrObject.name);
            //if(key=='1000' | key=='1011' ){//add animations of first and second half
                instrObject.register1=numreg;
            //}
            //else{
                let value=0;
                if(taille=='1'){
                value =parseInt(Registers[parseInt(numreg, 2)].getvalue(), 2);
            }else{
                if(numreg=='000'){
                    value = parseInt(Registers[0].getright(),2);
                }else if(numreg=='001'){
                    value = parseInt(Registers[0].getleft(),2);
                }
                if(numreg=='010'){
                    value = parseInt(Registers[1].getright(),2);
                }else if(numreg=='011'){
                    value = parseInt(Registers[1].getleft(),2);
                }
                if(numreg=='100'){
                    value = parseInt(Registers[2].getright(),2);
                }else if(numreg=='101'){
                    value = parseInt(Registers[2].getleft(),2);
                }
                if(numreg=='110'){
                    value = parseInt(Registers[3].getright(),2);
                }else if(numreg=='111'){
                    value = parseInt(Registers[3].getleft(),2);
                }
            }
            instrObject.value1=value;
            instrObject.taille=taille;
            //}
            /////////////////////////////animations des registres vers RUAL1
            if(numreg=='000'){
                animations.push({
                    value:value,
                    target:fitToR1.target,
                    time:fitToR1.time,
                    anim:fitToR1.anim,
                })
                animations.push({
                    value:value,
                    target:infitToR1.target,
                    time:infitToR1.time,
                    anim:infitToR1.anim,
                })
                animations.push({
                    value:value,
                    target:RegToRual1.target,
                    time:RegToRual1.time,
                    anim:RegToRual1.anim,
                })
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                })
                animations.push({
                    value:value,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                })
            }else if(numreg=='001'){
                animations.push({
                    value:value,
                    target:fitToR2.target,
                    time:fitToR2.time,
                    anim:fitToR2.anim,
                })
                animations.push({
                    value:value,
                    target:infitToR2.target,
                    time:infitToR2.time,
                    anim:infitToR2.anim,
                })
                animations.push({
                    value:value,
                    target:RegToRual1.target,
                    time:RegToRual1.time,
                    anim:RegToRual1.anim,
                })
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                })
                animations.push({
                    value:value,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                })
            }
            else if(numreg=='010'){
                animations.push({
                    value:value,
                    target:fitToR3.target,
                    time:fitToR3.time,
                    anim:fitToR3.anim,
                })
                animations.push({
                    value:value,
                    target:infitToR3.target,
                    time:infitToR3.time,
                    anim:infitToR3.anim,
                })
                animations.push({
                    value:value,
                    target:RegToRual1.target,
                    time:RegToRual1.time,
                    anim:RegToRual1.anim,
                })
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                })
                animations.push({
                    value:value,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                })
            }else if(numreg=='011'){
                animations.push({
                    value:value,
                    target:fitToR4.target,
                    time:fitToR4.time,
                    anim:fitToR4.anim,
                })
                animations.push({
                    value:value,
                    target:infitToR4.target,
                    time:infitToR4.time,
                    anim:infitToR4.anim,
                })
                animations.push({
                    value:value,
                    target:RegToRual1.target,
                    time:RegToRual1.time,
                    anim:RegToRual1.anim,
                })
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                })
                animations.push({
                    value:value,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                })
            }
            else if(numreg=='100'){
                animations.push({
                    value:value,
                    target:fitToAcc.target,
                    time:fitToAcc.time,
                    anim:fitToAcc.anim,
                })
                animations.push({
                    value:value,
                    target:infitToAcc.target,
                    time:infitToAcc.time,
                    anim:infitToAcc.anim,
                })
                animations.push({
                    value:value,
                    target:AccToBus.target,
                    time:AccToBus.time,
                    anim:AccToBus.anim,
                })
                animations.push({
                    value:value,
                    target:AccToRUAL1.target,
                    time:AccToRUAL1.time,
                    anim:AccToRUAL1.anim,
                })
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                })
                animations.push({
                    value:value,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                })
            }else if(numreg=='101'){
                animations.push({
                    value:value,
                    target:fitToBr.target,
                    time:fitToBr.time,
                    anim:fitToBr.anim,
                })
                animations.push({
                    value:value,
                    target:infitToBr.target,
                    time:infitToBr.time,
                    anim:infitToBr.anim,
                })
                animations.push({
                    value:value,
                    target:RegToRual1.target,
                    time:RegToRual1.time,
                    anim:RegToRual1.anim,
                })
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                })
                animations.push({
                    value:value,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                })
            }
            else if(numreg=='110'){
                animations.push({
                    value:value,
                    target:fitToIdr.target,
                    time:fitToIdr.time,
                    anim:fitToIdr.anim,
                })
                animations.push({
                    value:value,
                    target:infitToIdr.target,
                    time:infitToIdr.time,
                    anim:infitToIdr.anim,
                })
                animations.push({
                    value:value,
                    target:RegToRual1.target,
                    time:RegToRual1.time,
                    anim:RegToRual1.anim,
                })
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                })
                animations.push({
                    value:value,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                })
            }else if(numreg=='111'){
                animations.push({
                    value:value,
                    target:fitToSr.target,
                    time:fitToSr.time,
                    anim:fitToSr.anim,
                })
                animations.push({
                    value:value,
                    target:infitToSR.target,
                    time:infitToSR.time,
                    anim:infitToSR.anim,
                })
                animations.push({
                    value:value,
                    target:RegToRual1.target,
                    time:RegToRual1.time,
                    anim:RegToRual1.anim,
                })
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                })
                animations.push({
                    value:value,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                })
            }
        }else{
            if(key>='0010' & key<='0011'){
                key=instruction.substring(0,7);
                let taille=instruction.charAt(7);
                index=hash(key);
                instrObject=hashmap[index].instrObject;
                animateDecoderSequencer(animations,instrObject.name);
                if(!(key=='0011010'| key =='0010000' | key =='0010001')){
                    this.getinstrbyte(animations,false,Contextarray);
                    let adresse=this.RI.getvalue()
                    this.getinstrbyte(animations,false,Contextarray);
                    adresse=adresse+this.RI.getvalue()
                    adresse=parseInt(adresse,2);//hexa to decimal
                    instrObject.addresse1=adresse;
                    instrObject.taille=taille;
                }
            }else{
                key=instruction.substring(0,7);
                let taille=instruction.charAt(7);
                this.getinstrbyte(animations,false,Contextarray);///was true
                let secondByte=this.RI.getvalue();
                //secondByte=hex2bin(secondByte);
                let Ind=secondByte.substring(0,2);
                let regMod1=secondByte.substring(2,5);
                let regMod2=secondByte.substring(5,8);
                if(key=='0001100'){
                    key=key+Ind;
                    index=hash(key);
                    instrObject=hashmap[index].instrObject;
                    animateDecoderSequencer(animations,instrObject.name);
                    instrObject.taille=taille;
                    let value2=0;
                    if(key=='000110000'){
                        if(taille=='1'){
                            value2 = parseInt(Registers[parseInt(regMod2, 2)].getvalue(),2);
                        }else{
                            //reading reg2 content
                            if(regMod2=='000'){
                                value2 = parseInt(Registers[0].getright(),2);
                            }else if(regMod2=='001'){
                                value2 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod2=='010'){
                                value2 = parseInt(Registers[1].getright(),2);
                            }else if(regMod2=='011'){
                                value2 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod2=='100'){
                                value2 = parseInt(Registers[2].getright(),2);
                            }else if(regMod2=='101'){
                                value2 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod2=='110'){
                                value2 = parseInt(Registers[3].getright(),2);
                            }else if(regMod2=='111'){
                                value2 = parseInt(Registers[3].getleft(),2);
                            }
                        }
                        instrObject.value2=value2;
                        instrObject.register1=parseInt(regMod2,2);
                        instrObject.register1=parseInt(regMod1,2);//decimal
                    }else if(key=='000110001'){
                        this.getinstrbyte(animations,false,Contextarray);
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte(animations,false,Contextarray);
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let depl=0;
                        if(regMod2=='110'){
                            depl=this.getinstrbyte(animations,false,Contextarray);
                            depl=parseInt(depl,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte(animations,false,Contextarray);
                            let depl=this.RI.getvalue()
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let value2=0;
                        if(parseInt(regMod2,2)===0){
                            instrObject.isimmed=1;
                            if(parseInt(regMod1,2)===4){//case of accumulator
                                value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresse,0,taille,depl,animations,1/*is animated*/,4/*to Acc*/);
                            }else{
                                value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresse,0,taille,depl,animations,1/*is animated*/,3/*to reg*/);
                            }
                        }else{
                            value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresse,0,taille,depl,animations,1/*is animated*/,0/*where to put the value */);
                        }
                        instrObject.value2=value2;
                        instrObject.register1=parseInt(regMod1,2);
                    }else if(key=='000110010'){
                        this.getinstrbyte(animations,false,Contextarray);
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte(animations,false,Contextarray);
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let value2=0;
                        if(taille=='1'){
                            value2 = parseInt(Registers[parseInt(regMod2, 2)].getvalue(),2);
                        }else{
                            
                            //reading reg2 content
                            if(regMod2=='000'){
                                value2 = parseInt(Registers[0].getright(),2);
                            }else if(regMod2=='001'){
                                value2 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod2=='010'){
                                value2 = parseInt(Registers[1].getright(),2);
                            }else if(regMod2=='011'){
                                value2 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod2=='100'){
                                value2 = parseInt(Registers[2].getright(),2);
                            }else if(regMod2=='101'){
                                value2 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod2=='110'){
                                value2 = parseInt(Registers[3].getright(),2);
                            }else if(regMod2=='111'){
                                value2 = parseInt(Registers[3].getleft(),2);
                            }
                        }
                        let depl=0;
                        if(regMod1=='110'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=this.RI.getvalue();
                            depl=parseInt(depl,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=this.RI.getvalue()
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let addresse1 = addressingModes.modesAdr[parseInt(regMod1,2)](adresse,0,taille,depl,animations,1,0);
                        instrObject.value2=value2;
                        instrObject.register2=parseInt(regMod2,2);
                        instrObject.addresse1=addresse1;
                    }else if(key=='000110011'){
                        this.getinstrbyte(animations,false,Contextarray);
                        let adresseop1=this.RI.getvalue()
                            this.getinstrbyte(animations,false,Contextarray);
                            adresseop1=adresseop1+this.RI.getvalue()
                        adresseop1=parseInt(adresseop1,2);//hexa to decimal
                        this.getinstrbyte(animations,false,Contextarray);
                        let adresseop2=this.RI.getvalue()
                        let valimm=parseInt(adresseop2,2);
                        if(regMod2!="000"){
                        this.getinstrbyte(animations,false,Contextarray);
                        adresseop2=adresseop2+this.RI.getvalue()
                        }
                        adresseop2=parseInt(adresseop2,2);//hexa to decimal
                        let depl1=0;
                        if(regMod1=='110'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl1=this.RI.getvalue();
                            depl1=parseInt(depl1,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl1=this.RI.getvalue()
                            this.getinstrbyte(animations,false,Contextarray);
                            depl1=depl1+this.RI.getvalue()
                            depl1=parseInt(depl1,2);//hexa to decimal
                        }
                        let depl2=0;
                        if(regMod2=='110'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl2=this.RI.getvalue();
                            depl2=parseInt(depl2,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl2=this.RI.getvalue()
                            this.getinstrbyte(animations,false,Contextarray);
                            depl2=depl2+this.RI.getvalue()
                            depl2=parseInt(depl2,2);//hexa to decimal
                        }
                        let addresse1 = null
                        let value2=0;
                        if(parseInt(regMod2,2)=="000"){
                            instrObject.isimmed=true;
                            addresse1 = addressingModes.modesAdr[parseInt(regMod1,2)](adresseop1,0,taille,depl1,animations,1,0);
                            value2 = addressingModes.modesVal[parseInt(regMod2,2)](valimm,0,taille,depl2,animations,1,0);
                        }else{
                            instrObject.isimmed=false;
                            addresse1 = addressingModes.modesAdr[parseInt(regMod1,2)](adresseop1,0,taille,depl1,animations,1,1);
                            value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresseop2,0,taille,depl2,animations,1,0);
                        }
                        instrObject.value2=value2;
                        instrObject.addresse1=addresse1;
                    }
                }else{
                    index=hash(key);
                    instrObject=hashmap[index].instrObject;
                    animateDecoderSequencer(animations,instrObject.name);
                    instrObject.taille=taille;
                    if(Ind=='00'){
                        let value1=0;
                        let value2=0;
                        if(taille=='1'){
                            value1 = parseInt(Registers[parseInt(regMod1, 2)].getvalue(),2);
                            value2 = parseInt(Registers[parseInt(regMod2, 2)].getvalue(),2);
                        }else{
                            if(regMod1=='000'){
                                value1 = parseInt(Registers[0].getright(),2);
                            }else if(regMod1=='001'){
                                value1 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod1=='010'){
                                value1 = parseInt(Registers[1].getright(),2);
                            }else if(regMod1=='011'){
                                value1 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod1=='100'){
                                value1 = parseInt(Registers[2].getright(),2);
                            }else if(regMod1=='101'){
                                value1 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod1=='110'){
                                value1 = parseInt(Registers[3].getright(),2);
                            }else if(regMod1=='111'){
                                value1 = parseInt(Registers[3].getleft(),2);
                            }
                            if(regMod2=='000'){
                                value2 = parseInt(Registers[0].getright(),2);
                            }else if(regMod2=='001'){
                                value2 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod2=='010'){
                                value2 = parseInt(Registers[1].getright(),2);
                            }else if(regMod2=='011'){
                                value2 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod2=='100'){
                                value2 = parseInt(Registers[2].getright(),2);
                            }else if(regMod2=='101'){
                                value2 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod2=='110'){
                                value2 = parseInt(Registers[3].getright(),2);
                            }else if(regMod2=='111'){
                                value2 = parseInt(Registers[3].getleft(),2);
                            }
                        }

                        /////////////////////////////animations des registres vers RUAL1 et RUAL2
                        if(regMod1=='000'){
                            animations.push({
                                value:value1,
                                target:fitToR1.target,
                                time:fitToR1.time,
                                anim:fitToR1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToR1.target,
                                time:infitToR1.time,
                                anim:infitToR1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }else if(regMod1=='001'){
                            animations.push({
                                value:value1,
                                target:fitToR2.target,
                                time:fitToR2.time,
                                anim:fitToR2.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToR2.target,
                                time:infitToR2.time,
                                anim:infitToR2.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }
                        else if(regMod1=='010'){
                            animations.push({
                                value:value1,
                                target:fitToR3.target,
                                time:fitToR3.time,
                                anim:fitToR3.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToR3.target,
                                time:infitToR3.time,
                                anim:infitToR3.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }else if(regMod1=='011'){
                            animations.push({
                                value:value1,
                                target:fitToR4.target,
                                time:fitToR4.time,
                                anim:fitToR4.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToR4.target,
                                time:infitToR4.time,
                                anim:infitToR4.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }
                        else if(regMod1=='100'){
                            animations.push({
                                value:value1,
                                target:fitToAcc.target,
                                time:fitToAcc.time,
                                anim:fitToAcc.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToAcc.target,
                                time:infitToAcc.time,
                                anim:infitToAcc.anim,
                            })
                            animations.push({
                                value:value1,
                                target:AccToBus.target,
                                time:AccToBus.time,
                                anim:AccToBus.anim,
                            })
                            animations.push({
                                value:value1,
                                target:AccToRUAL1.target,
                                time:AccToRUAL1.time,
                                anim:AccToRUAL1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }else if(regMod1=='101'){
                            animations.push({
                                value:value1,
                                target:fitToBr.target,
                                time:fitToBr.time,
                                anim:fitToBr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToBr.target,
                                time:infitToBr.time,
                                anim:infitToBr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }
                        else if(regMod1=='110'){
                            animations.push({
                                value:value1,
                                target:fitToIdr.target,
                                time:fitToIdr.time,
                                anim:fitToIdr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToIdr.target,
                                time:infitToIdr.time,
                                anim:infitToIdr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }else if(regMod1=='111'){
                            animations.push({
                                value:value1,
                                target:fitToSr.target,
                                time:fitToSr.time,
                                anim:fitToSr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToSR.target,
                                time:infitToSR.time,
                                anim:infitToSR.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }
                        if(regMod2=='000'){
                            animations.push({
                                value:value2,
                                target:fitToR1.target,
                                time:fitToR1.time,
                                anim:fitToR1.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToR1.target,
                                time:infitToR1.time,
                                anim:infitToR1.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }else if(regMod2=='001'){
                            animations.push({
                                value:value2,
                                target:fitToR2.target,
                                time:fitToR2.time,
                                anim:fitToR2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToR2.target,
                                time:infitToR2.time,
                                anim:infitToR2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }
                        else if(regMod2=='010'){
                            animations.push({
                                value:value2,
                                target:fitToR3.target,
                                time:fitToR3.time,
                                anim:fitToR3.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToR3.target,
                                time:infitToR3.time,
                                anim:infitToR3.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }else if(regMod2=='011'){
                            animations.push({
                                value:value2,
                                target:fitToR4.target,
                                time:fitToR4.time,
                                anim:fitToR4.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToR4.target,
                                time:infitToR4.time,
                                anim:infitToR4.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }
                        else if(regMod2=='100'){
                            animations.push({
                                value:value2,
                                target:fitToAcc.target,
                                time:fitToAcc.time,
                                anim:fitToAcc.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToAcc.target,
                                time:infitToAcc.time,
                                anim:infitToAcc.anim,
                            })
                            animations.push({
                                value:value2,
                                target:AccToBus.target,
                                time:AccToBus.time,
                                anim:AccToBus.anim,
                            })
                            animations.push({
                                value:value2,
                                target:AccToRUAL2.target,
                                time:AccToRUAL2.time,
                                anim:AccToRUAL2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }else if(regMod2=='101'){
                            animations.push({
                                value:value2,
                                target:fitToBr.target,
                                time:fitToBr.time,
                                anim:fitToBr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToBr.target,
                                time:infitToBr.time,
                                anim:infitToBr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }
                        else if(regMod2=='110'){
                            animations.push({
                                value:value2,
                                target:fitToIdr.target,
                                time:fitToIdr.time,
                                anim:fitToIdr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToIdr.target,
                                time:infitToIdr.time,
                                anim:infitToIdr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }else if(regMod2=='111'){
                            animations.push({
                                value:value2,
                                target:fitToSr.target,
                                time:fitToSr.time,
                                anim:fitToSr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToSR.target,
                                time:infitToSR.time,
                                anim:infitToSR.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }
                        //////////////////////////////////////////////////////////////////////////
                        instrObject.value1=value1;
                        instrObject.value2=value2;
                        instrObject.register2=parseInt(regMod2,2);
                        instrObject.register1=parseInt(regMod1,2);
                    }else if(Ind=='01'){
                        this.getinstrbyte(animations,false,Contextarray);
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte(animations,false,Contextarray);
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let depl=0;
                        if(regMod2=='110'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=this.RI.getvalue();
                            depl=parseInt(depl,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=this.RI.getvalue()
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresse,0,taille,depl,animations,1,2);
                        let value1=0;
                        if(taille=='1'){
                            value1 = parseInt(Registers[parseInt(regMod1, 2)].getvalue(),2);
                        }else{
                            if(regMod1=='000'){
                                value1 = parseInt(Registers[0].getright(),2);
                            }else if(regMod1=='001'){
                                value1 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod1=='010'){
                                value1 = parseInt(Registers[1].getright(),2);
                            }else if(regMod1=='011'){
                                value1 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod1=='100'){
                                value1 = parseInt(Registers[2].getright(),2);
                            }else if(regMod1=='101'){
                                value1 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod1=='110'){
                                value1 = parseInt(Registers[3].getright(),2);
                            }else if(regMod1=='111'){
                                value1 = parseInt(Registers[3].getleft(),2);
                            }
                        }
                        /////////////////////////////animations des registres vers RUAL1 et RUAL2
                        if(regMod1=='000'){
                            animations.push({
                                value:value1,
                                target:fitToR1.target,
                                time:fitToR1.time,
                                anim:fitToR1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToR1.target,
                                time:infitToR1.time,
                                anim:infitToR1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }else if(regMod1=='001'){
                            animations.push({
                                value:value1,
                                target:fitToR2.target,
                                time:fitToR2.time,
                                anim:fitToR2.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToR2.target,
                                time:infitToR2.time,
                                anim:infitToR2.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }
                        else if(regMod1=='010'){
                            animations.push({
                                value:value1,
                                target:fitToR3.target,
                                time:fitToR3.time,
                                anim:fitToR3.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToR3.target,
                                time:infitToR3.time,
                                anim:infitToR3.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }else if(regMod1=='011'){
                            animations.push({
                                value:value1,
                                target:fitToR4.target,
                                time:fitToR4.time,
                                anim:fitToR4.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToR4.target,
                                time:infitToR4.time,
                                anim:infitToR4.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }
                        else if(regMod1=='100'){
                            animations.push({
                                value:value1,
                                target:fitToAcc.target,
                                time:fitToAcc.time,
                                anim:fitToAcc.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToAcc.target,
                                time:infitToAcc.time,
                                anim:infitToAcc.anim,
                            })
                            animations.push({
                                value:value1,
                                target:AccToBus.target,
                                time:AccToBus.time,
                                anim:AccToBus.anim,
                            })
                            animations.push({
                                value:value1,
                                target:AccToRUAL1.target,
                                time:AccToRUAL1.time,
                                anim:AccToRUAL1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }else if(regMod1=='101'){
                            animations.push({
                                value:value1,
                                target:fitToBr.target,
                                time:fitToBr.time,
                                anim:fitToBr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToBr.target,
                                time:infitToBr.time,
                                anim:infitToBr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }
                        else if(regMod1=='110'){
                            animations.push({
                                value:value1,
                                target:fitToIdr.target,
                                time:fitToIdr.time,
                                anim:fitToIdr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToIdr.target,
                                time:infitToIdr.time,
                                anim:infitToIdr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }else if(regMod1=='111'){
                            animations.push({
                                value:value1,
                                target:fitToSr.target,
                                time:fitToSr.time,
                                anim:fitToSr.anim,
                            })
                            animations.push({
                                value:value1,
                                target:infitToSR.target,
                                time:infitToSR.time,
                                anim:infitToSR.anim,
                            })
                            animations.push({
                                value:value1,
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual1.target,
                                time:BusToRual1.time,
                                anim:BusToRual1.anim,
                            })
                            animations.push({
                                value:value1,
                                target:fitToRual1.target,
                                time:fitToRual1.time,
                                anim:fitToRual1.anim,
                            })
                        }
                        instrObject.value1=value1;
                        ///animation from the register to RUAL1
                        instrObject.value2=value2;
                    }else if(Ind=='10'){
                        this.getinstrbyte(animations,false,Contextarray);
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte(animations,false,Contextarray);
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let depl=0;
                        if(regMod1=='110'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=this.RI.getvalue();
                            depl=parseInt(depl,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=this.RI.getvalue()
                            this.getinstrbyte(animations,false,Contextarray);
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let value1 =addressingModes.modesVal[parseInt(regMod1,2)](adresse,0,taille,depl,animations,1,1);
                        let value2=0;
                        if(taille=='1'){
                            value2 = parseInt(Registers[parseInt(regMod2, 2)].getvalue(),2);/////les animations des registres vers RUAL
                        }else{
                            if(regMod2=='000'){
                                value2 = parseInt(Registers[0].getright(),2);
                            }else if(regMod2=='001'){
                                value2 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod2=='010'){
                                value2 = parseInt(Registers[1].getright(),2);
                            }else if(regMod2=='011'){
                                value2 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod2=='100'){
                                value2 = parseInt(Registers[2].getright(),2);
                            }else if(regMod2=='101'){
                                value2 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod2=='110'){
                                value2 = parseInt(Registers[3].getright(),2);
                            }else if(regMod2=='111'){
                                value2 = parseInt(Registers[3].getleft(),2);
                            }
                        }
                        if(regMod2=='000'){
                            animations.push({
                                value:value2,
                                target:fitToR1.target,
                                time:fitToR1.time,
                                anim:fitToR1.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToR1.target,
                                time:infitToR1.time,
                                anim:infitToR1.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }else if(regMod2=='001'){
                            animations.push({
                                value:value2,
                                target:fitToR2.target,
                                time:fitToR2.time,
                                anim:fitToR2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToR2.target,
                                time:infitToR2.time,
                                anim:infitToR2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }
                        else if(regMod2=='010'){
                            animations.push({
                                value:value2,
                                target:fitToR3.target,
                                time:fitToR3.time,
                                anim:fitToR3.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToR3.target,
                                time:infitToR3.time,
                                anim:infitToR3.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }else if(regMod2=='011'){
                            animations.push({
                                value:value2,
                                target:fitToR4.target,
                                time:fitToR4.time,
                                anim:fitToR4.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToR4.target,
                                time:infitToR4.time,
                                anim:infitToR4.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }
                        else if(regMod2=='100'){
                            animations.push({
                                value:value2,
                                target:fitToAcc.target,
                                time:fitToAcc.time,
                                anim:fitToAcc.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToAcc.target,
                                time:infitToAcc.time,
                                anim:infitToAcc.anim,
                            })
                            animations.push({
                                value:value2,
                                target:AccToBus.target,
                                time:AccToBus.time,
                                anim:AccToBus.anim,
                            })
                            animations.push({
                                value:value2,
                                target:AccToRUAL2.target,
                                time:AccToRUAL2.time,
                                anim:AccToRUAL2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }else if(regMod2=='101'){
                            animations.push({
                                value:value2,
                                target:fitToBr.target,
                                time:fitToBr.time,
                                anim:fitToBr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToBr.target,
                                time:infitToBr.time,
                                anim:infitToBr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }
                        else if(regMod2=='110'){
                            animations.push({
                                value:value2,
                                target:fitToIdr.target,
                                time:fitToIdr.time,
                                anim:fitToIdr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToIdr.target,
                                time:infitToIdr.time,
                                anim:infitToIdr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }else if(regMod2=='111'){
                            animations.push({
                                value:value2,
                                target:fitToSr.target,
                                time:fitToSr.time,
                                anim:fitToSr.anim,
                            })
                            animations.push({
                                value:value2,
                                target:infitToSR.target,
                                time:infitToSR.time,
                                anim:infitToSR.anim,
                            })
                            animations.push({
                                value:value2,
                                target:RegToRual2.target,
                                time:RegToRual2.time,
                                anim:RegToRual2.anim,
                            })
                            animations.push({
                                value:"",
                                target:BusToRual2.target,
                                time:BusToRual2.time,
                                anim:BusToRual2.anim,
                            })
                            animations.push({
                                value:value2,
                                target:fitToRual2.target,
                                time:fitToRual2.time,
                                anim:fitToRual2.anim,
                            })
                        }
                        instrObject.value1=value1;
                        instrObject.value2=value2;
                        ///animation from the register to RUAL1
                    }else if(Ind=='11'){
                        this.getinstrbyte(animations,false,Contextarray);
                        let adresse1=this.RI.getvalue()
                        this.getinstrbyte(animations,false,Contextarray);
                        adresse1=adresse1+this.RI.getvalue()
                        adresse1=parseInt(adresse1,2);//hexa to decimal
                        this.getinstrbyte(animations,false,Contextarray);
                        let adresse2=this.RI.getvalue()
                        this.getinstrbyte(animations,false,Contextarray);
                        adresse2=adresse2+this.RI.getvalue()
                        adresse2=parseInt(adresse2,2);//hexa to decimal
                        let depl1=0;
                        if(regMod1=='110'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl1=this.RI.getvalue();
                            depl1=parseInt(depl1,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl1=this.RI.getvalue()
                            this.getinstrbyte(animations,false,Contextarray);
                            depl1=depl1+this.RI.getvalue()
                            depl1=parseInt(depl1,2);//hexa to decimal
                        }
                        let depl2=0;
                        if(regMod2=='110'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl2=this.RI.getvalue();
                            depl2=parseInt(depl2,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte(animations,false,Contextarray);
                            depl2=this.RI.getvalue()
                            this.getinstrbyte(animations,false,Contextarray);
                            depl2=depl2+this.RI.getvalue()
                            depl2=parseInt(depl2,2);//hexa to decimal
                        }
                        let value1 = parseInt(addressingModes.modesVal[parseInt(regMod1,2)](adresse1,0,taille,depl1,animations,1,1),2);
                        let value2 = parseInt(addressingModes.modesVal[parseInt(regMod2,2)](adresse2,0,taille,depl2,animations,1,2),2);
                        instrObject.value1=value1;
                        instrObject.value2=value2;
                    }
                }
                
            }
        }
        return instrObject;}
    }
    execute(instrObject,is_animated,animations){
        let res;
        for (let i = 0; i < instrObject.stepsNum ; i++) {
            res = instrObject.steps[i](animations);
        }
        console.log(instrObject);
        let animationSteps= instrObject.buildanim();
        if(is_animated===1 & animationSteps.length>0){
            for (let i = 0; i < animationSteps.length; i++) {
                let tempobj={...animationSteps[i]};
                if(tempobj.value==="value2"){
                    tempobj.value=instrObject.value2;
                }else if(tempobj.value==="res"){
                    tempobj.value=res;
                }else if(tempobj.value==="addresse1"){
                    tempobj.value=instrObject.addresse1;
                }
                
                animations.push(tempobj);
            }
        }
    }
}
export default Sequenceur;