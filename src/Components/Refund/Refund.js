import Footer from '@/Layout/Footer'
import Header from '@/Layout/Header'
import React from 'react'
import RefundPolicy from './RefundPolicy'
import Copyright from '@/Layout/Copyright'

function Refund() {
  return (
    <div>
        <Header/>
        <RefundPolicy/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default Refund