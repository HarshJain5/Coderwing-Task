import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post("http://localhost:5000/api/register", {
            name,
            email,
            password
        })

        alert("Registered Successfully")
    }

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="card shadow p-4" style={{ width: "350px" }}>
                <h3 className="text-center mb-4">Register</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control mb-3"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />

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

                    <button className="btn btn-primary w-100">
                        Register
                    </button>

                </form>
                <p className="text-center mt-3 mb-0">
                    <Link to="/">Already have an Account?</Link>
                </p>
            </div>
        </div>

    )

}

export default Register