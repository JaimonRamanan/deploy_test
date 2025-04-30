"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
}


function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {

    const router = useRouter()

    const [product, setProduct] = useState<Product | null>(null)
    const { id } = use(params)



    useEffect(() => {
        async function fetchProductDetails() {
            const res = await fetch(`https://dummyjson.com/product/${id}`)
            const data = await res.json()

            setProduct({
                id: data.id,
                title: data.title,
                description: data.description,
                price: data.price,
                images: data.images,
            })
        }
        fetchProductDetails()
    }, [id])
    return (
        <div className='p-10 max-w-7xl mx-auto h-screen'>
            <button onClick={
                () => {
                    router.back()
                }
            }>Back</button>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                {product?.images?.[0] ? (
                    <Image src={product.images[0]} alt={product.title} height={344} width={344} />
                ) : (
                    <div></div>
                )}
                <div>
                    <h2 className='font-bold'>
                        {product?.title}
                    </h2>
                    <h2 className='font-bold'>
                        $ {product?.price}
                    </h2>
                    <p>
                        {product?.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage