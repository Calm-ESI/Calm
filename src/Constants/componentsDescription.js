import AluPic from "./../assets/images/calm/components/AluPic.svg"
import BusPic from "./../assets/images/calm/components/busPic.svg"
import CmPic from "./../assets/images/calm/components/CmPic.svg"
import IOBufferPic from "./../assets/images/calm/components/IOBuffer.svg"
import IOControllerPic from "./../assets/images/calm/components/IOController.svg"
import IPImage from "./../assets/images/calm/components/IP.svg"
import flagsPic from "./../assets/images/calm/components/flagsPic.svg"
import MarPic from "./../assets/images/calm/components/MarPic.svg"
import MdrPic from "./../assets/images/calm/components/MdrPic.svg"
import RegistersPic from "./../assets/images/calm/components/registersPic.svg"
import sequencerPic from "./../assets/images/calm/components/sequencerPic.svg"
import iruPic from "./../assets/images/calm/components/IRU.svg"

export const MUnit = [
    {
        id: 1,
        ComponentName:"Instruction Pointer",
        ComponentPicture:IPImage,
        componentDescription:"Hello",

    },
    {
        id: 2,
        ComponentName:"Central Memory",
        ComponentPicture:CmPic,
        imageHeight: "65",
        componentDescription:"Hello",

    },
    {
        id: 3,
        ComponentName:"Memory Address Register",
        ComponentPicture:MarPic,
        imageHeight: "60",
        componentDescription:"Hello",
    },
    {
        id: 4,
        ComponentName:"Memory Data Register",
        ComponentPicture:MdrPic,
        componentDescription:"Hello",
    },
    {
        id: 5,
        ComponentName:"Data & address buses",
        ComponentPicture:BusPic,
        imageHeight: "90",
        componentDescription:"Hello",
    }
];
export const CUnit = [
    {
        id: 1,
        ComponentName:"Instruction Reception Unit",
        ComponentPicture:iruPic,
        componentDescription:"Hello",
    },
    {
        id: 2,
        ComponentName:"Sequencer",
        ComponentPicture:sequencerPic,
        componentDescription:"Hello",
    }
];
export const PUnit = [
    {
        id:1,
        ComponentName:"ALU",
        ComponentPicture:AluPic,
        componentDescription:"Hello",
    },
    {
        id:2,
        ComponentName:"Registers",
        ComponentPicture:RegistersPic,
        componentDescription:"Hello",
    },
    {
        id:3,
        ComponentName:"Flag Register",
        ComponentPicture:flagsPic,
        componentDescription:"Hello",
    }
];
export const IOUnit = [
    {
        id:1,
        ComponentName:"Buffer",
        ComponentPicture:IOBufferPic,
        imageHeight: "60",
        componentDescription:"Hello",
    },
    {
        id:2,
        ComponentName:"IO Controller",
        ComponentPicture:IOControllerPic,
        imageHeight: "60",
        componentDescription:"Hello",
    }
];