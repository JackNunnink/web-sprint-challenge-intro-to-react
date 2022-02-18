// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 5%;
    margin: 5%;
    color: ${props => props.theme.secondaryColor};
    background-color:${props => props.theme.primaryColor};
    border: 5px solid ${props => props.theme.secondaryColor};
    border-radius: 10px;

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

export default function Character({ info, action, film }) {
    return (
        <StyledCharacter className="character" film={film}>
            <div className="details">
                {info.name}
            </div>
            <button onClick={() => action(info.id)}>
                See more
            </button>
        </StyledCharacter>
    )
}