"use client"

import Navbar from '@/app/components/Navbar'
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Welcome() {

  const { data: session } = useSession();
  if (!session) redirect("login")
  console.log(session)

  return (
    <div>
     <Navbar />
     <div className="container mx-auto py-24">
        <h2 className='text-3xl font-medium'>Welcome {session?.user?.name}</h2>
        <p>Email: {session?.user?.email}</p>
        <hr className="my-4" />
        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, culpa? Iure sint ab sed hic aspernatur expedita enim minima? Eos laborum iure quae totam eligendi adipisci voluptatibus voluptas nihil excepturi!</p>
     </div>
    </div>
  )
}
