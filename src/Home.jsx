import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom'
import { todocontext } from './App';
import{ IoCheckmarkDoneSharp } from 'react-icons/io5'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'
import './Home.css'

function Home() {
  const [status, setStatus] = useState(false)
  const [add,setAdd]=useContext(todocontext)
  const {id}=useParams();
  const info=add.find((item)=>item.id===id)
  const addNew=useNavigate();
  const newTask=()=>{
    addNew('/create')}

  const deleteTask=(e)=>{
    const delId = e.target.value;
    let delIndex = null;
    add.forEach((row,index) => {
      if(row['id'] == delId){
      delIndex = index;
      }});
    add.splice(delIndex,1); 
    addNew('/')
  }

  const editTask = (e) => {
    add.forEach((row,index) => {
      if(row['id'] == e.target.value){
      setAdd(index)}}); 
  }

  const toggleStatus = (e) => {
    const updatedTasks = add.map((task) =>
      task.id === e ? { ...task, status: !task.status } : task
    );
    setAdd(updatedTasks);
  };
  
  return (
    <div className='main'>
      <div className="headParts"><center><h2> Task Hub:Mark your Tasks</h2></center></div>
        <div className="containertodo">
        {add.map((view)=>
        <div className='todobox'> 
        <p className='todotxt'>Task:{view.task}</p>
        <p className='todotxt'>Done by:{view.date}</p>
        <Button  variant ="outline-dark" onClick={deleteTask} style={{marginLeft:"20px"}}><MdOutlineDeleteOutline /></Button>{' '}
        <Button  variant ="outline-dark" onClick={()=>addNew(`/edit/${view.id}`)} style={{marginLeft:"30px"}}><CiEdit /></Button>{' '}
        <br />
        <center>
        {view.status ? (
                <p onClick={() => toggleStatus(view.id)}>Done!</p>) : (<IoCheckmarkDoneSharp onClick={() => toggleStatus(view.id)} style={{ marginTop: '10px' }} />)}
          </center> 
        </div>  
        )}
    </div>
        <center><Button variant="outline-dark" onClick={newTask} style={{marginBottom:"20px"}}>Add Task</Button>{' '}</center>
      
    </div>
  )
}

export default Home