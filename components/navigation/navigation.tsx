import React from 'react'
import PaddingContainer from '../layout/padding-container'
import Link from 'next/link'

const Navigation = () => {
    return (
        <div className='border-b sticky right-0 left-0 top-0 bg-white bg-opacity-50 backdrop-blur-md'>
            <PaddingContainer>
                <div className='flex items-center justify-between py-5'>
                    <nav>
                        <ul className='flex items-center gap-3 text-neutral-600'>
                            <li>
                                <Link href="/cities">شهرها</Link>
                            </li>
                            <li>
                                <Link href="/experiences">تجربیات</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link href="/" className='font-bold text-lg'>کاوش</Link>
                </div>
            </PaddingContainer>
        </div>
    )
}

export default Navigation