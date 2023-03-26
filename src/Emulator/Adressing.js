import { memory } from "../Ide.jsx";
import {BR,IR} from "../Ide.jsx"
function hex2bin(hex){
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
}

class AddressingModes{
    constructor(){
        this.modesVal=[
            function immediatVal(adresse,animated,size,depl){
                return adresse;
            },//correspend au mode immediat
            function directVal(adresse,animated,size,depl){//the animation is missing//adresse is in decimal
            memory.setRam(adresse);
            memory.read(0);
            let byte1=hex2bin(memory.getRim());
            if(size==1){
                adresse=adresse+1;
                memory.setRam(adresse);
                memory.read(0);
                let byte2=hex2bin(memory.getRim());
                return byte2+byte1///à revoir
            }else{
                return byte1;//valur returned is in hexa 
            }
            },
            function indirectVal(adresse,animated,size,depl){
                memory.setRam(adresse);
                memory.read(0);
                let adr=parseInt(memory.getRim(), 16);
                memory.setRam(adr);
                memory.read(0);
                let byte1=hex2bin(memory.getRim());
                if(size==1){
                    adresse=adresse+1;
                    memory.setRam(adresse);
                    memory.read(0);
                    let byte2=hex2bin(memory.getRim());
                    return byte2+byte1///à revoir
                }else{
                    return byte1;
                }
                },
                function baseval(adresse,animated,size,depl){
                    adresse=adresse+BR.getvalue()+depl;
                    memory.setRam(adresse);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                    if(size==1){
                        adresse=adresse+1;
                        memory.setRam(adresse);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                },
                function indexeval(adresse,animated,size,depl){
                    adresse=adresse+IR.getvalue()+depl;
                    memory.setRam(adresse);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                    if(size==1){
                        adresse=adresse+1;
                        memory.setRam(adresse);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                },
                function baseindexval(adresse,animated,size,depl){
                    adresse=adresse+IR.getvalue()+depl+BR.getvalue();
                    memory.setRam(adresse);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                    if(size==1){
                        adresse=adresse+1;
                        memory.setRam(adresse);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                },
                function depl8val(adresse,animated,size,depl){
                    adresse=adresse+depl;
                    memory.setRam(adresse);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                    if(size==1){
                        adresse=adresse+1;
                        memory.setRam(adresse);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                },
                function depl16val(adresse,animated,size,depl){
                    adresse=adresse+depl;
                    memory.setRam(adresse);
                    memory.read(0);
                    let byte1=hex2bin(memory.getRim());
                    if(size==1){
                        adresse=adresse+1;
                        memory.setRam(adresse);
                        memory.read(0);
                        let byte2=hex2bin(memory.getRim());
                        return byte2+byte1///à revoir
                    }else{
                        return byte1;
                    }
                }
        ]
        this.modesAdr=[
            null,//pas d'adresse en mode immediat et pour gareder les index comme le code dans la documentation et pas les decaler
            function directAdr(adresse,animated,size,depl){
                return adresse;
            },
            function indirectAdr(adresse,animated,size,depl){///add
                adresse=adresse;
                memory.setRam(adresse);
                memory.read(0);
                return parseInt(memory.getRim(), 16);
            },
            function baseAdr(adresse,animated,size,depl){
                return adresse+BR.getvalue()+depl;
            },
            function indexeAdr(adresse,animated,size,depl){
                return adresse+IR.getvalue()+depl;
            },
            function baseindexeAdr(adresse,animated,size,depl){
                return adresse+IR.getvalue()+BR.getvalue()+depl;
            },
            function depl8Adr(adresse,animated,size,depl){
                return adresse+depl;
            },
            function depl16Adr(adresse,animated,size,depl){
                return adresse+depl;
            }
        ]
    }
    

}
export default AddressingModes;