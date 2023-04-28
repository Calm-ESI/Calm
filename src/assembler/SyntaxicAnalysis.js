import { Lexer } from './Lexer.js';
import { Errorcalm } from './Errorcalm.js';
import { Assembler,FuncInterface } from "./Assembler.js";


export class SyntaxicAnalysis {
    Syntaxiclist = []
    
    constructor(input) { 

        let lexicalList = input;
        for(let i = 0; i < lexicalList.length; i++){
            // here operation with each line of code
            // we must check if it is a label or an instruction
            // if it is a label we have to check that the next element is a number and it has to be < from a number we fix
            
              let firstword = lexicalList[i][0]
              let firstwordtype = firstword.type
              
              
              switch (firstwordtype) {
                    
                  case 'LABEL':
                    const functLABEL = ()=> {
                        if (lexicalList[i].length == 3) {
                            if (lexicalList[i][2].type == 'NUMBER') {
                            if( lexicalList[i][2].value < Assembler.MAXNUM){
                                if(lexicalList[i][1].type == 'TEXT'){
                                    if(Lexer.isValidString(lexicalList[i][1].value)){
                                        //  filters for text standards and validity of the text
                                        // check if label already existing 
                                            var found = false ;
                                            var labelname = firstword.value ;
                                            Assembler.Labellist.forEach(element => { 
                                                if(element.name === labelname){
                                                    found = true
                                                }
                                            });
                                        if (!found) {    
                                        //this.Syntaxiclist.push(lexicalList[i]); 
                                        //stop pushing here because we don't need it
                                        Assembler.Labellist.push({ name: lexicalList[i][1].value, address: lexicalList[i][2].value, linedeclared:i })
                                    }else{
                                        this.Syntaxiclist.push(new Errorcalm("LABEL already declared",null,i))
                                    }
                                }else{ this.Syntaxiclist.push(new Errorcalm("LABEL name is not valid",null,i)) }
                                }else{
                                    this.Syntaxiclist.push(new Errorcalm("LABEL name not defined",null,i))
                              }
                            }else{
                                 this.Syntaxiclist.push(new Errorcalm("Number size is bigger then MAXNUM",null,i))
                            }}else{ 
                                 this.Syntaxiclist.push(new Errorcalm("LABEL must be a number",null,i))
                            }
                          }else{
                            if (Lexer.isValidString(lexicalList[i][2].value )) {
                                this.Syntaxiclist.push(new Errorcalm("LABEL must have only two operands",null,i))
                            }else
                            {
                                this.Syntaxiclist.push(new Errorcalm("LABEL name is not valid",null,i))
                            }
                            }
                      }
                      
                      functLABEL();
                      break;
                      
                      case 'INST0': 
                          // No params instructions: INST0 ::=    RET, PUSHA, POPA
                          // We must have no op after it 

                            const functINST0 = ()=> { 

                                if (lexicalList[i].length == 1) {
                                    this.Syntaxiclist.push(lexicalList[i]);
                                }else{
                                    this.Syntaxiclist.push(new Errorcalm("INST0 must have no operands",null,i))
                            }}
                        

                      functINST0();
                      break ;



                      case 'INST1':
                        // ONE params instructions: INST1 ::=  NEG, NOT, SHL, SHR, READ, WRITE, PUSH, POP, ROR, ROL, CALL, BE, BNE, BS, BI, BIE, BSE, BR
                        //|                                                                                         |
                        //|        Must have only one other param: it must be valid                                 |
                        //|        or one param and other special chars: they must be valid  also                   |
                        //|        That other special char is used for addressing modes mainly                      |
                        //|------------------------------------------------------------------------------------------
                        const functINST1 = ()=> {
                            var firstparam = lexicalList[i][1]
                            if (['NEG','NOT', 'SHL', 'SHR', 'READ', 'WRITE', 'PUSH', 'POP', 'ROR', 'ROL'].includes( lexicalList[i][0].value )) {
                                //read or write from or to register only
                                // Labels are not allowed
                                if (firstparam.type == 'REGISTER'  && lexicalList[i].length == 2) {
                                    this.Syntaxiclist.push([{  type:lexicalList[i][0].type, value: lexicalList[i][0].value, adrmode:0  },lexicalList[i][1]]);
                                }
                                else{
                                    this.Syntaxiclist.push(new Errorcalm("INST1 must have one register as operand",null,i))
                                }

                            }else{
                            // use it as function
                            // funcnum(lexicalList[i],i)
                            // add in the body firstparam definition
                            // var firstparam = lexicalList[i][1]

                            switch(firstparam.type){
                            case 'NUMBER' :
                                    //check addressing
                                    if (firstparam.value < Assembler.MAXNUM) {
                                    
                                    switch (lexicalList[i].length) {
                                        case 2:
                                            this.Syntaxiclist.push([{type:lexicalList[i][0].type, value: lexicalList[i][0].value, adrmode:0 },lexicalList[i][1]]);
                                            
                                            break;
                                       
                                        default:
                                            this.Syntaxiclist.push(new Errorcalm("Wrong number or type of operands",null,i))
                                            break;
                                    }    }else{
                                        this.Syntaxiclist.push(new Errorcalm("Number size is bigger then MAXNUM",null,i))
                                    }                               
                                
                            break;
                            
                            case 'REGISTER' :
                                    this.Syntaxiclist.push(new Errorcalm("INSTruction cannot have register as operand",null,i))
                               break;
                            
                            case 'TEXT' :
                                    //+ ajouter opp avec labels,  I guess DONE
                                    // Do the needed operations after transformations and ADD TESTs it's not safe here !
                                    // add addressing modes direct and indirect for labels

                                    //check if it's present in label list
                                    
                                    switch (lexicalList[i].length) {

                                        case 2:
                                            this.Syntaxiclist.push([{type:lexicalList[i][0].type, value:lexicalList[i][0].value, adrmode:0 },{type:FuncInterface.Label_To_Num(firstparam.value,i).type, value:FuncInterface.Label_To_Num(firstparam.value,i).value}]);
                                            
                                            break;
                                    
                                        case 5:
                                            // indirect
                                            if (lexicalList[i][2].value == '*' && lexicalList[i][3].value == '+' && lexicalList[i][4].type == 'NUMBER') {
                                                this.Syntaxiclist.push([{type:lexicalList[i][0].type, value:lexicalList[i][0].value, adrmode:3 },{type:FuncInterface.Label_To_Num(firstparam.value,i).type, value:FuncInterface.Label_To_Num(firstparam.value,i).value},{type:lexicalList[i][4].type, value:lexicalList[i][4].value}]);
                                            }else{
                                                this.Syntaxiclist.push(new Errorcalm("Wrong expression",null,i))
                                            }
                                        
                                        break;
                                    
                                        default:
                                            this.Syntaxiclist.push(new Errorcalm("Wrong number or type of operands",null,i))
                                            break;
                                    }

                                    
                                
                            }
                        
                        }
                                                

                            
                        }

                      functINST1();
                      break ;
                      
                      case 'INST2':
                        //check if there is a comma if not throw error which is comma missing
                        var nocomma = true ;
                        lexicalList[i].forEach(element => {
                            if (element.value == ',') {
                                nocomma = false ;
                            }});

                        if (nocomma)  
                        {
                            this.Syntaxiclist.push(new Errorcalm("Comma missing",null,i))
                        }
                        else{
                            // check also for first operand based ind and second indexed or based or opposite 
                            // check if size of first list == size of second list and assign it to the size of the instruction
                            var list1,list2 =[];
                            list1 = FuncInterface.addrmod(lexicalList[i].slice(1),i).list1 ;
                            //console.log("list1",list1[0].type)
                            list2 = FuncInterface.addrmod(lexicalList[i].slice(1),i).list2 ;
         
                            if( FuncInterface.defadrmod(list1,i).type=='NUMBER' && lexicalList[i][0].value == 'MOV' && FuncInterface.defadrmod(list1,i).adrmode==0 ) {
                                //console.log("here------------------------")
                                        this.Syntaxiclist.push(new Errorcalm("Number can't be first operand",null,i))
                                        Errorcalm.SyntaxicError.push(new Errorcalm("Number can't be first operand",null,i))
                            }else{
                            //console.log("\nlist1",list1,"\nlist2",list2)
                            //console.log("\nlist1",FuncInterface.defadrmod(list1),"\nlist2",FuncInterface.defadrmod(list2))
                            //console.log("list1",FuncInterface.defadrmod(list1,i).size,"list2",FuncInterface.defadrmod(list2,i).size)
                            
                        if ((FuncInterface.defadrmod(list1,i).size !== FuncInterface.defadrmod(list2,i).size && FuncInterface.defadrmod(list2,i).type =='REGISTER' && FuncInterface.defadrmod(list1,i).type =='REGISTER' )  || ( FuncInterface.defadrmod(list1,i).size == 0 && FuncInterface.defadrmod(list2,i).size == 1 && FuncInterface.defadrmod(list1,i).type =='REGISTER' )) {

                                this.Syntaxiclist.push(new Errorcalm("Wrong size or type of operands",null,i))
                                Errorcalm.SyntaxicError.push(new Errorcalm("Wrong size or type of operands",null,i))

                            }else{
                                let asize =  ( FuncInterface.defadrmod(list2,i).size == 1 ) || ( FuncInterface.defadrmod(list1,i).size == 1 )? 1 : 0;
                                //console.log(asize);
                                this.Syntaxiclist.push([{type:lexicalList[i][0].type, value:lexicalList[i][0].value,size:asize},FuncInterface.defadrmod(list1,i),FuncInterface.defadrmod(list2,i)]);
                            }
                            }}

                      break ;

                      default:
                        //error
                            break;
                          
             
                  
            }
            //console.log(this.Syntaxiclist)

           
          
        }
         
    }







    //estandards for each instruction 

    // for label we only have to check that the next element is a number and it has to be < from a number we fix 
    
    
    // No params instructions: INST0 ::= RET, PUSHA, POPA
    // We must have no op after it 
    


    // ONE params instructions: INST1 ::=  NEG, NOT, SHL, SHR, READ, WRITE, PUSH, POP, ROR, ROL, CALL, BE, BNE, BS, BI, BIE, BSE, BR
    //|                                                                                         |
    //|        Must have only one other param: it must be valid                                 |
    //|        or one param and other special chars: they must be valid  also                   |
    //|        That other special char is used for addressing modes mainly                      |
    //|------------------------------------------------------------------------------------------

    
    // TWO params instructions: NAND, CMP, MOV, ADD, SUB, MUL, DIV, AND, OR, XOR, NOR
    // they may be only two operands or two operands with special chars
    // check for the problem of first operand is a number
    // define addressing mode
    // some special errors for special instructions

    

    // Label instformat LABEL num check this num if it is valid

}


/*
const MAXNUM =6000 // max adress for label



var input = ["LABEL imo 145537", "MOV R1, 14", " ADD R1,R2**","PUSHA 55"]

//console.log(new Lexer(input[0]).LexicalList)

var output = new syntaxicAnalysis(["LABEL 145537"])

console.log(output.Syntaxiclist)*/
