"use client"

import React from 'react'
import Navbar from './components/Navbar'
import { useSession } from 'next-auth/react'
import Header from './components/Header'
import Frontend from './components/Frontend'
import Backend from './components/Backend'
import Footer from './components/Footer'

export default function Home() {

  const { data: session } = useSession()

  return (
    <>
      <Navbar session={session} />
      <Header />
      <Frontend />
      <Backend />
      <Footer />
    </>
  )
}
