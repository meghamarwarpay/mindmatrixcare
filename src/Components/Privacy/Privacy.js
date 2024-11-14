import React from 'react'

import Header from '@/Layout/Header'
import Footer from '@/Layout/Footer'
import PrivacyPolicy from './PrivacyPolicy'
import Copyright from '@/Layout/Copyright'

function Privacy() {
  return (
    <div>
        <Header/>
        <PrivacyPolicy/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default Privacy