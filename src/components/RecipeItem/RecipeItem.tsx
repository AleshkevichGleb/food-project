import {FC} from 'react';
import { IRecipe } from '../../types/types';
import "./RecipeItem.css";
import { useAppDispatch, useAppSelector } from '../../hooks/reducer';
import { actions } from '../../store/favorites/favorites.slice';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';


interface RecipeItemProps {
    recipe: IRecipe,
}

const RecipeItem: FC<RecipeItemProps> = ({recipe}) => {
    const {favorites} = useFavorites();
    const dispatch = useAppDispatch();
    const {toggleFavorites} = useActions();

    const isExists = favorites.some(r => r.id === recipe.id)
    return (
        <div className= "recipe-item">
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.image} style={{width: '200px'}}/>
            <button
                onClick={() => toggleFavorites(recipe)}
            >
            {isExists ? 'Remove from' : 'Add to'} favorites
            </button>
        </div>
    );
};

export default RecipeItem;