import React from 'react'

function Button({children}) {
  return (
    <button style={{"backgroundSize":"50px"}} className='hover:bg-opacity-80 transition-colors duration-300  text-lg text-white bg-brown-900 noisy-100 uppercase py-5 px-10 rounded-xl font-semibolder z-[100] bg-clip-padding bg-left-t'>{children}</button>
  )
}

export default Button