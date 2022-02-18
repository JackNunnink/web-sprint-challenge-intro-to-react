// Write your Character component here
import React from "react";
import styled, { keyFrames } from "styled-components";

const StyledCharacter = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
`

export default function Character({ info, action, film }) {
    return (
        <StyledCharacter className="character" film={film}>
            {info.name}
            <button onClick={() => action(info.id)}>
                See more
            </button>
        </StyledCharacter>
    )
}