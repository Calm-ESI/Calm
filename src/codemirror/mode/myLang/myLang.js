import define from 'requirejs'
import CodeMirror from 'codemirror'

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror.css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror.css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";
CodeMirror.defineMode("myMode", function(config, parserConfig) {
    var myKeywords = ["Ax", "BX"];
    var myOperators = [ "@", "*"];
    var myKeywords2 = ["mov", "add"];
    var brackets = /[(){}\[\]]/;
    var number = /-?(?:0x[0-9a-f]+|\d+)/i;
    var atoms = /true|false|null|undefined/;
    var isOperatorChar = /[+\-*&%=<>!?|\/]/;
  
    function tokenBase(stream, state) {
      var ch = stream.next();
  
      if (ch === '"' || ch === "'") {
        state.tokenize = tokenString(ch);
        return state.tokenize(stream, state);
      }
  
      if (/[{}\[\]()]/.test(ch)) {
        return "bracket";
      }
  
      if (/\d/.test(ch)) {
        stream.match(number);
        return "number";
      }
  
      if (ch === "/") {
        if (stream.eat("*")) {
          state.tokenize = tokenComment;
          return state.tokenize(stream, state);
        }
        if (stream.eat("/")) {
          stream.skipToEnd();
          return "comment";
        }
      }
  
      if (isOperatorChar.test(ch)) {
        stream.eatWhile(isOperatorChar);
        return "operator";
      }
  
      stream.eatWhile(/\w/);
      var cur = stream.current();
  
      if (myKeywords.indexOf(cur) >= 0) {
        return "keyword";
      }
  
      if (myKeywords2.indexOf(cur) >= 0) {
        return "keyword2";
      }
  
      if (atoms.test(cur)) {
        return "atom";
      }
  
      return null;
    }
  
    function tokenString(quote) {
      return function(stream, state) {
        var escaped = false,
          next,
          end = false;
        while ((next = stream.next()) !== null) {
          if (next === quote && !escaped) {
            end = true;
            break;
          }
          escaped = !escaped && next === "\\";
        }
        if (end || !(escaped || quote === "'")) {
          state.tokenize = null;
        }
        return "string";
      };
    }
  
    function tokenComment(stream, state) {
      var maybeEnd = false,
        ch;
      while ((ch = stream.next())) {
        if (ch === "/" && maybeEnd) {
          state.tokenize = null;
          break;
        }
        maybeEnd = ch === "*";
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