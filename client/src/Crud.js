import React from 'react'
import './App.css';
import {useState} from 'react'
import Axios from 'axios'

function Crud() {

  const [name, setName] = useState("");
  const [age, setage] =useState(0);

  const [read, setread]= useState([]);
  const [newages, setnewages] = useState(0);
  const [deleteitem, setdeleteitem] = useState(0);

  const deletedata =(deleteitem)=>{
    Axios.delete('http://localhost:3003/delete', {deleteitem: deleteitem}).then(
      (response)=> {
        alert('update');
      })
  };

  const Add=() =>{
    Axios.post('http://localhost:3003/create', {

      name: name,
      age:age}).then (()=>{
        console.log('success');
      });
  };

  const show = () => {
    Axios.get('http://localhost:3003/show').then ((response)=>{
       setread(response.data);
      });
  };


  const update =(id)=>{
    Axios.put('http://localhost:3003/update', {newage: newages, id: id }).then(
      (response)=> {
        alert('update');
      })
    };
  

  return (
    <div className="App">
    
    <div>
    <label>Name</label>
    <input type="text" onChange={(event) => {setName(event.target.value);}}/>
    <label>age</label>
    <input type="number" onChange={(event) =>{setage(event.target.value)}}/>
    <button onClick={Add} >okay</button>
    </div>

    <div className="read">
     <button onClick={show}>Read</button>

     {read.map((val, key) => {
        return(<div>{val.name} {val.age}
        <div>
       <input type="number" onChange={(event) =>{
         setnewages(event.target.value)}}/>
       <button onClick={()=>{update(val.id)}}>update</button>

       </div>
        </div>
        );
     })}
<hr/>
<input type="number" onChange={(event) =>{
         setdeleteitem(event.target.value)}}/>
<button onClick={()=> {deletedata(deleteitem)}}>delete</button>
     

     
    </div>
    </div>
  );
}

export default Crud;
