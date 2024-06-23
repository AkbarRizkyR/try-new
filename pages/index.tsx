import React from 'react'
import Navbar from '@/components/Nav'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import TopProduct from '@/components/TopProducts'


const index = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Products />
        <TopProduct />
      </div>
  )
}

export default index