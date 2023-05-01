// import basedOnPic from "/assets/images/calm/addressing-modes/based.png";
// import directPic from "/assets/images/calm/addressing-modes/direct.png";
// import doubleArrowPic from "/assets/images/calm/addressing-modes/double-right-arrow.png";
// import immediatePic from "/assets/images/calm/addressing-modes/immediate.png";
// import indirectPic from "/assets/images/calm/addressing-modes/indirect.png";
// import rightArrowPic from "/assets/images/calm/addressing-modes/right-arrow.png";
// import rightIndexPic from "/assets/images/calm/addressing-modes/pointing.png";
// import basedIndexedPic from "/assets/images/calm/addressing-modes/basedIndexed.png";
export const properties =[
    {   id:1,
        modeName: "Immediate",
        description:"Getting the information " +
            "immediately from the instruction code after decoding it, so the operand  would be in the second part of " +
            "the instruction (depending if where in the general format or the reduced format) to be used in the " +
            "execution with no memory access and that’s why it’s called immediate."
    },
    {   id:2,
        modeName: "Direct",
        description:"Getting the information directly from it’s memory address that is " +
            "provided by the instruction, so here we’ll have to do one memory access to " +
            "retrieve the information."
    },
    {   id:3,
        modeName: "Indirect",
        description:"Getting the information indirectly from the address that is stored in the address provided by the " +
            "instruction, at first it may sound a bit confusing but you’ll see how much is this mode important when " +
            "you’ll deal with pointers, no more spoils because you’ll learn them in data structures, but I’ll only want " +
            "you to remember that it’s an memory address “pointing” the memory address that contains the information " +
            "that we want and so we’ll have to do 2 memory accesses to get to it, the first one is to get the physical " +
            "address of the information and the second one is to retrieve the data."
    },
    {   id:4,
        modeName: "Based",
        description:"Getting the " +
            "information based on the address stored in the base register, so we’ll have to do some " +
            "calculation by adding the value that we have in the instruction to the address found in the " +
            "base register to get the physical address of the data, it is used mostly to retrieve data from " +
            "arrays based on the first element of the array and it requires 1 memory access."
    },
    {
        id:5,
        modeName: "Based Indexed",
        description:"hello"
    },
    {  id:6,
        modeName:"Shift on 8 bits",
        description:"hello"
    },
    {
        id:7,
        modeName:"Shift on 16 bits",
        description:"hello"
    }
    ];

// export const properties = [
//     {
//     name: 'Immediate',
//     description: 'description for addressing 1',
//     imagepath: "/assets/images/calm/addressing-modes/immediate.png"
//     },
//     {
//     name: 'Direct',
//     description: 'description for addressing 2',
//     imagepath: "/assets/images/calm/addressing-modes/direct.png"
//     },
//     {
//     name: 'Indirect',
//     description: 'description for addressing 2',
//     imagepath: "/assets/images/calm/addressing-modes/indirect.png"
//     },
//     {
//     name: 'Based',
//     description: 'description for addressing 2',
//     imagepath: "/assets/images/calm/addressing-modes/based.png"
//     },
//     {
//     name: 'Indexed',
//     description: 'description for addressing 2',
//     imagepath: "/assets/images/calm/addressing-modes/pointing.png"
//     },
//     {
//     name: 'Based Indexed',
//     description: 'description for addressing 2',
//     imagepath: "/assets/images/calm/addressing-modes/basedIndexed.png"
//     },
//     {
//     name: "Shift on 8 bits",
//     description: 'description for addressing 2',
//     imagepath: "/assets/images/calm/addressing-modes/right-arrow.png" 
//     },
//     {
//     name: "Shift on 16 bits",
//     description: 'description for addressing 2',
//     imagepath: "/assets/images/calm/addressing-modes/double-right-arrow.png" 
//     }
// ]