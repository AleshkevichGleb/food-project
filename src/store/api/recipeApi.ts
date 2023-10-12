import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IRecipe } from '../../types/types'

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4200'}),
    tagTypes: ['Recipe'],
    endpoints: (builder) => ({
        getRecipes: builder.query<IRecipe[], string>({
            query: (searchTerm) => ({
                url: `/recepies/?_sort=id&_order=desc&q=${searchTerm}`,
                method: 'GET',
            }),
            providesTags: (result, error, searchTerm) => [
                {
                    type: 'Recipe',
                    id: searchTerm,
                }
            ],
        }),
        createRecipe: builder.mutation<IRecipe, IRecipe>({
            query: (recipe) => ({
                url: '/recepies',
                method: 'POST',
                body: recipe,
            }),
            invalidatesTags: ['Recipe'],
        }) 
    })
})
