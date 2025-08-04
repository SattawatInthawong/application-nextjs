"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { useSession } from 'next-auth/react'
// import { redirect } from 'next/navigation'

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();
  const { data: session } = useSession()
  if (session) router.replace("welcome")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await signIn("credentials", {
        email, password, redirect: false
      })

      if (res.error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Invalid credentials',
          confirmButtonColor: '#EF4444'
        })
        return
      }

      router.replace("welcome")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-purple-900 px-4 py-10">
      <form className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">Sign In</h2>

        <div className="space-y-1">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
        >
          Sign In
        </button>

        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link href="/pages/register" className="text-purple-600 hover:underline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  )
}
