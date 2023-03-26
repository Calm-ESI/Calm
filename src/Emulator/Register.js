class Register{
    constructor(){ 
        this.value="0".repeat(16); 
    }
    setvalue(value){//string binary
        this.value=value; 
    }
    getvalue(){//string binary
        return this.value;
    }
}

class generalPurposeRegister extends Register{
    getleft(){
        let val=super.getvalue();
        return val.substring(0,8);
    }
    setleft(leftside){
        let val=super.getvalue();
        let rightside=val.substring(8,16);
        val=leftside+rightside;
        super.setvalue(val);
    }
    getright(){
        let val=super.getvalue();
        return val.substring(8,16);
    }
    setright(rightside){
        let val=super.getvalue();
        let leftside=val.substring(0,8);
        val=leftside+rightside;
        super.setvalue(val);
    }
}

export {Register,generalPurposeRegister};