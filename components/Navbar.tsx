import React from 'react'

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="text-xl font-bold">MyApp</a>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}
