import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './components/Details';
import Character from './components/Character';
import styled from "styled-components";

const AppStyled = styled.div`
  background-img: 100vh;
`

const HeaderStyled = styled.header`
  text-align: center;
  color: ${props => props.theme.secondaryColor};
  border: 5px solid ${props => props.theme.secondaryColor};
  background-color: ${props => props.theme.primaryColor}; 
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState('1')

  const openDetails = id => {
    setCurrentCharacterId(id)
  }

  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacters(res.data)
      }).catch(err => {console.error(err)})
  }, [])

  return (
    <AppStyled className="App">
      <HeaderStyled>
         <h1 className="Header">Characters</h1>
      </HeaderStyled>
      {
        characters.map((ch, i) => {
          return <Character 
            key={i}
            info={{
              ...ch,
              id: i+1,
            }}
            action={openDetails}
            // film={idx % 2 =}
          />
        })
      }
      {
        currentCharacterId && <Details characterId={currentCharacterId} close={closeDetails} />
      }
    </AppStyled>
  );
}

export default App;
