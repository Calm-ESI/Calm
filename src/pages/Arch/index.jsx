import "./style.css"
import { useState, useRef} from "react";
import Archi2 from "../../assets/nvlarchi.png"
import gsap from "gsap";
import queuearrow from "../../assets/images/icons/fleche.png"

//////////////////////////////////////

const Arch = (props)=>{

let [dataBusText,setDataBusText]=useState("");
let [AdrBusText,setAdrBusText]=useState("");
let [ballText,setballText]=useState("");
let [ball2Text,setball2Text]=useState(0);
let [IPval,setipval]=useState(0);
let [AluVal,setAluVal]=useState("");
let [MCVal,setMCVal]=useState("");

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
    console.log("the context : "+thecontext)
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
            }else if(animation.target===".ALU"){
                setAluVal(animation.value);
            }else if(animation.target===".MC"){
                setMCVal(animation.value);
            }
            
            if(animation.nom==="QueueToIr"|animation.nom==="queueExitToBus"){
                //decalage par 1
                gsap.fromTo(".queuearrow",{top:"60%",left:"83%",opacity:"0"},{top:"60%",left:"73%",opacity:"1",duration:0.3});
                gsap.to(".queuearrow",{opacity:"0",duration:"0.1",delay:"0.3"});
                if(animqueuelen()===6){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"1",duration:0.4})
                    gsap.to(".queue4",{opacity:"1",duration:0.4})
                    gsap.to(".queue3",{opacity:"1",duration:0.4})
                    gsap.to(".queue2",{opacity:"1",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===5){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"1",duration:0.4})
                    gsap.to(".queue3",{opacity:"1",duration:0.4})
                    gsap.to(".queue2",{opacity:"1",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===4){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"0",duration:0.4})
                    gsap.to(".queue3",{opacity:"1",duration:0.4})
                    gsap.to(".queue2",{opacity:"1",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===3){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"0",duration:0.4})
                    gsap.to(".queue3",{opacity:"0",duration:0.4})
                    gsap.to(".queue2",{opacity:"1",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===2){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"0",duration:0.4})
                    gsap.to(".queue3",{opacity:"0",duration:0.4})
                    gsap.to(".queue2",{opacity:"0",duration:0.4})
                    gsap.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===1){
                    gsap.to(".queue6",{opacity:"0",duration:0.4})
                    gsap.to(".queue5",{opacity:"0",duration:0.4})
                    gsap.to(".queue4",{opacity:"0",duration:0.4})
                    gsap.to(".queue3",{opacity:"0",duration:0.4})
                    gsap.to(".queue2",{opacity:"0",duration:0.4})
                    gsap.to(".queue1",{opacity:"0",duration:0.4})
                }
            }
            animation.anim(animation.value,h,w);
            if(animqueuelen()===6){
                done=1;
            }
            if(chaine&done===1){
                if(!isNaN(thecontext[tmpctx]) & !isNaN(thecontext[tmpctx])){
                let tl = gsap.timeline();
                tl.add(() => {
                    setball2Text("");
                })
                .fromTo(".ball2",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.782,y:h*0.14,opacity:"0"},{opacity:"1" ,duration:0.5})
                .fromTo(".ball2",{x:w*0.782,y:h*0.14},{y:h*0.18 ,duration:0.8})
                .to(".ball2",{opacity:"0",duration:0.5})
                .add(() => {
                setAdrBusText(thecontext[tmpctx])
                IPval=IPval+2
                setipval(IPval)
                })
                .fromTo(".box-ADR",{x:w*0.753,opacity:"0"},{opacity:"1",duration:0.5})
                .fromTo(".box-ADR",{x:w*0.753},{x:w*0.648,duration:0.8})
                .to(".box-ADR",{opacity:"0" ,duration:0.5})
                .add(() => {
                setball2Text(thecontext[tmpctx]);
                tmpctx++;})
                .fromTo(".ball2",{borderRadius:"10px",width:w*0.032,height:h*0.14,x:w*0.623,y:h*0.165,opacity:"0"},{opacity:"1" ,duration:0.5})
                .to(".ball2",{opacity:"0" ,duration:0.5})
                .add(() => {
                setball2Text(thecontext[tmpctx])})
                .fromTo(".ball2",{borderRadius:"10px",width:w*0.11,height:h*0.06,x:w*0.49,y:h*0.38,opacity:"0"},{opacity:"1" ,duration:0.5})
                .to(".ball2",{opacity:"0" ,duration:0.5})
                .fromTo(".ball2",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.539,y:h*0.445,opacity:"0"},{opacity:"1" ,duration:0.5})
                .fromTo(".ball2",{x:w*0.539,y:h*0.445},{y:h*0.465 ,duration:0.8})
                .to(".ball2",{opacity:"0" ,duration:0.5})
                .add(() => {
                setDataBusText(thecontext[tmpctx])
                tmpctx++;})
                .fromTo(".box-data",{x:w*0.497,opacity:"0"},{opacity:"1",duration:0.5})
                .fromTo(".box-data",{x:w*0.497},{x:w*0.874,duration:0.8})
                .to(".box-data",{opacity:"0" ,duration:0.5})
                .fromTo(".ball2",{height:"2.812%",width:"1.4%",borderRadius:"50%",x:w*0.931,y:h*0.56,opacity:"0"},{opacity:"1" ,duration:0.5})
                .fromTo(".ball2",{x:w*0.931,y:h*0.56},{y:h*0.6638 ,duration:0.5})
                .to(".ball2",{x:w*0.921 ,duration:0.5})
                .to(".ball2",{opacity:"0" ,duration:0.3})
                if(animqueuelen()===5){
                    tl.to(".queue6",{opacity:"1",duration:0.4})
                    tl.to(".queue5",{opacity:"1",duration:0.4})
                    tl.to(".queue4",{opacity:"1",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===4){
                    tl.to(".queue6",{opacity:"1",duration:0.4})
                    tl.to(".queue5",{opacity:"1",duration:0.4})
                    tl.to(".queue4",{opacity:"1",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===3){
                    tl.to(".queue6",{opacity:"0",duration:0.4})
                    tl.to(".queue5",{opacity:"1",duration:0.4})
                    tl.to(".queue4",{opacity:"1",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===2){
                    tl.to(".queue6",{opacity:"0",duration:0.4})
                    tl.to(".queue5",{opacity:"0",duration:0.4})
                    tl.to(".queue4",{opacity:"1",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===1){
                    tl.to(".queue6",{opacity:"0",duration:0.4})
                    tl.to(".queue5",{opacity:"0",duration:0.4})
                    tl.to(".queue4",{opacity:"0",duration:0.4})
                    tl.to(".queue3",{opacity:"1",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }else if(animqueuelen()===0){
                    tl.to(".queue6",{opacity:"0",duration:0.4})
                    tl.to(".queue5",{opacity:"0",duration:0.4})
                    tl.to(".queue4",{opacity:"0",duration:0.4})
                    tl.to(".queue3",{opacity:"0",duration:0.4})
                    tl.to(".queue2",{opacity:"1",duration:0.4})
                    tl.to(".queue1",{opacity:"1",duration:0.4})
                }}
            };
        }, dl);
    }
    const animqueuelen=()=>{
        let len=0
        if(q6.current.style.opacity===1){
            len=len+1;
        }
        if(q5.current.style.opacity===1){
            len=len+1;
        }
        if(q4.current.style.opacity===1){
            len=len+1;
        }
        if(q3.current.style.opacity===1){
            len=len+1;
        }
        if(q2.current.style.opacity===1){
            len=len+1;
        }
        if(q1.current.style.opacity===1){
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
            while(k<10&!stop&!(k+j===props.anim.length)){
                if(props.anim[k+j-4>0?k+j-4:k+j].target!==".box-data"&props.anim[k+j-4>0?k+j-4:k+j].target!==".box-ADR"){
                    k++;
                }else{
                    stop=true;
                }
            }
            if(k===10&animqueuelen()<=4&allow){
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
    <div className="ALU" style={{
        height:"5%",
        width:"10%",
        position:"absolute",
        top:"75%",
        left:"17%",
        opacity:"0",
        color:"#1BE988",
        fontSize:"32px",
        fontWeight:"800"
    }}>{AluVal}</div>
    <div className="MC" style={{
        height:"5%",
        width:"10%",
        position:"absolute",
        top:"16%",
        left:"48.7%",
        opacity:"0",
        color:"#1BE988",
        fontSize:"25px",
        fontWeight:"800"
    }}>{MCVal}</div>
    <img src={queuearrow} className="queuearrow" alt="" style={{
        width:"60px",
        height:"40px",
        position:"absolute",
        top:"60%",
        left:"73%",
        opacity:"0",
    }} />
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
            <div className="contentTableDivMC">
                <div className="MChead">
                    <p >adresse</p>
                    <p >content</p>
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
                window.location.reload(false);
        }}>return</button>
    </div>
    </>
}
export default Arch;