import Archi from "../../assets/images/calm/archi.png"
import "./style.css"
import { useState, useRef} from "react";
import Archi2 from "../../assets/nvlarchi.png"
import gsap from "gsap";
// import MaterialReactTable from 'material-react-table';
// import { animationControls, animations } from "framer-motion";


//////////////////////////////////////
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
/////////////////////////////////////
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
const MdrTOQue={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
    gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.874,duration:1,delay:1})
    gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  
  const MdrToReg={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.44,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}

  const RegToMdr={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.44,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.44},{x:w*0.497,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  
  const MdrToIO={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.182,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  const IOToMdr={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.182,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.182},{x:w*0.497,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  const MdrToRual1={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.262,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
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

  const MdrToRual2={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.106,duration:1,delay:1})
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
  
  const MdrToADR={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.497},{x:w*0.705,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
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


  const Rual1ToADR={
    value:"",
    target:".box-data",
    time:3000,
    anim:(val,h,w)=>{
    gsap.fromTo(".box-data",{x:w*0.44,opacity:"0"},{opacity:"1",duration:1})
  gsap.fromTo(".box-data",{x:w*0.44},{x:w*0.705,duration:1,delay:1})
  gsap.to(".box-data",{opacity:"0" ,duration:1,delay:2});
  },}
  

//////////////////////////////////////

const Arch = (props)=>{

let [dataBusText,setDataBusText]=useState("");
let [AdrBusText,setAdrBusText]=useState("");
let [ballText,setballText]=useState("");
let [ball2Text,setball2Text]=useState(0);
let [IPval,setipval]=useState(0);

let MC=props.mem.getData();
let tablec=[];
MC.forEach((element,index) => {
    tablec.push( <tr>
    <td>
        {index}
    </td>
    <td>
        {element}
    </td>
</tr>)
});
    ///////////////to add delay/////
    let thecontext=[...props.theCTX];
    let tmpctx=0;
    let done=0;
    const animate=(i,animation,h,w,dl,chaine)=>{
        setTimeout(function() {
            if(animation.target===".ball"){
                if(animation.value.toString().length>7){
                    setballText(parseInt(animation.value, 2).toString(16));
                }else{
                    setballText(animation.value.toString());
                }
            }else if(animation.target===".box-data"){
                if(animation.value.toString().length>7){
                    setDataBusText(parseInt(animation.value, 2).toString(16));
                }else{
                    setDataBusText(animation.value.toString());
                }
            }else if(animation.target===".box-ADR"){
                if(animation.value.toString().length>7){
                    setAdrBusText(parseInt(animation.value, 2).toString(16));
                }else{
                    setAdrBusText(animation.value.toString());
                }
            }else if(animation.target==="IP"){
                IPval=IPval+2;
                setipval(IPval);
            }
            if(animation.nom==="QueueToIr"|animation.nom==="queueExitToBus"){
                //decalage par 1
                if(animqueuelen()==6){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"1",duration:0.4})
                    gsap.to(".queue4",{opacity:"1",duration:0.4})
                    gsap.to(".queue3",{opacity:"1",duration:0.4})
                    gsap.to(".queue2",{opacity:"1",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==5){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"1",duration:0.4})
                    gsap.to(".queue3",{opacity:"1",duration:0.4})
                    gsap.to(".queue2",{opacity:"1",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==4){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"0",duration:0.4})
                    gsap.to(".queue3",{opacity:"1",duration:0.4})
                    gsap.to(".queue2",{opacity:"1",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==3){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"0",duration:0.4})
                    gsap.to(".queue3",{opacity:"0",duration:0.4})
                    gsap.to(".queue2",{opacity:"1",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==2){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"0",duration:0.4})
                    gsap.to(".queue3",{opacity:"0",duration:0.4})
                    gsap.to(".queue2",{opacity:"0",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==1){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"0",duration:0.4})
                    gsap.to(".queue3",{opacity:"0",duration:0.4})
                    gsap.to(".queue2",{opacity:"0",duration:0.4})
                    gsap.to(".queue1",{opacity:"0",duration:0.4})
                }
            // }else if(animation.nom==="queueExitToBus"){
            //         //decalage par 2
            //         if(animqueuelen()==6){
            //             gsap.to(".queue6",{opacity:"0",duration:0.4})
            //             gsap.to(".queue5",{opacity:"0",duration:0.4})
            //             gsap.to(".queue4",{opacity:"1",duration:0.4})
            //             gsap.to(".queue3",{opacity:"1",duration:0.4})
            //             gsap.to(".queue2",{opacity:"1",duration:0.4})
            //             gsap.to(".queue1",{opacity:"1",duration:0.4})
            //         }else if(animqueuelen()==5){
            //             gsap.to(".queue6",{opacity:"0",duration:0.4})
            //             gsap.to(".queue5",{opacity:"0",duration:0.4})
            //             gsap.to(".queue4",{opacity:"0",duration:0.4})
            //             gsap.to(".queue3",{opacity:"1",duration:0.4})
            //             gsap.to(".queue2",{opacity:"1",duration:0.4})
            //             gsap.to(".queue1",{opacity:"1",duration:0.4})
            //         }else if(animqueuelen()==4){
            //             gsap.to(".queue6",{opacity:"0",duration:0.4})
            //             gsap.to(".queue5",{opacity:"0",duration:0.4})
            //             gsap.to(".queue4",{opacity:"0",duration:0.4})
            //             gsap.to(".queue3",{opacity:"0",duration:0.4})
            //             gsap.to(".queue2",{opacity:"1",duration:0.4})
            //             gsap.to(".queue1",{opacity:"1",duration:0.4})
            //         }else if(animqueuelen()==3){
            //             gsap.to(".queue6",{opacity:"0",duration:0.4})
            //             gsap.to(".queue5",{opacity:"0",duration:0.4})
            //             gsap.to(".queue4",{opacity:"0",duration:0.4})
            //             gsap.to(".queue3",{opacity:"0",duration:0.4})
            //             gsap.to(".queue2",{opacity:"0",duration:0.4})
            //             gsap.to(".queue1",{opacity:"1",duration:0.4})
            //         }else if(animqueuelen()==2){
            //             gsap.to(".queue6",{opacity:"0",duration:0.4})
            //             gsap.to(".queue5",{opacity:"0",duration:0.4})
            //             gsap.to(".queue4",{opacity:"0",duration:0.4})
            //             gsap.to(".queue3",{opacity:"0",duration:0.4})
            //             gsap.to(".queue2",{opacity:"0",duration:0.4})
            //             gsap.to(".queue1",{opacity:"0",duration:0.4})
            //         }else if(animqueuelen()==1){
            //             gsap.to(".queue6",{opacity:"0",duration:0.4})
            //             gsap.to(".queue5",{opacity:"0",duration:0.4})
            //             gsap.to(".queue4",{opacity:"0",duration:0.4})
            //             gsap.to(".queue3",{opacity:"0",duration:0.4})
            //             gsap.to(".queue2",{opacity:"0",duration:0.4})
            //             gsap.to(".queue1",{opacity:"0",duration:0.4})
            //         }
            }
            animation.anim(animation.value,h,w);
            if(animqueuelen()==6){
                done=1;
            }
            if(chaine&done==1){
                
                let tl = gsap.timeline();
                
                tl.fromTo(".ball2",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.782,y:h*0.14,opacity:"0"},{opacity:"1" ,duration:0.5})
                .fromTo(".ball2",{x:w*0.782,y:h*0.14},{y:h*0.18 ,duration:0.8})
                .to(".ball2",{opacity:"0" ,duration:0.5})
                setAdrBusText(thecontext[tmpctx])
                IPval=IPval+2
                setipval(IPval)
                tl.fromTo(".box-ADR",{x:w*0.753,opacity:"0"},{opacity:"1",duration:0.5})
                .fromTo(".box-ADR",{x:w*0.753},{x:w*0.648,duration:0.8})
                .to(".box-ADR",{opacity:"0" ,duration:0.5})
                setball2Text(thecontext[tmpctx]);
                tmpctx++;
                tl.fromTo(".ball2",{borderRadius:"10px",width:w*0.032,height:h*0.14,x:w*0.623,y:h*0.165,opacity:"0"},{opacity:"1" ,duration:0.5})
                .to(".ball2",{opacity:"0" ,duration:0.5});
                setball2Text(thecontext[tmpctx])
                tl.fromTo(".ball2",{borderRadius:"10px",width:w*0.11,height:h*0.06,x:w*0.49,y:h*0.38,opacity:"0"},{opacity:"1" ,duration:0.5})
                .to(".ball2",{opacity:"0" ,duration:0.5})
                tl.fromTo(".ball2",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.539,y:h*0.445,opacity:"0"},{opacity:"1" ,duration:0.5})
                .fromTo(".ball2",{x:w*0.539,y:h*0.445},{y:h*0.465 ,duration:0.8})
                .to(".ball2",{opacity:"0" ,duration:0.5})
                setDataBusText(thecontext[tmpctx])
                tmpctx++;
                tl.fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:0.5})
                .fromTo(".box-data",{x:w*0.497},{x:w*0.874,duration:0.8})
                .to(".box-data",{opacity:"0" ,duration:0.5})
                .fromTo(".ball2",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.931,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:0.5})
                .fromTo(".ball2",{x:w*0.931,y:h*0.56},{y:h*0.6638 ,duration:0.5})
                .to(".ball2",{x:w*0.921 ,duration:0.5})
                .to(".ball2",{opacity:"0" ,duration:0.3})
                if(animqueuelen()==5){
                    tl.to(".queue6",{opacity:"1",duration:0.4})
                    tl.to(".queue5",{opacity:"1",duration:0.4})
                    tl.to(".queue4",{opacity:"1",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==4){
                    tl.to(".queue6",{opacity:"1",duration:0.4})
                    tl.to(".queue5",{opacity:"1",duration:0.4})
                    tl.to(".queue4",{opacity:"1",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==3){
                    tl.to(".queue6",{opacity:"0",duration:0.4})
                    tl.to(".queue5",{opacity:"1",duration:0.4})
                    tl.to(".queue4",{opacity:"1",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==2){
                    tl.to(".queue6",{opacity:"0",duration:0.4})
                    tl.to(".queue5",{opacity:"0",duration:0.4})
                    tl.to(".queue4",{opacity:"1",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==1){
                    tl.to(".queue6",{opacity:"0",duration:0.4})
                    tl.to(".queue5",{opacity:"0",duration:0.4})
                    tl.to(".queue4",{opacity:"0",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()==0){
                    tl.to(".queue6",{opacity:"0",duration:0.4})
                    tl.to(".queue5",{opacity:"0",duration:0.4})
                    tl.to(".queue4",{opacity:"0",duration:0.4})
                    tl.to(".queue3",{opacity:"0",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }
            };
        }, dl);
    }
    const animqueuelen=()=>{
        let len=0
        if(q6.current.style.opacity==1){
            len=len+1;
        }
        if(q5.current.style.opacity==1){
            len=len+1;
        }
        if(q4.current.style.opacity==1){
            len=len+1;
        }
        if(q3.current.style.opacity==1){
            len=len+1;
        }
        if(q2.current.style.opacity==1){
            len=len+1;
        }
        if(q1.current.style.opacity==1){
            len=len+1;
        }
        return len;
    }
    let myref=useRef()
    let q1=useRef();
    let q2=useRef();
    let q3=useRef();
    let q4=useRef();
    let q5=useRef();
    let q6=useRef();
    const simulate=(h,w) => {
        let i=0;
        let dl=0;
        let allow=true;
        let allowtmp=0;
        let j=0
        while(j<props.anim.length){
            let k=0;
            let stop=false;
            let chaine=false;
            allowtmp++;
            if(allowtmp>=10){
                allow=true;
            }
            while(k<10&!stop&!(k+j==props.anim.length)){
                if(props.anim[k+j-4>0?k+j-4:k+j].target!==".box-data"&props.anim[k+j-4>0?k+j-4:k+j].target!==".box-ADR"){
                    k++;
                }else{
                    stop=true;
                }
            }
            if(k==10&animqueuelen()<=4&allow){
                chaine=true;
                allow=false;
                allowtmp=0;
            }
            animate(i,props.anim[j],h,w,dl,chaine);
            dl=dl+props.anim[j].time+1;
            i++;
            // if((props.anim[j+1].nom==="QueueToIr")&(j<props.anim.length-4)&(props.anim[j+2].nom==="fitToIr"|props.anim[j+3].nom==="fitToIr")){//en cas instruction avec 2 general bytes
            // contin=false;
            // }
            j++;
        };
    }
    
    ///////////////////////////////
    // useEffect(() => {
    // let i=0;
    // for(let animation of props.anim){
    //     animate(i,animation);
    //     i++;
    // }
    // // props.anim[0](myref.current.clientHeight,current.clientWidth);
    // },[]);
//////////////////////////
    return <>
    <div className="arch-contain">{/*///*/}
    {/* <img src={Archi} alt="" className="archi" ref={myref} onLoad={()=>{simulate(myref.current.clientHeight,myref.current.clientWidth)}}/> */}
    <img src={Archi2} alt="" className="archi" ref={myref} onLoad={()=>{simulate(myref.current.clientHeight,myref.current.clientWidth)}}/>
    <div className="IP" style={{
        height:"4.2%",
        width:"6%",
        position:"absolute",
        borderRadius:"25%",
        border:"solid #1BE988",
        backgroundColor: "#1BE985",
        top:"5%",
        left:"75%"
        // left:"23%",
        // display:"none",
    }}>{IPval}</div>
    <div className="box-data" style={{
        height:"5%",
        width:"7.5%",
        position:"absolute",
        borderRadius:"25%",
        border:"solid #1BE988",
        backgroundColor: "#1BE985",
        top:"45.89999%",
        // left:"23%",
        // display:"none",
        opacity:"0"
    }}>{dataBusText}</div>
    <div className="ball" style={{
        height:"2.812%",
        width:"1.4%",
        borderRadius:"50%",
        position:"fixed",
        backgroundColor: "#1BE985",
        top:`0%`,
        left:'0%',
    }}>{ballText}</div> 
    <div className="ball2" style={{
        height:"2.812%",
        width:"1.4%",
        borderRadius:"50%",
        position:"fixed",
        backgroundColor: "#1BE985",
        top:`0%`,
        left:'0%',
        opacity:"0",
    }}>{ball2Text}</div> 
    <div className="box-ADR"style={{
        height:"4.2%",
        width:"6%",
        position:"absolute",
        borderRadius:"25%",
        border:"solid #1BE988",
        backgroundColor: "#1BE985",
        top:"17.9%",
        opacity:"0",
    }}>{AdrBusText}
    </div>
    <div className="queue1" ref={q1} style={{
        width:"2%",
        height:"9%",
        position:"absolute",
        backgroundColor: "#1BE985",
        top:"59%",
        left:"74.4%",
        borderRadius:"10px",
        opacity:"0",
    }}></div>
    <div className="queue2" ref={q2} style={{
        width:"2%",
        height:"9%",
        position:"absolute",
        backgroundColor: "#1BE985",
        top:"59%",
        left:"77.1%",
        borderRadius:"10px",
        opacity:"0",
    }}></div>
    <div className="queue3" ref={q3}  style={{
        width:"2%",
        height:"9%",
        position:"absolute",
        backgroundColor: "#1BE985",
        top:"59%",
        left:"79.8%",
        borderRadius:"10px",
        opacity:"0",
    }}></div>
    <div className="queue4" ref={q4} style={{
        width:"2%",
        height:"9%",
        position:"absolute",
        backgroundColor: "#1BE985",
        top:"59%",
        left:"82.6%",
        borderRadius:"10px",
        opacity:"0",
    }}></div>
    <div className="queue5" ref={q5} style={{
        width:"2%",
        height:"9%",
        position:"absolute",
        backgroundColor: "#1BE985",
        top:"59%",
        left:"85.3%",
        borderRadius:"10px",
        opacity:"0",
    }}></div>
    <div className="queue6" ref={q6} style={{
        width:"2%",
        height:"9%",
        position:"absolute",
        backgroundColor: "#1BE985",
        top:"59%",
        left:"88%",
        borderRadius:"10px",
        opacity:"0",
    }}></div>
    </div>{/*///*/}
    <div style={{
        height:"90%",
        width:"25%",
        backgroundColor:"#1C2025",
        position:"fixed",
        right:"1%",
        top:"8%",
        borderRadius:"20px",
        textAlign:"center",
        border:"1px solid #1BE985"
    }}>
        <div>
            <h2 className="contentTableText">Registers</h2>
            <div className="contentTableDiv">
                <div className="aregister">
                    <p className="aregP">R1  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{props.reg[0].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregP">R2  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{props.reg[1].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregP">R3  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{props.reg[2].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregP">R4  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{props.reg[3].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregP">RI  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{props.reg[6].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregP">RB  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{props.reg[5].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregP">RS  :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{props.reg[7].getvalue()}</p></div>
                </div>
                <div className="aregister">
                    <p className="aregP">Acc :</p>
                    <div className="aregC"><p style={{margin:"6px"}}>{props.reg[4].getvalue()}</p></div>
                </div>
            </div>
        </div>
        <div>
            <h2 className="contentTableText">Flags</h2>
            <div className="contentTableDivFlags">
                <div className="aflagdiv"><p className="aflag">{props.flags[0]}</p></div>
                <div className="aflagdiv"><p className="aflag">{props.flags[1]}</p></div>
                <div className="aflagdiv"><p className="aflag">{props.flags[2]}</p></div>
                <div className="aflagdiv"><p className="aflag">{props.flags[3]}</p></div>
                <div className="aflagdiv"><p className="aflag">{props.flags[4]}</p></div>
                <div className="aflagdiv"><p className="aflag">{props.flags[5]}</p></div>
                <div className="aflagdiv"><p className="aflag">{props.flags[6]}</p></div>
                <div className="aflagdiv"><p className="aflag">{props.flags[7]}</p></div>
            </div>
        </div>
        <div>
            <h2 className="contentTableText">MC</h2>
            <div className="contentTableDiv">
                <div className="MChead">
                    <p style={{padding:"0 40px",margin:"10px 0"}}>adresse</p>
                    <p style={{margin:"10px 0"}}>content</p>
                </div>
            <table className="contentTableMC">
                <tbody>
                <tr>
                    <td>
                        adresse
                    </td>
                    <td>
                        content
                    </td>
                </tr>
                    {tablec}
                </tbody>
            </table>
            </div>
        </div>
        <button className="returnBtn" onClick={()=>{
            
        }}>return</button>
    </div>
    </>
}
export default Arch;