
import './App.css'
import Navbar from './Component/Navbar'


import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos'; // Import AOS library
import Home from './Allpage/Home';
import Payroll from './Allpage/Payroll';

// Initialize AOS
AOS.init();



function App() {


  return (
  <div className='bg-[#ECECEC] w-full'>
      <Navbar/>
      {/* <Home/> */}
      <Payroll/>
</div>
  )
}

export default App
