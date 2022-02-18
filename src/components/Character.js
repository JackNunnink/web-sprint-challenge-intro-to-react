// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
    width: 80%;
    padding: 5%;
    margin: 5%;
    margin-top: 15%;
    margin-bottom: 15%;
    color: ${props => props.theme.secondaryColor};
    background-color:${props => props.theme.primaryColor};
    border: 5px solid ${props => props.theme.secondaryColor};
    border-radius: 10px;

    .container {
        display: flex;
        justify-content: space-between;
    }

    button {
        border: 2px solid ${props => props.theme.secondaryColor};
        color: ${props => props.theme.secondaryColor};
        background-color:${props => props.theme.primaryColor};
        border-radius: 5px; 
        &:hover {
            transform: scale(1.1);
        }
    }

    @media ${props => props.theme.breakpointDesktop} {
        margin-top: 6%;
        margin-bottom 6%;
    }
`

export default function Character({ info, action, film }) {
    return (
        <StyledCharacter className="character" film={film}>
            <div className="container">
                <div className="details">
                    {info.name}
                </div>
                <button onClick={() => action(info.id)}>
                    See more
                </button>
            </div>
        </StyledCharacter>
    )
}