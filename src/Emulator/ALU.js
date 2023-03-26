import { Register } from "./Register.js";
import { generalPurposeRegister } from "./Register.js";
//!! notes
//RUAL1 AND RUAL2 must be devided into two parts -------------------
// l'acc is of a general purpose -----------------
//complemnt a deux fonction serai dans l'interface :-----------------
// le resultat de la multiplication est dans la variables res sur (16 ou 32 )------
// nhotou noss louwel fi (ACCL/ACCH) wela(ACC/R4)----------
// SHL SHR ram 3and aoufar .-----------------
//size rani hatha tedkhol 8 wela 16 a la place de 0 et 1-----------------
//l'overflow est reglé pour toutes les fonctions mais!!!!!------------------
//les autres premier bits de sont pas regler pour toutes les fonctions---------
//revoir le carry !!!!!!
//set overflow to 0 where there is no overflow et mm chose pour les autres flags
//shif en gardant le bit de signe 
/* 

dok ni ktbt la fonction du complement a deux donc on peut optimiser le nombre de lignes 
par remplacer quelques ligne avec cette fonction  

*/

function TwosComplement(num,size) { //a is a string 
    let a=num.toString(2);
    let len=a.length
    for (let i = 0; i < size-len; i++) {
        a='0'+a;
    }
    if(num<0){
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


//for strings to do str[index]=newChar "Which is not allowed in js "
function replaceAt(str, index, newChar) {
    function replacer(origChar, strIndex) {
        if (strIndex === index)
            return newChar;
        else
            return origChar;
    }
    return str.replace(/./g, replacer);
}

function fullzero(size,res){
    while (res.length<size) {
    res="0"+res;
    }
    return res;
}
class Alu{
     //ALU Components:
     //---------------
    Acc=new generalPurposeRegister();
    constructor(){
        this.Rual1=new generalPurposeRegister();
        this.Rual2=new generalPurposeRegister();
        
        this.Flags=['0','0','0','0','0','0','0','0'];
         //zero,signe,carry,parity,p/im,overflow,      
         //parity:number of ones in a number
         //i have 6 FlAGS
    }

       //-------------------------------      
        setFlags(i,value){
        this.Flags[i]=value;            
    }
    getFlags(i){
        return this.Flags[i];
    }

       //!!!! Note:
       // Flags will b modified in all methods 

       //Arithmetic Methods:
       //-------------------
    addBinary(size) {
        let sum = '';
        let carry = 0;
        let i = this.Rual1.value.length - 1;
        while (i >= 0) {
        const bitA = i >= 0 ? parseInt(this.Rual1.value[i]) : 0;
        const bitB = i >= 0 ? parseInt(this.Rual2.value[i]) : 0;
        const bitSum = bitA + bitB + carry;
        sum = (bitSum % 2) + sum;
        carry = Math.floor(bitSum / 2);
        if (i==size) {
            break;
        }
        i--;
        } 
         // the result 
        this.Acc.value=sum;
         // Flags:
          //stadars:
         if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
         this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((sum.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
          //overflow
          if (this.Rual1.getvalue()[0]==this.Rual2.getvalue()[0]) {
              if (this.Rual1.getvalue()[0]!=this.Acc.getvalue()[0]) {
                  this.Flags[5]='1';
                }
            }
        }
       
        subBinary(size){
        //get the two's complement of the content of the RUAL2:
         console.log("RUAL2 Value befor anything "+this.Rual2.value);
         
         //than the one's complement of the result :
         let i=this.Rual2.value.length-1;
         let b="0".repeat(size);
         while (i >= 0) {
            if (this.Rual2.value[i]=='0') {
             b=replaceAt(b,i,'1');
            }else{b=replaceAt(b,i,'0');}
           i--;       
         } 
         this.Rual2.setvalue(b);
         console.log("Ones complement of  RUAL2  "+this.Rual2.value);
         
         //first we add (RAL2)+1
         let x=1;
         let res1=parseInt(this.Rual2.getvalue(),2);
         res1=res1+x;
         this.Rual2.setvalue(fullzero(size,res1.toString(2)));
         b=this.Rual2.getvalue()//very important on overflow detection
         console.log("Tows complement of RUAL2 "+this.Rual2.value);
         //then the simple binary addition between RUAL1 and RUAL2:
         this.addBinary(size)
         console.log("The result of subsrtaction "+ this.Acc.getvalue());
         
         //overflow detection:
         if (this.Rual1.getvalue()[0]!=b[0]) {
           if (b[0]==this.Acc.getvalue()[0]) {
               this.Flags[5]='1';
           }
         } 
         if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
         //this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
       }
       
 
       binaryMultiply(size) {
         let binaryString1=(this.Rual1.getvalue()).substring(0,size);
         console.log("string1 :"+binaryString1);
         
         //two's complement  of the abs part of a     
         if(this.Rual1.getvalue()[0]=='1'){
             let i=size;
             let find1=false;
             for (let i = size; i >=0; i--) {
                 if(find1==true){
                     if (binaryString1[i]=='1') {
                         binaryString1=replaceAt(binaryString1,i,'0');
                     }else{
                         binaryString1=replaceAt(binaryString1,i,'1');
                     }
                 }
                 if (binaryString1[i]==1) {
                     find1=true;
                 }
             }
         }
         let binaryString2=this.Rual2.getvalue().substring(0,size);//verifier
         console.log("string2 :"+binaryString2);
     
         //two's complement  of the abs part of b  
         if(this.Rual2.getvalue()[0]=='1'){
             let i=size;
             let find1=false
             for (let i = size; i >=0; i--) {
                 if(find1==true){
                     if (binaryString2[i]=='1') {
                         binaryString2=replaceAt(binaryString2,i,'0');
                     }else{
                         binaryString2=replaceAt(binaryString2,i,'1');
                     }
                 }
                 if (binaryString2[i]==1) {
                     find1=true;
                 }
             }
         } 
         
         let int1 = parseInt(binaryString1, 2)
         console.log(int1)
         let int2 = parseInt(binaryString2, 2)
         console.log(int2)
         let res= (int1 * int2).toString(2);
         console.log(res);
         if(res.length>=16 ){res=fullzero(32,res)}
         else{ res=fullzero(16,res)}
         if (this.Rual1.getvalue()[0]==this.Rual2.getvalue()[0]) {
             console.log("positive result")
             
         }else{
             console.log("negative result");
             let find1=false
             for (let i = res.length; i >=0; i--) {
                 if(find1==true){
                     if (res[i]=='1') {
                         res=replaceAt(res,i,'0');
                     }else{
                         res=replaceAt(res,i,'1');
                     }
                 }
                 if (res[i]==1) {
                     find1=true;
                 }
            }
        }
         //il faut regler le problem de l'overflow
         if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
        //this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp

        console.log(res);
        if(res.length>16){
            let resacc=res.substring(16,32);
            this.Acc.setvalue(resacc);
            let resr4=res.substring(0,16);
            return resr4;
        }else{
            this.Acc.setvalue(res);
        }
         //!!!!!!! note 
         // we must add conditions about size to divied the res into two parts 
         //the first part will be in the ACC and the second part will be in the 4th register
         //overflow detection:
        if (res.length>size) {
                this.Flags[5]='1';
            }
            
    }


       DivBinary(size){
         
         let binaryString1=(this.Rual1.getvalue()).substring(1,size);
         console.log("string1 :"+binaryString1);
         
         //two's complement  of the abs part of a     
         if(this.Rual1.getvalue()[0]=='1'){
             let i=size;
             let find1=false;
             for (let i = size; i >=0; i--) {
                 if(find1==true){
                     if (binaryString1[i]=='1') {
                         binaryString1=replaceAt(binaryString1,i,'0');
                     }else{
                         binaryString1=replaceAt(binaryString1,i,'1');
                     }
                 }
                 if (binaryString1[i]==1) {
                     find1=true;
                 }
             }
         }
         let binaryString2=this.Rual2.getvalue().substring(1,size);
         console.log("string2 :"+binaryString2);
     
         //two's complement  of the abs part of b  
         if(this.Rual2.getvalue()[0]=='1'){
             let i=size;
             let find1=false
             for (let i = size; i >=0; i--) {
                 if(find1==true){
                     if (binaryString2[i]=='1') {
                         binaryString2=replaceAt(binaryString2,i,'0');
                     }else{
                         binaryString2=replaceAt(binaryString2,i,'1');
                     }
                 }
                 if (binaryString2[i]==1) {
                     find1=true;
                 }
             }
         } 
 
         let int1 = parseInt(binaryString1, 2)
         console.log(int1)
         let int2 = parseInt(binaryString2, 2)
         console.log(int2)
         let q= (Math.floor(int1 / int2)).toString(2);
         console.log("le quotient en valeur absolue :"+q);
         let r=(int1 % int2).toString(2)
         q=fullzero(size,q);
         console.log("quotient before two's complement "+q);
         r=fullzero(size,r);
         //positive or negativ quotient
         if (this.Rual1.getvalue()[0]==this.Rual2.getvalue()[0]) {
             console.log("positive quotient ")
             
         }else{
             console.log("negative quotient");
             let find1=false
             for (let i =q.length; i >=0; i--) {
                 if(find1==true){
                     if (q[i]=='1') {
                         q=replaceAt(q,i,'0');
                     }else{
                         q=replaceAt(q,i,'1');
                     }
                 }
                 if (q[i]==1) {
                     find1=true;
                 }
             }
         }
           
         
         //positive or negative reste                     
 
         if(this.Rual1.getvalue()[0]=='0') {
           console.log("positive reste ")
          }else{
           console.log("negative rete");
           let find1=false
           for (let i =r.length; i >=0; i--) {
               if(find1==true){
                   if (r[i]=='1') {
                       r=replaceAt(r,i,'0');
                   }else{
                       r=replaceAt(r,i,'1');
                   }
               }
               if (r[i]==1) {
                   find1=true;
               }
           } 
   
 
         }
         if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
         //this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
        
         console.log("le quotient :" +q);
         
         console.log("le reste en valeur absolue: "+r);
         
        this.Acc.setvalue(q);

        return r;
 
 
       }
 
      //Logical Methods:
      //----------------
 
       andBinary(size) {
         let res = '';
         
         for (let i = 16-size; i < 16; i++) {
           res += this.Rual1.value[i] === '1' && this.Rual2.value[i] === '1' ? '1' : '0';
         }
         
        this.Acc.value=res;
        if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
        //this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
       }
 
 
       orBinary(size) {
         let res = '';
         
         for (let i = 16-size; i < 16; i++) {
           res += this.Rual1.value[i] === '1' || this.Rual2.value[i] === '1' ? '1' : '0';
         }
         
         this.Acc.value=res;
         if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
        //this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
       }
 
    nandBinary(size) {
        let res = '';
         
         for (let i = 16-size; i < 16; i++) {
           res += this.Rual1.value[i] === '1' && this.Rual2.value[i] === '1' ? '0' : '1';
         }
         
         this.Acc.value=res;
         if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
        //this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
       }
      
       
       norBinary(size) {
         let res = '';
         
         for (let i = 16-size; i < 16; i++) {
           res += this.Rual1.value[i] === '0' && this.Rual2.value[i] === '0' ? '1' : '0';
         }
         
         this.Acc.value=res;
         if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
        //this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
       }
      
 
       xorBinary(size) {
         let res = '';
         
         for (let i = 16-size; i < 16; i++) {
           res += this.Rual1.value[i] !== this.Rual2.value[i] ? '1' : '0';
         
         }
 
         this.Acc.value=res;
         if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
        //this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
       }
        
       //specific operations :
 
       ROL(size){
         let result1;
         let result2;
         let result;
         let carry=0;
         result1=this.RUAL1.substring(1,size);
           result2=this.RUAL1.charAt(0);
           result=result1+result2;
           carry=result2//FLAG Carry
           
           this.Acc.setvalue(result);
           if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
        this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
       }
 
       ROR(size){
         let result1;
         let result2;
         let result;
         let carry=0;
         result1=this.RUAL1.substring(0,size-1);
           result2=this.RUAL1.charAt(size-1);
           result=result2+result1;
         carry=result2//FLAG Carry
         this.Acc.setvalue(result);
         if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
         this.Flags[1]=this.Acc.getvalue()[0];//signe
        this.Flags[2]=carry.toString();//carry
         let figure="1"
         this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
         this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
       }
    SHL(size){
        let result1;
        let result;
        let carry=0;
        result1=this.RUAL1.substring(1,size);
        carry=this.Rual1.charAt(0);//FLAG Carry
        result=result1+'0';
        
        this.Acc.setvalue(result);
        if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
        this.Flags[1]=this.Acc.getvalue()[0];//signe
        this.Flags[2]=carry.toString();//carry
        let figure="1"
        this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
        this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
    }
    SHR(size){
        let result1;
        let result;
        let carry=0;
        result1=this.RUAL1.substring(0,size-1);
        result='0'+result1;
        carry='0';
        this.Acc.setvalue(result);
        if (parseInt(this.Acc.getvalue())==0) {this.Flags[0]='1'}//zero
        this.Flags[1]=this.Acc.getvalue()[0];//signe
        this.Flags[2]=carry.toString();//carry
        let figure="1"
        this.Flags[3] = ((this.Acc.value.match(new RegExp(figure, "g")) || []).length %2).toString();//parity
        this.Flags[4]=this.Acc.getvalue()[size-1];//p/imp
    }
}
 //let name="aymen";
 //console.log(fullzero(10,"aymen"));

//const Alu1=new Alu();

// Alu1.Rual1.setvalue("1100000000001001")
// Alu1.Rual2.setvalue("0100000000000010")

//Alu1.binaryMultiply(16);

// console.log(TwosComplement(-3,16));
 //sur 8 bits tout marche bien avec la sustraction 
 //mmavec 16 bits tout marche bien elhamdoulilah .
export default Alu;
export {TwosComplement,replaceAt,fullzero};