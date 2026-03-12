import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Home() {

    const [products, setProducts] = useState([])
    const userId = localStorage.getItem("userId")

    useEffect(() => {

        axios.get("http://localhost:5000/api/products")
            .then(res => {
                setProducts(res.data)
            })

    }, [])

    const addToCart = async (id) => {

        try {

            const userId = localStorage.getItem("userId")

            const res = await axios.post(
                "http://localhost:5000/api/add-cart",
                {
                    userId,
                    productId: id
                })

            alert(res.data.message)

        }

        catch (err) {

            alert("Error adding product")

        }

    }

    return (

        <div className="container-fluid mt-4">
            <style>
                {`
                .product-img{
                    height:180px;
                    object-fit:contain;
                    padding:10px;
                }
                `}
            </style>
            <h1 className="text-center bg-primary">Welcome To Our Store</h1>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Products</h3>
                <Link className="btn btn-dark btn-sm" to={`/cart/${userId}`}>
                    Cart
                </Link>
            </div>

            <div className="row">
                {products.map((item) => (
                    <div className="col-md-3 mb-4" key={item._id}>
                        <div className="card shadow-sm h-100">
                            <img
                                src={item.image}
                                className="card-img-top product-img"
                                alt=""
                            />
                            <div className="card-body text-center">
                                <h6 className="card-title">{item.name}</h6>
                                <p className="text-muted mb-2">
                                    ₹{item.price}
                                </p>
                                <button
                                    className="btn btn-primary btn-sm w-100"
                                    onClick={() => addToCart(item._id)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default Home