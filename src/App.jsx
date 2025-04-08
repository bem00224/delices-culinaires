import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}/>
      </Routes>
    </>
  )
}

export default App
