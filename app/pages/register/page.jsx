"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'


export default function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const { data: session } = useSession()
  if (session) redirect("welcome")
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (password != confirmPassword) {
    Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match.',
        confirmButtonColor: '#EF4444'
      })
    return
  }

  console.log(name, email, password, confirmPassword)

  if (!name || !email || !password || !confirmPassword) {
    Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please complete all inputs.',
        confirmButtonColor: '#6366F1'
      })
    return
  }

  try {

    const resCheck = await fetch("http://localhost:3000/api/checkUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email
      })
    })

    const { user } = await resCheck.json()

    if (user) {
      Swal.fire({
        icon: 'warning',
        title: 'User already exists!',
        text: 'Please new registration account.',
        confirmButtonColor: '#6366F1'
      })
      return
    }

    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })
    })

    if (res.ok) {
      const form = e.target
      Swal.fire({
      icon: 'success',
      title: 'Successfully',
      text: 'User Registration successfully',
      confirmButtonColor: '#10B981'
    })
      form.reset()
    } else {
      console.log("User Registration failed")
      Swal.fire({
        icon: 'error',
        title: 'Failure Register',
        text: 'User Registration failed',
        confirmButtonColor: '#EF4444'
      })
      return
    }

  } catch (error) {
    console.log("Error during registration: ", error)
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-purple-900 px-4 py-10">
      <form className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">Create Account</h2>
         

        <div className="space-y-1">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
          onChange={(e) => setName(e.target.value)}
            type="text"
            name="username"
            id="username"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Your username"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
          onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="you@example.com"
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

        <div className="space-y-1">
          <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
          onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
        >
          Sign Up
        </button>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/pages/login" className="text-purple-600 hover:underline">
            Login here
          </Link>
        </div>
      </form>
    </div>
  )
}
