import React, { useEffect } from 'react'
import "./style.css"
import questionMark from "../../assets/images/icons/question-signe-en-cercles.png"

import {NavBar} from "../../components"
import {Footer} from "../../containers"
import Bot from "../../components/ChatBot";

import { Example } from '../../components'
import programs from '../../Constants/programs'

const ExamplesPage = () => {
    
    useEffect( () => {
        const scrollableDiv = document.querySelector("#examplesBloc");

        // show scrollbar 
        scrollableDiv.classList.add("scrolling");
        setTimeout(() => {
            //hide scrollbar after 2s
            scrollableDiv.classList.remove("scrolling");
        }, 3000);
    
        scrollableDiv.addEventListener("scroll", () => {
            if (scrollableDiv.classList.contains("scrolling")) {
                return;
            }
    
            scrollableDiv.classList.add("scrolling");
    
            setTimeout(() => {
                scrollableDiv.classList.remove("scrolling");
            }, 1000);
        });
    }, [])

  return (
    <>
        <NavBar></NavBar>

        <section style={{marginTop: "3em", position: "relative", display: "flex", justifyContent: "center"}}>
            <div id="example-icon">
                <img src={questionMark} alt="?" width="50px" style={{marginRight: "10px"}}/>
                <p>Examples</p>
            </div>

            <div id="examplesBloc">
                {programs.map(program => <Example title={program.title} content={program.content}/>)}
            </div>
        </section>
        
        <Bot/>
    
        <Footer></Footer>
    </>
  )
}

export default ExamplesPage