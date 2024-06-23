import React from 'react'
import Navbar from '@/components/Nav'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import TopProduct from '@/components/TopProducts'
import BestSeller from '@/components/BestSeller'
import News from '@/components/News'


const index = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Products />
        <TopProduct />
        <BestSeller />
        <News />
      </div>
  )
}

export default index