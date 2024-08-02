import React from 'react'
import NavBar from '../../Components/NavBar'
import BrandDisplay from '../../Components/BrandDisplay'
import LiveAuction from '../../Components/LiveAuction'
import HeroContainer from '../../Components/HeroContainer'

const HomePage = () => {  

  return (
    <div>
      <NavBar />
      <HeroContainer />
      <BrandDisplay />
      <LiveAuction />
    </div>
  )
}

export default HomePage
