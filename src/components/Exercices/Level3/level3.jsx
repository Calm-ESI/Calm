import './level3.css';



import Select from "react-select";


function Level3() {
 
  const questions=[

    {
    num :'1',
    qst:'-Add R4,R5,1',
 
    
    },
    {
      num :'2',
      qst:"-Mov R1,10",
    
      },{
        num :'3',
        qst:"-XORR SR ",
       
        
        },
        {
          num:"4",
          qst:"-Not 20*",
          
        },
        {
          num:"5",
          qst:"-Nand BR, SR",
        
        },
        {
          num:"6",
          qst:"-Sub RI ,20",
          
        },
        {
          num:"7",
          qst:"-Mov R2,BR*+10",
          
        },
        {
          num:"8",
          qst:"-Nand BR, SR",
        
        },
        {
          num:"9",
          qst:"-XOR IR",

        }
        
    ]
  

  function Question1(props){

    return(
     <>
    <div className='container'>
     <h1 className='question1'> Question {props.num}</h1>
        
     <div className='ABC1'>
      <h1 className='Q1'>{props.qst}</h1>
      <div className='R1'>
      <li>1- Faux</li>
        <li>2- Vrai</li>
        </div>
      
     <Select options={options1} className='ABC' />
        
       

     </div>
     </div>

     
     
     </>


    )
  }

 

  const options1 = [
    { value: 0, label: " faux" },
    { value: 1, label: "Vrai" },
   
    
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
      
       <Questionsswiper/>
      <button className="submit-btn">Submit</button>
     </div>
    
    
    
  );
}

export default Level3;

