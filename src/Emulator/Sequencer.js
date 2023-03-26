import { Register } from "./Register.js";
import { queue } from "../Ide.jsx";
import { Registers } from "../Ide.jsx";
import { hash,hashmap } from "./Opcodes.js";
import { addressingModes } from "../Ide.jsx";

function hex2bin(hex){
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
}

class Sequenceur{
    constructor(){
        this.RI=new Register();
    };
    getinstrbyte(){//from the queue
        let Inshex=queue.shift();
        let Ins=hex2bin(Inshex);
        this.RI.setvalue(Ins);
        //the animation for this instruction goes here
        queue.fetchInstruction();//----///
    }
    decode(){
        let instruction=this.RI.getvalue();
        let key=instruction.substring(0,4);
        let index=0;
        let instrObject;
        if(key>='0100'){
            let numreg=instruction.substring(4,7);
            let taille=instruction.charAt(7);
            index=hash(key);
            instrObject=hashmap[index].instrObject;
            if(key=='1000' | key=='1011' ){
                instrObject.register1=numreg;
            }
            else{
                let value=0;
                if(taille=='1'){
                value =parseInt(Registers[parseInt(numreg, 2)].getvalue(), 2);
            }else{
                if(numreg=='000'){
                    value = parseInt(Registers[0].getright(),2);
                }else if(numreg=='001'){
                    value = parseInt(Registers[0].getleft(),2);
                }
                if(numreg=='010'){
                    value = parseInt(Registers[1].getright(),2);
                }else if(numreg=='011'){
                    value = parseInt(Registers[1].getleft(),2);
                }
                if(numreg=='100'){
                    value = parseInt(Registers[2].getright(),2);
                }else if(numreg=='101'){
                    value = parseInt(Registers[2].getleft(),2);
                }
                if(numreg=='110'){
                    value = parseInt(Registers[3].getright(),2);
                }else if(numreg=='111'){
                    value = parseInt(Registers[3].getleft(),2);
                }
            }
            instrObject.value1=value;
            instrObject.taille=taille;
            }
        }else{
            if(key>='0010' & key<='0011'){
                key=instruction.substring(0,7);
                let taille=instruction.charAt(7);
                index=hash(key);
                instrObject=hashmap[index].instrObject;
                if(!(key=='0011010'| key =='0010000' | key =='0010001')){
                    this.getinstrbyte();
                    let adresse=this.RI.getvalue()
                    this.getinstrbyte();
                    adresse=adresse+this.RI.getvalue()
                    adresse=parseInt(adresse,2);//hexa to decimal
                    instrObject.addresse1=adresse;
                    instrObject.taille=taille;
                }
            }else{
                key=instruction.substring(0,7);
                let taille=instruction.charAt(7);
                this.getinstrbyte();
                let secondByte=this.RI.getvalue();
                //secondByte=hex2bin(secondByte);
                let Ind=secondByte.substring(0,2);
                let regMod1=secondByte.substring(2,5);
                let regMod2=secondByte.substring(5,8);
                if(key=='0001100'){
                    key=key+Ind;
                    index=hash(key);
                    instrObject=hashmap[index].instrObject;
                    instrObject.taille=taille;
                    let value2=0;
                    if(key=='000110000'){
                        if(taille=='1'){
                            value2 = parseInt(Registers[parseInt(regMod2, 2)].getvalue(),2);
                        }else{
                            //reading reg2 content
                            if(regMod2=='000'){
                                value2 = parseInt(Registers[0].getright(),2);
                            }else if(regMod2=='001'){
                                value2 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod2=='010'){
                                value2 = parseInt(Registers[1].getright(),2);
                            }else if(regMod2=='011'){
                                value2 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod2=='100'){
                                value2 = parseInt(Registers[2].getright(),2);
                            }else if(regMod2=='101'){
                                value2 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod2=='110'){
                                value2 = parseInt(Registers[3].getright(),2);
                            }else if(regMod2=='111'){
                                value2 = parseInt(Registers[3].getleft(),2);
                            }
                        }
                        instrObject.value2=value2;
                        instrObject.register1=parseInt(regMod1,2);//decimal
                    }else if(key=='000110001'){
                        this.getinstrbyte();
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte();
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let depl=0;
                        if(regMod2=='110'){
                            depl=this.getinstrbyte();
                            depl=parseInt(depl,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte();
                            let depl=this.RI.getvalue()
                            this.getinstrbyte();
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresse,0,taille,depl);
                        instrObject.value2=value2;
                        instrObject.register1=parseInt(regMod1,2);
                    }else if(key=='000110010'){
                        this.getinstrbyte();
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte();
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let value2=0;
                        if(taille=='1'){
                            value2 = parseInt(Registers[parseInt(regMod2, 2)].getvalue(),2);
                        }else{
                            
                            //reading reg2 content
                            if(regMod2=='000'){
                                value2 = parseInt(Registers[0].getright(),2);
                            }else if(regMod2=='001'){
                                value2 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod2=='010'){
                                value2 = parseInt(Registers[1].getright(),2);
                            }else if(regMod2=='011'){
                                value2 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod2=='100'){
                                value2 = parseInt(Registers[2].getright(),2);
                            }else if(regMod2=='101'){
                                value2 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod2=='110'){
                                value2 = parseInt(Registers[3].getright(),2);
                            }else if(regMod2=='111'){
                                value2 = parseInt(Registers[3].getleft(),2);
                            }
                        }
                        let depl=0;
                        if(regMod1=='110'){
                            this.getinstrbyte();
                            depl=this.RI.getvalue();
                            depl=parseInt(depl,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte();
                            depl=this.RI.getvalue()
                            this.getinstrbyte();
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let addresse1 = addressingModes.modesAdr[parseInt(regMod1,2)](adresse,0,taille,depl);
                        instrObject.value2=value2;
                        instrObject.addresse1=addresse1;
                    }else if(key=='000110011'){
                        this.getinstrbyte();
                        let adresseop1=this.RI.getvalue()
                        this.getinstrbyte();
                        adresseop1=adresseop1+this.RI.getvalue()
                        adresseop1=parseInt(adresseop1,2);//hexa to decimal
                        this.getinstrbyte();
                        let adresseop2=this.RI.getvalue()
                        this.getinstrbyte();
                        adresseop2=adresseop2+this.RI.getvalue()
                        adresseop2=parseInt(adresseop2,2);//hexa to decimal
                        let depl1=0;
                        if(regMod1=='110'){
                            this.getinstrbyte();
                            depl1=this.RI.getvalue();
                            depl1=parseInt(depl1,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte();
                            depl1=this.RI.getvalue()
                            this.getinstrbyte();
                            depl1=depl1+this.RI.getvalue()
                            depl1=parseInt(depl1,2);//hexa to decimal
                        }
                        let depl2=0;
                        if(regMod2=='110'){
                            this.getinstrbyte();
                            depl2=this.RI.getvalue();
                            depl2=parseInt(depl2,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte();
                            depl2=this.RI.getvalue()
                            this.getinstrbyte();
                            depl2=depl2+this.RI.getvalue()
                            depl2=parseInt(depl2,2);//hexa to decimal
                        }
                        let value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresseop2,0,taille,depl2);
                        let addresse1 = addressingModes.modesAdr[parseInt(regMod1,2)](adresseop1,0,taille,depl1);
                        instrObject.value2=value2;
                        instrObject.addresse1=addresse1;
                    }
                }else{
                    index=hash(key);
                    instrObject=hashmap[index].instrObject;
                    instrObject.taille=taille;
                    if(Ind=='00'){
                        let value1=0;
                        let value2=0;
                        if(taille=='1'){
                            value1 = parseInt(Registers[parseInt(regMod1, 2)].getvalue(),2);
                            value2 = parseInt(Registers[parseInt(regMod2, 2)].getvalue(),2);
                        }else{
                            if(regMod1=='000'){
                                value1 = parseInt(Registers[0].getright(),2);
                            }else if(regMod1=='001'){
                                value1 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod1=='010'){
                                value1 = parseInt(Registers[1].getright(),2);
                            }else if(regMod1=='011'){
                                value1 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod1=='100'){
                                value1 = parseInt(Registers[2].getright(),2);
                            }else if(regMod1=='101'){
                                value1 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod1=='110'){
                                value1 = parseInt(Registers[3].getright(),2);
                            }else if(regMod1=='111'){
                                value1 = parseInt(Registers[3].getleft(),2);
                            }
                            if(regMod2=='000'){
                                value2 = parseInt(Registers[0].getright(),2);
                            }else if(regMod2=='001'){
                                value2 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod2=='010'){
                                value2 = parseInt(Registers[1].getright(),2);
                            }else if(regMod2=='011'){
                                value2 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod2=='100'){
                                value2 = parseInt(Registers[2].getright(),2);
                            }else if(regMod2=='101'){
                                value2 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod2=='110'){
                                value2 = parseInt(Registers[3].getright(),2);
                            }else if(regMod2=='111'){
                                value2 = parseInt(Registers[3].getleft(),2);
                            }
                        }
                        instrObject.value1=value1;
                        instrObject.value2=value2;
                    }else if(Ind=='01'){
                        this.getinstrbyte();
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte();
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let depl=0;
                        if(regMod2=='110'){
                            this.getinstrbyte();
                            depl=this.RI.getvalue();
                            depl=parseInt(depl,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte();
                            depl=this.RI.getvalue()
                            this.getinstrbyte();
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let value2 = addressingModes.modesVal[parseInt(regMod2,2)](adresse,0,taille,depl);
                        let value1=0;
                        if(taille=='1'){
                            value1 = parseInt(Registers[parseInt(regMod1, 2)].getvalue(),2);
                        }else{
                            if(regMod1=='000'){
                                value1 = parseInt(Registers[0].getright(),2);
                            }else if(regMod1=='001'){
                                value1 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod1=='010'){
                                value1 = parseInt(Registers[1].getright(),2);
                            }else if(regMod1=='011'){
                                value1 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod1=='100'){
                                value1 = parseInt(Registers[2].getright(),2);
                            }else if(regMod1=='101'){
                                value1 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod1=='110'){
                                value1 = parseInt(Registers[3].getright(),2);
                            }else if(regMod1=='111'){
                                value1 = parseInt(Registers[3].getleft(),2);
                            }
                        }
                        instrObject.value1=value1;
                        instrObject.value2=value2;
                    }else if(Ind=='10'){
                        this.getinstrbyte();
                        let adresse=this.RI.getvalue()
                        this.getinstrbyte();
                        adresse=adresse+this.RI.getvalue()
                        adresse=parseInt(adresse,2);//hexa to decimal
                        let depl=0;
                        if(regMod1=='110'){
                            this.getinstrbyte();
                            depl=this.RI.getvalue();
                            depl=parseInt(depl,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte();
                            depl=this.RI.getvalue()
                            this.getinstrbyte();
                            depl=depl+this.RI.getvalue()
                            depl=parseInt(depl,2);//hexa to decimal
                        }
                        let value1 =addressingModes.modesVal[parseInt(regMod1,2)](adresse,0,taille,depl);
                        let value2=0;
                        if(taille=='1'){
                            value2 = parseInt(Registers[parseInt(regMod2, 2)].getvalue(),2);
                        }else{
                            if(regMod2=='000'){
                                value2 = parseInt(Registers[0].getright(),2);
                            }else if(regMod2=='001'){
                                value2 = parseInt(Registers[0].getleft(),2);
                            }
                            else if(regMod2=='010'){
                                value2 = parseInt(Registers[1].getright(),2);
                            }else if(regMod2=='011'){
                                value2 = parseInt(Registers[1].getleft(),2);
                            }
                            else if(regMod2=='100'){
                                value2 = parseInt(Registers[2].getright(),2);
                            }else if(regMod2=='101'){
                                value2 = parseInt(Registers[2].getleft(),2);
                            }
                            else if(regMod2=='110'){
                                value2 = parseInt(Registers[3].getright(),2);
                            }else if(regMod2=='111'){
                                value2 = parseInt(Registers[3].getleft(),2);
                            }
                        }
                        instrObject.value1=value1;
                        instrObject.value2=value2;
                    }else if(Ind=='11'){
                        this.getinstrbyte();
                        let adresse1=this.RI.getvalue()
                        this.getinstrbyte();
                        adresse1=adresse1+this.RI.getvalue()
                        adresse1=parseInt(adresse1,2);//hexa to decimal
                        this.getinstrbyte();
                        let adresse2=this.RI.getvalue()
                        this.getinstrbyte();
                        adresse2=adresse2+this.RI.getvalue()
                        adresse2=parseInt(adresse2,2);//hexa to decimal
                        let depl1=0;
                        if(regMod1=='110'){
                            this.getinstrbyte();
                            depl1=this.RI.getvalue();
                            depl1=parseInt(depl1,2);
                        }else if(regMod1=='111'){
                            this.getinstrbyte();
                            depl1=this.RI.getvalue()
                            this.getinstrbyte();
                            depl1=depl1+this.RI.getvalue()
                            depl1=parseInt(depl1,2);//hexa to decimal
                        }
                        let depl2=0;
                        if(regMod2=='110'){
                            this.getinstrbyte();
                            depl2=this.RI.getvalue();
                            depl2=parseInt(depl2,2);
                        }else if(regMod2=='111'){
                            this.getinstrbyte();
                            depl2=this.RI.getvalue()
                            this.getinstrbyte();
                            depl2=depl2+this.RI.getvalue()
                            depl2=parseInt(depl2,2);//hexa to decimal
                        }
                        let value1 = parseInt(addressingModes.modesVal[parseInt(regMod1,2)](adresse1,0,taille,depl1),2);
                        let value2 = parseInt(addressingModes.modesVal[parseInt(regMod2,2)](adresse2,0,taille,depl2),2);
                        instrObject.value1=value1;
                        instrObject.value2=value2;
                    }
                }
                
            }
        }
        return instrObject;
    }
    execute(instrObject,is_animated){
        for (let i = 0; i < instrObject.stepsNum ; i++) {
            instrObject.steps[i]();
            if(is_animated){
                instrObject.animationSteps[i]();
            }
        }
    }
}
export default Sequenceur;