import './App.css'
import Navbar from './components/Navbar'
import MainReactangle from './components/MainReactangle'
import MiddleReactangle from './components/MiddleReactangle'
import Footer from './components/Footer'
import ProgramList from './components/ProgramList'
import Faq from './components/Faq'
import GetInTouch from './components/GetInTouch'
import Flowbite from './components/Flowbite'

function App() {


  return (
    <>
    {/* <Flowbite/> */}
     <Navbar/>
     <MainReactangle/>
     <MiddleReactangle/>
     <ProgramList/>
     <Faq/>
     <GetInTouch/>
     <Footer/>
    </>
  )
}

export default App
