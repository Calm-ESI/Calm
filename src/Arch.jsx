import Archi from "./assets/archi.png"
import { useRef,useState,useEffect } from "react";
import  {animations}  from "./Emulator/animations.js";
const Arch = ()=>{
    const boxRef = useRef();
    // X
    const [x, setX] = useState();
    // Y
    const [y, setY] = useState();
    // This function calculate X and Y
    const getPosition = () => {
    const x = boxRef.current.offsetLeft;
    setX(x);
    const y = boxRef.current.offsetTop;
    setY(y);
    };
    // Get the position of the red box in the beginning
    useEffect(() => {
    getPosition();
    }, []);
    //Re-calculate X and Y of the red box when the window is resized by the user
    useEffect(() => {
    for(let animation of animations){
        animation();
    }
    }, []);
//////////////////////////
    return <>
    <img src={Archi} alt="" className="archi" ref={boxRef} />
    <div className="box" style={{
        height:"120px",//Y
        width:"140px",//X
        backgroundColor:"red",
        position:"absolute",
        top:`${y}px`,
        left:`${x}px`,
    }}></div> 
    </>
}
export default Arch