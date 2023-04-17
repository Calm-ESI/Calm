import LearnCard from "./LearnCard";
const Learn = ({ title }) => {
  return (
    <div className="LearnSectionContainer">
      <p
        className="LearnTitle"
        style={{ gridColumn: "1 /3", gridRow: "1 / 2" }}
      >
        {title}
      </p>
      <LearnCard style={{ gridColumn: "1 / 2", gridRow: " 2 / 5" , marginTop:"0"}} />
      <p style={{ gridColumn: " 2/3", gridRow: "2 / 4", position:"relative", height:"50%", width:"70%", alignSelf:"center" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          alias corporis esse eum eveniet, exercitationem illum in iusto
          molestias nesciunt
      </p>
      <div className="LearnButton" style={{ gridColumn: "2 / 3", gridRow: " 4 / 5" }}>Discover</div>
    </div>
  );
};
export default Learn;
