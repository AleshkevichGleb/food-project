import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IRecipe } from '../../types/types'

const initialState:IRecipe[] = [

]
 
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: recipe}: PayloadAction<IRecipe>) => {
            const isExists = state.some(r => r.id === recipe.id);

            if(isExists) {
                const index = state.findIndex(item => item.id === recipe.id)
                state.splice(index, 1)
            } else state.push(recipe)
            
        },

    },
})



export const {actions} = favoritesSlice;
export default favoritesSlice.reducer;