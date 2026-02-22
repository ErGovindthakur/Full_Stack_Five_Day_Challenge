import { useState } from "react"

const UserForm = ({onAdd}) => {
     const [user,setUser] = useState({
          name:"",
          email:""
     })

     const [errors,setErrors] = useState({});

     const handleChange = (e) => {
          const {name,value} = e.target;

          setUser((prev)=>({
               ...prev,
               [name]:value
          }))

          // show and hiding immediate error messages
          setErrors((prev)=>({
               ...prev,
               [name]:""
          }))


     }

     const validateForm = () => {
          const newError = {};

          if(!user.name) newError.name = "Name is required";
          if(!user.email) newError.email = "Email is required";


          // setting error boundaries
          setErrors(newError);

          // prevent also from submit from without filling all data
          return Object.keys(newError).length === 0;
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          if(!validateForm()) return;

          onAdd(user)
          console.log('users',user);

          setUser({
          name:"",
          email:""
     })

     }
  return (
    <div className="w-[270px] bg-gray-500 rounded-md shadow-md flex justify-center">
     <form onSubmit={handleSubmit} className="flex flex-col gap-1 px-12 py-2">
     <input
     type="text"
     name="name"
     value={user.name}
     onChange={handleChange}
     placeholder="Enter your name"
     />
     {errors&&(<p style={{color:"red"}}>{errors.name}</p>)}
     <input
     type="email"
     name="email"
     value={user.email}
     onChange={handleChange}
     placeholder="Enter your email"
     />
     {errors&&(<p style={{color:"red"}}>{errors.email}</p>)}
     <button className="bg-blue-500 text-white px-2 py-1 rounded-md">Submit</button>
     </form>
    </div>
  )
}

export default UserForm