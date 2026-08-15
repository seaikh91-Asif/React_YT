import React from 'react'

const Navbar = (props) => {

   const seetTheme = () => {
        props.setTheme('Light')
    }
  return (
    <div>
        <button onClick={seetTheme}>Theme</button>
    </div>
  )
}

export default Navbar