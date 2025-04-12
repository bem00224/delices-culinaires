import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
//import Home from './components/pages/Home'
import CategoryPage from './components/pages/CategoryPage'
import Category from './components/pages/Category'
import CurrentNewsDetails from './components/pages/CurrentNewsDetails'
import CurrentNews from './components/pages/CurrentNews'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import MesRecettes from './components/pages/MesRecettes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Navbar/>
      <ToastContainer position='top-right' autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/category" element={<Category />} />
        <Route path="/current-news" element={<CurrentNews />} />
        <Route path="/current-news/:title" element={<CurrentNewsDetails />} />
        <Route path="/category/:title" element={<CategoryPage />} />
        <Route path="/mes-recettes" element={<MesRecettes />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
