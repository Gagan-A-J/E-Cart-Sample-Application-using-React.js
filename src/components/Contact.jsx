import React from 'react'

export const Contact = () => {
  return (
    <>
     <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 text-white px-6 py-12">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-left mb-2 text-lg font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-left mb-2 text-lg font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-left mb-2 text-lg font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  )
}
