import React, {  useState } from 'react'
import { useNavigate } from 'react-router';

function Login( ) {
    const navigate=useNavigate()
    const signin=JSON.parse(localStorage.getItem("signin"))  
    const users=JSON.parse(localStorage.getItem("users"))
    const[data,setData]=useState({
        username:"",
        password:""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({ ...pre, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        users.map((ele)=>{
            if(ele.username===data.username && ele.password===data.password){
                localStorage.setItem("signin",JSON.stringify(ele))
                if(signin?.role==="HOD"){
                    navigate("/dashboard/hod")
                }else if (signin?.role==="Staff"){
                    navigate("/dashboard/staff")
                }else{
                    alert("Username or Password is incorrect")
                }
            }
        })
    }
   
    
    return (
        <div className="container p-5">
            <div className='row'>
                <div className="col-md-6 offset-3 ">
                    <form className='border shadow p-3' onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <label htmlFor="username">Username</label>
                            <input onChange={handleChange} value={data.username} type="text" name="username" id="username" className='form-control' required/>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="password">Password</label>
                            <input onChange={handleChange} value={data.password} type="password" name="password" id="password" className='form-control'required />
                        </div>
                        <div className="form-group">
                            <button className="btn btn lg btn-primary form-control" type='submit'>Login</button>
                        </div>
                        <div className="form-group text-center">
                            <p>Not Registered Yet? <button className='text-primary border-0 bg-white'  type="button"  onClick={()=>navigate("/register")}>Register</button></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login