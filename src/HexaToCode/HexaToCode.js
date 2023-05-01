function hexToBin(hexString) {
    // Convert each hex digit to its corresponding binary value
  const binaryChunks = Array.from(hexString).map(hexDigit => {
    const decimalValue = parseInt(hexDigit, 16);
    return decimalValue.toString(2).padStart(4, '0');
  });
  
  const binaryString = binaryChunks.join('');
  return binaryString;
  // const decimal = parseInt(hexString, 16);
    // const binaryString = decimal.toString(2);
    // const paddedBinaryString = binaryString.padStart(hexString.length * 4, '0');
    // return paddedBinaryString;
  }
  
  
  function replaceAt(str, index, newChar) {
    function replacer(origChar, strIndex) {
        if (strIndex === index)
            return newChar;
        else
            return origChar;
    }
    return str.replace(/./g, replacer);
  }
  
  function TwosComplement2(a) { //a is a string 
    if(a[0]==='1'){
    let find1=false
    for (let i = a.length; i >=0; i--) {
        if(find1==true){
            if (a[i]=='1') {
                a=replaceAt(a,i,'0');
            }else{
                a=replaceAt(a,i,'1');
            }
        }
        if (a[i]==1) {
            find1=true;
        }
    } }
    return a;
  }
  
  function DecConv(num){ // for signed numbers
     if (num[0]==='0') {
      num=parseInt(num, 2).toString(10)
     }else{
      num=TwosComplement2(num)
      console.log("num="+num);
      num=-parseInt(num, 2).toString(10)
     }
     return num;
  }
  
  
  // console.log("dec="+DecConv("1111111111111011"));
  // let hexcode="19400000" mov R1,0
  
  let hexcode="19dc00000005";
  
  // console.log("instruction="+hexToBin(hexcode));
  
  
  
  //all format 
  function HexaToCode(hexcode){
  
  let str1=hexToBin(hexcode).substring(0,4);
  let str2=hexToBin(hexcode).substring(4,7);
  let str3=hexToBin(hexcode)[7];
  
  
  
  
  let newstr;
  
  
  if(parseInt(str1, 2)>=4){
      let opcode1=str1;
      let opcode2=str2;
      if(parseInt(str1, 2)<14){
  
      switch (opcode1) {
          case "0100":
            newstr = "NEG";
            break;
          case "0101":
            newstr = "NOT";
            break;
          case "0110":
            newstr = "SHL";
            break;
          case "0111":
            newstr = "SHR";
            break;
          case "1000":
            newstr = "READ";
            break;
          case "1001":
            newstr = "WRITE";
            break;
          case "1010":
            newstr = "PUSH";
            break;
          case "1011":
            newstr = "POP";
            break;
          case "1100":
            newstr = "ROR";
            break;
          case "1101":
            newstr = "ROL";
            break;
          default:
            newstr = "error";
        }
  
     if(newstr!="error"){        
       
      if (str3==='1') {
          switch (opcode2) {
            case "000":
              newstr = newstr + " " + "R1";
              break;
            case "001":
              newstr = newstr + " " + "R2";
              break;
            case "010":
              newstr = newstr + " " + "R3";
              break;
            case "011":
              newstr = newstr + " " + "R4";
              break;
            case "100":
              newstr = newstr + " " + "ACC";
              break;
            case "101":
              newstr = newstr + " " + "BR";
              break;
            case "110":
              newstr = newstr + " " + "IR";
              break;
            case "111":
              newstr = newstr + " " + "SR";
              break;
            default:
              newstr = "error";
          }
        }else {
  
          switch (opcode2) {
            case "000":
              newstr = newstr + " " + "R1R";
              break;
            case "001":
              newstr = newstr + " " + "R2R";
              break;
            case "010":
              newstr = newstr + " " + "R3R";
              break;
            case "011":
              newstr = newstr + " " + "ACCR";
              break;
            case "100":
              newstr = newstr + " " + "R1L";
              break;
            case "101":
              newstr = newstr + " " + "R2L";
              break;
            case "110":
              newstr = newstr + " " + "R3L";
              break;
            case "111":
              newstr = newstr + " " + "ACCL";
              break;
            default:
              newstr = "error";
          }
          
          
        }
        
        
      }      
     }
  }else if(parseInt(str1, 2)>=2 && parseInt(str1, 2)<=3){
      let opcode=str1+str2;
      let size=str3;
      switch (opcode) {
          case "0011001":
            newstr = "CALL";
            break;
          case "0011010":
            newstr = "RET";
            break;
          case "0010000":
            newstr = "PUSHA";
            break;
          case "0010001":
            newstr = "POPA";
            break;
          case "0010010":
            newstr = "BE";
            break;
          case "0010011":
            newstr = "BNE";
            break;
          case "0010100":
            newstr = "BS";
            break;
          case "0010101":
            newstr = "BI";
            break;
          case "0010110":
            newstr = "BIE";
            break;
          case "0010111":
            newstr = "BSE";
            break;
          case "0011000":
            newstr = "BRI";
            break;
          default:
            newstr = "error";
        }
        
        //it needs an adress 
        if (newstr !== "error" && newstr !== "PUSHA" && newstr !== "POPA" && newstr !== "RET"){
            let adr=hexToBin(hexcode).substring(8,24);
            if (adr.length!=16) {
              newstr="error"
            }else{
              newstr+=" "+parseInt(adr, 2).toString()
            } 
            if (size==='0') {
              newstr="error";
            }    
        }
        
  
        
  }else{
    let opcode=str1+str2;
    let size=str3;
    let i=16;
    let shift1='';
    let shift2='';
  
    // let memory1=false;//indicates if the first operand is memory
    // let memory2=false;//indicates if the second operand is memory
    let ind=hexToBin(hexcode).substring(8,10);
    let remo1=hexToBin(hexcode).substring(10,13);
    let remo2=hexToBin(hexcode).substring(13,16);
    // console.log("size="+size);
    // console.log("ind="+ind);
    // console.log("reg/mod1="+remo1);
    // console.log("reg/mod2="+remo2);
  
    switch(opcode) {
      case "0000000":
        newstr = "ADD";
        break;
      case "0000001":
        newstr = "SUB";
        break;
      case "0000010":
        newstr = "MUL";
        break;
      case "0000011":
        newstr = "DIV";
        break;
      case "0000100":
        newstr = "AND";
        break;
      case "0000101":
        newstr = "OR";
        break;
      case "0000110":
        newstr = "XOR";
        break;
      case "0000111":
        newstr = "NOR";
        break;
      case "0001000":
        newstr = "NAND";
        break;
      case "0001001":
        newstr = "CMP";
        break;
      case "0001100":
        newstr = "MOV";
        break;
      default:
        newstr = "error";
    }
    if(newstr!="error"){ 
      let adr1='';
      if(ind[0]==='0' && size=='0'){
        
        switch (remo1) {
          case "000":
            newstr = newstr + " " + "R1R";
            break;
          case "001":
            newstr = newstr + " " + "R2R";
            break;
          case "010":
            newstr = newstr + " " + "R3R";
            break;
          case "011":
            newstr = newstr + " " + "ACCR";
            break;
          case "100":
            newstr = newstr + " " + "R1L";
            break;
          case "101":
            newstr = newstr + " " + "R2L";
            break;
          case "110":
            newstr = newstr + " " + "R3L";
            break;
          case "111":
            newstr = newstr + " " + "ACCL";
            break;
          default:
            newstr = "error";
        }
  
  
      }else if(ind[0]==='0' && size=='1'){
        
        switch (remo1) {
          case "000":
            newstr = newstr + " " + "R1";
            break;
          case "001":
            newstr = newstr + " " + "R2";
            break;
          case "010":
            newstr = newstr + " " + "R3";
            break;
          case "011":
            newstr = newstr + " " + "R4";
            break;
          case "100":
            newstr = newstr + " " + "ACC";
            break;
          case "101":
            newstr = newstr + " " + "BR";
            break;
          case "110":
            newstr = newstr + " " + "IR";
            break;
          case "111":
            newstr = newstr + " " + "SR";
            break;
          default:
            newstr = "error";
        }   
  
      }else{ 
          
        if (size==='1' || (remo1=="001" || remo1=="010" ||remo1=="110" ||remo1=="111")) {
          adr1=hexToBin(hexcode).substring(i,i+16);
          i+=16;
        
            // adr1=hexToBin(hexcode).substring(16,32);
          //  console.log("adr1="+adr1);
        }
        else{
        adr1=hexToBin(hexcode).substring(i,i+8);
        i=i+8;
            // adr1=hexToBin(hexcode).substring(16,24);
          //  console.log("adr1="+adr1);
        }
        
        if (isNaN(parseFloat(adr1))) {
          newstr="error";
        }else{
        switch (remo1) {
          case "000":
            newstr+=" "+DecConv(adr1) ;
            break;
          case "001":
            newstr+=" "+parseInt(adr1,2)+"*";
            break;
          case "010":
            newstr+=" "+parseInt(adr1,2)+"**";
            break;
          case "011":
            newstr+=" "+"BR*+"+parseInt(adr1,2);
            break;
          case "100":
            newstr+=" "+"IR*+"+parseInt(adr1,2);
            break;
          case "101":
            newstr+=" "+"BR*+IR+"+parseInt(adr1,2);
            break;
          case "110":
            newstr+=" "+parseInt(adr1,2)+"*";            
            break;
          case "111":
            newstr+=" "+parseInt(adr1,2)+"*";                        
            break;  
          default:
            newstr = "error";
        }
      } 
      }
    // console.log("adr1="+adr1);
    if(newstr!="error"){
      if(ind[1]==='0' && size=='0'){
        if ((remo1=="110" || remo1=="111") && ind[0]==='1'){     
          if (remo1=="110") {
          shift1=hexToBin(hexcode).substring(i,i+8);
          i+=8;
          }
          if (remo1=="111") {
          shift1=hexToBin(hexcode).substring(i,i+16);
          i+=16;
          }
          newstr+="+"+parseInt(shift1,2);
        }
        //another test please
        // if (isNaN(parseFloat(shift1)) ) {
        //   newstr="error";
        // }
        if(newstr!='error'){
        switch (remo2) {
          case "000":
            newstr = newstr + "," + "R1R";
            break;
          case "001":
            newstr = newstr + "," + "R2R";
            break;
          case "010":
            newstr = newstr + "," + "R3R";
            break;
          case "011":
            newstr = newstr + "," + "ACCR";
            break;
          case "100":
            newstr = newstr + "," + "R1L";
            break;
          case "101":
            newstr = newstr + "," + "R2L";
            break;
          case "110":
            newstr = newstr + "," + "R3L";
            break;
          case "111":
            newstr = newstr + "," + "ACCL";
            break;
          default:
            newstr = "error";
        }
      }
      }else if(ind[1]==='0' && size=='1'){
        if ((remo1=="110" || remo1=="111")&& ind[0]==='1'){     
          if (remo1=="110") {
          shift1=hexToBin(hexcode).substring(i,i+8);
          i+=8;
          }
          if (remo1=="111") {
          shift1=hexToBin(hexcode).substring(i,i+16);
          i+=16;
          }
          newstr+="+"+parseInt(shift1,2);
        }
        // if (isNaN(parseFloat(shift1)) ) {
        //   newstr="error";
        // }
        if(newstr!='error'){
        switch (remo2) {
          case "000":
            newstr = newstr + "," + "R1";
            break;
          case "001":
            newstr = newstr + "," + "R2";
            break;
          case "010":
            newstr = newstr + "," + "R3";
            break;
          case "011":
            newstr = newstr + "," + "R4";
            break;
          case "100":
            newstr = newstr + "," + "ACC";
            break;
          case "101":
            newstr = newstr + "," + "BR";
            break;
          case "110":
            newstr = newstr + "," + "IR";
            break;
          case "111":
            newstr = newstr + "," + "SR";
            break;
          default:
            newstr = "error";
        }
      }
      }else{
        let adr2;
        if (size==='1' ||(remo2=="001" || remo2=="010" ||remo2=="110" ||remo2=="111")) {
          adr2=hexToBin(hexcode).substring(i,i+16);
          i+=16
          // adr2=hexToBin(hexcode).substring(32,48);
          //  console.log("adr="+adr2);
        }
        else{
          adr2=hexToBin(hexcode).substring(i,i+8);
          i+=8;
          //  adr2=hexToBin(hexcode).substring(24,32);
          // console.log("adr1="+adr2);
        }  
        
        //tester le dep aprés avoir la dexiéme adresse 
        if (remo1=="110" || remo1=="111"){
          
          if (remo1=="110") {
          shift1=hexToBin(hexcode).substring(i,i+8);
          i+=8;
          }
          if (remo1=="111") {
          shift1=hexToBin(hexcode).substring(i,i+16);
          i+=16;
          }
          
          newstr+="+"+parseInt(shift1,2);
      }   
        if (remo2=="110") {
          shift2=hexToBin(hexcode).substring(i,i+8);
          i+=8;
        }
        if (remo2=="111") {
          shift2=hexToBin(hexcode).substring(i,i+16);
          i+=16;
        }
        console.log('adr1='+parseInt(adr1,2));
        console.log('adr2='+parseInt(adr2,2));
        console.log('shift1='+parseInt(shift1,2));
        console.log('shift2='+parseInt(shift2,2));
        // console.log("adr2="+adr2);
        //very important test:
        if (isNaN(parseFloat(adr2)) ) {
          newstr="error";
        }
        //!!!! important to verify this condition later :
        // else if(((remo1=='111'||remo1=='110')||(remo2=='111'||remo2=='110'))&&(isNaN(parseFloat(shift1)) || isNaN(parseFloat(shift2)))){
        //   newstr="error";
        //   console.log('rani hna');
        
  
        // }
        else{
        switch (remo2) {
          case "000":
            newstr+=","+DecConv(adr2) ;
            break;
          case "001":
            newstr+=","+parseInt(adr2,2)+"*";
            break;
          case "010":
            newstr+=","+parseInt(adr2,2)+"**";
            break;
          case "011":
            newstr+=","+"BR*+"+parseInt(adr2,2);
            break;
          case "100":
            newstr+=","+"IR*+"+parseInt(adr2,2);
            break;
          case "101":
            newstr+=","+"BR*+IR+"+parseInt(adr2,2);
            break;
          case "110":
              newstr+=","+parseInt(adr2,2)+"*"+"+"+parseInt(shift2,2);            
              break;
          case "111":
              newstr+=","+parseInt(adr2,2)+"*"+"+"+parseInt(shift2,2);                        
              break;    
          default:
            newstr = "error";
        }
      }
        // console.log(newstr); // Output: "Indirect"
      }
    }
    }
  }
   return newstr;
  }

export {HexaToCode};