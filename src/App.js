import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Home from './Home';
import Createtask from './Createtask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edittask from './Edittask';
export const todocontext=createContext()
function App() {
  const [add,setAdd] = useState([])
  return (
    <div className="App">
      <todocontext.Provider value={[add,setAdd]}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Createtask/>}/>
          <Route path='/edit/:id' element={<Edittask/>}/>
        </Routes>
        </BrowserRouter>
      </todocontext.Provider>
    </div>
  );
}

export default App;
