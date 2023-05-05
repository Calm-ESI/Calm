import { Footer } from '../../../containers';
import NavBar from '../../NavBar';
import './level3.css';



import Select from "react-select";


function Level3() {
 
  const questions=[

    {
    num :'1',
    qst:'ADD R4,R5,1',
 
    
    },
    {
      num :'2',
      qst:"MOV R1,10",
    
      },{
        num :'3',
        qst:"XORR SR ",
       
        
        },
        {
          num:"4",
          qst:"NOT 20*",
          
        },
        {
          num:"5",
          qst:"NAND BR, SR",
        
        },
        {
          num:"6",
          qst:"SUB RI ,20",
          
        },
        {
          num:"7",
          qst:"MOV R2,BR*+10",
          
        },
        {
          num:"8",
          qst:"NAND BR, SR",
        
        },
        {
          num:"9",
          qst:"XOR IR",

        }
        
    ]
  

  function Question1(props){

    return(
     <>
    <div className='container3'>
     <h1 className='question3'> Question {props.num}</h1>
        
     <div className='ABC3'>
      <h1 className='Q3'>{props.qst}</h1>
      <div className='R3'>
      <li>1- False</li>
        <li>2- True</li>
        </div>
      
     <Select options={options1} className='ABC_3' />
        
       

     </div>
     </div>

     
     
     </>


    )
  }

 

  const options1 = [
    { value: 0, label: " False" },
    { value: 1, label: "True" },
   
    
  ];
  const Questionsswiper = () => {
    const datacamp = questions.map((data)=> {
    return (
      <Question1  num={data.num}  qst={data.qst}/>
    )
    
    }) 
    
    return (
      <div>{datacamp}</div>
      
    );
    
    
      };

  return (
    <div className="level3">
      <NavBar/>
      <Questionsswiper/>
      <button className="submit-btn">Submit</button>
      <Footer></Footer>
      </div>
    
    
    
  );
}

export default Level3;

