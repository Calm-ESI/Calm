import { Assembler,FuncInterface } from "./Assembler.js";
import { SyntaxicAnalysis } from "./SyntaxicAnalysis.js";
import { Lexer } from "./Lexer.js";

export class Errorcalm{


    static LexicalError = [];
    static SyntaxicError = [];
    static errorr=0;
    constructor(message,type,linenum){
        this.message = message;
        this.type = type;
        this.linenum = linenum+1;
    }

    static set_LexicalError(lexerror){

            if (Errorcalm.SyntaxicError.find((err) => {
            return err.message === lexerror.message && err.type === lexerror.type && err.linenum === lexerror.linenum;
            })) {
            } else {
                Errorcalm.LexicalError.push(lexerror);
            }

    }

    static set_syntaxicError(synerror){
        if (Errorcalm.SyntaxicError.find((err) => {
            return err.message === synerror.message && err.type === synerror.type && err.linenum === synerror.linenum;
            })) {
            } else {
                Errorcalm.SyntaxicError.push(synerror);
            }
    }
    static printError(){
        let theError;
        const numerr = Errorcalm.LexicalError.length + Errorcalm.SyntaxicError.length;
        if(numerr ==0){
            return ''
        }else{
            numerr ==1 ? theError="\nThere is 1 error in your code:\n" : theError=`\nThere are ${numerr} errors in your code cannot assemble:\n`;
        Errorcalm.LexicalError.length == 0 ? theError+="  Syntaxic Errors:\n"+"  "+Errorcalm.SyntaxicError[0].message+"\n the line : "+Errorcalm.SyntaxicError[0].linenum : theError+="Lexical Errors \n"+"  "+Errorcalm.LexicalError[0].message+"\n the line :"+Errorcalm.SyntaxicError[0].linenum;
        this.errorr=1
        return theError;}
    }
    static addtoSyntaxicError(errs){
        Errorcalm.SyntaxicError= errs.concat(Errorcalm.SyntaxicError);    }
    static addtoLexicalError(errs){
        Errorcalm.LexicalError= errs.concat(Errorcalm.LexicalError);
    }

}   


