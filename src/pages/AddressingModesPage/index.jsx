//import components
import { NavBar, AddressingModeCard } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";

// import {properties} from "../../Constants/modesDescription";

const AdressingModes = () => {
    // TODO: fix the description props passing
    
  const [addressingModesInfos, setaddressingModesInfos] = useState([]);
  
  useEffect(()=>{
    const URL = process.env.REACT_APP_API_URL+"/documentation/addressing-modes/all";
    
    axios.get(URL)
    .then(res =>  {
      console.log(res.data.data)
      setaddressingModesInfos(res.data.data);
    })
    .catch(err => console.log(err))
  }, [])
  
    return (
        <>
            <NavBar/>
            <div className="globalContainer">
                <div className="AdressModeCardsContainer">
                    <p className="title">Adressing Modes</p>
                    
                    {addressingModesInfos.map( (item) => (
                        <AddressingModeCard modesDescription={item} key={item.name}/>)
                    )}
                </div>
            </div>
        </>
    );
};

export default AdressingModes;
