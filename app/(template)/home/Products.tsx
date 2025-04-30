"use client"
import React from 'react'
import HomeCard from '@/app/components/HomeCard'
import { useState, useEffect, Suspense } from 'react'


function Products() {
    const [productsList, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setProducts(data["products"])
            setLoading(false)

        }
        fetchProducts()
    }, [])
    return (
        <div>
            <section className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold">Highest Rated Products</h1>
                <br />
                <p className="text-center text-gray-500">Check out below a curated list of the products that received the <br /> highest ratings from our customers</p>
            </section>

            <section>
                {
                    loading === true ? <div className='text-center p-10'>Loading Products...</div> :
                        (<div className="pt-5 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 space-x-2 space-y-5">
                            {productsList.map((product: any) => (
                                <HomeCard key={product.id} imagePath={product.thumbnail} title={product.title} amount={product.price} id={product.id} />
                            ))}
                        </div>)
                }
            </section>
        </div>
    )
}

export default Products