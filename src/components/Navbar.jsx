import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-indigo-950 flex justify-center items-center text-xs py-3 gap-x-3 text-white font-bold font-mono">
        <div className="flex gap-x-1 items-center">
            <img className="w-5 rounded-full border border-gray-800" src="/profile-square.png" alt="imagen de perfil"/>
            <a href="">Home</a>
        </div>

        <a href="">Porfolio</a>
        <a href="">About me</a>
        <a href="">Contact</a>


    </nav>
  )
}

export default Navbar