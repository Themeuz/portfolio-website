import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? 'text-white border-b border-amber-400' : 'text-[#c1c4ce]'

  return (
    <button onClick={selectTab}>
    <p className={`mr-10 font-semibold hover:text-white ${buttonClasses}`}>
     {children}
    </p>
    </button>
  )
}

export default TabButton