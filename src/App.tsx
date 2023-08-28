import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Custom from './routes/Custom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/custom" element={<Custom/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
