import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { todocontext } from './App'
import {v4 as uuidv4} from 'uuid'
import './create.css'
import Button from 'react-bootstrap/esm/Button'

function Createtask() {

    const addNew=useNavigate()
    const [add,setAdd]=useContext(todocontext)
    const [data,setData] = useState({task:"",date:"",id:uuidv4()})
    console.log(data.id)


    const changeDetails=(e)=>{
        // console.log(e.target .value);
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value})
        // console.log(data)
    }

    const saveData=()=>{
        {setAdd([...add,data])}
        addNew('/')
        // console.log(add);
    }
  return (
    <div >
      <div className="headParts">
        <center><h2>Your Personal Task Wizard for a Productive Day</h2></center>
        <div className='todocreate'><label style={{marginLeft:"50px",marginTop:"80px",fontFamily:"cursive"}}>Add your Task : </label>
        <input type="text" value={data.task} name='task' onChange={changeDetails} style={{marginLeft:"25px",borderRadius:"10px", border:"1px solid gray"}} />
        <br />
        <label style={{marginTop:"30px",marginLeft:"50px",fontFamily:"cursive"} } >Complete by : </label>
        <input type="date" value={data.date} name='date' onChange={changeDetails} style={{marginLeft:"35px", borderRadius:"10px",border:"1px solid gray"}} />
        <br />
        <Button onClick={saveData} style={{marginTop:"50px",marginLeft:"200px"}} variant="outline-dark">Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Createtask