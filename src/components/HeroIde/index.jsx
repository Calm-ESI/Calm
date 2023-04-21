// import heroide from "./assets/heroide.svg"
// import { Icon } from '@iconify/react';
import play from "../../assets/images/decorations/play.png"
import TypeWriterEffect from 'react-typewriter-effect';
import "./style.css"

const HeroIde= ()=>{
    // let [show, setshow] = useState("");
    // let [iscode,setIsCode] =useState(true)
    // let [result, setresult] = useState(false);

    

    return <div className="heroide">
        <img src={play} alt="" className="playhero" onMouseEnter={(e)=>{
        e.currentTarget.src=require('../../assets/images/decorations/playgreen.png');
    }} onMouseLeave={(e)=>{
        e.currentTarget.src=require('../../assets/images/decorations/play.png');
    }} />
        
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#45B15D",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"20px"}}
            startDelay={100}
            cursorColor="white"
            text="Add "
            typeSpeed={100}
            hideCursorAfterText={true} />
        
        
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#F9D208",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={500}
            cursorColor="white"
            text=" R1 "
            typeSpeed={100}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#FFF",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={800}
            cursorColor="white"
            text=" ,2 "
            typeSpeed={100}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        />
        <br />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#45B15D",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={1000}
            cursorColor="white"
            text="Sub "
            typeSpeed={100}
            hideCursorAfterText={true}
            
            // scrollArea={myAppRef}
        />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#F9D208",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={1500}
            cursorColor="white"
            text=" R2 "
            typeSpeed={100}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#FFF",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={1800}
            cursorColor="white"
            text=" ,4 "
            typeSpeed={100}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        />
        <br />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#45B15D",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={2000}
            cursorColor="white"
            text="Mul "
            typeSpeed={100}
            hideCursorAfterText={true}
            
            // scrollArea={myAppRef}
        />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#F9D208",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={2500}
            cursorColor="white"
            text=" R1 "
            typeSpeed={100}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#FFF",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={2800}
            cursorColor="white"
            text=" ,R2 "
            typeSpeed={100}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        />
        <br />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#45B15D",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={3000}
            cursorColor="white"
            text="Mov "
            typeSpeed={100}
            hideCursorAfterText={true}
            
            // scrollArea={myAppRef}
        />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#F9D208",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={3500}
            cursorColor="white"
            text=" R4 "
            typeSpeed={100}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#FFF",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={3800}
            cursorColor="white"
            text=" ,Acc "
            typeSpeed={100}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        />
        <br />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#45B15D",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={4000}
            cursorColor="white"
            text="Jmp "
            typeSpeed={100}
            hideCursorAfterText={true}
            
            // scrollArea={myAppRef}
        />
        <TypeWriterEffect
            textStyle={{ fontSize: "24px",color: "#F9D208",fontFamily: "JetBrains Mono , monospace",marginBottom: "-20px",display: "inline-block",marginTop:"10px"}}
            startDelay={4500}
            cursorColor="white"
            text=" fin "
            typeSpeed={100}
            // scrollArea={myAppRef}
        />
        
    </div>
}
export default HeroIde;