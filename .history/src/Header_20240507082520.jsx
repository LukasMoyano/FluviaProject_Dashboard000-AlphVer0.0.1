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
        <div className='header-right'>iCONS_Menu
            <BsFillBellFill className='icon'/>alarmas
            <BsFillEnvelopeFill className='icon'/>Buzon
            <BsPersonCircle className='icon'/> perfil
        </div>
    </header>
  )
}

export default Header