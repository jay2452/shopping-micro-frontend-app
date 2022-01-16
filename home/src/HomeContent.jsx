import React, { useEffect, useState } from "react";
import { getProducts, currency } from './products';


import { addToCart, useLoggedIn } from "cart/cart";


export default function HomeContent() {
    const loggedIn = useLoggedIn();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, [])

    return (
        <div className="grid grid-cols-4 gap-5">
            {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="flex">
                                <div className="text-sm flex-grow font-bold">
                                    <a>{product.name}</a>
                                </div>
                                <div className="flex-end">
                                    {currency.format(product.price)}
                                </div>
                            </div>
                            <div className="text-sm mt-4">
                                {product.description}
                                {
                                    loggedIn && (
                                        <div className="text-right mt-2">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                                                onClick={() => addToCart(product.id) }
                                                id={`addToCart_${product.id}`}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}