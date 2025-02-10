import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <Link href="/training" className="bg-[#3b82f6] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#3b82f6] transition duration-300">
          Training Home
        </Link>

        <Link href="/training/inperson" className="bg-[#3b82f6] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#3b82f6] transition duration-300">
          In-Person Training
        </Link>

        <Link href="/training/onlinetraining" className="bg-[#3b82f6] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#3b82f6] transition duration-300">
          Online Training
        </Link>
      </div>
    </div>
  )
}

export default Header
