import React from 'react'
import Navbar from '@/components/Nav'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import TopProduct from '@/components/TopProducts'
import BestSeller from '@/components/BestSeller'


const index = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Products />
        <TopProduct />
        <BestSeller />
      </div>
  )
}

export default index