import {Footer} from '../../../containers';
import NavBar from '../../NavBar';
import './level4.css';


import Select from "react-select";


function Level4() {


    const questions = [

        {
            num: '1',
            instr1: 'MOV  R4 , 0256',
            instr2: "MOV  01CA*, R3",
            instr3: "MOV  R3, R4",
            instr4: " MOV  R4,005C",
            instr5: "MOV  005C*,01C4",
            instr6: "MOV  R3 ,01CA*",
            instr7: " MOV  R3, 005C*",
            instr8: " MOV  R3+5,0FFF",


        },

        {
            num: '2',
            instr1: 'MOV BR,1',
            instr2: "MOV IR,2",
            instr3: "MOV 18*,5",
            instr4: " MOV R2,2",
            instr5: "MOV 2*,BR*+IR+15",
            instr6: "MOV R1,2*",
            instr7: " ADD R1,R2",
            instr8: " SUB 2",
            /*MOV BR,1
          MOV IR,2
          MOV 18*,5
          MOV R2,2
          MOV 2*,BR*+IR+15
          MOV R1,2*
          ADD R1,R2*/


        },


    ]


    function Question1(props) {

        return (
            <>
                <div className='container4'>
                        <h1 className='question4'> Question {props.num}:</h1>
                    <div className='ABC4'>
                        <div className='questions'>
                            <h1 className='Q4'> {props.instr1}</h1>
                            <h1 className='Q4'> {props.instr2}</h1>
                            <h1 className='Q4'> {props.instr3}</h1>
                            <h1 className='Q4'> {props.instr4}</h1>
                            <h1 className='Q4'> {props.instr5}</h1>
                            <h1 className='Q4'> {props.instr6}</h1>
                            <h1 className='Q4'> {props.instr7}</h1>
                            <h1 className='Q4'> {props.instr8}</h1>
                        </div>

                        <div className="inputContainer">
                            <label className='lab'> R1
                                <input type="text" name="text" className="input"/>
                            </label>
                            <label className='lab'> R2
                                <input type="text" name="text" className="input"/>
                            </label>
                            <label className='lab'> R3
                                <input type="text" name="text" className="input"/>
                            </label>
                            <label className='lab'> R4
                                <input type="text" name="text" className="input"/>
                            </label>
                            <label className='lab'> ACC
                                <input type="text" name="text" className="input"/>
                            </label>
                        </div>


                    </div>
                </div>

            </>


        )
    }

    const Questionsswiper = () => {
        const datacamp = questions.map((data) => {
            return (
                <Question1 num={data.num} instr1={data.instr1} instr2={data.instr2} instr3={data.instr3}
                           instr4={data.instr4} instr5={data.instr5} instr6={data.instr6} instr7={data.instr7}
                           instr8={data.instr8}/>
            )

        })

        return (
            <div>{datacamp}</div>

        );


    };
    return (
        <div className="level4">
            <NavBar/>
            <Questionsswiper/>
            <div className='button'>
                <button className="submit-btn">Submit</button>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Level4;

