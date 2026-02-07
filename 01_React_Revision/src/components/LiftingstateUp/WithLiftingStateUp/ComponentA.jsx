import React from 'react'

const ComponentALift = ({count,setCount}) => {
  return (
    <div>
     <p>Count -: {count}</p>
     <button onClick={()=>setCount(count+1)}>Increase Count</button>
    </div>
  )
}

export default ComponentALift