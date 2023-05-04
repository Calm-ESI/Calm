import IPImage from "../assets/images/calm/components/IP.svg"
import CmPic from "../assets/images/calm/components/CmPic.svg"
import MarPic from "../assets/images/calm/components/MarPic.svg"
import MdrPic from "../assets/images/calm/components/MdrPic.svg"
import BusPic from "../assets/images/calm/components/busPic.svg"
import iruPic from "../assets/images/calm/components/IRU.svg"
import sequencerPic from "../assets/images/calm/components/sequencerPic.svg"
import AluPic from "../assets/images/calm/components/AluPic.svg"
import RegistersPic from "../assets/images/calm/components/registersPic.svg"
import flagsPic from "../assets/images/calm/components/flagsPic.svg"
import IOBufferPic from "../assets/images/calm/components/IOBuffer.svg"
import IOControllerPic from "../assets/images/calm/components/IOController.svg"

export const MUnit = [
    {
        ComponentName:"Instruction Pointer",
        ComponentPicture:IPImage,
        componentDescription:"Hello",

    },
    {
        ComponentName:"Central Memory",
        ComponentPicture:CmPic,
        imageHeight: 65,
        componentDescription:"Hello",

    },
    {
        ComponentName:"Memory Address Register",
        ComponentPicture:MarPic,
        imageHeight: 60,
        componentDescription:"Hello",
    },
    {
        ComponentName:"Memory Data Register",
        ComponentPicture:MdrPic,
        componentDescription:"Hello",
    },
    {
        ComponentName:"Data & address buses",
        ComponentPicture:BusPic,
        imageHeight: 90,
        componentDescription:"Hello",
    }
];
export const CUnit = [
    {
        ComponentName:"Instruction Reception Unit",
        ComponentPicture:iruPic,
        componentDescription:"Hello",
    },
    {
        ComponentName:"Sequencer",
        ComponentPicture:sequencerPic,
        componentDescription:"Hello",
    }
];
export const PUnit = [
    {
        ComponentName:"ALU",
        ComponentPicture:AluPic,
        componentDescription:"Hello",
    },
    {
        ComponentName:"Registers",
        ComponentPicture:RegistersPic,
        componentDescription:"Hello",
    },
    {
        ComponentName:"Flag Register",
        ComponentPicture:flagsPic,
        componentDescription:"Hello",
    }
];
export const IOUnit = [
    {
        ComponentName:"Buffer",
        ComponentPicture:IOBufferPic,
        imageHeight: 60,
        componentDescription:"Hello",
    },
    {
        ComponentName:"IO Controller",
        ComponentPicture:IOControllerPic,
        imageHeight: 60,
        componentDescription:"Hello",
    }
];