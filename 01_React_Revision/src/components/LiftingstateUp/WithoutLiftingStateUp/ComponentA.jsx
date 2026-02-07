import { useState } from "react"

const ComponentA = () => {
     const [count,setCount] = useState(0);
  return (
    <div>
     Counter -: {count}
     <button onClick={()=>setCount(count+1)}>Increase by One</button>
    </div>
  )
}

export default ComponentA