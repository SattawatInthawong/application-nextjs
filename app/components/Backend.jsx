import React from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import nextAuth from '../img/nextauth.png'

export default function Backend() {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
        Tools: Backend-end
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* MongoDB */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
          <div className="text-7xl text-green-600">
            <Icon icon="skill-icons:mongodb" />
          </div>
          <div className="text-2xl mt-4 font-semibold text-center text-gray-800">
            MongoDB <br className="sm:hidden" /> <span className="text-sm">(Database)</span>
          </div>
        </div>

        {/* NextAuth.js */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
          <Image src={nextAuth} alt="NextAuth.js" width={100} height={100} />
          <div className="text-2xl mt-4 font-semibold text-center text-gray-800">
            NextAuth.js <br className="sm:hidden" /> <span className="text-sm">(Authentication)</span>
          </div>
        </div>

        {/* Bcrypt.js */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
          <div className="text-7xl text-yellow-500">
            <Icon icon="devicon:javascript" />
          </div>
          <div className="text-2xl mt-4 font-semibold text-center text-gray-800">
            Bcrypt.js <br className="sm:hidden" /> <span className="text-sm">(Hashing Password)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
