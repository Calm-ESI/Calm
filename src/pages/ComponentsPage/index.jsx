//import components
import { useEffect, useState } from "react";
import {ComponentsCard, NavBar} from "../../components/"
import calmArchi from "../../assets/images/calm/calmArchitecture.svg"

import axios from "axios";
import './style.css';

import React from "react";
import Bot from "../../components/ChatBot";


const Components = () => {
  const [categories, setCategories] = useState({});
  useEffect(()=>{
    const URL = process.env.REACT_APP_API_URL+"/documentation/components/all";
    
    axios.get(URL)
    .then(res =>  {
      const componentsList = res.data.data;
      const result = {};
      
      for (const component of componentsList) {
        if (!result[component.category]) {
          result[component.category] = [];
        }

        result[component.category].push(component);
      }

      setCategories(result);
    })
    .catch(err => {
      alert("error while loading the page... the server isn't correctly responding");
      console.log(err)
    })
  }, [])
  
  return (
    <>
      <NavBar/>
      <div className="globalContainer">
        <div className="imageContainer">
          <p className="title">calM Architecture</p>
          <img src={calmArchi} alt="calm Architecture Picture" className="calmArchi"/>
        </div>
        {
          Object.keys(categories).map(categoryName => 
            <div className="UnitsContainer">
              <p className="title">{categoryName}</p>
              {categories[categoryName].map(component => 
                <ComponentsCard componentInfo={component} key={component.name}/>
              )}
            </div>
          )
        }
      </div>
      <Bot/>
    
    </>
  );
};
export default Components;
