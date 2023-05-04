//import components
import { useEffect, useState } from "react";
import {ComponentsCard, NavBar} from "../../components/"

//import images
// import {CUnit} from "../../Constants/componentsDescription";
// import {PUnit} from "../../Constants/componentsDescription";
// import {MUnit} from "../../Constants/componentsDescription";
// import {IOUnit} from "../../Constants/componentsDescription";
import axios from "axios";
import './style.css';

import React from "react";


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
    
    </>
  );
};
export default Components;
