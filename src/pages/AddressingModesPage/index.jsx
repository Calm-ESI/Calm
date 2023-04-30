//import components
import { NavBar, AddressingModeCard } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";

import {NavBar, AddressingModeCard} from "../../components";

//import images
import basedOnPic from "../../assets/images/calm/addressing-modes/based.png";
import directPic from "../../assets/images/calm/addressing-modes/direct.png";
import doubleArrowPic from "../../assets/images/calm/addressing-modes/double-right-arrow.png";
import immediatePic from "../../assets/images/calm/addressing-modes/immediate.png";
import indirectPic from "../../assets/images/calm/addressing-modes/indirect.png";
import rightArrowPic from "../../assets/images/calm/addressing-modes/right-arrow.png";
import rightIndexPic from "../../assets/images/calm/addressing-modes/pointing.png";
import basedIndexedPic from "../../assets/images/calm/addressing-modes/basedIndexed.png";
import {properties} from "../../Constants/modesDescription";

/*
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
  );*/



const AdressingModes = () => {
    // TODO: fix the description props passing
    return (
        <>
            <NavBar/>
            <div className="globalContainer">
                <div className="AdressModeCardsContainer">
                    <p className="title">Adressing Modes</p>
                {/*    <AddressingModeCard modeName={"Immediate"} modePicture={immediatePic}*/}
                {/*                        description={"Getting the information " +*/}
                {/*                            "immediately from the instruction code after decoding it, so the operand  would be in the second part of " +*/}
                {/*                            "the instruction (depending if where in the general format or the reduced format) to be used in the " +*/}
                {/*                            "execution with no memory access and that’s why it’s called immediate."}/>*/}
                {/*    <AddressingModeCard modeName={"Direct"} modePicture={directPic}*/}
                {/*                        description={"Getting the information directly from it’s memory address that is " +*/}
                {/*                            "provided by the instruction, so here we’ll have to do one memory access to " +*/}
                {/*                            "retrieve the information."}/>*/}
                {/*    <AddressingModeCard modeName={"Indirect"} modePicture={indirectPic} description={"Getting the " +*/}
                {/*        "information directly from it’s memory address that is provided by the instruction, so here " +*/}
                {/*        "we’ll have to do one memory access to retrieve the information."}/>*/}
                {/*    <AddressingModeCard modeName={"Based"} modePicture={basedOnPic} description={"Getting the " +*/}
                {/*        "information based on the address stored in the base register, so we’ll have to do some " +*/}
                {/*        "calculation by adding the value that we have in the instruction to the address found in the " +*/}
                {/*        "base register to get the physical address of the data, it is used mostly to retrieve data from " +*/}
                {/*        "arrays based on the first element of the array and it requires 1 memory access."}/>*/}
                {/*    <AddressingModeCard modeName={"Indexed"} modePicture={rightIndexPic}/>*/}
                {/*    <AddressingModeCard modeName={"Based Indexed"} modePicture={basedIndexedPic}/>*/}
                {/*    <AddressingModeCard*/}
                {/*        modeName={"Shift on 8 bits"}*/}
                {/*        modePicture={rightArrowPic}*/}
                {/*    />*/}
                {/*    <AddressingModeCard*/}
                {/*        modeName={"Shift on 16 bits"}*/}
                {/*        modePicture={doubleArrowPic}*/}
                {/*    />*/}
                    {properties.map( (item) => (
                        <AddressingModeCard modesDescription={item} key={item.id}/>)
                    )}
                </div>
            </div>
        </>
    );
};
export default AdressingModes;
