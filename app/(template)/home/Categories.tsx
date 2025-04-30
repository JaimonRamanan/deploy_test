"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

interface Category {
    slug: string;
    name: string;
}

function Categories() {


    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        async function fetchCategories() {
            const res = await fetch('https://dummyjson.com/products/categories')
            const data = await res.json()
            setCategories(data)
            setLoading(false)
        }
        fetchCategories()
    }, [])

    return (

        <section>

            {
                loading === true ?
                    (<div className='text-center p-10'>Loading Categories...</div>) : (<div className="max-w-7xl mx-auto p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {categories.map((category: Category) => (
                            <Button key={category.slug} variant="outline" className="rounded-3xl">{category.name}</Button>
                        ))}
                    </div>)
            }
        </section>




    )
}

export default Categories