import { insertCharacter, fetchCharacters } from '../db'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {characters : []}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      const character = action.payload
      state.characters.push(character)
    },
    loadCharacters: (state, action) => {
      state.characters = action.payload
    }
  },
})

export const { addCharacter, loadCharacters } = charactersSlice.actions

export const saveCharacter = (character) =>{
    return async dispatch => {
        await insertCharacter(character)
        dispatch(addCharacter(character))
    }
}

export const loader = () => {
    return async dispatch => {
        const result = await fetchCharacters()
        dispatch(loadCharacters(result.rows._array))
    }
}

export default charactersSlice.reducer;