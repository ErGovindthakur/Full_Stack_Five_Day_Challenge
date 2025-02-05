import React, { useState } from 'react'

const App = () => {
  const [employee,setEmployee] = useState({
    name:'',
    email:'',
    role:'',
    date:''
  })

  const submitHandler = async(e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:7000/emp/create',{
        body:JSON.stringify(employee),
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        }
      })

      const data = await response.json()
      
      setEmployee({
        name:"",
        email:"",
        role:"",
        date:""
      })
      alert(data.message)
    } catch (error) {
     alert(error.message)
    }
  }
  const changeHandler = (e) => {
    const {name,value} = e.target
    setEmployee({...employee,[name]:value})
  }
  return (
    <div className='w-full h-screen flex justify-center mt-12'>
      <form className='flex flex-col w-[320px] gap-3'
      onSubmit={submitHandler}
      >
    <div>
      <h1 className='font-bold text-2xl'>Employee Management system</h1>
    </div>
        <input
        type='text'
        name='name'
        value={employee.name}
        onChange={changeHandler}
        placeholder='Enter your name'
        className='border-1 border-black rounded-md'
        />
        <input
        type='email'
        name='email'
        value={employee.email}
        onChange={changeHandler}
        placeholder='Enter your email'
        className='border-1 border-black rounded-md'
        />
        <select
        className="border-1 border-black rounded-md"
        name="role"
        value={employee.role}
        onChange={changeHandler}
      >
        <option value="Web Dev">Web Dev</option>
        <option value="App Dev">App Dev</option>
        <option value="Data Scientist">Data Scientist</option>
      </select>
        <input
        type='date'
        name='date'
        value={employee.date}
        onChange={changeHandler}
        placeholder='Select Date'
        className='border-1 border-black rounded-md'
        />
        <span>
          <button className='bg-blue-600 text-white px-7 rounded-md py-2 '>Enter</button>
        </span>
      </form>
      {/* <pre>
        {
          JSON.stringify(employee)
        }
      </pre> */}
    </div>
  )
}

export default App