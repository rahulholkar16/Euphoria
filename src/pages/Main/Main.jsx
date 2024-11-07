import React from 'react'
import ProfilrSection from '../../components/ProfileSection/ProfilrSection'
import Slidbar from './slidBar/Slidbar'
import Categories from './categories/Categories'

function Main() {
  return (
    <>
      <div className="flex">
          <ProfilrSection isLogin={false} />
          <Slidbar />
      </div>
      <Categories />
    </>
  )
}

export default Main