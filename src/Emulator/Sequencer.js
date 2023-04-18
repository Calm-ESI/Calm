import { Register } from "./Register.js";
import { queue } from "../Ide.jsx";
import { Registers } from "../Ide.jsx";
import { hash,hashmap } from "./Opcodes.js";
import { addressingModes } from "../Ide.jsx";
import { gsap } from "gsap";
const fitToR1={
    value:"",
    target:".ball",
    time:1000,
    anim:(val,h,w)=>{
      gsap.fromTo(".ball",{borderRadius:"10px",width:w*0.1,height:h*0.045,x:w*0.442,y:h*0.6105,opacity:"0"},{opacity:"1" ,duration:1});
    //   gsap.fromTo(".ball",{height:"2.812%",width:"1.4%"},{borderRadius:"10px",width:w*0.1,height:h*0.045,duration:1,delay:1});
    //   gsap.to(".ball",{opacity:"0" ,duration:1,delay:3});
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
      const RegToRual2={
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
  const RegToRual1={
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

class Sequenceur{
    constructor(){
        this.RI=new Register();
    };
    getinstrbyte(animations,is_animated){//from the queue
        let Inshex=queue.shift();
        let Ins=hex2bin(Inshex);
        this.RI.setvalue(Ins);
        //the animation for this instruction goes here
        

        /////those 2 animations must be at the same time___________________


        if(is_animated){
        //animation of shift from queue
        // animations.push({
        //     value:"",
        //     target:infitqueue6.target,
        //     time:infitqueue6.time,
        //     anim:infitqueue6.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:infitqueue5.target,
        //         time:infitqueue5.time,
        //         anim:infitqueue5.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:fitqueue6.target,
        //         time:fitqueue6.time,
        //         anim:fitqueue6.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:infitqueue4.target,
        //         time:infitqueue4.time,
        //         anim:infitqueue4.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:fitqueue5.target,
        //         time:fitqueue5.time,
        //         anim:fitqueue5.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:infitqueue3.target,
        //         time:infitqueue3.time,
        //         anim:infitqueue3.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:fitqueue4.target,
        //         time:fitqueue4.time,
        //         anim:fitqueue4.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:infitqueue2.target,
        //         time:infitqueue2.time,
        //         anim:infitqueue2.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:fitqueue3.target,
        //         time:fitqueue3.time,
        //         anim:fitqueue3.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:infitqueue1.target,
        //         time:infitqueue1.time,
        //         anim:infitqueue1.anim,
        //     });
        //     animations.push({
        //         value:"",
        //         target:fitqueue2.target,
        //         time:fitqueue2.time,
        //         anim:fitqueue2.anim,
        //     });
        animations.push({
            value:"",
            nom:"QueueToIr",
            target:QueueToIr.target,
            time:QueueToIr.time,
            anim:QueueToIr.anim,
        });
        animations.push({
            value:Ins,
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
        animations.push({
            value:Ins,
            target:fitToDecode.target,
            time:fitToDecode.time,
            anim:fitToDecode.anim,
        });
        animations.push({
            value:Ins,
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
            value:Ins,
            target:fitToSequencer.target,
            time:fitToSequencer.time,
            anim:fitToSequencer.anim,
        });
        ///animation of the sequencer
    }
    queue.fetchInstruction(animations,5,false);//----///here we have the fetch from the memory
    }
    decode(animations){
        let instruction=this.RI.getvalue();
        let key=instruction.substring(0,4);
        let index=0;
        let instrObject;
        if(key>='0100'){
            let numreg=instruction.substring(4,7);
            let taille=instruction.charAt(7);
            index=hash(key);
            instrObject=hashmap[index].instrObject;
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
        }else{
            if(key>='0010' & key<='0011'){
                key=instruction.substring(0,7);
                let taille=instruction.charAt(7);
                index=hash(key);
                instrObject=hashmap[index].instrObject;
                if(!(key=='0011010'| key =='0010000' | key =='0010001')){
                    this.getinstrbyte(animations,false);
                    let adresse=this.RI.getvalue()
                    this.getinstrbyte(animations,false);
                    adresse=adresse+this.RI.getvalue()
                    adresse=parseInt(adresse,2);//hexa to decimal
                    instrObject.addresse1=adresse;
                    instrObject.taille=taille;
                }
            }else{
                key=instruction.substring(0,7);
                let taille=instruction.charAt(7);
                this.getinstrbyte(animations,true);
                let secondByte=this.RI.getvalue();
                //secondByte=hex2bin(secondByte);
                let Ind=secondByte.substring(0,2);
                let regMod1=secondByte.substring(2,5);
                let regMod2=secondByte.substring(5,8);
                if(key=='0001100'){
                    key=key+Ind;
                    index=hash(key);
                    instrObject=hashmap[index].instrObject;
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
                        this.getinstrbyte(animations,false);
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte(animations,false);
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let depl=0;
                        if(regMod2=='110'){
                            depl=this.getinstrbyte(animations,false);
                            depl=parseInt(depl,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte(animations,false);
                            let depl=this.RI.getvalue()
                            this.getinstrbyte(animations,false);
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresse,0,taille,depl,animations,1/*is animated*/,0/*where to put the value */);
                        instrObject.value2=value2;
                        instrObject.register1=parseInt(regMod1,2);
                    }else if(key=='000110010'){
                        this.getinstrbyte(animations,false);
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte(animations,false);
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
                            this.getinstrbyte(animations,false);
                            depl=this.RI.getvalue();
                            depl=parseInt(depl,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte(animations,false);
                            depl=this.RI.getvalue()
                            this.getinstrbyte(animations,false);
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let addresse1 = addressingModes.modesAdr[parseInt(regMod1,2)](adresse,0,taille,depl,animations,1,0);
                        instrObject.value2=value2;
                        instrObject.register2=parseInt(regMod2,2);
                        instrObject.addresse1=addresse1;
                    }else if(key=='000110011'){
                        this.getinstrbyte(animations,false);
                        let adresseop1=this.RI.getvalue()
                        this.getinstrbyte(animations,false);
                        adresseop1=adresseop1+this.RI.getvalue()
                        adresseop1=parseInt(adresseop1,2);//hexa to decimal
                        this.getinstrbyte(animations,false);
                        let adresseop2=this.RI.getvalue()
                        this.getinstrbyte(animations,false);
                        adresseop2=adresseop2+this.RI.getvalue()
                        adresseop2=parseInt(adresseop2,2);//hexa to decimal
                        let depl1=0;
                        if(regMod1=='110'){
                            this.getinstrbyte(animations,false);
                            depl1=this.RI.getvalue();
                            depl1=parseInt(depl1,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte(animations,false);
                            depl1=this.RI.getvalue()
                            this.getinstrbyte(animations,false);
                            depl1=depl1+this.RI.getvalue()
                            depl1=parseInt(depl1,2);//hexa to decimal
                        }
                        let depl2=0;
                        if(regMod2=='110'){
                            this.getinstrbyte(animations,false);
                            depl2=this.RI.getvalue();
                            depl2=parseInt(depl2,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte(animations,false);
                            depl2=this.RI.getvalue()
                            this.getinstrbyte(animations,false);
                            depl2=depl2+this.RI.getvalue()
                            depl2=parseInt(depl2,2);//hexa to decimal
                        }
                        let addresse1 = null
                        if(parseInt(regMod2,2)=="000"){
                            instrObject.isimmed=true;
                            addresse1 = addressingModes.modesAdr[parseInt(regMod1,2)](adresseop1,0,taille,depl1,animations,1,0);
                        }else{
                            instrObject.isimmed=false;
                            addresse1 = addressingModes.modesAdr[parseInt(regMod1,2)](adresseop1,0,taille,depl1,animations,1,1);
                        }
                        let value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresseop2,0,taille,depl2,animations,1,0);
                        instrObject.value2=value2;
                        instrObject.addresse1=addresse1;
                    }
                }else{
                    index=hash(key);
                    instrObject=hashmap[index].instrObject;
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
                        instrObject.value1=value1;
                        instrObject.value2=value2;
                        instrObject.register2=parseInt(regMod2,2);
                        instrObject.register1=parseInt(regMod1,2);
                    }else if(Ind=='01'){
                        this.getinstrbyte(animations,false);
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte(animations,false);
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let depl=0;
                        if(regMod2=='110'){
                            this.getinstrbyte(animations,false);
                            depl=this.RI.getvalue();
                            depl=parseInt(depl,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte(animations,false);
                            depl=this.RI.getvalue()
                            this.getinstrbyte(animations,false);
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
                        instrObject.value1=value1;
                        ///animation from the register to RUAL1
                        instrObject.value2=value2;
                    }else if(Ind=='10'){
                        this.getinstrbyte(animations,false);
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte(animations,false);
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let depl=0;
                        if(regMod1=='110'){
                            this.getinstrbyte(animations,false);
                            depl=this.RI.getvalue();
                            depl=parseInt(depl,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte(animations,false);
                            depl=this.RI.getvalue()
                            this.getinstrbyte(animations,false);
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let value1 =addressingModes.modesVal[parseInt(regMod1,2)](adresse,0,taille,depl,animations,1,1);
                        let value2=0;
                        if(taille=='1'){
                            value2 = parseInt(Registers[parseInt(regMod2, 2)].getvalue(),2);/////les animations des registres vers RUAL
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
                                target:RegToRual1.target,
                                time:RegToRual1.time,
                                anim:RegToRual1.anim,
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
                        instrObject.value1=value1;
                        instrObject.value2=value2;
                        ///animation from the register to RUAL1
                    }else if(Ind=='11'){
                        this.getinstrbyte(animations,false);
                        let adresse1=this.RI.getvalue()
                        this.getinstrbyte(animations,false);
                        adresse1=adresse1+this.RI.getvalue()
                        adresse1=parseInt(adresse1,2);//hexa to decimal
                        this.getinstrbyte(animations,false);
                        let adresse2=this.RI.getvalue()
                        this.getinstrbyte(animations,false);
                        adresse2=adresse2+this.RI.getvalue()
                        adresse2=parseInt(adresse2,2);//hexa to decimal
                        let depl1=0;
                        if(regMod1=='110'){
                            this.getinstrbyte(animations,false);
                            depl1=this.RI.getvalue();
                            depl1=parseInt(depl1,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte(animations,false);
                            depl1=this.RI.getvalue()
                            this.getinstrbyte(animations,false);
                            depl1=depl1+this.RI.getvalue()
                            depl1=parseInt(depl1,2);//hexa to decimal
                        }
                        let depl2=0;
                        if(regMod2=='110'){
                            this.getinstrbyte(animations,false);
                            depl2=this.RI.getvalue();
                            depl2=parseInt(depl2,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte(animations,false);
                            depl2=this.RI.getvalue()
                            this.getinstrbyte(animations,false);
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
        return instrObject;
    }
    execute(instrObject,is_animated,animations){
        for (let i = 0; i < instrObject.stepsNum ; i++) {
            instrObject.steps[i]();
        }
        if(is_animated===1 & instrObject.animationSteps.length>0){
            for (let i = 0; i < instrObject.animationSteps.length; i++) {
                let tempobj={...instrObject.animationSteps[i]};
                if(tempobj.value==="value2"){
                    tempobj.value=instrObject.value2;
                }else if(tempobj.value==="res"){
                    tempobj.value=instrObject.res;
                }else if(tempobj.value==="addresse1"){
                    tempobj.value=instrObject.addresse1;
                }
                
                animations.push(tempobj)
                
            }
        }
    }
}
export default Sequenceur;