import { Assembler } from './Assembler.js';
import { Errorcalm } from './Errorcalm.js';
import { SyntaxicAnalysis } from './SyntaxicAnalysis.js';
export class Lexer {
  static Errors = [];
  static isValidString(str) {
    // Check if the string contains any special characters
    if (/[^a-zA-Z0-9_]/.test(str)) {
      return false;
    }else{
    
    // Check if the string begins with a number
    if (/^\d/.test(str)) {
      return false;
    }else{
    
    // Check if the string is in the excluded list
    if (Assembler.excludedStrings.includes(str)) {
      return false;
    }else{    
    // If none of the above conditions are met, the string is valid
    return true;
    }
  }}
  }
    constructor(code,line) {
      //console.log(code.match(/([a-zA-Z0-9]+\d*(?:[a-zA-Z09]+)?|\*|,|\+)/g))
      this.LexicalList = code.match(/([a-zA-Z0-9]+\d*(?:[a-zA-Z0-9]+)?|\*|,|\+,,|\~|,|\`|,|\!|,|\@|,|\#|,|\$|,|\%|,|\^|,|\&|,|\*|,|\(|,|\)|,|\_|,|\=|,|\+|,|\[|,|\]|,|\{|,|\}|,|\;|,|\:|,|\'|,|\"|,|\,|,|\.|,|\<|,|\>|,|\?|,|\\|)/g).filter(function (t) {
        return t.length > 0;
      }).map(function (t) {
        if (isNaN(t)) {
          switch (t) {
            case 'R1':
            case 'R2':
            case 'R3':
            case 'R4':
            case 'ACC':
            case 'BR':
            case 'IR':
            case 'SR':
            case 'R1R':
            case 'R2R':
            case 'R3R':
            case 'ACCR':
            case 'R1L':
            case 'R2L':
            case 'R3L':
            case 'ACCL':
              return {
                type: 'REGISTER',
                value: t
              };
              case 'RET':
              case 'PUSHA':
              case 'POPA':
              return{
                    type: 'INST0',
                    value: t
                    };
            case 'NEG':
            case 'NOT':
            case 'SHL':
            case 'SHR':
            case 'READ':
            case 'WRITE':
            case 'PUSH':
            case 'POP':
            case 'ROR':
            case 'ROL':
            case 'CALL':
            case 'BE':
            case 'BNE':
            case 'BS':
            case 'BI':
            case 'BIE':
            case 'BSE':
            case 'BR':
              return {
                type: 'INST1',
                value: t
              };
            case 'NAND':
            case 'CMP':
            case 'MOV':
            case 'ADD':
            case 'SUB':
            case 'MUL':
            case 'DIV':
            case 'AND':
            case 'OR':
            case 'XOR':
            case 'NOR':
              return{ 
                type: 'INST2',
                value: t
              };
            case '*':
            case ',':
            case '+':
              return {
                type: 'SPECIAL CHARACTER',
                value: t
              };
            case 'LABEL':
              return {
                type: 'LABEL'
              };
              break;
            default:
              if (Lexer.isValidString(t)) {
                return {
                  type: 'TEXT',
                  value: t
                };
              }else{
                Lexer.Errors.push(new Errorcalm("Invalid string", "LEXER", line)) ; //change this 0 to the line number
                Errorcalm.set_LexicalError(new Errorcalm("Invalid string", "LEXER", line));
              }
          }
        } else {
          return {
            type: 'NUMBER',
            value: t
          };
        }
      });
    }
  }