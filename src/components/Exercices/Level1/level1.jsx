import './level1.css';
// import img from './to-do-list 2.png' ;
// import img1 from './Vector.png' ;
// import img2 from './heart.png';
// import img3 from './Vector123.png';
// import img4 from './Vector(2).png';
// import img5 from './Vector(3).png';
// import AOS from 'aos';
import React, {useEffect} from 'react';
import Select from 'react-select';
import {NavBar, Title} from "../..";
import {Footer} from "../../../containers";

const questions = [

    {
        num: '1',
        qst: 'Combien dunités connectée à bus de données :',
        R1: '4 unités',
        R2: '5 unités',
        R3: '6 unités',

    },
    {
        num: '2',
        qst: "modes d'adressage quin'existe pas dans la machine CalM:",
        R1: '1- Basé',
        R2: '2- indexé indirect',
        R3: '3- Basé indexé',

    }, {
        num: '3',
        qst: "Les formes d'instructions:",
        R1: '1- Forme réduite',
        R2: '2- Forme générale ',
        R3: '3- Aucune',

    },
    {
        num: "4",
        qst: "Nombre de bits dans registre flag:",
        R1: '1- 6bits',
        R2: '2- 7 bits',
        R3: '3- 8 bits',
    },
    {
        num: "5",
        qst: "Nombre d'octets dans les registres:",
        R1: '1- Un octet',
        R2: '2- Deux octets',
        R3: '3- Trois octets',
    },
    {
        num: "6",
        qst: "Qu'elles sont les composants n'appartient pas a Unit Memory:",
        R1: "1-IP",
        R2: "2-CM",
        R3: "3-MDR/MAR",
    },
    {
        num: "7",
        qst: "Toutes les instructions sont     sur 8 bits",
        R1: "Oui",
        R2: "seulement sur16 bits ",
        R3: "Aucune des deux",
    },
    {
        num: "8",
        qst: "Nombre de bits dans registre flag:",
        R1: "1-6 registres",
        R2: "2-7 registres",
        R3: "3-8 registres",
    },
    {
        num: "9",
        qst: "La mémoire cache est plus grande que la mémoire centrale :",
        R1: "1- oui est plus grande",
        R2: "2- Non est plus petite",
        R3: "3- Sont egals",
    }

]

function Level1() {


    function Question1(props) {

        return (
            <>
                <div className='container'>
                    <h1 className='question1'> Question {props.num}</h1>

                    <div className='ABC1'>
                        <h1 className='Q1'> {props.qst}</h1>
                        <div className='R1'>
                            <li className='liexercices' >{props.R1}</li>
                            <li className='liexercices'>{props.R2}</li>
                            <li className='liexercices'>{props.R3}</li>
                        </div>

                        <Select options={options} className='ABC'/>


                    </div>
                </div>


            </>


        )
    }

    const Question10 = () => {

        return (
            <>
                <div className='container'>
                    <h1 className='question1'> Question 10</h1>

                    <div className='ABC11'>
                        <h1 className='Q1'>Qu'est-ce qu'un pointeur en langage d'assemblage ?</h1>
                        <div className='R10'>
                            <li className='liexercices'>1-Un type de variable qui stocke des entiers</li>
                            <li className='liexercices'>2- Une adresse mémoire qui pointe vers une autre adresse mémoire</li>
                            <li className='liexercices'>3- Un périphérique d'entrée/sortie</li>
                        </div>

                        <Select options={options} className='ABC'/>


                    </div>
                </div>


            </>


        )
    }

    const options = [
        {value: 1, label: " la réponse N°:1"},
        {value: 2, label: "la réponse N°:2"},
        {value: 3, label: "la réponse N°:3"},

    ];
    const options1 = [
        {value: 0, label: " faux"},
        {value: 1, label: "Vrai"},


    ];


    const Questionsswiper = () => {
        const datacamp = questions.map((data) => {
            return (
                <Question1 num={data.num} R1={data.R1} R2={data.R2} R3={data.R3} qst={data.qst}/>
            )

        })

        return (
            <div>{datacamp}</div>

        );


    };


    return (
        <>
            <NavBar/>
            <div className="level1">
                <Questionsswiper/>
                <Question10></Question10>
                <button className="submit-btn">Submit</button>
            </div>
            <Footer></Footer>
        </>


    );
}

export default Level1;

