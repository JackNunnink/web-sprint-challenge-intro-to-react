import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const StyledDetails = styled.div`
    width: 80%;
    justify-content: space-between;
    padding: 5%;
    margin: 5%;
    color: ${props => props.theme.secondaryColor};
    background-color:${props => props.theme.primaryColor};
    border: 5px solid ${props => props.theme.secondaryColor};
    border-radius: 10px;

`

export default function Details(props) {
    const { characterId, close } = props
    const [ details, setDetails ] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${characterId}`)
            .then(res => {
                setDetails(res.data)
            }).catch(err => { debugger })
    }, [characterId])

    return (
        <StyledDetails className="container">
            <h2>Details:</h2>
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