import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import HomePage from './pages/HomePage'
import Header from './components/layout/Header'

function App() {


  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
