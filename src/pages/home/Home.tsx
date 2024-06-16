import React from 'react'
import Banner from '../../components/banner/Banner'
import Hero from '../../components/hero/Hero'
import Users from '../../components/users/Users'

const Home:React.FC = () => {
  return (
    <div>
        <Hero/>
        <Banner/>
        <Users/>
    </div>
  )
}

export default Home