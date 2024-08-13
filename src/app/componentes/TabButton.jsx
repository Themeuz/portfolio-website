import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? 'text-[#79a39a] border-b border-amber-400' : 'text-[#025a4e]'

  return (
    <button onClick={selectTab}>
    <p className={`mr-10 font-semibold hover:text-[#194e1c] ${buttonClasses}`}>
     {children}
    </p>
    </button>
  )
}

export default TabButton