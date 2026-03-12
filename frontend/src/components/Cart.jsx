import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Cart() {

    const [cart, setCart] = useState([])

    useEffect(() => {

    const userId = localStorage.getItem("userId")

    axios.get(`http://localhost:5000/api/cart/${userId}`)
        .then(res => {
            setCart(res.data)
        })

}, [])

    return (

        <div className="container-fluid mt-4">
            <style>
                {`
                .cart-img{
                    height:100px;
                    object-fit:contain;
                    padding:10px;
                }
                `}
            </style>
            <Link className="btn btn-dark btn-sm" to="/home">Back</Link>
            <h1 className="mb-4 text-center">My Cart</h1>
            {cart.map((item) => (
                <div className="card shadow-sm mb-3" key={item._id}>
                    <div className="row g-0 align-items-center">
                        <div className="col-md-3 text-center">
                            <img
                                src={item.productId.image}
                                className="cart-img"
                                alt=""
                            />
                        </div>

                        <div className="col-md-6">
                            <h5>{item.productId.name}</h5>
                            <p className="text-muted mb-0">
                                ₹{item.productId.price}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart