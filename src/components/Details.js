import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

const StyledDetails = styled.div`
    width: 80%;
    justify-content: space-between;
    padding: 5%;
    margin: 5%;
    color: ${props => props.theme.secondaryColor};
    background-color:${props => props.theme.primaryColor};
    border: 5px solid ${props => props.theme.secondaryColor};
    border-radius: 10px;
    opacity: 0;
    transform: scale(2);
    animation: ${kf} 0.5s ease-in-out forwards;

    button {
        border: 2px solid ${props => props.theme.secondaryColor};
        color: ${props => props.theme.secondaryColor};
        background-color:${props => props.theme.primaryColor};
        border-radius: 5px; 
        &:hover {
            transform: scale(1.1);
        }
    }
`

export default function Details(props) {
    const { characterId, close } = props
    const [ details, setDetails ] = useState(null)

    useEffect(() => {
        setDetails(null);
        axios.get(`https://swapi.dev/api/people/${characterId}`)
            .then(res => {
                setDetails(res.data)
            }).catch(err => { debugger })
    }, [characterId])

    return (
        <StyledDetails className="container">
            <h2>Details:</h2>
            {!details && <div>Loading...</div>}
            {
                details &&
                <>
                    <p>Name: {details.name}</p>
                    <p>Height: {details.height}</p>
                    <p>Weight: {details.mass}</p>
                    <p>Hair Color: {details.hair_color}</p>
                    <p>Skin Color: {details.skin_color}</p>
                    <p>Eye Color: {details.eye_color}</p>
                    <p>Birth Year: {details.birth_year}</p>
                    <p>Gender: {details.gender}</p>
                    {/* <ul>
                        {
                            details.films.map((det, idx) => <li key={idx}>{det}</li>)
                        }
                    </ul> */}
                </>
            }
            <button onClick={close}>Close</button>
        </StyledDetails>
    )
}