
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'
import HabitHome from './Components/HabitHome';
import Login from './Components/Login'


function App() {

  return (
    
    <Router>
      <Navbar/>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/habithome" element={<HabitHome />} />
        </Routes>
      
    </Router>
    
    // <> 
    //  <Navbar/>
    //  <main className="pt-20">
    //     <Login />
    //   </main>
    //   <HabitHome/>
    // </>
  )
}

export default App
