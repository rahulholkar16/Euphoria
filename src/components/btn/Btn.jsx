import React from 'react'

function Btn({content}) {
  return (
    <div className="flex gap-5 items-center font-medium">
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-full p-[10px] ">{content}</button>
    </div>
  )
}

export default Btn