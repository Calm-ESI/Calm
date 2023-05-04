import React from 'react';
import './docStyle.css';
import {motion} from "framer-motion";

const HelpDoc = () => {
    return (
        <>
            <p className="c12" style={{textIndent: "36pt"}}>
                <span className="c2 c1">
                    This is the help section where you can find everything about how
                to write correct calM assembly so we will tackle many subjects such as: instructions, addressing modes,
                operands, and finally some routines you should follow when writing calM's assembly on our emulator,
                then some errors to avoid.
            </span>
            </p>

            <p className="c12" style={{textIndent: "36pt"}}>
                    <span className="c2 c1">
                    As shown in the documentation we have 3 types of instructions,
                    we cover the most important and most used ones :
                </span>
            </p>
            <ul className="c7 lst-kix_xdeeteg9a996-0 start">
                <li className="c0 c20 li-bullet-0">
                        <span className="c1">
                            Zero operands instructions, which are: <b>RET, PUSHA, POPA</b>
                        </span>
                </li>
            </ul>
            <ul className="c7 lst-kix_xdeeteg9a996-1 start">
                <li className="c9 li-bullet-0">
                        <span className="c1 c4">
                            RET:
                        </span>
                    <span className="c3 c1">
                            This instruction is used to return control from a subroutine to the calling routine.
                            It pops the top value from the stack and sets the program counter to that value, effectively
                            jumping back to the instruction that called the subroutine.
                        </span>
                </li>
                <li className="c9 li-bullet-0">
                        <span className="c1 c4">
                            PUSHA:
                        </span>
                    <span className="c3 c1">
                            This instruction is used to push the value of the main 8 registers onto the stack
                        </span>
                </li>
                <li className="c9 li-bullet-0">
                    <span className="c1 c4">
                        POPA:
                    </span>
                    <span className="c3 c1">
                        This instruction is used to pop values from the &nbsp;stack &nbsp;and store them in the main 8 registers.
                    </span>
                </li>
            </ul>
            <ul className="c7 lst-kix_xdeeteg9a996-0">
                <li className="c0 c20 li-bullet-0"><span className="c2 c1">One operand instructions, where we find two types of instructions:</span>
                </li>
            </ul>
            <ul className="c7 lst-kix_xdeeteg9a996-1 start">
                <li className="c9 li-bullet-0"><span
                    className="c1">Instructions that can take only registers as operands: they are </span><span
                    className="c1">generally arithmetic and logic instructions operations that operate only one operand, let&rsquo;s list them: </span><span
                    className="c6 c1 c4">NEG, NOT, SHL, SHR, READ, WRITE, PUSH, POP, ROR, ROL.</span></li>
                <li className="c9 li-bullet-0"><span className="c1 c4">NEG: </span><span className="c1">it used to negate the value of the operand &ldquo;</span><span
                    className="c3 c1">multiplying the value by -1&rdquo;</span></li>
                <li className="c9 li-bullet-0"><span className="c1 c4">NOT: </span><span
                    className="c1 c14">:</span><span
                    className="c3 c1">is used to perform a bitwise logical NOT operation on the operand ,it inverts all the bits of the operand, so that each 0 becomes a 1 and each 1 becomes a 0.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">SHL: </span><span className="c3 c1">This instruction is used to shift the bits of a register or a memory location to the left by a specified number of bits, with the bits shifted out on the left side discarded and 0&#39;s added on the right side.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">SHR: </span><span className="c2 c1">the same like SHL but it shifts the bits to the right.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">READ: </span><span className="c3 c1">This instruction is used to read a value from an input device or a memory location and store it in a register.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">WRITE: </span><span className="c3 c1">This instruction is used to write the value of a register or a memory location to an output device or a memory location.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">PUSH: </span><span className="c3 c1">This instruction is used to push the value of a register or a memory location onto the top of the stack.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">POP: </span><span className="c3 c1">This instruction is used to pop the top value from the stack and store it in a register or a memory location.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">ROR: </span><span className="c3 c1">This instruction is used to rotate the bits of a register or a memory location to the left by a specified number of bits, with the bits shifted out on the left side added on the right side.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">ROL: </span><span className="c3 c1 c13">This instruction is used to rotate the bits of a register or a memory location to the left by a specified number of bits, with the bits shifted out on the left side added on the right side.</span>
                </li>
            </ul>
            <p className="c5"><span className="c6 c1 c4"></span></p>
            <ul className="c7 lst-kix_xdeeteg9a996-1">
                <li className="c9 li-bullet-0"><span className="c1">Instructions that can only take addresses as operands( which means only one addressing mode is available it&rsquo;s the direct mode for these instructions of course): they are branching instructions let&rsquo;s list them: </span><span
                    className="c6 c1 c4">CALL, BE, BNE, BS, BI, BIE, BSE, BRI:</span></li>
            </ul>
            <p className="c5"><span className="c6 c1 c4"></span></p>
            <ul className="c7 lst-kix_xdeeteg9a996-2 start">
                <li className="c12 c17 li-bullet-0"><span className="c1 c4">CALL: </span><span className="c3 c1">It transfers program control to a subroutine or a function, saving the return address so that the program can resume execution from where it left off after the subroutine completes its operation.</span>
                </li>
                <li className="c12 c17 li-bullet-0"><span className="c1 c4">BE: </span><span className="c3 c1">It performs a conditional branch to a target address if the zero &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; flag is set. The zero flag is typically set when the result of a previous arithmetic or logical operation is zero.</span>
                </li>
                <li className="c12 c17 li-bullet-0"><span className="c1 c4">BNE: </span><span className="c3 c1">It performs a conditional branch to a target address if the zero flag is not set.</span>
                </li>
                <li className="c12 c17 li-bullet-0"><span className="c1 c4">BS: </span><span className="c3 c1">: It performs a conditional branch to a target address if the sign flag is set. The sign flag is typically set when the result of a previous arithmetic operation is negative.</span>
                </li>
                <li className="c12 c17 li-bullet-0"><span className="c1 c4">BI: </span><span className="c3 c1">It performs a conditional branch to a target address if the value of the accumulator is negative (usually used after doing a SUB operation between two operands , here we branch if the first operand is lower than the second) .</span>
                </li>
                <li className="c12 c17 li-bullet-0"><span className="c1 c4">BIE: </span><span className="c3 c1">It performs a conditional branch to a target address if the value of the accumulator is negative or zero (usually used after doing a SUB operation between two operands , here we branch if the first operand is lower than the second or equal ) .</span>
                </li>
                <li className="c12 c17 li-bullet-0"><span className="c1 c4">BSE: </span><span className="c3 c1">It performs a conditional branch to a target address if the value of the accumulator is positive (usually used after doing a SUB operation between two operands , here we branch if the first operand is greater than the second or equal).</span>
                </li>
                <li className="c12 c17 li-bullet-0"><span className="c1 c4">BRI: </span><span className="c3 c1">It performs an unconditional branch to a target address, without any condition or flag checking.</span>
                </li>
            </ul>
            <p className="c10"><span className="c2 c1"></span></p>
            <ul className="c7 lst-kix_ahbjqie9egez-0 start">
                <li className="c0 c20 li-bullet-0"><span
                    className="c1">Two &nbsp;operands instructions, which are: </span><span
                    className="c6 c1 c4">NAND, CMP, MOV, ADD, SUB, MUL, DIV, AND, OR, XOR, NOR:</span></li>
            </ul>
            <ul className="c7 lst-kix_ahbjqie9egez-1 start">
                <li className="c9 li-bullet-0"><span className="c1 c4">NAND: </span><span className="c1">&nbsp;NAND operation between the two operands and stores the result in the accumulator.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c6 c1 c4">CMP: </span></li>
                <li className="c9 li-bullet-0"><span className="c1 c4">MOV: </span><span className="c2 c1">&nbsp;Move a value from a memory location or source register to a destination register.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">ADD: </span><span className="c3 c1">This instruction adds the values together and stores the result in the accumulator</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">SUB: </span><span className="c1">subtract the first value from the second value </span><span
                    className="c1 c3">&nbsp;and stores the result in the accumulator</span></li>
                <li className="c9 li-bullet-0"><span className="c1 c4">MUL: </span><span
                    className="c1">multiply the two operands </span><span
                    className="c3 c1">and stores the result in </span><span
                    className="c3 c1">in the R4:ACC </span></li>
                <li className="c9 li-bullet-0"><span className="c1 c4">DIV: </span><span className="c1">divide the first value from the second value </span><span
                    className="c13 c3 c1">and store the quotient in the ACC register and the remainder in the R4 register. &nbsp;&ldquo;Or in ACCR,ACCL&rdquo; if it&rsquo;s a division in 8 bits.</span>
                </li>
            </ul>
            <ul className="c7 lst-kix_ahbjqie9egez-1">
                <li className="c9 li-bullet-0"><span className="c1 c4">AND: </span><span className="c1">AND operation between the two operands.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">OR: </span><span className="c1">OR operation between the two operands.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">XOR: </span><span className="c1">XOR operation between the two operands.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">NOR: </span><span className="c2 c1">NOR operation between the two operands.</span>
                </li>
            </ul>
            <p className="c12"><span
                className="c2 c1">The result of two operand operations is stored in the ACC register.</span>
            </p>
            <p className="c5"><span className="c6 c1 c4"></span></p>
            <p className="c12" style={{textIndent: "36pt", marginBottom: "0"}}><span className="c2 c1">Then let&rsquo;s speak about operands:</span></p>
            <p className="c12" style={{marginTop: "0"}}><span className="c2 c1">In our language there are two types of operands registers and numbers, numbers can be representing addresses or only immediate values, let&rsquo;s begin with the simplest:</span>
            </p>
            <ul className="c7 lst-kix_1g7b4xl19o4s-0 start">
                <li className="c0 c20 li-bullet-0"><span className="c2 c1"><b>Registers:</b> we have a total of 9 registers that can be used as operands with a size of 2 bytes each one:</span>
                </li>
            </ul>
            <p className="c0"><span className="c2 c1">&bull; 4 general purpose registers <b>R1, R2, R3, R4,</b> three of them are divided into two parts high and low ( Most significant byte is high and least significant byte is low they are used mainly in one byte operations when we have operands in one byte of memory ), which are:<b> R1H, R2H, R3H, R1L, R2L, R3L</b>( those can be used also as operands in one byte operations as it&rsquo;s already mentioned).</span>
            </p>
            <p className="c0"><span
                className="c2 c1">&bull; 2 used in the based and Indexed addressing modes: <b>BR, IDR.</b></span>
            </p>
            <p className="c0"><span className="c2 c1">&bull; 1 stack register : <b>SR.</b></span></p>
            <p className="c0"><span className="c2 c1">&bull; 1 instruction Register: <b>IDR.</b></span></p>
            <p className="c0"><span className="c2 c1">&bull; 1 accumulator register:<b> ACC.</b></span></p>
            <p className="c10 c19"><span className="c2 c1"></span></p>
            <ul className="c7 lst-kix_ly2ccm6d49ig-0 start">
                <li className="c0 c20 li-bullet-0"><span
                    className="c1">Then numbers when you write numbers in calM&rsquo;s assembly the number is considered as decimal and as a standard for our machine and language we restrict a </span><span
                    className="c1">max value</span><span className="c1">&nbsp;which is </span><span
                    className="c2 c1">32 767 and the min value is -32 767 ( which is the biggest numbers you can represent in 2 bytes in binary), then you have the ability to write <b>ADD R1, -5</b>, so the representation of negative numbers is valid, this is it for numbers as immediate operands, for other addressing modes:</span>
                </li>
            </ul>
            <ul className="c7 lst-kix_ly2ccm6d49ig-1 start">
                <li className="c9 li-bullet-0"><span
                    className="c1"><b>Direct mode:</b> you just have to add an </span><span
                    className="c1 c4">Asterisk *</span><span className="c2 c1">&nbsp;after the number to say to the assembler this number has to be considered as an address and I&rsquo;m doing an operation with direct addressing mode.<b> Example: MOV R1,10*</b></span>
                </li>
            </ul>
            <p className="c12 c15"><span className="c1"><b>PS:</b> You can perform an inverted addressing by writing negative addresses, like </span><span
                className="c1 c4">MOV -1*,10</span><span className="c2 c1">&nbsp;this moves 10 to the last memory address.</span>
            </p>
            <ul className="c7 lst-kix_ly2ccm6d49ig-1">
                <li className="c9 li-bullet-0"><span
                    className="c1"><b>Indirect mode:</b> to keep it simple for you, just add another </span><span
                    className="c6 c1 c4">Asterisk * </span>
                </li>
            </ul>
            <p className="c12 c15"><span className="c1">Example: </span><span
                className="c1 c4">MOV R1,10**</span><span
                className="c2 c1">&nbsp;, here you are operating on <b>R1</b> and 10 with an indirect addressing mode</span>
            </p>
            <p className="c12"><span className="c2 c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let&rsquo;s explain the next ones with examples directly</span>
            </p>
            <ul className="c7 lst-kix_bcwhvo4c49et-0 start">
                <li className="c9 li-bullet-0"><span className="c1">Based: </span><span
                    className="c6 c1 c4">MOV R1, BR*+10</span></li>
            </ul>
            <p className="c12 c15"><span className="c2 c1">What this instruction does is: it takes the content of BR and adds to it 10 then the value we get is an address that we operate on, like this is how based addressing mode works, it&rsquo;s like a shift but relative to the address &ldquo; value &rdquo; stored in BR.</span>
            </p>
            <ul className="c7 lst-kix_bcwhvo4c49et-0">
                <li className="c9 li-bullet-0"><span className="c2 c1"><b>Indexed: MOV R1, IDR*+10</b></span></li>
            </ul>
            <p className="c12 c15"><span className="c2 c1">What this instruction does is: it takes the content of IDR and adds to it 10 then the value we get is an address that we operate on, like this is how Indexed addressing mode works it&rsquo;s like a deplacement but relative to the address &ldquo; value &rdquo; stored in IDR.</span>
            </p>
            <ul className="c7 lst-kix_bcwhvo4c49et-0">
                <li className="c9 li-bullet-0"><span className="c2 c1"><b>Based Indexed: </b>two ways to do it:</span></li>
            </ul>
            <ul className="c7 lst-kix_bcwhvo4c49et-1 start">
                <li className="c12 c17 li-bullet-0"><span className="c2 c1"><b>MOV R1,IDR*+BR+10</b></span></li>
                <li className="c12 c17 li-bullet-0"><span className="c2 c1"><b>MOV R1,BR*IDR+10</b></span></li>
            </ul>
            <p className="c0 c11"><span
                className="c2 c1">And here also it remains the same concept as in the two previous modes, but it&rsquo;s
                relative to the sum of the values of <b>BR</b> and <b>IDR</b> considered as and address. We have always
                the presence of the <b>Asterisk *</b> &nbsp;why? Because we thought it will remind you that this will be
                considered as an address after all, it&rsquo;s true we take immediate values from the registers but after
                doing the sum with the number ( which it&rsquo;s shifted with ) we use the result as an address.</span></p>

            <ul className="c7 lst-kix_538h8vog35gd-0 start">
                <li className="c9 li-bullet-0"><span className="c2 c1"><b>Shift:</b> it can be on one byte or two bytes
                    relative to the size of the operand which we shift with, and it can be like this:
                    <b>MOV R1, 100*+1</b> or <b>MOV R1, Etiq*+1</b> &nbsp;( in this case etiq is a label I will speak
                    about labels later ), as a production team of calM we don&rsquo;t advise you to use such addressing
                    modes for now it&rsquo;s not very stable, sorry we hope we will make it a 100% functional Inshallah.</span>
                </li>
            </ul>

            <p className="c12 c11"><span className="c2 c1">Since we are speaking about operands, put in your mind that
                you can have a number as first operand for <b>MOV</b> instruction. You also need to know what are labels
                because it&rsquo;s an important concept used widely in assembly programming, labels are just a sheet
                of card where in a side you right a name as string and in the other you write a value, this is a label
                we create a kind of &ldquo; variable&rdquo; that holds a number and you can use it the same way you use
                the number and the assembler does the work of flipping the card for you, as an Example:
                <b> LABEL etiq 2</b> &nbsp;,this is how you create a label, obviously its name is <b>Etiq</b> and the
                value it&rsquo;s holding is <b>2</b>.</span>
            </p>

            <p className="c0"><span className="c1 c21"><b>Note:</b></span><span
                className="c1">&nbsp;It&rsquo;s name can&rsquo;t be a name of register or instruction or </span><span
                className="c1 c4">label</span><span className="c2 c1">&nbsp;itself, and cannot contain special characters.</span>
            </p>
            <p className="c12" style={{textIndent: "36pt"}}>
                <span className="c2 c1">
                    Then let&rsquo;s speak about your
                experience while writing calM code in the our emulator available at the web platform: &nbsp;First of
                all don&rsquo;t worry you can write code in lowercase or uppercase we do the conversion for you. We
                do also have many buttons that help you discover our features:
                </span>
            </p>
            <p className="c0"><span
                className="c2 c1"></span></p>
            <ul className="c7 lst-kix_8m8aqh53y6bg-0 start">
                <li className="c9 li-bullet-0"><span className="c1 c4">execute</span><span
                    className="c2 c1">&nbsp;to execute the code, </span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">registers and memory</span><span
                    className="c2 c1">&nbsp;to check the content of the memory and registers after execution.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">simulate </span><span className="c2 c1">to play the animation of the execution of the code in the machine.</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">Hex to code:</span><span
                    className="c2 c1">&nbsp;to change the hexadecimal code you inserted to calM&rsquo;s assembly language automatically</span>
                </li>
                <li className="c9 li-bullet-0"><span className="c1 c4">to Hex: </span><span
                    className="c2 c1">to change the calM&rsquo;s assembly language to hexadecimal code automatically</span>
                </li>
            </ul>
            <p className="c12"><span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You can also write comments while coding by inserting the special character: &ldquo; ; or # or // or /*</span><span
                className="c1 c22">comment</span><span className="c2 c1">*/ &rdquo;</span></p>
            <p className="c12"><span
                className="c2 c1">Some errors you can do while writing calM&rsquo;s assembly code:</span>
            </p>
            <p className="c12"><span className="c2 c1">Pay attention !</span></p>
            <p className="c12"><span className="c1">Those instructions for example: </span><span className="c1 c4">NEG, NOT, SHL, SHR, READ, WRITE, PUSH, POP, ROR, ROL </span><span
                className="c2 c1">can only have registers as operands.</span></p>
            <p className="c12"><span className="c2 c1">A label cannot have a name as a register and cannot contain special characters.</span>
            </p>
            <p className="c10"><span className="c2 c1"></span></p>
            <p className="c12"><span className="c2 c1">It&rsquo;s not all we have, we will always work on improving it, just let us know your feedback.</span>
            </p>
            <p className="c10"><span className="c2 c1"></span></p>
        </>
    );

}
export default HelpDoc;

