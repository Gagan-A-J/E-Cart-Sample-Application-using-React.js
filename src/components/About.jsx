import React from 'react'

export const About = () => {
  return (
    <>
     <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-6">About E-Kart</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">E-Kart</span>, your one-stop destination
          for a seamless shopping experience. We are committed to delivering
          the best products with unbeatable prices and exceptional customer service.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This project is powered by the{" "}
          <a
            href="https://dummyjson.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-yellow-300 hover:text-yellow-400"
          >
            DummyJSON API
          </a>
          , which provides real-world sample data for testing and learning purposes.
          It allows us to fetch product details, authenticate users, and simulate
          real e-commerce functionality without needing a custom backend.
        </p>
        <p className="text-md italic text-gray-200">
          "With DummyJSON, you can explore authentication, products, carts, and more —
          making development faster, smoother, and closer to real-world applications."
        </p>
      </div>
    </section>
    </>
  )
}
