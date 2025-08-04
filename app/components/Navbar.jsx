"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { data: session, status } = useSession()

  const toggleMenu = () => setMenuOpen(!menuOpen)

  // รอโหลดสถานะ session ก่อน เพื่อไม่ให้เกิด flicker
  if (status === "loading") return null

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 to-purple-900 text-white shadow-md h-[64px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-full">
          {/* Logo */}
          <div className="font-extrabold text-2xl md:text-3xl">
            <Link href="/">Applicate</Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Service</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            {!session ? (
              <>
                <Link href="/pages/login" className="px-5 py-2 rounded bg-white text-black font-semibold">Sign In</Link>
                <Link href="/pages/register" className="px-5 py-2 rounded bg-violet-700 hover:bg-violet-800 font-semibold">Sign Up</Link>
              </>
            ) : (
              <>
               <a
                href='/pages/welcome'
                className='cursor-pointer bg-gray-500 px-5 py-2 rounded text-white text-lg'
              >
                Profile
              </a>
              <a
                onClick={() => signOut()}
                className='cursor-pointer bg-red-500 px-5 py-2 rounded text-white text-lg'
              >
                Sign Out
              </a>
              </>
            )}
          </div>

          {/* Hamburger */}
          <button className="md:hidden cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu">
            <Icon icon={menuOpen ? 'mdi:close' : 'mdi:menu'} width="30" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full bg-gradient-to-br from-blue-700 to-purple-950 text-white px-6 py-6 transition-all duration-300 ease-in-out shadow-lg z-40 ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="space-y-4 text-lg">
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="#" onClick={toggleMenu}>About</Link></li>
          <li><Link href="#" onClick={toggleMenu}>Service</Link></li>
          <li><Link href="#" onClick={toggleMenu}>Contact</Link></li>
        </ul>
        <div className="flex flex-col gap-3 pt-6">
          {!session ? (
            <>
              <Link href="/pages/login" className="w-full text-center px-5 py-2 rounded bg-white text-black font-medium" onClick={toggleMenu}>
                Sign In
              </Link>
              <Link href="/pages/register" className="w-full text-center px-5 py-2 rounded bg-violet-700 hover:bg-violet-800 font-medium" onClick={toggleMenu}>
                Sign Up
              </Link>
            </>
          ) : (
            <a
              onClick={() => { signOut(); toggleMenu(); }}
              className='cursor-pointer text-center bg-red-500 px-5 py-2 rounded text-white text-lg'
            >
              Sign Out
            </a>
          )}
        </div>
      </div>
    </>
  )
}
