import {Footer} from '../../../containers';
import NavBar from '../../NavBar';
import './level2.css';


import Select from "react-select";


function Level2() {


    const questions = [

        {
            num: '1',
            qst: 'MOV BR ,5',


        },
        {
            num: '2',
            qst: "ADD R3,*R4 ",

        }, {
            num: '3',
            qst: "XOR SR ",


        },
        {
            num: "4",
            qst: "NOR IR",

        },
        {
            num: "5",
            qst: "NAND BR, SR",

        },
        {
            num: "6",
            qst: "SUB RI ,20",

        },
        {
            num: "7",
            qst: "MOV R2,BR*+10",

        },
        {
            num: "8",
            qst: "NAND BR",

        },
        {
            num: "9",
            qst: "WRITE *20,40",

        }

    ]

    function Question1(props) {

        return (
            <>

                <div className='container2'>
                    <p className='question2'> Question {props.num}</p>

                    <div className='ABC2'>
                        <h1 className='Q2'>{props.qst}</h1>


                        <div className="textInputWrapper">
                            <input placeholder="Type Here" type="text" className="textInput"/>
                        </div>


                    </div>
                </div>


            </>


        )
    }

    const Question2 = () => {

        return (
            <>
                <div className='container2'>
                    <h1 className='question2'>Question 2</h1>

                    <div className='ABC2'>
                        <h1 className='Q2'>Add R3,*R4</h1>


                        <div className="textInputWrapper">
                            <input placeholder="Type Here" type="text" className="textInput"/>
                        </div>


                    </div>
                </div>


            </>


        )
    }
    const Question3 = () => {

        return (
            <>
                <div className='container2'>
                    <h1 className='question2'> Question 3</h1>

                    <div className='ABC2'>
                        <h1 className='Q2'>Sub RI ,20</h1>


                        <div className="textInputWrapper">
                            <input placeholder="Type Here" type="text" className="textInput"/>
                        </div>


                    </div>
                </div>


            </>


        )
    }
    const Question4 = () => {

        return (
            <>
                <div className='container2'>
                    <h1 className='question2'> Question 4</h1>

                    <div className='ABC2'>
                        <h1 className='Q2'>Nand BR, SR</h1>


                        <div className="textInputWrapper">
                            <input placeholder="Type Here" type="text" className="textInput"/>
                        </div>


                    </div>
                </div>


            </>


        )
    }
    const Question5 = () => {

        return (
            <>
                <div className='container2'>
                    <h1 className='question2'> Question 5</h1>

                    <div className='ABC2'>
                        <h1 className='Q2'>XOR IR</h1>


                        <div className="textInputWrapper">
                            <input placeholder="Type Here" type="text" className="textInput"/>
                        </div>


                    </div>
                </div>


            </>


        )
    }
    const Question6 = () => {

        return (
            <>
                <div className='container2'>
                    <h1 className='question2'> Question 6</h1>

                    <div className='ABC2'>
                        <h1 className='Q2'>MOV ACC ,*20</h1>


                        <div className="textInputWrapper">
                            <input placeholder="Type Here" type="text" className="textInput"/>
                        </div>


                    </div>
                </div>


            </>


        )
    }

    const Questionsswiper = () => {
        const datacamp = questions.map((data) => {
            return (
                <Question1 num={data.num} qst={data.qst}/>
            )

        })

        return (
            <div>{datacamp}</div>

        );


    };

    return (
        <div className="level2">
            <NavBar/>
            <Questionsswiper/>
            <button className="submit-btn">Submit</button>
            <Footer></Footer>

        </div>


    );
}

export default Level2;

