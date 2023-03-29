import Archi from "./assets/archi.png"
import { useEffect } from "react";
import { useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
const Arch = (props)=>{
    ///////////////to add delay/////
    const animate=(i,animation,h,w)=>{
        setTimeout(function() {
            animation(h,w);
        }, 8000 * i);
    }
    let myref=useRef()
    const simulate=(h,w) => {
        let i=0;
        for(let animation of props.anim){
            animate(i,animation,h,w);
            i++;
        };}
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
    <img src={Archi} alt="" className="archi" ref={myref} onLoad={()=>{simulate(myref.current.clientHeight,myref.current.clientWidth)}}/>
    <div className="box-data"style={{
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
    }}></div>
    <div className="ball" style={{
        height:"2.812%",
        width:"1.4%",
        borderRadius:"50%",
        position:"fixed",
        backgroundColor: "#1BE985",
        top:`0%`,
        left:'0%',
    }}></div> 
    </div>{/*///*/}
    </>
}
export default Arch;