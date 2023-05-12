import { Routes, Route } from "react-router-dom";
import Cards from './components/Cards'
import Details from "./components/Details";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/details/:episode_id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
