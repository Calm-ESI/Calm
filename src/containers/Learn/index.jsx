import LearnCard from "../../components/LearnCard";
const Learn = ({ title, link, text }) => {
  return (
    <div className="LearnSectionContainer">
      <p
        className="LearnTitle"
        style={{ gridColumn: "1 /3", gridRow: "1 / 2" }}
      >
        {title}
      </p>
      <LearnCard style={{gridColumn: "1 / 2", gridRow: " 2 / 5" , marginTop:"0"}} />
      <p style={{gridColumn: " 2/3", gridRow: "2 / 4", position:"relative", height:"50%", width:"70%", justifySelf: "center", alignSelf:"end"}}>
          {text}
      </p>
      <div className="LearnButton" style={{gridColumn: "2 / 3", gridRow: " 4 / 5", justifySelf: "center"}}>
        <a href={link} style={{textDecoration: "none", color: "black"}}>Discover</a> 
        </div>
    </div>
  );
};
export default Learn;
