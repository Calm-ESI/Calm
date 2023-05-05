import LearnCard from "../../components/LearnCard";
import {motion} from "framer-motion";
import "./style.css";
const Learn = ({ title, link, text, img,download }) => {
  return (
    <div className="LearnSectionContainer">
      <p
        className="LearnTitle"
        style={{ gridColumn: "1 /3", gridRow: "1 / 2" }}
      >
        {title}
      </p>
      <LearnCard style={{gridColumn: "1 / 2", gridRow: " 2 / 5" , marginTop:"0"}} img={img} />
      <p className="LearnContent" style={{gridColumn: " 2/3", gridRow: "2 / 4", position:"relative", height:"50%", width:"70%", justifySelf: "center", alignSelf:"end"}}>
          {text}
      </p>
      <motion.div
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          transition={{type: "spring", stiffness: 400, damping: 17}}
          className="LearnButton" style={{gridColumn: "2 / 3", gridRow: " 4 / 5", justifySelf: "center"}}>
        {  download ===1 ? <a href={link} style={{textDecoration: "none", color: "black"}}>Download</a>  :<a href={link} style={{textDecoration: "none", color: "black"}}>Discover</a> 
        }
        </motion.div>
    </div>
  );
};
export default Learn;
