import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        Fluvia Vision 0.0.1 Alpha
        <div className='header-right'>iCONS_Menu
            <BsFillBellFill className='icon'/>No
            <BsFillEnvelopeFill className='icon'/>Buzon
            <BsPersonCircle className='icon'/> Perfil
        </div>
    </header>
  )
}

export default Header