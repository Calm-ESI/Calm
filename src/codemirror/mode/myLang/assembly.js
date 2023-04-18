import define from 'requirejs'
import CodeMirror from 'codemirror'
// import CodeMirror from 'C:/Users/hp/AppData/Local/Microsoft/TypeScript/5.0/node_modules/@types/codemirror/index'
// import C2 from 'C:/Users/hp/AppData/Local/Microsoft/TypeScript/5.0/node_modules'
// import { Controlled as CodeMirror } from "react-codemirror2";


(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror.css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror.css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) { 
"use strict";
CodeMirror.defineMode("8086", function(config, parserConfig) {
    var keywords = ["mov", "add", "sub", "mul", "div", "jmp", "call", "ret", "push", "pop", "label"];
    var registers = ["r1", "r2", "r3", "r4", "idr", "br", "sr", "acc", "r1l", "r1h", "r2l", "r2h", "r3l", "r3h", "accl", "acch"];

    var myOperators = [ "@", ""];
    var number = /-?(?:0x[0-9a-f]+|\d+)/i;
    function tokenBase(stream, state) {
      var ch = stream.next();

      if (ch === "/") {
        if (stream.eat("")) {
          state.tokenize = tokenComment;
          return state.tokenize(stream, state);
        }
        if (stream.eat("/")) {
          stream.skipToEnd();
          return "comment";
        }
      }
      if (ch === ";" || ch === "#") {
        stream.skipToEnd();
        return "comment";
      }
      if (/[a-zA-Z_]/.test(ch)) {
        stream.eatWhile(/[\w.]/);
        var cur = stream.current().toLowerCase();

            if (keywords.indexOf(cur) >= 0) {
            return "key";
            } 
            if (registers.indexOf(cur) >= 0) {
                return "reg";
            }

        }
        if (/\d/.test(ch)) {
          stream.match(number);
          return "num";
        }

      if(/[@+]/.test(ch)){
          return "opadr";
      }

      if(/[[]]/.test(ch)){
          return "opadr"
      }


    return null;
  }

  function tokenComment(stream, state) {
      var maybeEnd = false,
        ch;
      while ((ch = stream.next())) {
        if (ch === "/" && maybeEnd) {
          state.tokenize = null;
          break;
        }
        maybeEnd = ch === "";
      }
      return "comment";
    }


  return {
    startState: function() {
      return {
        tokenize: null,
      };
    },
    token: function(stream, state) {
      if (state.tokenize) {
        return state.tokenize(stream, state);
      }
      return tokenBase(stream, state);
    },
  };
});
});