import React from 'react'

const Training = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-[#3b82f6] mb-6">
          Welcome to Your Path to Success  
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          We are dedicated to helping you develop the skills needed to excel in online writing and transcription. Whether you’re new to the field or looking to sharpen your skills, our training is designed with care, personalized attention, and practical guidance to ensure your growth.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#23c55e] mb-4">
            Why Choose Our Training?  
          </h2>
          <p className="text-gray-600 mb-6">
            Our program goes beyond just teaching skills — we guide you toward building a successful career in the ever-growing world of online work. From interactive sessions to personalized mentorship, you’ll gain hands-on experience and the confidence to take on real-world challenges.
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-3">
            <li>
              Comprehensive modules covering the fundamentals, advanced techniques, and best practices.  
            </li>
            <li>
              Hands-on assignments to help you build a professional portfolio.  
            </li>
            <li>
              Personalized feedback and one-on-one mentorship to accelerate your learning.  
            </li>
            <li>
              Certification of completion and ongoing access to resources.  
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#a755f7] mb-3">
            Your Path Starts Here  
          </h3>
          <p className="text-gray-600 mb-6">
            No matter where you are in your journey, our training provides the guidance you need to thrive. We are here to support your growth every step of the way.
          </p>
          <a
            href="/training"
            className="bg-[#3b82f6] hover:bg-[#23c55e] text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Start Your Journey  
          </a>
        </div>
      </div>
    </div>
  )
}

export default Training
