import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Inspiration from "./pages/Inspiration"
function App() {
  return (
    <main className="container m-auto min-h-screen relative overflow-hidden w-11/12 md:w-10/12 lg:w-9/12">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Inspiration />} />
      </Routes>
    </main>

  )
}

export default App
