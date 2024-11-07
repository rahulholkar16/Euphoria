import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

function Categories() {
  return (
    <ContentWrapper>
        <div className='w-full h-80 flex justify-between p-2 gap-5'>
            <div  className='w-1/3 h-full border-2 rounded-md shadow-md'>
                College
            </div>
            <div className='w-1/3 h-full border-2 rounded-md shadow-md'>
                E-commerce
            </div>
            <div className='w-1/3 h-full border-2 rounded-md shadow-md'></div>
        </div>
    </ContentWrapper>
  )
}

export default Categories