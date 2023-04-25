import { Assembler,FuncInterface } from "./Assembler.js";
import { SyntaxicAnalysis } from "./SyntaxicAnalysis.js";
import { Lexer } from "./Lexer.js";

export class Errorcalm{


    static LexicalError = [];
    static SyntaxicError = [];

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
        const numerr = Errorcalm.LexicalError.length + Errorcalm.SyntaxicError.length;
        numerr ==1 ? console.log("\nThere is 1 error in your code:\n") : console.log(`\nThere are ${numerr} errors in your code cannot assemble:\n`);
        Errorcalm.LexicalError.length == 0 ? console.log("Syntaxic Errors:\n",Errorcalm.SyntaxicError) : console.log("Lexical Errors \n",Errorcalm.LexicalError);

    }
    static addtoSyntaxicError(errs){
        Errorcalm.SyntaxicError= errs.concat(Errorcalm.SyntaxicError);    }
    static addtoLexicalError(errs){
        Errorcalm.LexicalError= errs.concat(Errorcalm.LexicalError);
    }

}   


