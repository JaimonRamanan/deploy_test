import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HomeCard({ imagePath, title, amount, id }: { imagePath: string, title: string, amount: string, id: string }) {
    return (
        <div className='bg-gray-200'>
            <Link href={"product/" + id}>
                <Image alt="" src={imagePath} width={256} height={256} />
                <div className="text-center p-1">
                    <h6 className='text-base'>{title}</h6>
                    <h5 className="text-base font-semibold text-[#2F333A]">${amount}</h5>
                </div>
            </Link>

        </div>
    )
}

export default HomeCard