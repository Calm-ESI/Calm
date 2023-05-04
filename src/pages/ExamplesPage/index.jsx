import React, { useEffect } from 'react'
import "./style.css"
import questionMark from "../../assets/images/icons/question-signe-en-cercles.png"

import {NavBar, Title} from "../../components"
import {Footer} from "../../containers"
import { motion } from 'framer-motion'

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

        <section style={{marginTop: "3em", position: "relative", display: "flex", justifyContent: "center"}}>
            <div id="example-icon">
                <img src={questionMark} alt="?" width="50px" style={{marginRight: "10px"}}/>
                <p>Examples</p>
            </div>

            <div id="examplesBloc">
                <div class="examples">
                    <p>Manipulating Arrays</p>
                    <motion.div
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        class="execButton">
                        Execute
                    </motion.div>
                </div>

                <div class="examples">
                    <p>Manipulating Linked Lists</p>
                    <motion.div
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        class="execButton">
                        Execute
                    </motion.div>
                </div>

                <div class="examples">
                    <p>Manipulating Binary Search Tree</p>
                    <motion.div
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        class="execButton">
                        Execute
                    </motion.div>
                </div>
                <div class="examples">
                    <p>Example 4</p>
                    <motion.div
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        class="execButton">
                        Execute
                    </motion.div>
                </div>
                <div class="examples">
                    <p>Example 5</p>
                    <motion.div
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        class="execButton">
                        Execute
                    </motion.div>
                </div>
            </div>
        </section>
    
        <Footer></Footer>
    </>
  )
}

export default ExamplesPage