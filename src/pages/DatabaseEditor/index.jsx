import React from 'react'
import axios from 'axios';
import { NavBar } from '../../components'
import { useState } from 'react';
import './style.css'

const DatabaseEditor = () => {
    const addressingModesEndpoint = {
        name: "addressing-modes/",
        GET: {
            subRoutes : [
                {
                    route: "/",
                    hasParam: true,
                    hasBody: false,
                    param: {name: "name"},
                },
                {
                    route: "all/",
                    hasParam: false,
                    hasBody: false,
                }
            ]
        },
        POST: {
            subRoutes: [
                {
                    route: "add/",
                    hasParam: false,
                    hasBody: true,
                    bodyFields: ["name", "description"],
                }
            ]
        },
        PUT: {
            subRoutes: [
                {
                    route: "edit/",
                    hasParam: true,
                    hasBody: true,
                    param: {name: "name"},
                    bodyFields: ["description"],
                }
            ]
        },
        DELETE: {
            subRoutes: [
                {
                    route: "delete/",
                    hasParam: true,
                    hasBody: false,
                    param: {name: "name"},
                }
            ]
        }
    }
    const componentsEndpoint = {
        name: "components/",
        GET: {
            subRoutes : [
                {
                    route: "/",
                    hasParam: true,
                    hasBody: false,
                    param: {name: "name"},
                },
                {
                    route: "all/",
                    hasParam: false,
                    hasBody: false,
                }
            ]
        },
        POST: {
            subRoutes: [
                {
                    route: "add/",
                    hasParam: false,
                    hasBody: true,
                    bodyFields: ["name", "description"],
                }
            ]
        },
        PUT: {
            subRoutes: [
                {
                    route: "edit/",
                    hasParam: true,
                    hasBody: true,
                    param: {name: "name"},
                    bodyFields: ["description"],
                }
            ]
        },
        DELETE: {
            subRoutes: [
                {
                    route: "delete/",
                    hasParam: true,
                    hasBody: false,
                    param: {name: "name"},
                }
            ]
        }
    }

    const endpoints = [addressingModesEndpoint, componentsEndpoint]; // array of endpoints
    const requestMethods = ['GET', 'POST', 'PUT', 'DELETE']; // array of sizes

    const [selectedEndpoint, setEndpoint] = useState(endpoints[0]);
    const [selectedRequestMethod, setRequestMethod] = useState('POST'); // initialize size state with first item in array
    const [selectedRoute, setSelectedRoute] = useState(endpoints[0].GET.subRoutes[0].route);
    const [requestBody, setRequestBody] = useState(''); // initialize request body state as an empty string
    const [option, setOption] = useState('');
    const [inputText, setInputText] = useState('');

    const handleOptionChange = (event) => {
        setOption(event.target.value);
        setInputText('');
    };

    const handleInputTextChange = (event) => {
        setInputText(event.target.value);
    };

    const handleEndpointChange = (event) => {
        setEndpoint({...selectedEndpoint, name: event.target.value}); // update category state when select menu value changes
    }
    
    const handleRequestMethodChange = (event) => {
        setRequestMethod(event.target.value); // update category state when select menu value changes
    }
    
    const handleSelectedRouteChange = (event) => {
        const selectedRouteObject = selectedEndpoint[selectedRequestMethod].subRoutes.filter(subRoute=>subRoute.route === event.target.value)[0]
        
        setSelectedRoute(event.target.value);
        console.log(selectedRouteObject);

        
        if(selectedRouteObject.hasBody){
            setRequestBody('{\n'
            +selectedRouteObject.bodyFields.map(bodyField => `\t"${bodyField}":\t\n`)
            +'}')
        }
    }

    const handleRequestBodyChange = (event) => {
        setRequestBody(event.target.value); // update request body state when input value changes
    }
    
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent default form submission behavior
        let  requestObject = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" ,
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
            }
        };

        let URL = 'http://localhost:5000/documentation/'+selectedEndpoint.name+selectedRoute;

        const selectedRouteObject = selectedEndpoint[selectedRequestMethod].subRoutes.filter(subRoute=>subRoute.route === selectedRoute)[0];

        if(selectedRouteObject.hasParam){
            URL += `?${selectedRouteObject.param.name}=${inputText}`
        }
        if(selectedRouteObject.hasBody){
            console.log("route has body")
            try {
                requestObject.data = JSON.parse(JSON.stringify(requestBody));
                // let o = JSON.parse(requestObject.data)
                // let o2 = JSON.parse(o);
                // console.log(o, typeof(o));
            } catch (error) {
                alert('invalid JSON format!');
                return;
            }
        }

        requestObject.url = URL;
        requestObject.method = selectedRequestMethod;

        console.log("request object", requestObject);

        axios(requestObject).then(response => {
            console.log(response.data.data)
            if(!response.data.success){
                alert("Request failed: "+response.data.message);
                return;
            }

            const responseData = response.data.data;
            if(Array.isArray(responseData)){
                alert(`
        Request succeed: ${response.data.message}
        Data: 
        ${responseData.map(object => 
            Object.entries(object).map( ([key, value]) => `\t${key}: ${value}\n`)
        )}`
                )
            }else{
                alert(`
                    Request succeed: ${response.data.message}
                    Data:
                    ${Object.entries(responseData).map( ([key, value]) => `\t${key}: ${value}\n====================`)}`)
            }
        }).catch(error => console.log(error));
    
    }


    return (
        <>
            <NavBar/>
            <form id='database-editor' onSubmit={handleSubmit}>
                
                <label className='radio-inputs'>
                    Endpoints:
                    {endpoints.map(endpoint => (
                        <>
                            <label key={endpoint.name}>
                                <input type="radio" name="endpoint" value={endpoint.name} checked={endpoint.name === selectedEndpoint.name} onChange={handleEndpointChange} />
                                {endpoint.name}
                            </label>
                        </>
                    ))}
                </label>
                <br />

                <label >
                    Request Method: 
                    {requestMethods.map(requestMethod => (
                        <label key={requestMethod}>
                            <input type="radio" value={requestMethod} checked={requestMethod === selectedRequestMethod} onChange={handleRequestMethodChange} />
                            {requestMethod}
                        </label>
                    ))}
                </label>
                <br/>
                <label>
                    Sub routes:
                    {
                        selectedEndpoint[selectedRequestMethod].subRoutes.map(subRoute => (
                            <label key={subRoute.route}>
                                <input
                                    type="radio"
                                    name={subRoute.route}
                                    value={subRoute.route}
                                    checked={subRoute.route === selectedRoute}
                                    onClick={handleSelectedRouteChange}
                                />
                                {subRoute.route}
                            </label>
                        ))
                    }
                </label>
                <br />
                <label>
                    Params:
                    {
                        selectedEndpoint[selectedRequestMethod].subRoutes.map(subRoute => (
                            subRoute.route === selectedRoute && subRoute.hasParam && (
                                <label key={subRoute.param.name}>
                                    <input
                                    type="radio"
                                    name={subRoute.param.name}
                                    value="name"
                                    checked={option === 'name'}
                                    onChange={handleOptionChange}
                                    />
                                    {subRoute.param.name}
                                    {option === subRoute.param.name && (
                                        <input
                                        type="text"
                                        value={inputText}
                                        onChange={handleInputTextChange}
                                        />
                                    )}
                                </label>
                            )
                        ))
                    }
                </label>
                <br />
                Body:
                <label style={{marginLeft: "4rem"}}>
                    {
                        selectedEndpoint[selectedRequestMethod].subRoutes.map(subRoute => {
                            if(subRoute.route === selectedRoute && subRoute.hasBody){
                                return <label>
                                    <textarea id='body-text' style={{width: "26rem", height: "18rem"}} value={requestBody} onChange={handleRequestBodyChange} />
                                </label>
                            }
                            return "";
                        })

                    }
                </label>
                <br />
                <button id='database-editor-submit-button' style={{alignSelf: "center"}} type="submit">Submit</button>
            </form>

            <div>
                Response data:
                
            </div>
        </>
    )
}

export default DatabaseEditor