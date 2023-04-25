import React, { useEffect } from 'react'
import "./style.css"
import questionMark from "../../assets/images/icons/question-signe-en-cercles.png"

import {NavBar, Title} from "../../components"
import {Footer} from "../../containers"

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
        {/* <Title></Title> */}

        <section style={{marginTop: "8em", position: "relative", display: "flex", justifyContent: "center"}}>
            <div id="example-icon">
                <img src={questionMark} alt="?" width="50px" style={{marginRight: "10px"}}/>
                <p>Examples</p>
            </div>

            <div id="examplesBloc">
                <div class="examples">
                    <p>Manipulating Arrays</p>
                    <div class="execButton">
                        Execute
                    </div>
                </div>

                <div class="examples">
                    <p>Manipulating Linked Lists</p>
                    <div class="execButton">
                        Execute
                    </div>
                </div>

                <div class="examples">
                    <p>Manipulating Binary Search Tree</p>
                    <div class="execButton">
                        Execute
                    </div>
                </div>
                <div class="examples">
                    <p>Example 4</p>
                    <div class="execButton">
                        Execute
                    </div>
                </div>
                <div class="examples">
                    <p>Example 5</p>
                    <div class="execButton">
                        Execute
                    </div>
                </div>
            </div>
        </section>
    
        <Footer></Footer>
    </>
  )
}

export default ExamplesPage