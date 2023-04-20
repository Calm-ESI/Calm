import Archi from "./assets/archi.png"
import { useState} from "react";
// import gsap from "gsap";
import { useRef } from "react";
// import MaterialReactTable from 'material-react-table';
// import { animationControls, animations } from "framer-motion";


const Arch = (props)=>{

let [dataBusText,setDataBusText]=useState("");
let [AdrBusText,setAdrBusText]=useState("");
let [ballText,setballText]=useState("");
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
    const animate=(i,animation,h,w,dl)=>{
        setTimeout(function() {
            if(animation.target===".ball"){
                setballText(animation.value);
            }else if(animation.target===".box-data"){
                setDataBusText(animation.value);
            }else if(animation.target===".box-ADR"){
                setAdrBusText(animation.value);
            }
            animation.anim(animation.value,h,w);
        }, dl);
    }
    let myref=useRef()
    const simulate=(h,w) => {
        let i=0;
        let dl=0;
        for(let animation of props.anim){
            animate(i,animation,h,w,dl);
            dl=dl+animation.time+1;
            i++;
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
    <img src={Archi} alt="" className="archi" ref={myref} onLoad={()=>{simulate(myref.current.clientHeight,myref.current.clientWidth)}}/>
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
    <div className="box-ADR"style={{
        height:"4.2%",
        width:"6%",
        position:"absolute",
        borderRadius:"25%",
        border:"solid #1BE988",
        backgroundColor: "#1BE985",
        top:"17.75%",
        opacity:"0",
    }}>
    </div>
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
    </div>
    </>
}
export default Arch;