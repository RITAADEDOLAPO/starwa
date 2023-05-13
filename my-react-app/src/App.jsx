import { Routes, Route } from "react-router-dom";
import Cards from './components/Cards'
import Details from "./components/Details";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/starwa" element={<Cards />} />
        <Route path="movie/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
