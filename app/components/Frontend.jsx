import React from 'react'
import { Icon } from '@iconify/react'

export default function Frontend() {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
        Tools: Front-end
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Next.js */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
          <div className="text-7xl text-black"><Icon icon="devicon:nextjs-wordmark" /></div>
          <div className="text-2xl mt-4 font-semibold text-gray-800">Next.js</div>
        </div>

        {/* React */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
          <div className="text-7xl text-blue-500"><Icon icon="devicon:react" /></div>
          <div className="text-2xl mt-4 font-semibold text-gray-800">ReactJS</div>
        </div>

        {/* TailwindCSS */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
          <div className="text-7xl text-teal-400"><Icon icon="devicon:tailwindcss" /></div>
          <div className="text-2xl mt-4 font-semibold text-gray-800">TailwindCSS</div>
        </div>
      </div>
    </section>
  )
}
