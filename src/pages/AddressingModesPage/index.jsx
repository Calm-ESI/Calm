//import components
import { NavBar, AddressingModeCard } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";

const AdressingModes = () => {
  const [addressingModesInfos, setAddressingModesInfos] = useState([]);
  
  useEffect(()=>{
    const URL = process.env.REACT_APP_API_URL+"/documentation/addressing-modes/all";
    // const URL = "https://calm-backend.onrender.com/documentation/addressing-modes/all";
    
    
    axios.get(URL)
    .then(res =>  {
      console.log(res.data.data)
      setAddressingModesInfos(res.data.data);
    })
    .catch(err => console.log(err))
  }, [])

  /*
  const addressingModesInfos = [
    {
      name: 'Immediate',
      description: 'description for addressing 1',
      imagepath: "/assets/images/calm/addressing-modes/immediate.png"
    },
    {
      name: 'Direct',
      description: 'description for addressing 2',
      imagepath: "/assets/images/calm/addressing-modes/direct.png"
    },
    {
      name: 'Indirect',
      description: 'description for addressing 2',
      imagepath: "/assets/images/calm/addressing-modes/indirect.png"
    },
    {
      name: 'Based',
      description: 'description for addressing 2',
      imagepath: "/assets/images/calm/addressing-modes/based.png"
    },
    {
      name: 'Indexed',
      description: 'description for addressing 2',
      imagepath: "/assets/images/calm/addressing-modes/pointing.png"
    },
    {
      name: 'Based Indexed',
      description: 'description for addressing 2',
      imagepath: "/assets/images/calm/addressing-modes/basedIndexed.png"
    },
    {
      name: "Shift on 8 bits",
      description: 'description for addressing 2',
      imagepath: "/assets/images/calm/addressing-modes/right-arrow.png" 
    },
    {
      name: "Shift on 16 bits",
      description: 'description for addressing 2',
      imagepath: "/assets/images/calm/addressing-modes/double-right-arrow.png" 
    }
  ]
  */
  return (
    <>
      <NavBar/>
      <div className="globalContainer">
        <div className="AdressModeCardsContainer">
          <p className="title">Adressing Modes</p>
          {addressingModesInfos.map(addressingModeInfos => 
            <AddressingModeCard key={addressingModeInfos.name} modeName={addressingModeInfos.name}
            modePicture={addressingModeInfos.imagepath}/>
            )}
        </div>
      </div>
    </>
  );
};
export default AdressingModes;
