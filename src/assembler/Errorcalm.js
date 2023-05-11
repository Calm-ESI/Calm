import { Assembler,FuncInterface } from "./Assembler.js";
import { SemanticAnalysis } from "./SemanticAnalysis.js";
import { Lexer } from "./Lexer.js";

export class Errorcalm{


    static LexicalError = [];
    static SemanticError = [];
    static errorr=0;
    constructor(message,type,linenum){
        this.message = message;
        this.type = type;
        this.linenum = linenum+1;
    }

    static set_LexicalError(lexerror){

            if (Errorcalm.SemanticError.find((err) => {
            return err.message === lexerror.message && err.type === lexerror.type && err.linenum === lexerror.linenum;
            })) {
            } else {
                Errorcalm.LexicalError.push(lexerror);
            }

    }

    static set_SemanticError(synerror){
        if (Errorcalm.SemanticError.find((err) => {
            return err.message === synerror.message && err.type === synerror.type && err.linenum === synerror.linenum;
            })) {
            } else {
                Errorcalm.SemanticError.push(synerror);
            }
    }
    static printError(){
        let theError;
        const numerr = Errorcalm.LexicalError.length + Errorcalm.SemanticError.length;
        if(numerr ==0){
            return ''
        }else{
            numerr ==1 ? theError="\nThere is 1 error in your code:\n" : theError=`\nThere are ${numerr} errors in your code cannot assemble:\n`;
        Errorcalm.LexicalError.length == 0 ? theError+="  Semantic Errors:\n"+"  "+Errorcalm.SemanticError[0].message+"\n the line : "+Errorcalm.SemanticError[0].linenum : theError+="Lexical Errors \n"+"  "+Errorcalm.LexicalError[0].message+"\n the line :"+Errorcalm.LexicalError[0].line;
        Errorcalm.errorr=1;
        console.log(this.SemanticError);
        return theError;}
    }
    static addtoSemanticError(errs){
        Errorcalm.SemanticError= errs.concat(Errorcalm.SemanticError);    }
    static addtoLexicalError(errs){
        Errorcalm.LexicalError= errs.concat(Errorcalm.LexicalError);
    }

}   


