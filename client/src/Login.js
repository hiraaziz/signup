import React,{useState} from 'react'
import Crud from './Crud'

function Login() {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    
    const validate=()=>{
       
        if(email==="hira@gmail.com" && pass==="hira")
        {
        
            console.log('loges in')
        }
       
        
    }
    return (
        <div>
            
        <form action="Crud">
          <label>Email</label>
          <input type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
       
          <label>Password</label>
          <input type="password"
            onChange={(e) => setPass(e.target.value)}
          />
       
        <button type="submit" onClick={validate} >
          Login
        </button>

      </form>
      <Crud/>
        </div>
    )
}

export default Login
