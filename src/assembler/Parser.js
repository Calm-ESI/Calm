class AST{

    constructor(){
        this.root = null;
        this.current = null;
    }

    addNode(node){
        if(this.root == null){
            this.root = node;
            this.current = node;
        }else{
            this.current.addChild(node);
            this.current = node;
        }
    }

    removeNode(){
        this.current = this.current.parent;
    }

    getRoot(){
        return this.root;
    }



}