import React from 'react'

const InPerson = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-[#23c55e] mb-6">
          In-Person Writing & Transcription Training  
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Take advantage of a hands-on learning experience tailored to your needs. Our in-person sessions are designed for those who thrive with face-to-face interaction and personalized guidance.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#3b82f6] mb-4">
            Limited Slots Available  
          </h2>
          <p className="text-gray-600 mb-6">
            Due to high demand and the personalized nature of our in-person training, availability is limited. To secure your spot, we strongly encourage booking well in advance.  
          </p>

          <h3 className="text-xl font-semibold text-[#a755f7] mb-3">
            What You Can Expect  
          </h3>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-3 mb-6">
            <li>Hands-on guidance and tailored instruction based on your learning goals.</li>
            <li>Real-world exercises to help you build practical skills.</li>
            <li>Immediate feedback to boost your confidence and performance.</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#3b82f6] mb-3">
            How to Book  
          </h3>
          <p className="text-gray-600 mb-8">
            Secure your slot by completing our simple booking form. We’ll follow up to confirm your schedule and provide additional details.
          </p>

          <a
            href="/booking"
            className="bg-[#23c55e] hover:bg-[#a755f7] text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Book Now  
          </a>
        </div>

        <p className="mt-10 text-gray-600">
          For any questions or custom arrangements, please{" "}
          <a href="/contact" className="text-[#3b82f6] underline">
            contact us.
          </a>
        </p>
      </div>
    </div>
  )
}

export default InPerson
