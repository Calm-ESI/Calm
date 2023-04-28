import { memory, BR, IR } from "../pages/Ide";
import { gsap } from "gsap";
import Alu from "./ALU";
function hex2bin(hex){
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
}
const addanim={
    value:"",
    target:".ALU",
    time:2000,
    anim:(val,h,w)=>{
        gsap.fromTo(".ALU",{opacity:"0"},{opacity:"1" ,duration:1});
        gsap.fromTo(".ALU",{opacity:"1"},{opacity:"0" ,duration:1,delay:1});
    },}
const AccToADR={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.321,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.321},{x:w*0.705,duration:1,delay:1})
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
const RegToRual2={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.44,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.44},{x:w*0.106,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  const AccToMDR={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.321,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.321},{x:w*0.497,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
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
    const infitToIr={
        value:"",
        target:".ball",
        time:1000,
        anim:(val,h,w)=>{
            // gsap.fromTo(".ball",{x:w*0.442,y:h*0.8815,opacity:"0",height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
            // gsap.fromTo(".ball",{x:w*0.442,y:h*0.8815,opacity:"0"},{opacity:"1" ,duration:1,delay:1});
            // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,},{height:"2.812%",width:"1.4%",borderRadius:"50%",duration:1,delay:1});
            gsap.to(".ball",{opacity:"0" ,duration:1});
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
const AluToAcc={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 30.3% , 83.5% )  W:1.4% ,H:2.812
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.226,y:h*0.863,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.226,y:h*0.863},{y:h*0.877 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
const infitToMar={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    // gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.032,height:h*0.14,x:w*0.623,y:h*0.165,opacity:"0"},{opacity:"1" ,duration:1});
    // gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.032,height:h*0.14,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1});
  },}
let queueExitToBus={
    value:"",
    target:".ball",
    time:4000,
    anim:(val,h,w)=>{
            gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.726,y:h*0.6638,opacity:"0"},{opacity:"1" ,duration:1});
            gsap.fromTo(".ball",{x:w*0.726,y:h*0.6638},{x:w*0.715 ,duration:1,delay:1});
            gsap.to(".ball",{y:h*0.555 ,duration:1,delay:2});
            gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
    }
}
const BusToMdr={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 51.8% , 43.2% )
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.539,y:h*0.465,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.539,y:h*0.465},{y:h*0.445 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
},}

let queueExitToMdr={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
        gsap.fromTo(".box-data",{x:w*0.68,opacity:"0"},{opacity:"1",duration:1})
        gsap.fromTo(".box-data",{x:w*0.68},{x:w*0.497,duration:1,delay:1})
        gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
    }
}
let queueExitToAcc={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
        gsap.fromTo(".box-data",{x:w*0.68,opacity:"0"},{opacity:"1",duration:1})
        gsap.fromTo(".box-data",{x:w*0.68},{x:w*0.321,duration:1,delay:1})
        gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
    }
}
let queueExitToRual1={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
        gsap.fromTo(".box-data",{x:w*0.68,opacity:"0"},{opacity:"1",duration:1})
        gsap.fromTo(".box-data",{x:w*0.68},{x:w*0.143,duration:1,delay:1})
        gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
    }
}

let queueExitToRual2={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
        gsap.fromTo(".box-data",{x:w*0.68,opacity:"0"},{opacity:"1",duration:1})
        gsap.fromTo(".box-data",{x:w*0.68},{x:w*0.299,duration:1,delay:1})
        gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
    }
}
const ADRbusToDATABus={
    value:"",
    target:".ball",
    time:1800,
    anim:(val,h,w)=>{
    ///depart: ( 69% , 13.7% )
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.746,y:h*0.46,opacity:"0"},{opacity:"1" ,duration:0.5});
    gsap.fromTo(".ball",{x:w*0.746,y:h*0.46},{y:h*0.26 ,duration:0.8,delay:0.5});
    gsap.to(".ball",{opacity:"0" ,duration:0.5,delay:1.3});
  },}
let queueExitToAdr={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
        gsap.fromTo(".box-data",{x:w*0.68,opacity:"0"},{opacity:"1",duration:1})
        gsap.fromTo(".box-data",{x:w*0.68},{x:w*0.71,duration:1,delay:1})
        gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
    }
}
let queueExitToReg={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
        gsap.fromTo(".box-data",{x:w*0.68,opacity:"0"},{opacity:"1",duration:1})
        gsap.fromTo(".box-data",{x:w*0.68},{x:w*0.44,duration:1,delay:1})
        gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
    }
}

const ADRToMAR={
    value:"",
    target:".box-ADR",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-ADR",{x:w*0.712,opacity:"0"},{opacity:"1",duration:1})
    gsap.fromTo(".box-ADR",{x:w*0.712},{x:w*0.648,duration:1,delay:1})
    gsap.to(".box-ADR",{opacity:"0" ,duration:1,delay:2});
  },}
  const fitToMdr={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
    gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.11,height:h*0.06,x:w*0.49,y:h*0.38,opacity:"0"},{opacity:"1" ,duration:1});
    //gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.11,height:h*0.06,duration:1,delay:1});
    //gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
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
  const MdrToBus={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 51.8% , 43.2% )
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.539,y:h*0.445,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.539,y:h*0.445},{y:h*0.465 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const MdrToRual2={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.262,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  const MdrToRual1={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.106,duration:1,delay:1})
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
    gsap.fromTo(".ball",{x:w*0.143,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.143,y:h*0.56},{y:h*0.625 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const BusToRual2={
    value:"",
    target:".ball",
    time:3000,
    anim:(val,h,w)=>{
    ///depart: ( 54% , 35,2% )
    gsap.fromTo(".ball",{x:w*0.299,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.299,y:h*0.56},{y:h*0.625 ,duration:1,delay:1});
    gsap.to(".ball",{opacity:"0" ,duration:1,delay:2});
  },}
  const MdrToADR={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.705,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  const BusToAcc={
    value:"",
    target:".ball",
    time:4000,
    anim:(val,h,w)=>{
    ///depart: ( 39.7% , 54% )  W:1.4% ,H:2.812
    gsap.fromTo(".ball",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.361,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:1});
    gsap.fromTo(".ball",{x:w*0.361,y:h*0.56},{y:h*0.923 ,duration:1,delay:1});
    gsap.to(".ball",{x:w*0.282 ,duration:1,delay:2});
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
  const MDRToAcc={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.321,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
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
  const infitqueue2_1={
    value:"",
    target:".queue6",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue6",{opacity:"1"},{opacity:"0",duration:1});
        gsap.fromTo(".queue5",{opacity:"1"},{opacity:"0",duration:1});
  },}
  const infitqueue4_3={
    value:"",
    target:".queue6",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue4",{opacity:"1"},{opacity:"0",duration:1});
        gsap.fromTo(".queue3",{opacity:"1"},{opacity:"0",duration:1});
  },}
  const infitqueue6_5={
    value:"",
    target:".queue6",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue2",{opacity:"1"},{opacity:"0",duration:1});
        gsap.fromTo(".queue1",{opacity:"1"},{opacity:"0",duration:1});
  },}
  const fitqueue4_3={
    value:"",
    target:".queue6",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue4",{opacity:"0"},{opacity:"1",duration:1});
        gsap.fromTo(".queue3",{opacity:"0"},{opacity:"1",duration:1});
  },}
  const fitqueue6_5={
    value:"",
    target:".queue6",
    time:1000,
    anim:(val,h,w)=>{
        gsap.fromTo(".queue2",{opacity:"0"},{opacity:"1",duration:1});
        gsap.fromTo(".queue1",{opacity:"0"},{opacity:"1",duration:1});
  },}
  const MCanim={
    value:"",
    target:".MC",
    time:2000,
    anim:(val,h,w)=>{
        gsap.fromTo(".MC",{opacity:"0"},{opacity:"1" ,duration:1});
        gsap.fromTo(".MC",{opacity:"1"},{opacity:"0" ,duration:1,delay:1});
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

class AddressingModes{
    constructor(){
        this.modesVal=[
            function immediatVal(adresse,animated,size,depl,animations,is_anim,target){
                //////////////this animation is correct only in the case of mov 11 else we have to specify here if we put it above registers in bus or MDR , so that the mov take the animation from MDR or above the registers (a certain logique for MOV10 MOV11 and this function maybe add the scope of target and enter a boolean to the MOV)
                // if(size==0){
                //     animations.push({
                //         value:"",
                //         target:infitqueue6.target,
                //         time:infitqueue6.time,
                //         anim:infitqueue6.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:infitqueue5.target,
                //             time:infitqueue5.time,
                //             anim:infitqueue5.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:fitqueue6.target,
                //             time:fitqueue6.time,
                //             anim:fitqueue6.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:infitqueue4.target,
                //             time:infitqueue4.time,
                //             anim:infitqueue4.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:fitqueue5.target,
                //             time:fitqueue5.time,
                //             anim:fitqueue5.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:infitqueue3.target,
                //             time:infitqueue3.time,
                //             anim:infitqueue3.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:fitqueue4.target,
                //             time:fitqueue4.time,
                //             anim:fitqueue4.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:infitqueue2.target,
                //             time:infitqueue2.time,
                //             anim:infitqueue2.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:fitqueue3.target,
                //             time:fitqueue3.time,
                //             anim:fitqueue3.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:infitqueue1.target,
                //             time:infitqueue1.time,
                //             anim:infitqueue1.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:fitqueue2.target,
                //             time:fitqueue2.time,
                //             anim:fitqueue2.anim,
                //         });
                // }else{
                //     animations.push({
                //         value:"",
                //         target:infitqueue6_5.target,
                //         time:infitqueue6.time,
                //         anim:infitqueue6.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:infitqueue4_3.target,
                //             time:infitqueue5.time,
                //             anim:infitqueue5.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:fitqueue6_5.target,
                //             time:fitqueue6_5.time,
                //             anim:fitqueue6_5.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:infitqueue2_1.target,
                //             time:infitqueue2_1.time,
                //             anim:infitqueue2_1.anim,
                //         });
                //         animations.push({
                //             value:"",
                //             target:fitqueue4_3.target,
                //             time:fitqueue4_3.time,
                //             anim:fitqueue4_3.anim,
                //         });
                // }
                if(target===0){
                animations.push({
                    value:"",
                    nom:"queueExitToBus",
                    target:queueExitToBus.target,
                    time:queueExitToBus.time,
                    anim:queueExitToBus.anim,
                });
                animations.push({
                    value:adresse,
                    target:queueExitToMdr.target,
                    time:queueExitToMdr.time,
                    anim:queueExitToMdr.anim,
                });
                animations.push({
                    value:"",
                    target:BusToMdr.target,
                    time:BusToMdr.time,
                    anim:BusToMdr.anim,
                });
                animations.push({
                    value:adresse,
                    target:fitToMdr.target,
                    time:fitToMdr.time,
                    anim:fitToMdr.anim,
                });}else if(target===3){
                    animations.push({
                        value:"",
                        nom:"queueExitToBus",
                        target:queueExitToBus.target,
                        time:queueExitToBus.time,
                        anim:queueExitToBus.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:queueExitToReg.target,
                        time:queueExitToReg.time,
                        anim:queueExitToReg.anim,
                    });
                }else if(target===1){
                    animations.push({
                        value:"",
                        nom:"queueExitToBus",
                        target:queueExitToBus.target,
                        time:queueExitToBus.time,
                        anim:queueExitToBus.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:queueExitToRual1.target,
                        time:queueExitToRual1.time,
                        anim:queueExitToRual1.anim,
                    });
                    animations.push({
                        value:"",
                        target:BusToRual1.target,
                        time:BusToRual1.time,
                        anim:BusToRual1.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitToRual1.target,
                        time:fitToRual1.time,
                        anim:fitToRual1.anim,
                    });
                }else if(target===2){
                    animations.push({
                        value:"",
                        nom:"queueExitToBus",
                        target:queueExitToBus.target,
                        time:queueExitToBus.time,
                        anim:queueExitToBus.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:queueExitToRual2.target,
                        time:queueExitToRual2.time,
                        anim:queueExitToRual2.anim,
                    });
                    animations.push({
                        value:"",
                        target:BusToRual2.target,
                        time:BusToRual2.time,
                        anim:BusToRual2.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitToRual2.target,
                        time:fitToRual2.time,
                        anim:fitToRual2.anim,
                    });
                }else if(target===4){
                    animations.push({
                        value:"",
                        nom:"queueExitToBus",
                        target:queueExitToBus.target,
                        time:queueExitToBus.time,
                        anim:queueExitToBus.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:queueExitToAcc.target,
                        time:queueExitToAcc.time,
                        anim:queueExitToAcc.anim,
                    });
                }
                return adresse;
            },//correspend au mode immediat
            function directVal(adresse,animated,size,depl,animations,is_anim,target){//the animation is missing//adresse is in decimal
            memory.setRam(adresse);
            memory.read(0);
            let byte1=hex2bin(memory.getRim());
            //animation:
            //il faut ajouter d'abord deux shift du queue_____________
            // if(size==0){
            //     animations.push({
            //         value:"",
            //         target:infitqueue6.target,
            //         time:infitqueue6.time,
            //         anim:infitqueue6.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue5.target,
            //             time:infitqueue5.time,
            //             anim:infitqueue5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue6.target,
            //             time:fitqueue6.time,
            //             anim:fitqueue6.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue4.target,
            //             time:infitqueue4.time,
            //             anim:infitqueue4.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue5.target,
            //             time:fitqueue5.time,
            //             anim:fitqueue5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue3.target,
            //             time:infitqueue3.time,
            //             anim:infitqueue3.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue4.target,
            //             time:fitqueue4.time,
            //             anim:fitqueue4.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue2.target,
            //             time:infitqueue2.time,
            //             anim:infitqueue2.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue3.target,
            //             time:fitqueue3.time,
            //             anim:fitqueue3.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue1.target,
            //             time:infitqueue1.time,
            //             anim:infitqueue1.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue2.target,
            //             time:fitqueue2.time,
            //             anim:fitqueue2.anim,
            //         });
            // }else{
            //     animations.push({
            //         value:"",
            //         target:infitqueue6_5.target,
            //         time:infitqueue6.time,
            //         anim:infitqueue6.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue4_3.target,
            //             time:infitqueue5.time,
            //             anim:infitqueue5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue6_5.target,
            //             time:fitqueue6_5.time,
            //             anim:fitqueue6_5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue2_1.target,
            //             time:infitqueue2_1.time,
            //             anim:infitqueue2_1.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue4_3.target,
            //             time:fitqueue4_3.time,
            //             anim:fitqueue4_3.anim,
            //         });
            // }
            animations.push({
                value:"",
                nom:"queueExitToBus",
                target:queueExitToBus.target,
                time:queueExitToBus.time,
                anim:queueExitToBus.anim,
            });
            animations.push({
                value:adresse,
                target:queueExitToAdr.target,
                time:queueExitToAdr.time,
                anim:queueExitToAdr.anim,
            });
            animations.push({
                value:"",
                target:ADRbusToDATABus.target,
                time:ADRbusToDATABus.time,
                anim:ADRbusToDATABus.anim,
            });
            animations.push({
                value:adresse,
                target:ADRToMAR.target,
                time:ADRToMAR.time,
                anim:ADRToMAR.anim,
            });
            animations.push({
                value:adresse,
                target:fitToMar.target,
                time:fitToMar.time,
                anim:fitToMar.anim,
            });
            animations.push({
                value:"READ",
                target:MCanim.target,
                time:MCanim.time,
                anim:MCanim.anim,
            });
            
            
            ///////
            if(size==1){
                adresse=adresse+1;
                memory.setRam(adresse);
                memory.read(0);
                let byte2=hex2bin(memory.getRim());
                /////////::anim
                animations.push({
                    value:byte2+byte1,
                    target:fitToMdr.target,
                    time:fitToMdr.time,
                    anim:fitToMdr.anim,
                });
                if(target===1){
                    animations.push({
                        value:byte2+byte1,
                        target:infitToMdr.target,
                        time:infitToMdr.time,
                        anim:infitToMdr.anim,
                    });
                    animations.push({
                        value:"",
                        target:MdrToBus.target,
                        time:MdrToBus.time,
                        anim:MdrToBus.anim,
                    });
                    animations.push({
                        value:byte2+byte1,
                        target:MdrToRual1.target,
                        time:MdrToRual1.time,
                        anim:MdrToRual1.anim,
                    });
                    animations.push({
                        value:"",
                        target:BusToRual1.target,
                        time:BusToRual1.time,
                        anim:BusToRual1.anim,
                    });
                    animations.push({
                        value:byte2+byte1,
                        target:fitToRual1.target,
                        time:fitToRual1.time,
                        anim:fitToRual1.anim,
                    });
                }else if(target===2){
                    animations.push({
                        value:byte2+byte1,
                        target:infitToMdr.target,
                        time:infitToMdr.time,
                        anim:infitToMdr.anim,
                    });
                    animations.push({
                        value:"",
                        target:MdrToBus.target,
                        time:MdrToBus.time,
                        anim:MdrToBus.anim,
                    });
                    animations.push({
                        value:byte2+byte1,
                        target:MdrToRual2.target,
                        time:MdrToRual2.time,
                        anim:MdrToRual2.anim,
                    });
                    animations.push({
                        value:"",
                        target:BusToRual2.target,
                        time:BusToRual2.time,
                        anim:BusToRual2.anim,
                    });
                    animations.push({
                        value:byte2+byte1,
                        target:fitToRual2.target,
                        time:fitToRual2.time,
                        anim:fitToRual2.anim,
                    });
                }
                return byte2+byte1///à revoir
            }else{
                animations.push({
                    value:byte1,
                    target:fitToMdr.target,
                    time:fitToMdr.time,
                    anim:fitToMdr.anim,
                });
                if(target===1){
                    animations.push({
                        value:byte1,
                        target:infitToMdr.target,
                        time:infitToMdr.time,
                        anim:infitToMdr.anim,
                    });
                    animations.push({
                        value:"",
                        target:MdrToBus.target,
                        time:MdrToBus.time,
                        anim:MdrToBus.anim,
                    });
                    animations.push({
                        value:byte1,
                        target:MdrToRual1.target,
                        time:MdrToRual1.time,
                        anim:MdrToRual1.anim,
                    });
                    animations.push({
                        value:"",
                        target:BusToRual1.target,
                        time:BusToRual1.time,
                        anim:BusToRual1.anim,
                    });
                    animations.push({
                        value:byte1,
                        target:fitToRual1.target,
                        time:fitToRual1.time,
                        anim:fitToRual1.anim,
                    });
                }else if(target===2){
                    animations.push({
                        value:byte1,
                        target:infitToMdr.target,
                        time:infitToMdr.time,
                        anim:infitToMdr.anim,
                    });
                    animations.push({
                        value:"",
                        target:MdrToBus.target,
                        time:MdrToBus.time,
                        anim:MdrToBus.anim,
                    });
                    animations.push({
                        value:byte1,
                        target:MdrToRual2.target,
                        time:MdrToRual2.time,
                        anim:MdrToRual2.anim,
                    });
                    animations.push({
                        value:"",
                        target:BusToRual2.target,
                        time:BusToRual2.time,
                        anim:BusToRual2.anim,
                    });
                    animations.push({
                        value:byte1,
                        target:fitToRual2.target,
                        time:fitToRual2.time,
                        anim:fitToRual2.anim,
                    });
                }
                return byte1;//valur returned is in hexa 
            }
            },
            function indirectVal(adresse,animated,size,depl,animations,is_anim,target){
                memory.setRam(adresse);
                memory.read(0);
                let adr=parseInt(memory.getRim(), 16);//////maybe we nedd to read here cause the @ is on 2bytes
                memory.setRam(adr);
                memory.read(0);
                let byte1=hex2bin(memory.getRim());
                let byte2;
                if(size==1){
                    adresse=adresse+1;
                    memory.setRam(adresse);
                    memory.read(0);
                    byte2=hex2bin(memory.getRim());
                }
                //animation:
            //il faut ajouter d'abord deux shift du queue_____________
            if(size==0){
                animations.push({
                    value:"",
                    target:infitqueue6.target,
                    time:infitqueue6.time,
                    anim:infitqueue6.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue5.target,
                        time:infitqueue5.time,
                        anim:infitqueue5.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue6.target,
                        time:fitqueue6.time,
                        anim:fitqueue6.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue4.target,
                        time:infitqueue4.time,
                        anim:infitqueue4.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue5.target,
                        time:fitqueue5.time,
                        anim:fitqueue5.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue3.target,
                        time:infitqueue3.time,
                        anim:infitqueue3.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue4.target,
                        time:fitqueue4.time,
                        anim:fitqueue4.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue2.target,
                        time:infitqueue2.time,
                        anim:infitqueue2.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue3.target,
                        time:fitqueue3.time,
                        anim:fitqueue3.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue1.target,
                        time:infitqueue1.time,
                        anim:infitqueue1.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue2.target,
                        time:fitqueue2.time,
                        anim:fitqueue2.anim,
                    });
            }else{
                animations.push({
                    value:"",
                    target:infitqueue6_5.target,
                    time:infitqueue6.time,
                    anim:infitqueue6.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue4_3.target,
                        time:infitqueue5.time,
                        anim:infitqueue5.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue6_5.target,
                        time:fitqueue6_5.time,
                        anim:fitqueue6_5.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue2_1.target,
                        time:infitqueue2_1.time,
                        anim:infitqueue2_1.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue4_3.target,
                        time:fitqueue4_3.time,
                        anim:fitqueue4_3.anim,
                    });
            }
            animations.push({
                value:"",
                target:queueExitToBus.target,
                time:queueExitToBus.time,
                anim:queueExitToBus.anim,
            });
            animations.push({
                value:adresse,
                target:queueExitToAdr.target,
                time:queueExitToAdr.time,
                anim:queueExitToAdr.anim,
            });
            animations.push({
                value:adresse,
                target:ADRbusToDATABus.target,
                time:ADRbusToDATABus.time,
                anim:ADRbusToDATABus.anim,
            });
            animations.push({
                value:adresse,
                target:ADRToMAR.target,
                time:ADRToMAR.time,
                anim:ADRToMAR.anim,
            });
            animations.push({
                value:adresse,
                target:fitToMar.target,
                time:fitToMar.time,
                anim:fitToMar.anim,
            });
            animations.push({
                value:"READ",
                target:MCanim.target,
                time:MCanim.time,
                anim:MCanim.anim,
            });
            animations.push({
                value:adr,
                target:fitToMdr.target,
                time:fitToMdr.time,
                anim:fitToMdr.anim,
            });
            animations.push({
                value:adr,
                target:infitToMdr.target,
                time:infitToMdr.time,
                anim:infitToMdr.anim,
            });
            animations.push({
                value:"",
                target:MdrToBus.target,
                time:MdrToBus.time,
                anim:MdrToBus.anim,
            });
            animations.push({
                value:adr,
                target:MdrToADR.target,
                time:MdrToADR.time,
                anim:MdrToADR.anim,
            });
            animations.push({
                value:adr,
                target:ADRToMAR.target,
                time:ADRToMAR.time,
                anim:ADRToMAR.anim,
            });
            animations.push({
                value:adr,
                target:fitToMar.target,
                time:fitToMar.time,
                anim:fitToMar.anim,
            });
            animations.push({
                value:"READ",
                target:MCanim.target,
                time:MCanim.time,
                anim:MCanim.anim,
            });
            animations.push({
                value:size==1?byte2+byte1:byte1,
                target:fitToMdr.target,
                time:fitToMdr.time,
                anim:fitToMdr.anim,
            });
            if(target===1){
                animations.push({
                    value:size==1?byte2+byte1:byte1,
                    target:infitToMdr.target,
                    time:infitToMdr.time,
                    anim:infitToMdr.anim,
                });
                animations.push({
                    value:"",
                    target:MdrToBus.target,
                    time:MdrToBus.time,
                    anim:MdrToBus.anim,
                });
                animations.push({
                    value:size==1?byte2+byte1:byte1,
                    target:MdrToRual1.target,
                    time:MdrToRual1.time,
                    anim:MdrToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                });
                animations.push({
                    value:size==1?byte2+byte1:byte1,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                });
            }else if(target===2){
                animations.push({
                    value:size==1?byte2+byte1:byte1,
                    target:infitToMdr.target,
                    time:infitToMdr.time,
                    anim:infitToMdr.anim,
                });
                animations.push({
                    value:"",
                    target:MdrToBus.target,
                    time:MdrToBus.time,
                    anim:MdrToBus.anim,
                });
                animations.push({
                    value:size==1?byte2+byte1:byte1,
                    target:MdrToRual2.target,
                    time:MdrToRual2.time,
                    anim:MdrToRual2.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual2.target,
                    time:BusToRual2.time,
                    anim:BusToRual2.anim,
                });
                animations.push({
                    value:size==1?byte2+byte1:byte1,
                    target:fitToRual2.target,
                    time:fitToRual2.time,
                    anim:fitToRual2.anim,
                });
            }
                if(size==1){
                    return byte2+byte1///à revoir
                }else{
                    return byte1;
                }
                },
                function baseval(adresse,animated,size,depl,animations,is_anim,target){
                    let adressenv=adresse+parseInt(BR.getvalue(),2)+depl;//no need for dep
                    memory.setRam(adressenv);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                        //animation:
            //il faut ajouter d'abord deux shift du queue_____________
            if(size==0){
                animations.push({
                    value:"",
                    target:infitqueue6.target,
                    time:infitqueue6.time,
                    anim:infitqueue6.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue5.target,
                        time:infitqueue5.time,
                        anim:infitqueue5.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue6.target,
                        time:fitqueue6.time,
                        anim:fitqueue6.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue4.target,
                        time:infitqueue4.time,
                        anim:infitqueue4.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue5.target,
                        time:fitqueue5.time,
                        anim:fitqueue5.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue3.target,
                        time:infitqueue3.time,
                        anim:infitqueue3.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue4.target,
                        time:fitqueue4.time,
                        anim:fitqueue4.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue2.target,
                        time:infitqueue2.time,
                        anim:infitqueue2.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue3.target,
                        time:fitqueue3.time,
                        anim:fitqueue3.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue1.target,
                        time:infitqueue1.time,
                        anim:infitqueue1.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue2.target,
                        time:fitqueue2.time,
                        anim:fitqueue2.anim,
                    });
            }else{
                animations.push({
                    value:"",
                    target:infitqueue6_5.target,
                    time:infitqueue6.time,
                    anim:infitqueue6.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue4_3.target,
                        time:infitqueue5.time,
                        anim:infitqueue5.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue6_5.target,
                        time:fitqueue6_5.time,
                        anim:fitqueue6_5.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue2_1.target,
                        time:infitqueue2_1.time,
                        anim:infitqueue2_1.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue4_3.target,
                        time:fitqueue4_3.time,
                        anim:fitqueue4_3.anim,
                    });
            }
            animations.push({
                value:"",
                target:queueExitToBus.target,
                time:queueExitToBus.time,
                anim:queueExitToBus.anim,
            });
            animations.push({
                value:adresse,
                target:queueExitToRual1.target,
                time:queueExitToRual1.time,
                anim:queueExitToRual1.anim,
            });
            animations.push({
                value:"",
                target:BusToRual1.target,
                time:BusToRual1.time,
                anim:BusToRual1.anim,
            });
            animations.push({
                value:adresse,
                target:fitToRual1.target,
                time:fitToRual1.time,
                anim:fitToRual1.anim,
            });
            animations.push({
                value:parseInt(BR.getvalue(),2),
                target:fitToBr.target,
                time:fitToBr.time,
                anim:fitToBr.anim,
            });
            animations.push({
                value:parseInt(BR.getvalue(),2),
                target:infitToBr.target,
                time:infitToBr.time,
                anim:infitToBr.anim,
            });
            animations.push({
                value:parseInt(BR.getvalue(),2),
                target:RegToRual2.target,
                time:RegToRual2.time,
                anim:RegToRual2.anim,
            });
            animations.push({
                value:"",
                target:BusToRual2.target,
                time:BusToRual2.time,
                anim:BusToRual2.anim,
            });
            animations.push({
                value:parseInt(BR.getvalue(),2),
                target:fitToRual2.target,
                time:fitToRual2.time,
                anim:fitToRual2.anim,
            });
            animations.push({
                value:"",
                target:AluToAcc.target,
                time:AluToAcc.time,
                anim:AluToAcc.anim,
            });
            animations.push({
                value:adressenv,
                target:fitToAcc.target,
                time:fitToAcc.time,
                anim:fitToAcc.anim,
            });
            animations.push({
                value:"",
                target:AccToBus.target,
                time:AccToBus.time,
                anim:AccToBus.anim,
            });
            animations.push({
                value:adressenv,
                target:AccToADR.target,
                time:AccToADR.time,
                anim:AccToADR.anim,
            });
            animations.push({
                value:"",
                target:ADRbusToDATABus.target,
                time:ADRbusToDATABus.time,
                anim:ADRbusToDATABus.anim,
            });
            animations.push({
                value:adressenv,
                target:ADRToMAR.target,
                time:ADRToMAR.time,
                anim:ADRToMAR.anim,
            });
            animations.push({
                value:adressenv,
                target:fitToMar.target,
                time:fitToMar.time,
                anim:fitToMar.anim,
            });
            animations.push({
                value:adressenv,
                target:infitToMar.target,
                time:infitToMar.time,
                anim:infitToMar.anim,
            });
            animations.push({
                value:"READ",
                target:MCanim.target,
                time:MCanim.time,
                anim:MCanim.anim,
            });
            animations.push({
                value:byte1,
                target:fitToMdr.target,
                time:fitToMdr.time,
                anim:fitToMdr.anim,
            });
            if(target==1){
                animations.push({
                    value:"",
                    target:MdrToBus.target,
                    time:MdrToBus.time,
                    anim:MdrToBus.anim,
                });
                animations.push({
                    value:byte1,
                    target:MdrToRual1.target,
                    time:MdrToRual1.time,
                    anim:MdrToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                });
                animations.push({
                    value:byte1,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                });
            }else if(target==2){
                animations.push({
                    value:"",
                    target:MdrToBus.target,
                    time:MdrToBus.time,
                    anim:MdrToBus.anim,
                });
                animations.push({
                    value:byte1,
                    target:MdrToRual1.target,
                    time:MdrToRual1.time,
                    anim:MdrToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual2.target,
                    time:BusToRual2.time,
                    anim:BusToRual2.anim,
                });
                animations.push({
                    value:byte1,
                    target:fitToRual2.target,
                    time:fitToRual2.time,
                    anim:fitToRual2.anim,
                });
            }
            ///////////////////////////////////////:
                    if(size==1){
                        adressenv=adressenv+1;
                        memory.setRam(adressenv);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                    
                },
                function indexeval(adresse,animated,size,depl,animations,is_anim,target){
                    let adressenv=adresse+parseInt(IR.getvalue(),2)+depl;//no need for dep
                    memory.setRam(adressenv);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                        //animation:
            //il faut ajouter d'abord deux shift du queue_____________
            if(size==0){
                animations.push({
                    value:"",
                    target:infitqueue6.target,
                    time:infitqueue6.time,
                    anim:infitqueue6.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue5.target,
                        time:infitqueue5.time,
                        anim:infitqueue5.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue6.target,
                        time:fitqueue6.time,
                        anim:fitqueue6.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue4.target,
                        time:infitqueue4.time,
                        anim:infitqueue4.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue5.target,
                        time:fitqueue5.time,
                        anim:fitqueue5.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue3.target,
                        time:infitqueue3.time,
                        anim:infitqueue3.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue4.target,
                        time:fitqueue4.time,
                        anim:fitqueue4.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue2.target,
                        time:infitqueue2.time,
                        anim:infitqueue2.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue3.target,
                        time:fitqueue3.time,
                        anim:fitqueue3.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue1.target,
                        time:infitqueue1.time,
                        anim:infitqueue1.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue2.target,
                        time:fitqueue2.time,
                        anim:fitqueue2.anim,
                    });
            }else{
                animations.push({
                    value:"",
                    target:infitqueue6_5.target,
                    time:infitqueue6.time,
                    anim:infitqueue6.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue4_3.target,
                        time:infitqueue5.time,
                        anim:infitqueue5.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue6_5.target,
                        time:fitqueue6_5.time,
                        anim:fitqueue6_5.anim,
                    });
                    animations.push({
                        value:"",
                        target:infitqueue2_1.target,
                        time:infitqueue2_1.time,
                        anim:infitqueue2_1.anim,
                    });
                    animations.push({
                        value:"",
                        target:fitqueue4_3.target,
                        time:fitqueue4_3.time,
                        anim:fitqueue4_3.anim,
                    });
            }
            animations.push({
                value:"",
                target:queueExitToBus.target,
                time:queueExitToBus.time,
                anim:queueExitToBus.anim,
            });
            animations.push({
                value:adresse,
                target:queueExitToRual1.target,
                time:queueExitToRual1.time,
                anim:queueExitToRual1.anim,
            });
            animations.push({
                value:"",
                target:BusToRual1.target,
                time:BusToRual1.time,
                anim:BusToRual1.anim,
            });
            animations.push({
                value:adresse,
                target:fitToRual1.target,
                time:fitToRual1.time,
                anim:fitToRual1.anim,
            });
            animations.push({
                value:parseInt(IR.getvalue(),2),
                target:fitToIdr.target,
                time:fitToIdr.time,
                anim:fitToIdr.anim,
            });
            animations.push({
                value:parseInt(IR.getvalue(),2),
                target:infitToIdr.target,
                time:infitToIdr.time,
                anim:infitToIdr.anim,
            });
            animations.push({
                value:parseInt(IR.getvalue(),2),
                target:RegToRual2.target,
                time:RegToRual2.time,
                anim:RegToRual2.anim,
            });
            animations.push({
                value:"",
                target:BusToRual2.target,
                time:BusToRual2.time,
                anim:BusToRual2.anim,
            });
            animations.push({
                value:parseInt(IR.getvalue(),2),
                target:fitToRual2.target,
                time:fitToRual2.time,
                anim:fitToRual2.anim,
            });
            animations.push({
                value:"",
                target:AluToAcc.target,
                time:AluToAcc.time,
                anim:AluToAcc.anim,
            });
            animations.push({
                value:adressenv,
                target:fitToAcc.target,
                time:fitToAcc.time,
                anim:fitToAcc.anim,
            });
            animations.push({
                value:"",
                target:AccToBus.target,
                time:AccToBus.time,
                anim:AccToBus.anim,
            });
            animations.push({
                value:adressenv,
                target:AccToADR.target,
                time:AccToADR.time,
                anim:AccToADR.anim,
            });
            animations.push({
                value:"",
                target:ADRbusToDATABus.target,
                time:ADRbusToDATABus.time,
                anim:ADRbusToDATABus.anim,
            });
            animations.push({
                value:adressenv,
                target:ADRToMAR.target,
                time:ADRToMAR.time,
                anim:ADRToMAR.anim,
            });
            animations.push({
                value:adressenv,
                target:fitToMar.target,
                time:fitToMar.time,
                anim:fitToMar.anim,
            });
            animations.push({
                value:adressenv,
                target:infitToMar.target,
                time:infitToMar.time,
                anim:infitToMar.anim,
            });
            animations.push({
                value:"READ",
                target:MCanim.target,
                time:MCanim.time,
                anim:MCanim.anim,
            });
            animations.push({
                value:byte1,
                target:fitToMdr.target,
                time:fitToMdr.time,
                anim:fitToMdr.anim,
            });
            if(target==1){
                animations.push({
                    value:"",
                    target:MdrToBus.target,
                    time:MdrToBus.time,
                    anim:MdrToBus.anim,
                });
                animations.push({
                    value:byte1,
                    target:MdrToRual1.target,
                    time:MdrToRual1.time,
                    anim:MdrToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                });
                animations.push({
                    value:byte1,
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                });
            }else if(target==2){
                animations.push({
                    value:"",
                    target:MdrToBus.target,
                    time:MdrToBus.time,
                    anim:MdrToBus.anim,
                });
                animations.push({
                    value:byte1,
                    target:MdrToRual1.target,
                    time:MdrToRual1.time,
                    anim:MdrToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual2.target,
                    time:BusToRual2.time,
                    anim:BusToRual2.anim,
                });
                animations.push({
                    value:byte1,
                    target:fitToRual2.target,
                    time:fitToRual2.time,
                    anim:fitToRual2.anim,
                });
            }
            ///////////////////////////////////////:
                    if(size==1){
                        adresse=adresse+1;
                        memory.setRam(adresse);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                },
                function baseindexval(adresse,animated,size,depl,animations,is_anim,target){
                    let adressenv=adresse+parseInt(IR.getvalue(),2)+depl+parseInt(BR.getvalue(),2);
                    memory.setRam(adressenv);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                    if(size==1){
                        adresse=adresse+1;
                        memory.setRam(adresse);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                },
                function depl8val(adresse,animated,size,depl,animations,is_anim,target){
                    adresse=adresse+depl;
                    memory.setRam(adresse);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                    if(size==1){
                        adresse=adresse+1;
                        memory.setRam(adresse);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                },
                function depl16val(adresse,animated,size,depl,animations,is_anim,target){
                    adresse=adresse+depl;
                    memory.setRam(adresse);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                    if(size==1){
                        adresse=adresse+1;
                        memory.setRam(adresse);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                }
        ]
        this.modesAdr=[
            null,//pas d'adresse en mode immediat et pour gareder les index comme le code dans la documentation et pas les decaler
            function directAdr(adresse,animated,size,depl,animations,is_anim,target){//here target=0 ==> target=MAR , target=1 ==>target=Acc //because we can performe an addition to have the addresse (ex basé indexé avec ou sans deplacement)
                //animation:
            //il faut ajouter d'abord deux shift du queue_____________
            //if(size==0){
            //     animations.push({
            //         value:"",
            //         target:infitqueue6.target,
            //         time:infitqueue6.time,
            //         anim:infitqueue6.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue5.target,
            //             time:infitqueue5.time,
            //             anim:infitqueue5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue6.target,
            //             time:fitqueue6.time,
            //             anim:fitqueue6.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue4.target,
            //             time:infitqueue4.time,
            //             anim:infitqueue4.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue5.target,
            //             time:fitqueue5.time,
            //             anim:fitqueue5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue3.target,
            //             time:infitqueue3.time,
            //             anim:infitqueue3.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue4.target,
            //             time:fitqueue4.time,
            //             anim:fitqueue4.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue2.target,
            //             time:infitqueue2.time,
            //             anim:infitqueue2.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue3.target,
            //             time:fitqueue3.time,
            //             anim:fitqueue3.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue1.target,
            //             time:infitqueue1.time,
            //             anim:infitqueue1.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue2.target,
            //             time:fitqueue2.time,
            //             anim:fitqueue2.anim,
            //         });
            // }else{
            //     animations.push({
            //         value:"",
            //         target:infitqueue6_5.target,
            //         time:infitqueue6.time,
            //         anim:infitqueue6.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue4_3.target,
            //             time:infitqueue5.time,
            //             anim:infitqueue5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue6_5.target,
            //             time:fitqueue6_5.time,
            //             anim:fitqueue6_5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue2_1.target,
            //             time:infitqueue2_1.time,
            //             anim:infitqueue2_1.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue4_3.target,
            //             time:fitqueue4_3.time,
            //             anim:fitqueue4_3.anim,
            //         });
            // }
            animations.push({
                value:"",
                nom:"queueExitToBus",
                target:queueExitToBus.target,
                time:queueExitToBus.time,
                anim:queueExitToBus.anim,
            });
            if(target===0){
            animations.push({
                value:adresse,
                target:queueExitToAdr.target,
                time:queueExitToAdr.time,
                anim:queueExitToAdr.anim,
            });
            animations.push({
                value:"",
                target:ADRbusToDATABus.target,
                time:ADRbusToDATABus.time,
                anim:ADRbusToDATABus.anim,
            });
            animations.push({
                value:adresse,
                target:ADRToMAR.target,
                time:ADRToMAR.time,
                anim:ADRToMAR.anim,
            });
            animations.push({
                value:adresse,
                target:fitToMar.target,
                time:fitToMar.time,
                anim:fitToMar.anim,
            });
            animations.push({
                value:adresse,
                target:infitToMar.target,
                time:infitToMar.time,
                anim:infitToMar.anim,
            });
        }else if(target===1){
            animations.push({
                value:adresse,
                target:queueExitToAcc.target,
                time:queueExitToAcc.time,
                anim:queueExitToAcc.anim,
            });
            animations.push({
                value:"",
                target:BusToAcc.target,
                time:BusToAcc.time,
                anim:BusToAcc.anim,
            });
            animations.push({
                value:adresse,
                target:fitToAcc.target,
                time:fitToAcc.time,
                anim:fitToAcc.anim,
            });
            }
                return adresse;
            },
            function indirectAdr(adresse,animated,size,depl,animations,is_anim,target){///add
                adresse=adresse;
                memory.setRam(adresse);
                memory.read(0);
                //animation:
            //il faut ajouter d'abord deux shift du queue_____________
            // if(size==0){
            //     animations.push({
            //         value:"",
            //         target:infitqueue6.target,
            //         time:infitqueue6.time,
            //         anim:infitqueue6.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue5.target,
            //             time:infitqueue5.time,
            //             anim:infitqueue5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue6.target,
            //             time:fitqueue6.time,
            //             anim:fitqueue6.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue4.target,
            //             time:infitqueue4.time,
            //             anim:infitqueue4.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue5.target,
            //             time:fitqueue5.time,
            //             anim:fitqueue5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue3.target,
            //             time:infitqueue3.time,
            //             anim:infitqueue3.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue4.target,
            //             time:fitqueue4.time,
            //             anim:fitqueue4.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue2.target,
            //             time:infitqueue2.time,
            //             anim:infitqueue2.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue3.target,
            //             time:fitqueue3.time,
            //             anim:fitqueue3.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue1.target,
            //             time:infitqueue1.time,
            //             anim:infitqueue1.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue2.target,
            //             time:fitqueue2.time,
            //             anim:fitqueue2.anim,
            //         });
            // }else{
            //     animations.push({
            //         value:"",
            //         target:infitqueue6_5.target,
            //         time:infitqueue6.time,
            //         anim:infitqueue6.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue4_3.target,
            //             time:infitqueue5.time,
            //             anim:infitqueue5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue6_5.target,
            //             time:fitqueue6_5.time,
            //             anim:fitqueue6_5.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:infitqueue2_1.target,
            //             time:infitqueue2_1.time,
            //             anim:infitqueue2_1.anim,
            //         });
            //         animations.push({
            //             value:"",
            //             target:fitqueue4_3.target,
            //             time:fitqueue4_3.time,
            //             anim:fitqueue4_3.anim,
            //         });
            // }
            animations.push({
                value:"",
                target:queueExitToBus.target,
                time:queueExitToBus.time,
                anim:queueExitToBus.anim,
            });
            animations.push({
                value:adresse,
                target:queueExitToAdr.target,
                time:queueExitToAdr.time,
                anim:queueExitToAdr.anim,
            });
            animations.push({
                value:adresse,
                target:ADRToMAR.target,
                time:ADRToMAR.time,
                anim:ADRToMAR.anim,
            });
            animations.push({
                value:adresse,
                target:fitToMar.target,
                time:fitToMar.time,
                anim:fitToMar.anim,
            });
            ////read animation
            animations.push({
                value:parseInt(memory.getRim(), 16),
                target:fitToMdr.target,
                time:fitToMdr.time,
                anim:fitToMdr.anim,
            });
            if(target===0){
                animations.push({
                    value:parseInt(memory.getRim(), 16),
                    target:infitToMdr.target,
                    time:infitToMdr.time,
                    anim:infitToMdr.anim,
                });
                animations.push({
                    value:"",
                    target:MdrToBus.target,
                    time:MdrToBus.time,
                    anim:MdrToBus.anim,
                });
                animations.push({
                    value:parseInt(memory.getRim(), 16),
                    target:MdrToADR.target,
                    time:MdrToADR.time,
                    anim:MdrToADR.anim,
                });
                animations.push({
                    value:parseInt(memory.getRim(), 16),
                    target:ADRToMAR.target,
                    time:ADRToMAR.time,
                    anim:ADRToMAR.anim,
                });
                animations.push({
                    value:parseInt(memory.getRim(), 16),
                    target:fitToMar.target,
                    time:fitToMar.time,
                    anim:fitToMar.anim,
                });
            }else if(target===1){
                animations.push({
                    value:parseInt(memory.getRim(), 16),
                    target:infitToMdr.target,
                    time:infitToMdr.time,
                    anim:infitToMdr.anim,
                });
                animations.push({
                    value:"",
                    target:MdrToBus.target,
                    time:MdrToBus.time,
                    anim:MdrToBus.anim,
                });
                animations.push({
                    value:parseInt(memory.getRim(), 16),
                    target:MDRToAcc.target,
                    time:MDRToAcc.time,
                    anim:MDRToAcc.anim,
                });
                animations.push({
                    value:"",
                    target:BusToAcc.target,
                    time:BusToAcc.time,
                    anim:BusToAcc.anim,
                });
                animations.push({
                    value:parseInt(memory.getRim(), 16),
                    target:fitToAcc.target,
                    time:fitToAcc.time,
                    anim:fitToAcc.anim,
                });
                }

                return parseInt(memory.getRim(), 16);
            },
            function baseAdr(adresse,animated,size,depl,animations,is_anim,target){
                animations.push({
                    value:"",
                    nom:"queueExitToBus",
                    target:queueExitToBus.target,
                    time:queueExitToBus.time,
                    anim:queueExitToBus.anim,
                });
                animations.push({
                    value:"",
                    target:queueExitToRual1.target,
                    time:queueExitToRual1.time,
                    anim:queueExitToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:fitToBr.target,
                    time:fitToBr.time,
                    anim:fitToBr.anim,
                });
                animations.push({
                    value:"",
                    target:infitToBr.target,
                    time:infitToBr.time,
                    anim:infitToBr.anim,
                });
                animations.push({
                    value:"",
                    target:RegToRual2.target,
                    time:RegToRual2.time,
                    anim:RegToRual2.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual2.target,
                    time:BusToRual2.time,
                    anim:BusToRual2.anim,
                });
                animations.push({
                    value:"",
                    target:fitToRual2.target,
                    time:fitToRual2.time,
                    anim:fitToRual2.anim,
                });
                animations.push({
                    value:"ADD",
                    target:addanim.target,
                    time:addanim.time,
                    anim:addanim.anim,
                });
                animations.push({
                    value:"",
                    target:AluToAcc.target,
                    time:AluToAcc.time,
                    anim:AluToAcc.anim,
                });
                animations.push({
                    value:"",
                    target:fitToAcc.target,
                    time:fitToAcc.time,
                    anim:fitToAcc.anim,
                });
                if(target==0){
                    animations.push({
                        value:"",
                        target:AccToBus.target,
                        time:AccToBus.time,
                        anim:AccToBus.anim,
                    });
                    animations.push({
                        value:"",
                        target:AccToADR.target,
                        time:AccToADR.time,
                        anim:AccToADR.anim,
                    });
                    animations.push({
                        value:"",
                        target:ADRbusToDATABus.target,
                        time:ADRbusToDATABus.time,
                        anim:ADRbusToDATABus.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:ADRToMAR.target,
                        time:ADRToMAR.time,
                        anim:ADRToMAR.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:fitToMar.target,
                        time:fitToMar.time,
                        anim:fitToMar.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:infitToMar.target,
                        time:infitToMar.time,
                        anim:infitToMar.anim,
                    });
                }
                return adresse+parseInt(BR.getvalue(),2)+depl;
            },
            function indexeAdr(adresse,animated,size,depl,animations,is_anim,target){
                animations.push({
                    value:"",
                    nom:"queueExitToBus",
                    target:queueExitToBus.target,
                    time:queueExitToBus.time,
                    anim:queueExitToBus.anim,
                });
                animations.push({
                    value:"",
                    target:queueExitToRual1.target,
                    time:queueExitToRual1.time,
                    anim:queueExitToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual1.target,
                    time:BusToRual1.time,
                    anim:BusToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:fitToRual1.target,
                    time:fitToRual1.time,
                    anim:fitToRual1.anim,
                });
                animations.push({
                    value:"",
                    target:fitToIdr.target,
                    time:fitToIdr.time,
                    anim:fitToIdr.anim,
                });
                animations.push({
                    value:"",
                    target:infitToIdr.target,
                    time:infitToIdr.time,
                    anim:infitToIdr.anim,
                });
                animations.push({
                    value:"",
                    target:RegToRual2.target,
                    time:RegToRual2.time,
                    anim:RegToRual2.anim,
                });
                animations.push({
                    value:"",
                    target:BusToRual2.target,
                    time:BusToRual2.time,
                    anim:BusToRual2.anim,
                });
                animations.push({
                    value:"",
                    target:fitToRual2.target,
                    time:fitToRual2.time,
                    anim:fitToRual2.anim,
                });
                animations.push({
                    value:"ADD",
                    target:addanim.target,
                    time:addanim.time,
                    anim:addanim.anim,
                });
                animations.push({
                    value:"",
                    target:AluToAcc.target,
                    time:AluToAcc.time,
                    anim:AluToAcc.anim,
                });
                animations.push({
                    value:"",
                    target:fitToAcc.target,
                    time:fitToAcc.time,
                    anim:fitToAcc.anim,
                });
                if(target==0){
                    animations.push({
                        value:"",
                        target:AccToBus.target,
                        time:AccToBus.time,
                        anim:AccToBus.anim,
                    });
                    animations.push({
                        value:"",
                        target:AccToADR.target,
                        time:AccToADR.time,
                        anim:AccToADR.anim,
                    });
                    animations.push({
                        value:"",
                        target:ADRbusToDATABus.target,
                        time:ADRbusToDATABus.time,
                        anim:ADRbusToDATABus.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:ADRToMAR.target,
                        time:ADRToMAR.time,
                        anim:ADRToMAR.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:fitToMar.target,
                        time:fitToMar.time,
                        anim:fitToMar.anim,
                    });
                    animations.push({
                        value:adresse,
                        target:infitToMar.target,
                        time:infitToMar.time,
                        anim:infitToMar.anim,
                    });
                }
                return adresse+parseInt(IR.getvalue(),2)+depl;
            },
            function baseindexeAdr(adresse,animated,size,depl,animations,is_anim,target){
                return adresse+parseInt(IR.getvalue(),2)+parseInt(BR.getvalue(),2)+depl;
            },
            function depl8Adr(adresse,animated,size,depl,animations,is_anim,target){
                return adresse+depl;
            },
            function depl16Adr(adresse,animated,size,depl,animations,is_anim,target){
                return adresse+depl;
            }
        ]
    }
}
export default AddressingModes;