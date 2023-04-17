import title from "./assets/calmtitle.svg"
import brackets from "./assets/brackets.svg"
const Title= () => {
    return <>
    <img src={title} alt="" style={{
        width:"40em",
        gridColumn: "1 / span 4",
        gridRow: "1 / span 2",
        position: "relative",
        left: "15%",
    }}/>
    
    </>
} 
export default Title