import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const sliderImg = [
    {url: 'https://picsum.photos/200/300'},
    {url: 'https://picsum.photos/200/300'},
    {url: 'https://picsum.photos/200/300'},
    {url: 'https://picsum.photos/200/300'},
    {url: 'https://picsum.photos/200/300'},
]



export default function Slidbar() {
    const [index, setIndex] = useState(sliderImg.length)
  return (
   

        <div className='h-25 w-full border-2'>
            SLIDER
        </div>    
  
  )
}
