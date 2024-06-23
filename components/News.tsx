import React from 'react'
import NewsCard from './Helper/NewsCard'

const News = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-800'>
            <h1 className='w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-white'>
                Latest News
            </h1>
            <div className='mt-[2rem]'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[3rem] w-[80%] mx-auto'>
                    <NewsCard image="/images/g3.jpg" title="New Update" />
                    <NewsCard image="/images/g4.jpg" title="Check New Update" />
                    <NewsCard image="/images/g7.jpg" title="New Skin" />
                    <NewsCard image="/images/g2.jpg" title="New Skin" />
                </div>
            </div>
        </div>
    )
}

export default News
