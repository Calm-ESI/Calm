import Archi from "./assets/archi.png"
import { useEffect } from "react";
import { useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
const Arch = (props)=>{
    ///////////////to add delay/////
    const animate=(i,animation)=>{
        setTimeout(function() {
            animation();
        }, 4000 * i);
    }
    let myref=useRef()
    ///////////////////////////////
    useEffect(() => {
    let i=0;
    for(let animation of props.anim){
        animate(i,animation);
        i++;
    }
    // props.anim[0](myref.current.clientHeight,current.clientWidth);
    }, []);
//////////////////////////
    return <>
    <img src={Archi} alt="" className="archi" ref={myref}/>
    <div className="ball" style={{
        height:"2.812%",
        width:"1.4%",
        borderRadius:"50%",
        position:"fixed",
        backgroundColor: "#1BE985",
        top:`13.7%`,
        left:'69%',
    }}></div> 
    </>
}
export default Arch;