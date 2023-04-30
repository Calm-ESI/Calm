import './level2.css';



import Select from "react-select";


function Level2() {
 

  const questions=[

    {
    num :'1',
    qst:'Mov BR ,5',
 
    
    },
    {
      num :'2',
      qst:"Add R3,*R4 ",
    
      },{
        num :'3',
        qst:"XORR SR ",
       
        
        },
        {
          num:"4",
          qst:"NOR IR",
          
        },
        {
          num:"5",
          qst:"-Nand BR, SR",
        
        },
        {
          num:"6",
          qst:"Sub RI ,20",
          
        },
        {
          num:"7",
          qst:"Mov R2,BR*+10",
          
        },
        {
          num:"8",
          qst:"Nand BR",
        
        },
        {
          num:"9",
          qst:"Write *20,40",

        }
        
    ]

  function Question1(props){

    return(
     <>
    <div className='container'>
     <ul>
     <h1 className='question1'> Question {props.num}</h1>
     </ul>  
     <div className='ABC1'>
      <h1 className='Q1'>{props.qst}</h1>
      
      
      <div className="textInputWrapper" >
            <input placeholder="Type Here" type="text" className="textInput" />
     </div>

        
       

     </div>
     </div>

     
     
     </>


    )
  }
  const Question2=()=>{

    return(
     <>
     <div className='container'>
     <h1 className='question1'> Question 2</h1>
        
     <div className='ABC1'>
      <h1 className='Q1'>Add R3,*R4</h1>
      
      
      <div className="textInputWrapper" >
            <input placeholder="Type Here" type="text" className="textInput" />
     </div>

        
       

     </div>
     </div>

     
     
     </>


    )
  }
  const Question3=()=>{

    return(
     <>
     <div className='container'>
     <h1 className='question1'> Question 3</h1>
        
     <div className='ABC1'>
      <h1 className='Q1'>Sub RI ,20</h1>
      
      
      <div className="textInputWrapper" >
            <input placeholder="Type Here" type="text" className="textInput" />
     </div>

        
       

     </div>
     </div>


     
     
     </>


    )
  }
  const Question4=()=>{

    return(
     <>
     <div className='container'>
     <h1 className='question1'> Question 4</h1>
        
     <div className='ABC1'>
      <h1 className='Q1'>Nand BR, SR</h1>
      
      
      <div className="textInputWrapper" >
            <input placeholder="Type Here" type="text" className="textInput" />
     </div>

        
       

     </div>
     </div>


     
     
     </>


    )
  }
  const Question5=()=>{

    return(
     <>
     <div className='container'>
     <h1 className='question1'> Question 5</h1>
        
     <div className='ABC1'>
      <h1 className='Q1'>XOR IR</h1>
      
      
      <div className="textInputWrapper" >
            <input placeholder="Type Here" type="text" className="textInput" />
     </div>

        
       

     </div>
     </div>

     
     
     </>


    )
  }
  const Question6=()=>{

    return(
     <>
     <div className='container'>
     <h1 className='question1'> Question 6</h1>
        
     <div className='ABC1'>
      <h1 className='Q1'>Mov ACC ,*20</h1>
      
      
      <div className="textInputWrapper" >
            <input placeholder="Type Here" type="text" className="textInput" />
     </div>

        
       

     </div>
     </div>

     
     
     </>


    )
  }

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
    <div className="level2">
          <Questionsswiper/>
   


    



     <button className="submit-btn">Submit</button>
      </div>
    
    
    
  );
}

export default Level2;

