import {useState} from 'react';
import RecipeItem from './components/RecipeItem/RecipeItem';
import Header from './components/Header/Header';
import { recipeApi } from './store/api/recipeApi';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [queryTerm, setQueryTerm] = useState<string>('');
  const {data: recipes, isLoading, isError} = recipeApi.useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(searchTerm)
  }
  
  return (
    <section>
      <Header/>
      <CreateRecipe/>
      <div style = {{padding: '10px'}}>
        <input 
          type='text' 
          placeholder='search...' 
          value={searchTerm} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {isLoading && <h4>Loading...</h4>}
        {isError && <h4>Ошибка</h4>}
        {recipes?.map(recipe => 
          <RecipeItem recipe={recipe} key={recipe.id}/>  
        )}
      </div>
    </section>
  );
}

export default App;
