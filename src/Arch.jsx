import Archi from "./assets/archi.png"
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
const Arch = (props)=>{

    ///////////////to add delay/////
    const animate=(i,animation, width, height)=>{
        setTimeout(function() {
            animation(width, height);
        }, 4000 * i);
    }

    let myref=useRef()
    ///////////////////////////////
    useEffect(() => {

        setTimeout(() => {
            
            const width = myref.current.clientWidth;
            var height = myref.current.clientHeight;
            console.log(height);
            
            let i=0; 
            for(let animation of props.anim){
                animate(i,animation, width, height);
                i++;
            }

        }, 200);

        // props.anim[0](myref.current.clientHeight,current.clientWidth);

    }, []);

//////////////////////////
    return <>
        <img src={Archi} alt="" className="archi" ref={myref} />
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