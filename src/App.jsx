import { Route, Routes } from 'react-router-dom'
import './App.css'
//import Layout from './components/Layout'
//import Home from './components/pages/Home'
//import CategoryPage from './components/pages/CategoryPage'
import Category from './components/pages/Category'
import CurrentNewsDetails from './components/pages/CurrentNewsDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import MesRecettes from './components/pages/MesRecettes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import TopFoodDetails from './components/pages/TopFoodDetails/TopFoodDetails'
import RecipesDetails from './components/pages/recipes/RecipesDetails'
import News from './components/pages/sections/News'
import SpecialRecipes from './components/pages/SpecialRecipes'
import SpecialRecipesDetails from './components/pages/specialRecipes/SpecialRecipesDetails'
import CategoryDetails from './components/pages/CategoryDetails/CategoryDetails'
import CategoryRecipeDetails from './components/pages/CategoryDetails/CategoryRecipeDetails'
import CurrentNews from './components/pages/sections/CurrentNews'
import TopFood from './components/pages/sections/TopFood'
import Recipes from './components/pages/sections/Recipes'

function App() {

  return (
    <>
      <Navbar/>
      <ToastContainer position='top-right' autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/category" element={<Category />} />
        <Route path="/category/:title" element={<CategoryDetails />} />
        <Route path="/category/:title/:recipeId" element={<CategoryRecipeDetails />} />
        <Route path="/current-news" element={<CurrentNews />} />
        <Route path="/current-news/:title" element={<CurrentNewsDetails />} />
        <Route path='/top-food' element={<TopFood/>} />
        <Route path='/top-food/:title' element={<TopFoodDetails/>} />
        {/*<Route path="/category/:title" element={<CategoryPage />} />*/}
        <Route path="/mes-recettes" element={<MesRecettes />} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/recipes/:title' element={<RecipesDetails/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/special-recipes' element={<SpecialRecipes/>} />
        <Route path='/special-recipes/:title' element={<SpecialRecipesDetails/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
