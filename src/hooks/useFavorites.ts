import { useAppSelector } from './reducer'

export const useFavorites = () => {
    const favorites = useAppSelector(state => state.favoritesSlice)
    return {favorites}; 
}