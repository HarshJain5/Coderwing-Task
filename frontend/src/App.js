import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Cart from "./components/Cart"

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart/:userId" element={<Cart />} />
      </Routes>
    </Router>

  )

}

export default App