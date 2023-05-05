import './level1.css';
// import img from './to-do-list 2.png' ;
// import img1 from './Vector.png' ;
// import img2 from './heart.png';
// import img3 from './Vector123.png';
// import img4 from './Vector(2).png';
// import img5 from './Vector(3).png';
// import AOS from 'aos';
import React, {useEffect} from 'react';
import Select from 'react-select';
import {NavBar, Title} from "../..";
import {Footer} from "../../../containers";

const questions = [

    {
        num: '1',
        qst: 'How many units are connected to the data bus: ',
        R1: '4 units',
        R2: '5 units',
        R3: '6 units',

    },
    {
        num: '2',
        qst: "Addressing modes that doesn't exist in the calM: ",
        R1: '1- Based',
        R2: '2- indexed indirect',
        R3: '3- Based indexed',

    }, {
        num: '3',
        qst: "Instruction formats: ",
        R1: '1- Reduced Format',
        R2: '2- General Format ',
        R3: '3- Neither of the two',

    },
    {
        num: "4",
        qst: "How many bits are there in the flag register: ",
        R1: '1- 6 bits',
        R2: '2- 7 bits',
        R3: '3- 8 bits',
    },
    {
        num: "5",
        qst: "How many bytes ares there in the general purpose registers:",
        R1: '1- One byte',
        R2: '2- Two Bytes',
        R3: '3- Three Bytes',
    },
    {
        num: "6",
        qst: "What are the component that doesn't belong to the memory unit:",
        R1: "1-IP",
        R2: "2-CM",
        R3: "3-MDR/MAR",
    },
    {
        num: "7",
        qst: "All of the instructions are on 8 bits: ",
        R1: "Yes",
        R2: "No, all of them are on 16 bits ",
        R3: "Neither of the two",
    },
    {
        num: "8",
        qst: "How many bits are there in the flag register: ",
        R1: '1- 6 bits',
        R2: '2- 7 bits',
        R3: '3- 8 bits',
    },
    {
        num: "9",
        qst: "The cache memory is bigger than the central memory :",
        R1: "1- Yes, it's bigger",
        R2: "2- No, it's smaller",
        R3: "3- They're equal",
    }

]

function Level1() {


    function Question1(props) {

        return (
            <>
                <div className='container'>
                    <h1 className='question1'> Question {props.num}</h1>

                    <div className='ABC1'>
                        <p className='Q1'> {props.qst}</p>
                        <div className='R1'>
                            <li className='liexercices' >{props.R1}</li>
                            <li className='liexercices'>{props.R2}</li>
                            <li className='liexercices'>{props.R3}</li>
                        </div>

                        <Select options={options} className='ABC'/>


                    </div>
                </div>


            </>


        )
    }

    const Question10 = () => {

        return (
            <>
                <div className='container'>
                    <h1 className='question1'> Question 10</h1>

                    <div className='ABC1'>
                        <h1 className='Q1'>What are pointers in assembly</h1>
                        <div className='R10'>
                            <li className='liexercices'>1- Variable type that stores integers</li>
                            <li className='liexercices'>2- Memory address that stores another memory address</li>
                            <li className='liexercices'>3- An I/O peripheral</li>
                        </div>

                        <Select options={options} className='ABC'/>


                    </div>
                </div>


            </>


        )
    }

    const options = [
        {value: 1, label: "Answer N°:1"},
        {value: 2, label: "Answer N°:2"},
        {value: 3, label: "Answer N°:3"},

    ];
    const options1 = [
        {value: 0, label: "False"},
        {value: 1, label: "True"},


    ];


    const Questionsswiper = () => {
        const datacamp = questions.map((data) => {
            return (
                <Question1 num={data.num} R1={data.R1} R2={data.R2} R3={data.R3} qst={data.qst}/>
            )

        })

        return (
            <div>{datacamp}</div>

        );


    };


    return (
        <>
            <NavBar/>
            <div className="level1">
                <Questionsswiper/>
                <Question10></Question10>
                <button className="submit-btn">Submit</button>
            </div>
            <Footer></Footer>
        </>


    );
}

export default Level1;

