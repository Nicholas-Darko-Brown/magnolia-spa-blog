import React from 'react'

const Header = ({ navigationTitle, navItem1, navItem2, navItem3 }) => {
  return (
    <header className="sticky top-0 z-50 py-2 px-6 bg-gray-300 mx-auto flex justify-around items-center">
        <div className="text-3xl font-bold underline">
            {navigationTitle}
        </div>
        <div className="flex gap-6">
            <div> {navItem1} </div>
            <div> {navItem2} </div>
            <div> {navItem3} </div>
        </div>
    </header>
  )
}

export default Header