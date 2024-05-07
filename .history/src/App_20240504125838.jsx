import { useState } from 'react'
import '../App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

dfgsdfgsdfgsdfgsdfgsdfgsdfg

/home/masterlks/Documents/AI-Serves_Django_Proyect/FluviaProject_Dashboard002-AlphVer/src/css/App.css

src/css/App.css

xport default App