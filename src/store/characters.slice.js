import { insertCharacter, fetchCharacters } from '../db'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {characters : []}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      const character = action.payload
      console.log('2)addcharacter: ', character)
      state.characters.push(character)
      console.log('3)state: ', state)
    },
    loadCharacters: (state, action) => {
      state.characters = action.payload
      console.log('2)state: ', state)
    }
  },
})

export const { addCharacter, loadCharacters } = charactersSlice.actions

export const saveCharacter = (character) =>{
    return async dispatch => {
      console.log('1)saveCharacter: ', character)
        await insertCharacter(character)
        dispatch(addCharacter(character))
    }
}

export const loader = () => {
    return async dispatch => {
        const result = await fetchCharacters()
        console.log('1)loader: ', result.rows._array)
        dispatch(loadCharacters(result.rows._array))
    }
}

export default charactersSlice.reducer;