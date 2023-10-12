import {FC, useState} from 'react';
import { IRecipe } from '../../types/types';
import { recipeApi } from '../../store/api/recipeApi';
import { useFavorites } from '../../hooks/useFavorites';

interface PartialRecipe extends Omit <IRecipe, "id"> {} 

const CreateRecipe:FC = () => {
    const {favorites} = useFavorites();
    const [createRecipe] = recipeApi.useCreateRecipeMutation();
    const [recipe, setRecipe] = useState<PartialRecipe>({
        name: '',
        image: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(recipe);
        createRecipe(recipe as IRecipe)
        setRecipe({
            name: '',
            image: '',
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Create new recipe</p>
                <label>
                    <input 
                        type='text' 
                        placeholder='name' 
                        value={recipe?.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRecipe({...recipe, name: e.target.value})}
                    />
                </label>
                <label>
                    <input 
                        type='text' 
                        placeholder='image' 
                        value={recipe?.image}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRecipe({...recipe, image: e.target.value})}
                    />
                </label>
                <button type='submit'>Create</button>

            </form>
        </div>
    );
};

export default CreateRecipe;