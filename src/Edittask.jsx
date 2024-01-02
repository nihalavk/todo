import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { todocontext } from './App'
import './Edit.css'
import Button from 'react-bootstrap/esm/Button'
function Edittask() {

    const addNew=useNavigate()
    const [add,setAdd]=useContext(todocontext)
    const {id}=useParams();
    const info=add.find((item)=>item.id===id)
    const [data, setData] = useState({
      id:info.id,
      task:info.task,
      date:info.date
    })
    
    const changeDetails= (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setData({...data,[name]:value})
    };

    const saveData = () => {
      const update=add.map((edit)=>
      edit.id==id?{...edit,...data}:edit)
      setAdd(update)
      addNew('/')};

return (
  
    <div>
      <div className="editTodo">
         <label style={{marginLeft:"50px",marginTop:"80px",fontFamily:"cursive"}}>Edit data:</label>
      <input type="text" value={data.task} name='task' onChange={changeDetails} style={{marginLeft:"25px",borderRadius:"10px", border:"1px solid gray"}} />
      <br />
      <label style={{marginTop:"30px",marginLeft:"50px",fontFamily:"cursive"} }>Date:</label>
      <input type="date" value={data.date} name='date' onChange={changeDetails} style={{marginLeft:"35px", borderRadius:"10px",border:"1px solid gray"}} />
      <br />
      <Button style={{marginTop:"50px",marginLeft:"200px"}} onClick={saveData} variant="outline-dark">Save</Button>
      </div>
    </div>
  )
}

export default Edittask