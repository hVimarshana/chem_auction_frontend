import React from 'react'
import NavBar from '../../Components/NavBar'
import BrandDisplay from '../../Components/BrandDisplay'
import LiveAuction from '../../Components/LiveAuction'
import HeroContainer from '../../Components/HeroContainer'
import ClientFeedback from '../../Components/ClientFeedback'
import Footer from '../../Components/Footer'

const HomePage = () => {  

  return (
    <div>
      <NavBar />
      <HeroContainer />
      <BrandDisplay />
      <LiveAuction />
      <ClientFeedback />
      <Footer />
    </div>
  )
}

export default HomePage
