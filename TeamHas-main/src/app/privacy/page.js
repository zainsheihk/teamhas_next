import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import Policy from '@/components/Terms&Policy/Policy'
import React from 'react'

const Page = () => {
  return (
    <main>
      <div id="gradient-bg-3">
        <Navbar classes='header_center' />
        <Policy />
      </div>
      <Footer />
    </main>
  )
}

export default Page