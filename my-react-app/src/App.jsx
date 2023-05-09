import Cards from './components/Cards'
import { Routes, Route } from "react-router-dom";
import Details from './components/Details'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/:title" element={<Details />} />
        
      </Routes> 
     
    
  )
}

export default App
