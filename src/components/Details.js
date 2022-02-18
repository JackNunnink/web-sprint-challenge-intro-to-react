import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

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
        <div className="container">
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
        </div>
    )
}