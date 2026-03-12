import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
    e.preventDefault()

    const res = await axios.post(
        "http://localhost:5000/api/login",
        {
            email,
            password
        }
    )

    alert(res.data.message)

    if (res.data.message === "Login Successful") {

        localStorage.setItem("userId", res.data.user._id)

        navigate("/home")
    }
}

    return (

        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="card shadow p-4" style={{ width: "350px" }}>
                <h3 className="text-center mb-4">Login</h3>
                <form onSubmit={handleLogin}>
                    <input
                        className="form-control mb-3"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className="form-control mb-3"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="btn btn-success w-100">
                        Login
                    </button>

                </form>
                <p className="text-center mt-3 mb-0">
                    <Link to="/register">Create Account</Link>
                </p>
            </div>
        </div>
    )
}

export default Login