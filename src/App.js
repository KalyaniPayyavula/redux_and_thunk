import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import HomePage from './pages/homePage'
import DepositPage from './pages/depositPage'
import WithdrawPage from './pages/withdrawPage'

function App() {
  return (
    <BrowserRouter>
       <ul className='ul-style'>
        <li className="list-style">
        <NavLink
        className="nav-style"
        to="/"
        end
        >home Page</NavLink></li>
       
       <li className="list-style">
        <NavLink
        className="nav-style" 
        to="/deposit"
        end
        >Deposit Page</NavLink></li>
      
      <li className="list-style">
        <NavLink 
        className="nav-style"
        to="/withdraw"
        end
        >Withdraw Page</NavLink></li>
        </ul> 
  
     
    <Routes>
      <Route 
      path="/" 
      end
      element={<HomePage/>}/>
    
      <Route 
      path="/deposit" 
      end
      element = {<DepositPage/>}/>

    <Route 
      path="/withdraw" 
      end
      element = {<WithdrawPage/>}
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
